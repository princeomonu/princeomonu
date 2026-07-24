import React, { useState } from 'react';
import {
  ArrowRight, Mail, Menu, X, CheckCircle, Layers, ChevronRight,
  Server, Database, Shield, Github, Linkedin,
  Youtube, MapPin, Play, BookOpen
} from 'lucide-react';

const STRUCTURE = [
  { n: '01', t: 'Define the product', d: 'Users, guarantees, scale, and success criteria.' },
  { n: '02', t: 'Establish principles', d: 'Non-negotiable rules that guide every later decision.' },
  { n: '03', t: 'Define system boundaries', d: 'Facilities, ownership, data, trust, and failure lines.' },
  { n: '04', t: 'Design critical workflows', d: 'Workflows that prove the architecture actually works.' },
  { n: '05', t: 'Choose the stack', d: 'A decision framework — not a technology list.' },
  { n: '06', t: 'Design the team', d: 'Mission, ownership, interfaces — and how it evolves.' },
  { n: '07', t: 'Plan delivery stages', d: 'Architecture maturity, not arbitrary time estimates.' },
  { n: '08', t: 'Threat and failure review', d: 'Blast radius, idempotency, rollback, and authority.' },
  { n: '09', t: 'Cost and trade-offs', d: 'Build, maintenance, staff, lock-in, and what is deferred.' },
];

const SEASONS = [
  {
    id: 'season-1',
    title: 'Building a Connected Device Platform',
    status: 'In progress',
    statusActive: true,
    episodes: [
      { n: 1, t: 'What a device fleet platform actually manages', f: ['Product', 'Principles'] },
      { n: 2, t: 'Defining lifecycle, authority, and offline guarantees', f: ['Principles'] },
      { n: 3, t: 'Designing the fleet control plane', f: ['Boundaries', 'Facility Model'] },
      { n: 4, t: 'Designing the device agent', f: ['Boundaries'] },
      { n: 5, t: 'Provisioning and secure device identity', f: ['Workflows'] },
      { n: 6, t: 'Commands, desired state, and reconciliation', f: ['Workflows'] },
      { n: 7, t: 'Updating thousands of devices safely', f: ['Workflows'] },
      { n: 8, t: 'Observability for intermittently connected hardware', f: ['Workflows'] },
      { n: 9, t: 'Choosing the technology stack', f: ['Stack', 'Cost'] },
      { n: 10, t: 'Organizing the engineering teams', f: ['Team'] },
      { n: 11, t: 'Staging the platform from prototype to production', f: ['Delivery'] },
      { n: 12, t: 'Architecture and security review', f: ['Threat', 'Failure'] },
    ],
  },
  { id: 'season-2', title: 'Building a Secure Kiosk OS', status: 'Planned', statusActive: false, episodes: [] },
  { id: 'season-3', title: 'Building an Edge Application Platform', status: 'Planned', statusActive: false, episodes: [] },
  { id: 'season-4', title: 'Building a Browser-First OS', status: 'Planned', statusActive: false, episodes: [] },
];

const SHOW_ARCHITECTURE_SERIES = false;
const NAV_ITEMS = SHOW_ARCHITECTURE_SERIES
  ? ['About', 'Series', 'Experience', 'Capabilities', 'Ideas']
  : ['About', 'Experience', 'Capabilities', 'Ideas'];

// Capabilities Matrix
const CAPABILITIES = [
  {
    title: 'Software Architecture',
    icon: Layers,
    skills: ['System decomposition', 'Domain boundaries', 'Distributed systems', 'Data flow design', 'Offline-first architecture']
  },
  {
    title: 'Backend and Data',
    icon: Server,
    skills: ['Service design', 'API architecture', 'Data modelling', 'PostgreSQL', 'Reliability and performance']
  },
  {
    title: 'Platform Engineering',
    icon: Database,
    skills: ['Linux', 'Containers', 'Networking', 'Deployment', 'Observability and recovery']
  },
  {
    title: 'Technical Leadership',
    icon: Shield,
    skills: ['Technical strategy', 'Team leadership', 'Architecture reviews', 'Requirement clarification', 'Mentoring and delivery']
  }
];

