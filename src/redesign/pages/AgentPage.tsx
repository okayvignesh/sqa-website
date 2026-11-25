'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Bot, Braces, Bug, CheckCircle2, CircleDot, Cpu,
  Layers, Link2, LucideIcon, PenSquare, Play, Sparkles, Terminal, Zap,
} from 'lucide-react';
import ClientUIShowcase from '../components/ClientUIShowcase';
import { BookDemoButton } from '../CalendlyModal';
import VideoSlot from '../components/VideoSlot';

const K = {
  bg:      '#0A0A0F',      // page background
  panel:   '#111117',      // cards
  panelHi: '#161620',      // elevated
  border:  'rgba(255,255,255,0.08)',
  borderH: 'rgba(255,255,255,0.16)',
  text:    '#E4E4E7',      // primary text
  muted:   '#8B8B96',      // muted
  faint:   '#5C5C68',      // very muted
  green:   '#4ADE80',      // terminal green - primary accent
  amber:   '#FBBF24',      // secondary accent, warnings
  red:     '#F87171',      // failures only
  accent:  '#FBBF24',      // through-line accent (was maroon)
};

// Green → amber gradient for accented words in section headings.
// All four CSS clip properties set inline so it renders reliably on dark bg.
function Grad({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(120deg, ${K.green} 0%, #A3E635 55%, ${K.amber} 100%)`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  );
}

const stats = [
  { v: '7', k: 'Technologies you can record and run' },
  { v: '6', k: 'Supported AI assistants' },
  { v: '1', k: 'npx command to install' },
  { v: '0', k: 'Recordings saved without your review' },
];

const steps = [
  { n: '1', icon: Link2,        title: 'Connect',          body: 'Add simplify3x-connect to your AI assistant.' },
  { n: '2', icon: PenSquare,    title: 'Start from a story', body: 'Create test cases from a user story.' },
  { n: '3', icon: CircleDot,    title: 'AI records',       body: 'The assistant records the steps on your app.' },
  { n: '4', icon: CheckCircle2, title: 'You review',       body: 'Every recording is reviewed before it is saved.' },
  { n: '5', icon: Play,         title: 'Run',              body: 'Run from chat. Mobile runs are scheduled in SimplifyQA.' },
  { n: '6', icon: Bug,          title: 'Find out why',     body: 'Ask why a run failed.' },
];

const pillars = [
  {
    tag: '01 · OPEN',
    title: 'Use the assistant you already have.',
    body: 'Claude, Cursor, VS Code with Copilot, Windsurf, Codex and Devin. Install with one npx command and connect with your SimplifyQA URL and token.',
  },
  {
    tag: '02 · BROAD',
    title: 'Seven technologies.',
    body: 'Web, Android, iOS, Desktop, Mainframe, API and Database. Everything SimplifyQA automates except SAP.',
  },
  {
    tag: '03 · REVIEWED',
    title: 'Recorded by AI. Approved by you.',
    body: 'Describe the scenario and the assistant records the steps. Write custom methods while recording. You review every recording before it is saved to SimplifyQA.',
  },
];

const capabilities: { icon: LucideIcon; title: string; body: string; items: string[] }[] = [
  {
    icon: PenSquare, title: 'Test cases from stories',
    body: 'Start from what the team already wrote.',
    items: ['Create test cases from a user story', 'You review before anything is saved'],
  },
  {
    icon: CircleDot, title: 'Recording',
    body: 'The assistant records. You approve.',
    items: ['Record tests on Web, Android, iOS, Desktop, Mainframe, API and Database', 'Write custom methods while recording', 'Every recording is reviewed by you before it is saved'],
  },
  {
    icon: Play, title: 'Running tests',
    body: 'Start runs from chat.',
    items: ['Run tests from your assistant', 'Mobile runs are scheduled in SimplifyQA'],
  },
  {
    icon: Bug, title: 'Why a run failed',
    body: 'Answers, not raw logs.',
    items: ['Ask why a run failed', 'Self-heal for Desktop tests (Desktop only today)'],
  },
];

const tech: [string, string, string, string][] = [
  // you point at → AI records → how it runs → slug
  ['A web app',              'WEB test cases',       'From your assistant',     'web'],
  ['An Android app',         'ANDROID test cases',   'Scheduled in SimplifyQA', 'android'],
  ['An iOS app',             'IOS test cases',       'Scheduled in SimplifyQA', 'ios'],
  ['A Windows desktop app',  'DESKTOP test cases',   'From your assistant',     'desktop'],
  ['A mainframe terminal',   'MAINFRAME test cases', 'From your assistant',     'mainframe'],
  ['An API',                 'API test cases',       'From your assistant',     'api'],
  ['A database',             'DATABASE test cases',  'From your assistant',     'db'],
];

const clients = [
  { name: 'Claude',              body: 'Add the server to your Claude MCP settings.' },
  { name: 'Cursor',              body: 'Register the MCP server. Test without leaving the IDE.' },
  { name: 'VS Code with Copilot', body: 'Add the server to mcp.json and use it from Copilot Chat.' },
  { name: 'Windsurf',            body: 'Register the MCP server. Stay in your editor.' },
  { name: 'Codex',               body: 'Add the server to your Codex MCP config.' },
  { name: 'Devin',               body: 'Connect the MCP server to Devin.' },
];

export default function AgentPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: K.bg, color: K.text }}>
      {/* ambient grid + orb */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(circle at 60% 20%, black, transparent 75%)',
           }} />
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 h-[600px] -z-10 opacity-40"
           style={{
             background: `radial-gradient(60% 40% at 70% 20%, ${K.amber}18, transparent 70%),
                          radial-gradient(60% 40% at 20% 30%, ${K.green}10, transparent 70%)`,
           }} />

      {/* ============ HERO ============ */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full pl-1 pr-4 py-1 text-[12px] font-mono border"
                   style={{ borderColor: K.borderH, background: K.panel }}>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-[11px] font-bold"
                      style={{ background: K.green, color: K.bg }}>$</span>
                <span style={{ color: K.muted }}>npx -y</span>
                <span style={{ color: K.text }}>simplify3x-connect</span>
                <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold"
                      style={{ background: K.amber + '18', color: K.amber, border: `1px solid ${K.amber}40` }}>
                  MCP SERVER
                </span>
              </div>

              <h1 className="mt-6 font-display text-[42px] sm:text-[56px] leading-[1.0] tracking-tight text-white text-balance">
                Use SimplifyQA{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(120deg, #ffffff 0%, ${K.green} 55%, ${K.amber} 100%)` }}
                >
                  from your AI.
                </span>
              </h1>

              <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed max-w-xl" style={{ color: K.muted }}>
                The SimplifyQA MCP connects Claude, Cursor, VS Code with Copilot, Windsurf,
                Codex and Devin to SimplifyQA. Create test cases from user stories, record and
                run tests on seven technologies, write custom methods while recording, and find
                out why a run failed. You review every recording before it is saved.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <BookDemoButton
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-full font-semibold text-[15px] text-white transition-all hover:scale-[1.02]"
                      style={{
                        background: 'linear-gradient(180deg, #F04A5B 0%, #C8253A 60%, #9A1525 100%)',
                        boxShadow: '0 12px 30px -8px rgba(240,74,91,0.55)',
                      }}>
                  Book a demo <ArrowRight className="w-4 h-4" />
                </BookDemoButton>
                <a href="#setup"
                   className="inline-flex items-center gap-2 h-12 px-6 rounded-full font-mono text-[13.5px] font-semibold border"
                   style={{ borderColor: K.borderH, background: K.panel, color: K.text }}>
                  <Terminal className="w-4 h-4" style={{ color: K.green }} /> setup in 60s
                </a>
              </div>

              {/* Compact stats, tucked under buttons in the left column */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
                {stats.map((s) => (
                  <div key={s.k}
                    className="rounded-xl border px-3 py-2.5"
                    style={{ borderColor: K.border, background: K.panel }}>
                    <div className="font-display text-[24px] tracking-tight leading-none text-white">
                      {s.v}
                    </div>
                    <div className="mt-1 text-[11px] leading-tight" style={{ color: K.muted }}>
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Hero terminal signature, below the split */}
          <div className="mt-16">
            <VideoSlot id="mcp" dark fallback={<HeroTerminal />} />
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Workflow />}>How it works</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Six steps. One conversation. <Grad>You approve what is saved.</Grad>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              Connect your AI assistant to SimplifyQA. From there it can create test cases,
              record and run them, and help you work out why a run failed.
            </p>
          </div>

          <div className="mt-14 relative">
            {/* Connecting rail */}
            <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-[40px] h-px"
                 style={{ background: `linear-gradient(90deg, transparent, ${K.borderH}, transparent)` }} />

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {steps.map((s, i) => {
                const Ico = s.icon;
                return (
                  <motion.div key={s.n}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="relative flex flex-col items-start"
                  >
                    <div className="grid place-items-center w-20 h-20 rounded-2xl border relative"
                         style={{ background: K.panel, borderColor: K.borderH }}>
                      <Ico className="w-6 h-6" style={{ color: K.green }} />
                      <span className="absolute -top-2 -right-2 grid place-items-center w-7 h-7 rounded-full font-mono text-[11px] font-bold"
                            style={{ background: K.green, color: K.bg }}>
                        {s.n}
                      </span>
                    </div>
                    <div className="mt-4 text-[14px] font-semibold text-white">{s.title}</div>
                    <div className="mt-1 text-[12.5px] leading-snug" style={{ color: K.muted }}>{s.body}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE THREE PILLARS ============ */}
      <section className="relative py-20 sm:py-28" style={{ background: '#07070B' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Sparkles />}>The three pillars</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Open. Broad. <Grad>Reviewed.</Grad>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              How the SimplifyQA MCP fits the way your team already works.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <motion.article key={p.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border p-7 relative overflow-hidden group"
                style={{ background: K.panel, borderColor: K.border }}
              >
                <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
                     style={{ background: `radial-gradient(closest-side, ${K.green}22, transparent 70%)` }} />
                <div className="relative">
                  <div className="text-[11.5px] font-mono font-semibold tracking-[0.14em]" style={{ color: K.green }}>
                    {p.tag}
                  </div>
                  <h3 className="mt-4 font-display text-[22px] text-white leading-snug">{p.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: K.muted }}>{p.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEFORE vs AFTER ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Zap />}>What this replaces</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              From user story to recorded test,{' '}
              <Grad>in one chat.</Grad>
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-5">
            <div className="rounded-3xl border p-8" style={{ background: K.panel, borderColor: K.border }}>
              <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider" style={{ color: K.muted }}>
                <CircleDot className="w-3.5 h-3.5" /> Before
              </div>
              <h3 className="mt-4 font-display text-[22px] text-white">Building tests, the old way</h3>
              <ul className="mt-6 space-y-3">
                {[
                  'Read the user story',
                  'Write each test case by hand',
                  'Record the steps in the recorder',
                  'Write custom methods separately',
                  'Run the tests',
                  'Dig through the report to see why a run failed',
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 text-[14px]" style={{ color: K.muted }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: K.faint }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border p-8 relative overflow-hidden"
                 style={{
                   background: `linear-gradient(180deg, ${K.panelHi} 0%, ${K.panel} 100%)`,
                   borderColor: K.green + '55',
                   boxShadow: `0 24px 60px -20px ${K.green}20, 0 0 0 1px ${K.green}20 inset`,
                 }}>
              <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider" style={{ color: K.green }}>
                <Sparkles className="w-3.5 h-3.5" /> With SimplifyQA MCP
              </div>
              <h3 className="mt-4 font-display text-[22px] text-white">One conversation in your AI</h3>
              <ul className="mt-6 space-y-3">
                {[
                  'Open Claude, Cursor, VS Code, Windsurf, Codex or Devin',
                  'Ask: "Create test cases for story ACME-214"',
                  'AI records the steps on your app',
                  'Write custom methods while recording',
                  'You review the recording, then save it',
                  'Run it from chat (mobile runs are scheduled in SimplifyQA)',
                  'Ask why a run failed',
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 text-[14px] text-white">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: K.green }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="relative py-20 sm:py-28" style={{ background: '#07070B' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Cpu />}>What your AI can do</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              What your AI <Grad>can do</Grad> with SimplifyQA.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              The MCP gives your assistant a set of SimplifyQA actions. It uses them in
              whatever order your prompt needs.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c, i) => {
              const Ico = c.icon;
              return (
                <motion.div key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border p-6"
                  style={{ background: K.panel, borderColor: K.border }}
                >
                  <div className="grid place-items-center w-10 h-10 rounded-xl border"
                       style={{ background: '#0F0F16', borderColor: K.borderH, color: K.green }}>
                    <Ico className="w-4 h-4" />
                  </div>
                  <div className="mt-4 text-[14px] font-semibold text-white">{c.title}</div>
                  <div className="mt-1 text-[12.5px]" style={{ color: K.muted }}>{c.body}</div>
                  <ul className="mt-4 space-y-1.5">
                    {c.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-[12.5px]" style={{ color: K.muted }}>
                        <span className="mt-[6px] w-1 h-1 rounded-full shrink-0" style={{ background: K.green }} />
                        {i}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 7 TECHNOLOGIES TABLE ============ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Layers />}>All supported platforms</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Point your AI at <Grad>seven technologies.</Grad>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              Seven of SimplifyQA&apos;s eight technologies. SAP is not available over MCP.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border" style={{ background: K.panel, borderColor: K.border }}>
            <div className="grid grid-cols-[1.2fr_1.2fr_1.2fr] text-[11.5px] font-semibold uppercase tracking-[0.14em] px-6 py-4"
                 style={{ color: K.muted, background: '#0F0F16', borderBottom: `1px solid ${K.border}` }}>
              <div>You point at…</div>
              <div>The AI records</div>
              <div>How it runs</div>
            </div>
            {tech.map(([point, gen, runs, slug], i) => (
              <div key={slug + i}
                className="grid grid-cols-[1.2fr_1.2fr_1.2fr] gap-4 px-6 py-4 text-[13.5px] items-center"
                style={{ borderTop: i > 0 ? `1px solid ${K.border}` : undefined, background: i % 2 ? K.panel : K.panelHi }}
              >
                <div className="font-medium text-white">{point}</div>
                <div style={{ color: K.muted }}>
                  <span className="font-mono px-2 py-0.5 rounded text-[12px]" style={{ background: '#0A0A0F', color: K.green, border: `1px solid ${K.border}` }}>
                    {gen.split(' ')[0]}
                  </span>
                  <span className="ml-2">{gen.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="font-mono text-[12.5px]" style={{ color: K.text }}>{runs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REAL CONVERSATIONS ============ */}
      <section className="relative py-20 sm:py-28" style={{ background: '#07070B' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Terminal />}>Real conversations</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              What it actually looks like <Grad>in your AI.</Grad>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              Each of these starts from a single prompt. You review every recording before it is saved.
            </p>
          </div>

          <ClientUIShowcase />
        </div>
      </section>

      {/* ============ COMPATIBLE CLIENTS ============ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Braces />}>Compatible clients</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Works with <Grad>the assistants you use.</Grad>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((c) => (
              <div key={c.name}
                className="rounded-2xl border p-6 flex items-start gap-4"
                style={{ background: K.panel, borderColor: K.border }}>
                <div className="grid place-items-center w-10 h-10 rounded-xl shrink-0"
                     style={{ background: '#0F0F16', border: `1px solid ${K.borderH}`, color: K.green }}>
                  <Bot className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold text-white">{c.name}</div>
                  <div className="mt-1 text-[12.5px]" style={{ color: K.muted }}>{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SETUP ============ */}
      <section id="setup" className="relative py-20 sm:py-24" style={{ background: '#07070B' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Terminal />}>Setup in 60 seconds</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Drop the server into your AI, <Grad>done.</Grad>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: K.muted }}>
              Prerequisites: Node.js and npm installed on your system. Add this to your
              client&apos;s MCP config (shown: VS Code <code>mcp.json</code>).{' '}
              <code>QA_MCP_PROJECT_ID</code> is optional.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border overflow-hidden"
               style={{ background: K.panel, borderColor: K.border }}>
            <div className="flex items-center gap-3 px-4 py-2.5 border-b"
                 style={{ borderColor: K.border, background: '#0A0A0F' }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
              </div>
              <span className="text-[12px] font-mono" style={{ color: K.muted }}>mcp.json</span>
            </div>
            <pre className="p-6 text-[13px] font-mono overflow-x-auto" style={{ color: K.text }}>
{`{
  "servers": {
    "simplify3x-connect": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "simplify3x-connect"],
      "env": {
        "QA_MCP_PROVIDER": "simplifyqa",
        "QA_BASE_URL": "https://<your-simplifyqa-host>",
        "QA_MCP_TOKEN": "<your-token>",
        "QA_MCP_PROJECT_ID": "<optional-project-id>",
        "QA_MCP_URL": "http://127.0.0.1:4040/mcp"
      }
    }
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] p-10 sm:p-16 border"
               style={{
                 background: `radial-gradient(60% 80% at 90% 10%, ${K.amber}18, transparent 60%),
                              radial-gradient(50% 50% at 10% 90%, ${K.green}20, transparent 60%),
                              linear-gradient(180deg, #0E0E14 0%, #050508 100%)`,
                 borderColor: K.borderH,
               }}>
            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl sm:text-6xl leading-[0.98] tracking-tight text-white text-balance">
                  Your AI already knows <Grad>what to do.</Grad>
                </h2>
                <p className="mt-4 text-[16px]" style={{ color: K.muted }}>
                  Connect it to SimplifyQA and start from a user story.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <BookDemoButton
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-semibold text-[15px] text-white transition-transform hover:scale-[1.02]"
                      style={{
                        background: 'linear-gradient(180deg, #F04A5B 0%, #C8253A 60%, #9A1525 100%)',
                        boxShadow: '0 12px 30px -8px rgba(240,74,91,0.55)',
                      }}>
                  Book a demo <ArrowRight className="w-4 h-4" />
                </BookDemoButton>
                <Link href="/"
                      className="inline-flex items-center justify-center h-12 px-6 rounded-full border font-semibold text-[15px] text-white"
                      style={{ borderColor: K.borderH, background: K.panel }}>
                  Back to SimplifyQA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function SectionEyebrow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full pl-1 pr-3 py-1 text-[11.5px] font-mono font-semibold uppercase tracking-[0.14em] border"
          style={{ background: K.panel, borderColor: K.borderH, color: K.green }}>
      <span className="grid place-items-center w-5 h-5 rounded-full"
            style={{ background: K.green + '20', color: K.green }}>
        {icon}
      </span>
      {children}
    </span>
  );
}

function HeroTerminal() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 rounded-[36px] opacity-70 blur-2xl -z-10"
           style={{ background: `radial-gradient(60% 60% at 50% 50%, ${K.green}15, transparent 70%)` }} />
      <div className="rounded-[20px] border overflow-hidden"
           style={{ background: '#08080D', borderColor: K.borderH, boxShadow: `0 40px 80px -30px #000000` }}>
        {/* window bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b" style={{ borderColor: K.border, background: '#050508' }}>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
          </div>
          <span className="text-[12px] font-mono" style={{ color: K.muted }}>
            Claude · MCP: simplify3x-connect
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-[11px] font-mono" style={{ color: K.green }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: K.green }} /> connected
          </span>
        </div>

        <div className="p-6 sm:p-8 font-mono text-[13.5px] space-y-4" style={{ color: K.text }}>
          {/* user prompt */}
          <div>
            <div className="flex items-center gap-2 text-[11.5px] mb-2" style={{ color: K.muted }}>
              <span className="grid place-items-center w-5 h-5 rounded-full text-[10px] font-bold"
                    style={{ background: K.amber + '20', color: K.amber, border: `1px solid ${K.amber}55` }}>Y</span>
              You
            </div>
            <div className="pl-7">
              Create test cases for story <span style={{ color: K.amber }}>ACME-214</span> and record
              the first one on <span style={{ color: K.green }}>https://shop.acme.com</span>.
            </div>
          </div>

          {/* agent output */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-[11.5px] mb-2" style={{ color: K.muted }}>
              <span className="grid place-items-center w-5 h-5 rounded-full text-[10px] font-bold"
                    style={{ background: K.green + '25', color: K.green, border: `1px solid ${K.green}55` }}>C</span>
              Claude · simplify3x-connect
            </div>
            <div className="pl-7 space-y-1.5">
              <Line label="story" ok>read <span style={{ color: K.amber }}>ACME-214</span>: guest checkout with a saved card</Line>
              <Line label="generate" ok>6 test cases drafted from the acceptance criteria</Line>
              <Line label="record" ok>WEB: recorded &quot;Guest checkout, valid card&quot;, 14 steps</Line>
              <Line label="review">draft ready. Review it, then say &quot;save it&quot;.</Line>
              <div className="mt-3 pt-3 border-t text-[12.5px]" style={{ borderColor: K.border, color: K.muted }}>
                Nothing is saved to SimplifyQA until you approve the recording.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ label, ok, children }: { label: string; ok?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-[3px] shrink-0" style={{ color: ok ? K.green : K.amber }}>
        {ok ? '✓' : '⋯'}
      </span>
      <span style={{ color: K.faint }}>[{label}]</span>
      <span>{children}</span>
    </div>
  );
}

// Alias for the icon imports we used in `steps` etc.
const Workflow = Layers;
