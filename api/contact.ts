import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string, remoteip: string) {
  console.log('[turnstile] verifying token', { remoteip, tokenPrefix: token.slice(0, 10) + '...' });

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET!,
      response: token,
      remoteip,
    }),
  });
  const result = await res.json();
  console.log('[turnstile] siteverify result', { success: result.success, errorCodes: result['error-codes'] });
  return result;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const startTime = Date.now();
  console.log('[contact] incoming request', { method: req.method, ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress });

  if (req.method !== 'POST') {
    console.log('[contact] rejected: method not allowed', { method: req.method });
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, enquiryType, message, turnstileToken } = req.body;
  console.log('[contact] parsed body', { name, email, enquiryType, hasMessage: !!message, hasToken: !!turnstileToken });

  if (!name || !email || !message) {
    console.log('[contact] rejected: missing fields', { name: !!name, email: !!email, message: !!message });
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!turnstileToken) {
    console.log('[contact] rejected: no turnstile token');
    return res.status(400).json({ error: 'Security check required' });
  }

  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || '';
  console.log('[contact] client ip resolved', { clientIp });

  const turnstileResult = await verifyTurnstile(turnstileToken, clientIp);
  if (!turnstileResult.success) {
    console.log('[contact] rejected: turnstile failed', { errorCodes: turnstileResult['error-codes'] });
    return res.status(403).json({ error: 'Security verification failed' });
  }

  console.log('[contact] turnstile passed, sending email via resend');

  try {
    const emailResult = await resend.emails.send({
      from: 'Portfolio Contact <hello@princeomonu.com>',
      to: 'omonuitanyi@gmail.com',
      replyTo: email,
      subject: `New enquiry: ${enquiryType}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('[contact] email sent', { emailId: emailResult.data?.id, duration: Date.now() - startTime });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[contact] email send failed', { error: error.message, duration: Date.now() - startTime });
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