// Experience Timeline
const EXPERIENCES = [
  {
    role: 'Business Automation & Systems Lead',
    company: 'Premium Power Solutions Limited',
    period: 'Feb 2026 — Present',
    location: 'Lagos State, Nigeria · Remote',
    type: 'Full-time',
    summary:
      'Architecting and building the software, automation, and digital systems supporting operations across a power solutions company.',
    contributions: [
      'Built a multi-platform business system on a shared Convex backend spanning an admin portal, public website, and field operations mobile app.',
      'Designed the unified data model and workflows for customers, technicians, rentals, service requests, invoicing, payments, and role-based access.',
      'Implemented multi-stage service operations, BudPay payment integration, AI-assisted quote generation, and a customer booking assistant.',
      'Built internal rental, inventory, billing, and performance systems using Zoho Sheet and Excel.',
      'Designed reliable operational dashboards and tooling within spreadsheet performance and compatibility constraints.',
      'Translate business operations into maintainable software systems, workflows, and internal tools.'
    ]
  },
  {
    role: 'Chief Technology Officer',
    company: 'KadMap',
    period: 'Jul 2022 — Nov 2025',
    location: 'Abuja, Federal Capital Territory, Nigeria · On-site',
    type: 'Full-time',
    summary:
      'Owned the technical direction and led the architecture and development of KadMap, an offline-first enterprise computing platform for secure application deployment, data management, and collaboration in constrained network environments.',
    contributions: [
      'Defined the architecture across identity, licensing, workspaces, deployment, storage, logging, device management, and infrastructure operations.',
      'Designed secure local connectivity using WireGuard, controlled networking, and split DNS.',
      'Architected the device lifecycle covering registration, activation, licensing, updates, rollback, and recovery.',
      'Led the design of an A/B operating-system update process using RAUC.',
      'Established service boundaries across backend, client, infrastructure, and system components.',
      'Translated product requirements into technical roadmaps and led engineering execution while remaining hands-on.',
      'Core platform built primarily in Go, with supporting components in TypeScript, Shell, and C.'
    ]
  },
  {
    role: 'Product & Engineering Lead',
    company: 'La Chariz Groups',
    period: 'Aug 2024 — Jan 2025',
    type: 'Leadership',
    summary: 'Led backend and frontend teams delivering production web platforms across education, real estate, and sports management.',
    contributions: [
      'Translated business goals and product requirements into clear technical priorities, delivery plans, and implementation scopes.',
      'Coordinated frontend and backend engineers across multiple products and concurrent delivery cycles.',
      'Reviewed system designs, technical approaches, and implementation progress to maintain quality and architectural consistency.',
      'Worked across product, design, engineering, and business stakeholders to clarify requirements and resolve delivery risks.',
      'Defined feature priorities, acceptance criteria, release goals, and team responsibilities.',
      'Supported engineers through planning, technical decision-making, reviews, testing, and production delivery.',
      'Helped establish reusable patterns and shared engineering practices across the product portfolio.',
      'Maintained alignment between product direction, technical constraints, team capacity, and business outcomes.'
    ]
  },
  {
    role: 'Lead Software Engineering Instructor',
    company: 'Bravort Institute',
    period: 'Aug 2024 — Jan 2025',
    type: 'Teaching',
    summary:
      'Teaching advanced software engineering topics to technical cohorts, bridging foundational theory with real-world system design and production engineering.',
    contributions: [
      'Designed and delivered practical instruction across backend engineering, software architecture, databases, APIs, and system design.',
      'Helped learners understand how production systems are structured, how data moves, and how technical decisions affect reliability and maintainability.',
      'Translated complex engineering concepts into clear mental models, examples, and implementation exercises.',
      'Guided learners through project architecture, code reviews, debugging, and technical decision-making.',
      'Mentored developers on moving from feature implementation toward stronger engineering judgment.',
      'Connected classroom concepts to real production concerns such as scalability, failure handling, security, deployment, and long-term system evolution.',
      'Supported curriculum development and improved the structure of technical learning materials.'
    ]
  },
  {
    role: 'Senior Lead Software Engineer',
    company: 'Klosters Energy Services',
    period: 'Sep 2020 — Nov 2022',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    summary: 'Designed and led development of a Real-Time Asset Integrity Management platform for oil and gas production facilities.',
    contributions: [
      'Led delivery of asset-integrity software for production facilities, equipment, inspections, maintenance activities, and operational risk tracking.',
      'Coordinated technical planning, implementation, code reviews, debugging, deployment, and long-term system maintenance.',
      'Contributed to architectural and database decisions for a domain-heavy enterprise application.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Klosters Energy Services',
    period: 'Feb 2018 — Sep 2020',
    type: 'Full-time',
    summary:
      'Designed and led the development of a Real-Time Asset Integrity Management system for monitoring equipment, inspections, maintenance activities, and operational risks across oil and gas production facilities.',
    contributions: [
      'Translated complex asset-integrity and operational requirements into maintainable software workflows and data models.',
      'Designed backend services and APIs supporting facility assets, inspections, maintenance records, integrity assessments, and operational reporting.',
      'Modelled relationships between production facilities, equipment, components, inspection findings, risks, and corrective actions.',
      'Led technical implementation and coordinated engineering work across backend and user-facing application components.',
      'Built tools that improved the capture, organisation, and visibility of asset-integrity information.',
      'Worked closely with domain stakeholders to convert engineering processes and industry terminology into usable software.'
    ]
  },
  {
    role: 'System Engineer',
    period: '2012 — 2018',
    type: 'Systems',
    summary: 'Built and maintained a VTU platform supporting airtime, data purchases, and automated bill payments.',
    contributions: [
      'Maintained systems for airtime, data, and bill-payment workflows.',
      'Supported automated transaction processing and day-to-day platform reliability.'
    ]
  }
];

// Ideas & Writing
const IDEAS = [
  {
    title: 'Architecture Includes the Team and Operating Model',
    type: 'YouTube Series',
    premise: 'Why boxes-and-arrows are incomplete, and how team topology and delivery stages belong in the architecture.',
    readTime: 'Series',
    category: 'Architecture Beyond the Diagram'
  },
  {
    title: 'What Is the Facility Model in Software Engineering?',
    type: 'Article',
    premise: 'A conceptual blueprint for modeling software boundaries like physical industrial facilities.',
    readTime: '8 min read',
    category: 'Software Architecture'
  },
  {
    title: 'Code Is Cheap. Engineering Judgment Is Expensive.',
    type: 'Article',
    premise: 'Why LLMs change typing velocity but make senior architectural judgment more vital than ever.',
    readTime: '6 min read',
    category: 'Engineering Leadership'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'Staff or lead engineering role',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    const turnstileToken = e.target.querySelector('[name="cf-turnstile-response"]')?.value;

    if (!turnstileToken) {
      setFormError('Please complete the security check.');
      setFormLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send message');
      }

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', enquiryType: 'Staff or lead engineering role', message: '' });
      }, 3000);
    } catch (err) {
      setFormError(err.message || 'Something went wrong. Please try again or email me directly.');
    } finally {
      setFormLoading(false);
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-zinc-900 font-sans selection:bg-[#78826F] selection:text-white">

      {/* 1. HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => scrollToSection('top')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-[#4F5849] flex items-center justify-center font-bold text-white text-lg group-hover:bg-[#3D4537] transition-colors">
              PO
            </div>
            <span className="font-bold tracking-tight text-xl hidden sm:block">PrinceOmonu</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-base font-bold">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-zinc-700 hover:text-[#4F5849] transition-colors"
              >
                {item}
              </button>
            ))}
            <a href="https://eg9s59jicl.ufs.sh/f/THHO6iJF1C0ZnSvLP5cQsCP8aI1E6ScoKvJ7OGi53qtk2w0u" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-[#4F5849] transition-colors">
              Resume
            </a>
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#4F5849] hover:bg-[#3D4537] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Start a conversation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#FDFBF7] border-b border-zinc-200 px-6 py-4 space-y-4 shadow-xl">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-lg font-bold"
              >
                {item}
              </button>
            ))}
            <a href="https://eg9s59jicl.ufs.sh/f/THHO6iJF1C0ZnSvLP5cQsCP8aI1E6ScoKvJ7OGi53qtk2w0u" target="_blank" rel="noreferrer" className="block w-full text-left py-2 text-lg font-bold">
              Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#4F5849] text-white font-bold text-lg px-6 py-4 rounded-full mt-4"
            >
              Start a conversation
            </button>
          </div>
        )}
      </header>

      <main id="top" className="pt-20">

        {/* 2. HERO */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6">
              Staff Software Engineer.
            </h1>

            <p className="text-zinc-600 text-base md:text-lg max-w-lg font-medium mb-8">
              I design and lead the delivery of complex backend and platform systems — especially where reliability, operational constraints, and unclear requirements make the problem difficult.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => scrollToSection('experience')}
                className="w-full sm:w-auto bg-[#4F5849] hover:bg-[#3D4537] text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 text-lg group shadow-sm"
              >
                View experience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-[#F0EDE6] hover:bg-[#E8E3D8] text-zinc-900 font-bold px-8 py-4 rounded-full transition-all text-lg"
              >
                Start a conversation
              </button>
            </div>

            <div className="flex items-center gap-6 mt-8 text-zinc-500">
              <a href="https://github.com/princeomonu" target="_blank" rel="noreferrer" className="hover:text-[#4F5849] transition-colors flex items-center gap-1.5 text-sm font-bold"><Github className="w-5 h-5" /> GitHub</a>
              <a href="https://linkedin.com/in/princeomonu" target="_blank" rel="noreferrer" className="hover:text-[#4F5849] transition-colors flex items-center gap-1.5 text-sm font-bold"><Linkedin className="w-5 h-5" /> LinkedIn</a>
              <a href="https://www.youtube.com/@princeomonu" target="_blank" rel="noreferrer" className="hover:text-[#4F5849] transition-colors flex items-center gap-1.5 text-sm font-bold"><Youtube className="w-5 h-5" /> YouTube</a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative px-4 md:px-0">
            <div className="absolute inset-0 bg-[#E8E3D8] rounded-3xl transform rotate-3 scale-105 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl bg-[#E8E3D8] flex items-end justify-center min-h-[460px] md:min-h-[580px]">
              <img
                src="https://eg9s59jicl.ufs.sh/f/THHO6iJF1C0Ziyysvyg5eO3aZuqylUDT9CtAmRzwgInfHhBs"
                alt="Prince Omonu"
                className="w-full h-[460px] md:h-[580px] object-cover object-top transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 md:-left-8 z-20 bg-[#2D3328] text-white p-6 rounded-2xl shadow-xl flex items-center gap-6 border border-[#3D4537]">
              <div>
                <div className="text-[10px] font-bold text-[#A8B59E] uppercase tracking-widest mb-1">Experience</div>
                <div className="text-3xl font-black">10+ YRS</div>
              </div>
              <div className="w-px h-12 bg-[#3D4537]"></div>
              <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Base</div>
                <div className="text-lg font-bold">Abuja, Nigeria</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EXPERTISE STRIP */}
        <div className="border-y border-zinc-200 bg-[#F4F1EA] py-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-2 md:gap-3">
            {['Software Architect', 'Backend Systems', 'Data Modelling', 'Engineering Lead', 'Platform Engineering'].map((item) => (
              <span key={item} className="inline-block border border-[#78826F]/30 text-[#4F5849] bg-white/60 rounded-full px-3.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 4. ARCHITECTURE BEYOND THE DIAGRAM */}
        {SHOW_ARCHITECTURE_SERIES && (
        <section id="series" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">— Architecture Beyond the Diagram</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Designing the system, choosing the stack, structuring the team.</p>
            <p className="text-zinc-600 text-base font-medium max-w-2xl">Each platform becomes a mini-series following the same nine-part structure. Architecture shown as contextual decision-making.</p>
          </div>

          {/* Nine-part structure — collapsible */}
          <details className="mb-12 group">
            <summary className="text-2xl font-black tracking-tighter cursor-pointer list-none flex items-center gap-3 select-none">
              <ChevronRight className="w-5 h-5 text-zinc-400 group-open:rotate-90 transition-transform shrink-0" />
              The nine-part structure
            </summary>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {STRUCTURE.map((s, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-5 flex gap-4 items-start">
                  <div className="text-xl font-black font-mono text-[#A8B59E] shrink-0">{s.n}</div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight">{s.t}</h4>
                    <p className="text-zinc-500 text-xs mt-1">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </details>

          {/* Seasons — collapsible */}
          <div className="space-y-6">
            {SEASONS.map((season) => (
              <details key={season.id} className="bg-[#2D3328] text-white rounded-2xl p-6 md:p-8 border border-[#3D4537] shadow-xl group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${season.statusActive ? 'text-[#A8B59E] bg-[#4F5849]/30 border-[#4F5849]' : 'text-zinc-400 bg-[#373E31] border-[#4F5849]/30'}`}>
                      {season.status}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black">{season.title}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#A8B59E] group-open:rotate-90 transition-transform shrink-0" />
                </summary>

                {season.episodes.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    {season.episodes.map((ep) => (
                      <div key={ep.n} className="bg-[#1E221A] border border-[#3D4537] rounded-xl p-4 flex gap-3 items-start">
                        <div className="text-lg font-black font-mono text-[#A8B59E] shrink-0 w-7">{String(ep.n).padStart(2, '0')}</div>
                        <div>
                          <h4 className="font-bold text-sm leading-snug">{ep.t}</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {ep.f.map((focus, k) => (
                              <span key={k} className="text-[10px] font-mono bg-[#2D3328] text-zinc-300 px-2 py-0.5 rounded border border-[#4F5849]/30">
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-400 text-sm mt-4">Episodes to be announced.</p>
                )}
              </details>
            ))}
          </div>
        </section>
        )}

        {/* 5. HOW I WORK */}
        <section className="bg-[#2D3328] text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-sm font-bold text-[#A8B59E] uppercase tracking-widest mb-2">— Process</h2>
              <p className="text-4xl md:text-5xl font-black tracking-tighter">How I turn difficult problems into working systems.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Understand the problem', desc: 'Users, constraints, failure cases, expected outcomes.' },
                { step: '02', title: 'Model the system', desc: 'Boundaries, workflows, data movement, dependencies.' },
                { step: '03', title: 'Lead implementation', desc: 'Architecture into priorities, decisions, and delivery.' },
                { step: '04', title: 'Test assumptions', desc: 'Inspect failures, improve operability, evolve.' }
              ].map((item, i) => (
                <div key={i} className="bg-[#373E31] border border-[#4F5849]/50 p-8 rounded-2xl space-y-4">
                  <div className="text-3xl font-black font-mono text-[#A8B59E]">{item.step}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CAPABILITIES */}
        <section id="capabilities" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">— Capabilities</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tighter">Technical depth & leadership scope.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="bg-[#F4F1EA] border border-zinc-200 p-8 rounded-3xl space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#4F5849] text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black">{cap.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map((skill, j) => (
                      <span key={j} className="text-xs font-bold px-3.5 py-2 bg-white text-zinc-700 rounded-lg border border-zinc-200 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. EXPERIENCE */}
        <section id="experience" className="bg-[#F4F1EA] py-24 md:py-32 border-y border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">— Experience</h2>
              <p className="text-4xl md:text-5xl font-black tracking-tighter">Experience across architecture, engineering, and leadership.</p>
            </div>

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="bg-white border border-zinc-200 p-10 rounded-3xl space-y-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest bg-[#E8E3D8] text-[#4F5849] px-3 py-1.5 rounded-full">
                        {exp.type}
                      </span>
                      <h3 className="text-3xl font-black mt-3">{exp.role}</h3>
                      {exp.company && (
                        <p className="text-zinc-500 font-bold text-lg mt-1">{exp.company}</p>
                      )}
                      {exp.location && (
                        <p className="text-zinc-500 text-sm font-semibold mt-1">{exp.location}</p>
                      )}
                    </div>
                    <span className="text-base font-mono font-bold text-zinc-500 bg-[#F4F1EA] px-4 py-2 rounded border border-zinc-200 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-zinc-600 font-medium text-base leading-relaxed">{exp.summary}</p>

                  <ul className="space-y-3 pt-3 border-t border-zinc-100">
                    {exp.contributions.map((c, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-600">
                        <CheckCircle className="w-5 h-5 text-[#4F5849] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ABOUT */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E8E3D8] rounded-3xl transform -rotate-3 scale-105 z-0"></div>
              <img
                src="https://eg9s59jicl.ufs.sh/f/THHO6iJF1C0ZuD5x5NfjKwDhYXxfrRq567QnpFPE8t3TbiOg"
                alt="Prince Omonu working"
                className="relative z-10 w-full h-[450px] object-cover object-top rounded-3xl shadow-xl"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-[#2D3328] text-white px-4 py-2 rounded-full font-bold text-xs">
                Abuja, Nigeria • Available Remote / Global
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">— About</h2>
              <p className="text-4xl font-black tracking-tighter">Engineering philosophy & focus.</p>

              <div className="space-y-4 text-zinc-600 text-base leading-relaxed font-medium">
                <p>
                  Over a decade building high-availability systems, resilient backends, and infrastructure across challenging operational environments.
                </p>
                <p>
                  I solve high-complexity architectural problems where clarity, decomposition, and edge-case resilience matter most. I also invest in technical education, the Facility Model, and engineering culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. IDEAS, WRITING & VIDEO */}
        <section id="ideas" className="bg-[#F4F1EA] py-24 md:py-32 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">— Ideas, Writing & Video</h2>
                <p className="text-4xl md:text-5xl font-black tracking-tighter">Thinking in public.</p>
              </div>
              <p className="text-zinc-500 max-w-md text-sm font-medium">
                Notes, videos, and thinking on architecture, backend systems, and engineering leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {IDEAS.map((idea, i) => (
                <div key={i} className="bg-white border border-zinc-200 p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-[#F4F1EA] text-[#4F5849] px-3 py-1 rounded-full">
                        {idea.type}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{idea.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold">{idea.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{idea.premise}</p>
                  </div>

                  <button className="inline-flex items-center gap-2 font-bold text-sm hover:underline text-[#4F5849]">
                    {idea.type === 'YouTube Series' ? 'Watch the series' : 'Read article'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 bg-[#4F5849] hover:bg-[#3D4537] text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-sm">
                Browse all ideas
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 10. EVIDENCE STRIP */}
        <section className="border-y border-zinc-200 bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="font-black text-xl">10+ years</div>
              <p className="text-zinc-500 text-xs font-medium">Building robust production software</p>
            </div>
            <div className="space-y-1">
              <div className="font-black text-xl">Full-stack Scope</div>
              <p className="text-zinc-500 text-xs font-medium">Architecture, backend & engineering leadership</p>
            </div>
            <div className="space-y-1">
              <div className="font-black text-xl">Global Industries</div>
              <p className="text-zinc-500 text-xs font-medium">Experience across enterprise, energy & tooling</p>
            </div>
            <div className="space-y-1">
              <div className="font-black text-xl">Team Leadership</div>
              <p className="text-zinc-500 text-xs font-medium">Led multidisciplinary engineering teams</p>
            </div>
          </div>
        </section>

        {/* 11. CONTACT */}
        <section id="contact" className="bg-[#2D3328] py-24 md:py-32 text-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-[#A8B59E] uppercase tracking-widest mb-2">— Let's Connect</h2>
                <p className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-6">
                  Let’s solve <br />
                  something difficult.
                </p>
                <p className="text-zinc-300 text-base leading-relaxed">
                  Hiring for a technical leadership role, planning a complex software platform, or looking for an experienced architecture partner? Send me the context.
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-[#3D4537]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#373E31] border border-[#4F5849] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#A8B59E]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Email</p>
                    <p className="text-base font-medium">hello@princeomonu.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#373E31] border border-[#4F5849] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#A8B59E]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Location</p>
                    <p className="text-base font-medium">Abuja, Nigeria / Remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E221A] border border-[#3D4537] p-8 rounded-3xl shadow-xl">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-[#4F5849]/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[#A8B59E]" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Message Received.</h3>
                  <p className="text-zinc-300 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#2D3328] border border-[#3D4537] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#A8B59E] text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#2D3328] border border-[#3D4537] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#A8B59E] text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Enquiry Type</label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-[#2D3328] border border-[#3D4537] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#A8B59E] text-sm appearance-none"
                    >
                      <option>Engineering leadership role</option>
                      <option>Staff or lead engineering role</option>
                      <option>Architecture consulting</option>
                      <option>Product or platform development</option>
                      <option>Speaking or education</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#2D3328] border border-[#3D4537] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#A8B59E] text-sm resize-none"
                      placeholder="Brief context about the role or project..."
                    ></textarea>
                  </div>

                  <div
                    className="cf-turnstile"
                    data-sitekey="0x4AAAAAAD7fAu8m30QSPj2Y"
                    data-action="turnstile-spin-v2"
                    data-theme="dark"
                  ></div>

                  {formError && (
                    <p className="text-red-400 text-sm font-medium">{formError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#78826F] hover:bg-[#8A9581] disabled:opacity-60 text-white font-black text-base px-6 py-4 rounded-xl transition-colors shadow-sm"
                  >
                    {formLoading ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* 12. FOOTER */}
      <footer className="bg-[#1A1E16] py-12 border-t border-[#2D3328] text-center text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#4F5849] flex items-center justify-center font-bold text-white text-sm">
              PO
            </div>
            <span className="font-bold tracking-tight">Prince Omonu</span>
          </div>

          <p className="text-zinc-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} princeomonu.com. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-zinc-300 text-xs font-bold">
            <a href="https://github.com/princeomonu" target="_blank" rel="noreferrer" className="hover:text-[#A8B59E] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/princeomonu" target="_blank" rel="noreferrer" className="hover:text-[#A8B59E] transition-colors">LinkedIn</a>
            <a href="https://www.youtube.com/@princeomonu" target="_blank" rel="noreferrer" className="hover:text-[#A8B59E] transition-colors">YouTube</a>
            <a href="https://eg9s59jicl.ufs.sh/f/THHO6iJF1C0ZnSvLP5cQsCP8aI1E6ScoKvJ7OGi53qtk2w0u" target="_blank" rel="noreferrer" className="hover:text-[#A8B59E] transition-colors">Resume</a>
            <a href="mailto:hello@princeomonu.com" className="hover:text-[#A8B59E] transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
