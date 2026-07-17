'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Bot, Braces, Bug, CheckCircle2, CircleDot, Compass, Cpu,
  Database, Layers, Link2, LucideIcon, PenSquare, Play, Sparkles, Terminal, Zap,
} from 'lucide-react';
import DottedAgent from '../components/DottedAgent';
import ClientUIShowcase from '../components/ClientUIShowcase';
import { BookDemoButton } from '../CalendlyModal';

const K = {
  bg:      '#0A0A0F',      // page background
  panel:   '#111117',      // cards
  panelHi: '#161620',      // elevated
  border:  'rgba(255,255,255,0.08)',
  borderH: 'rgba(255,255,255,0.16)',
  text:    '#E4E4E7',      // primary text
  muted:   '#8B8B96',      // muted
  faint:   '#5C5C68',      // very muted
  green:   '#4ADE80',      // terminal green — primary accent
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
  { v: '2', k: 'Things to provide (URL + creds)' },
  { v: '9', k: 'Technologies covered' },
  { v: '50+', k: 'MCP tools per technology' },
  { v: '0', k: 'AI vendor lock-in' },
];

const steps = [
  { n: '1', icon: Link2,      title: 'Provide URL',      body: 'App URL + credentials. That is it.' },
  { n: '2', icon: Compass,    title: 'AI explores',      body: 'Walks pages, classifies each, builds sitemap.' },
  { n: '3', icon: PenSquare,  title: 'AI generates',     body: 'Test cases for every meaningful flow.' },
  { n: '4', icon: Database,   title: 'Saved to SimplifyQA', body: 'TM, Object Repo, Suites, auto-linked.' },
  { n: '5', icon: Play,       title: 'AI executes',      body: 'Via the existing SimplifyQA engine.' },
  { n: '6', icon: Bug,        title: 'AI reports',       body: 'Pass / fail / defects auto-filed in Jira.' },
];

const pillars = [
  {
    tag: '01 · OPEN',
    title: 'Bring your own AI.',
    body: 'Claude Desktop, Cursor, Windsurf, ChatGPT, Anthropic SDK, OpenAI Assistants, LangChain, CrewAI. Anything that speaks MCP, or can be wrapped to. No proprietary client. No vendor lock-in.',
  },
  {
    tag: '02 · UNIVERSAL',
    title: 'All 9 technologies, day one.',
    body: 'Web, Mobile Web, API, Native Mobile (Android & iOS), Desktop, Database, Mainframe, SAP, Hybrid cross-system flows, plus a Generic type for anything else you throw at it. The AI picks the right test type.',
  },
  {
    tag: '03 · ZERO-TOUCH',
    title: 'URL + creds in. Tested app out.',
    body: 'No scripts. No new UI to learn. No flows to configure. No object repository to hand-build. Discovery, generation, save, execute, and reporting, the agent does it all.',
  },
];

const capabilities: { icon: LucideIcon; title: string; body: string; items: string[] }[] = [
  {
    icon: Compass, title: 'Exploration & Understanding',
    body: 'Walk the app, learn what it does.',
    items: ['Open a URL with credentials', 'Screenshot + DOM capture per page', 'Page-type classification', 'UI component detection', 'State recognition (loading, error, success, empty)', 'Application sitemap discovery'],
  },
  {
    icon: PenSquare, title: 'Test Case Generation',
    body: 'Platform-aware, RAG-grounded.',
    items: ['Functional, edge-case, negative, security, accessibility', 'Platform-correct tcType (WEB / API / ANDROID / IOS)', 'From BRDs, Jira, Azure, Figma, Excel, OpenAPI', 'Full feature → story → test hierarchy', 'Refine existing tests in place'],
  },
  {
    icon: Database, title: 'Save to SimplifyQA',
    body: 'Native artifacts, not exports.',
    items: ['Features + stories with acceptance criteria', 'Test cases with steps + expected results', 'Object Repository auto-built', 'Parameterized test data iterations', 'Reusable suites assembled', 'Requirement ↔ test ↔ defect linkage'],
  },
  {
    icon: Play, title: 'Execution & Evidence',
    body: 'Real runs, real evidence.',
    items: ['Trigger execution against any environment', 'Live progress stream (executing / passed / failed / healed)', 'Per-step screenshots + network + console + DOM + video', 'Self-healing for locator / timing / data / env drift', 'Auto-classify bug vs flake'],
  },
  {
    icon: Bug, title: 'Defects & Reporting',
    body: 'Triaged outcomes, not raw logs.',
    items: ['Auto-file defects to Jira with full evidence', 'Reproduction steps + severity classification', 'RTM on demand', 'Export PDF / Excel / CSV / TestLink XML', 'Push to existing CI/CD reporting'],
  },
  {
    icon: Link2, title: 'Integrations',
    body: 'Talk to the rest of your stack.',
    items: ['Jira / Azure DevOps, pull requirements, push defects', 'Figma, extract UI from wireframes', 'BRD / DOCX / XLSX / OpenAPI ingestion', 'Webhook triggers', 'Schedule recurring runs'],
  },
];

const tech: [string, string, string, string][] = [
  // you point at → AI generates → what runs it → icon slug
  ['A web app',                   'WEB test cases',                 'SimplifyQA web plugin',        'web'],
  ['A mobile-responsive site',    'WEB with viewport overrides',    'Web plugin',                   'mobile'],
  ['A REST or SOAP API',          'API test cases',                 'API plugin',                   'api'],
  ['An Android app',              'ANDROID via Appium',             'simplifyqa-android',           'android'],
  ['An iOS app',                  'IOS via Appium',                 'simplifyqa-ios',               'ios'],
  ['A Windows desktop app',       'DESKTOP via SimplifyQADesktopDriver', 'desktop-execution-plugin', 'desktop'],
  ['A database',                  'DATABASE validation queries',    'simplifyqa-db-plugin',         'db'],
  ['A mainframe terminal',        'MAINFRAME screen-flow tests',    'mainframe-plugin',             'mainframe'],
  ['An SAP transaction',          'SAP GUI tests',                  'sap-plugin',                   'sap'],
  ['A cross-system flow',         'HYBRID (Web → API → DB)',        'Multi-plugin orchestration',   'hybrid'],
  ['Anything else',               'GENERIC test cases (custom type)', 'Bring-your-own runner',     'generic'],
];

const clients = [
  { name: 'Claude Desktop', body: 'Paste server config into claude_desktop_config.json.' },
  { name: 'Cursor',         body: 'MCP server registration. Tests without leaving the IDE.' },
  { name: 'Windsurf',       body: 'MCP server registration. Engineers stay in flow.' },
  { name: 'ChatGPT',        body: 'GPTs Actions or Assistants function calls.' },
  { name: 'Cline',          body: 'VS Code extension. Register the MCP server and go.' },
  { name: 'Gemini',         body: 'Google Gemini via function calling or the CLI.' },
  { name: 'opencode',       body: 'Open-source AI coding CLI. Add the server to its MCP config.' },
  { name: 'VS Code',        body: 'GitHub Copilot Chat / any MCP-aware VS Code extension.' },
  { name: 'Anthropic SDK',  body: 'Any Python/TS app that speaks Anthropic messages.' },
  { name: 'LangChain / CrewAI', body: 'Register the server as a tool, orchestrate agents.' },
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
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full pl-1 pr-4 py-1 text-[12px] font-mono border"
                   style={{ borderColor: K.borderH, background: K.panel }}>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-[11px] font-bold"
                      style={{ background: K.green, color: K.bg }}>$</span>
                <span style={{ color: K.muted }}>sqa</span>
                <span style={{ color: K.text }}>zero-touch-agent</span>
                <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold"
                      style={{ background: K.amber + '18', color: K.amber, border: `1px solid ${K.amber}40` }}>
                  MCP SERVER
                </span>
              </div>

              <h1 className="mt-6 font-display text-[42px] sm:text-[56px] leading-[1.0] tracking-tight text-white text-balance">
                Give your AI a URL.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(120deg, #ffffff 0%, ${K.green} 55%, ${K.amber} 100%)` }}
                >
                  Get a tested app back.
                </span>
              </h1>

              <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed max-w-xl" style={{ color: K.muted }}>
                An MCP server that plugs into Claude, ChatGPT, Cursor, Windsurf, and any AI
                you already use. Your AI calls SimplifyQA; SimplifyQA calls your app. You
                provide two things, a URL and login credentials, and 50+ MCP tools per
                technology handle the rest: exploration, test-case generation, execution,
                and defect reporting across all 9 technologies.
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

            {/* Right column: dotted agent graphic (Nothing-brand style) */}
            <DottedAgent />
          </div>

          {/* Hero terminal signature, below the split */}
          <div className="mt-16">
            <HeroTerminal />
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Workflow />}>How it works</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Six steps. One conversation. <Grad>No human in the loop.</Grad>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              You hand your AI a URL and credentials. The MCP server gives the AI everything
              it needs to explore, write, save, run, and report.
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
              Open. Universal. <Grad>Zero-Touch.</Grad>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              Three decisions that make this product better as the AI ecosystem gets better.
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
              Days of manual setup, condensed to{' '}
              <Grad>15 minutes in a chat.</Grad>
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-5">
            <div className="rounded-3xl border p-8" style={{ background: K.panel, borderColor: K.border }}>
              <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider" style={{ color: K.muted }}>
                <CircleDot className="w-3.5 h-3.5" /> Before
              </div>
              <h3 className="mt-4 font-display text-[22px] text-white">Regression suites, the old way</h3>
              <ul className="mt-6 space-y-3">
                {[
                  'Hire QA engineers who know SimplifyQA',
                  'Click through the app manually',
                  'Author every test case by hand',
                  'Hand-build the object repository',
                  'Parameterize the test data',
                  'Assemble suites and execution plans',
                  'Schedule the runs',
                  'Days, sometimes weeks, per app',
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
                <Sparkles className="w-3.5 h-3.5" /> With Zero-Touch
              </div>
              <h3 className="mt-4 font-display text-[22px] text-white">One conversation in your AI</h3>
              <ul className="mt-6 space-y-3">
                {[
                  'Open Claude / Cursor / Windsurf',
                  'Type: "Test https://… with user/pass"',
                  'AI explores 24 pages',
                  'AI generates 41 test cases',
                  'AI saves them in SimplifyQA',
                  'AI runs them across the right platform',
                  'AI files defects in Jira on failure',
                  '15 minutes, end to end',
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

      {/* ============ CAPABILITIES / 50+ MCP TOOLS ============ */}
      <section className="relative py-20 sm:py-28" style={{ background: '#07070B' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Cpu />}>What your AI can do</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              50+ MCP tools <Grad>per technology,</Grad>{' '}
              across the full testing lifecycle.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: K.muted }}>
              Every SimplifyQA capability exposed as an MCP tool, for every one of the 9
              supported technologies. Your AI composes them in whatever order your prompt
              requires.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* ============ 9 TECHNOLOGIES TABLE ============ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow icon={<Layers />}>All 9 technologies</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] sm:text-[46px] leading-tight tracking-tight text-white text-balance">
              Point your AI at <Grad>any kind of application.</Grad>
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border" style={{ background: K.panel, borderColor: K.border }}>
            <div className="grid grid-cols-[1.2fr_1.2fr_1.2fr] text-[11.5px] font-semibold uppercase tracking-[0.14em] px-6 py-4"
                 style={{ color: K.muted, background: '#0F0F16', borderBottom: `1px solid ${K.border}` }}>
              <div>You point at…</div>
              <div>The AI generates</div>
              <div>What runs it</div>
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
              Each of these is a single prompt. Everything else happens automatically.
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
              If it speaks MCP, <Grad>it works.</Grad>
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
              <span className="text-[12px] font-mono" style={{ color: K.muted }}>~/.config/claude/claude_desktop_config.json</span>
            </div>
            <pre className="p-6 text-[13px] font-mono overflow-x-auto" style={{ color: K.text }}>
{`{
  "mcpServers": {
    "sqa-agent": {
      "command": "npx",
      "args": ["-y", "@simplifyqa/zero-touch-agent"],
      "env": {
        "SQA_API_KEY":  "sk_live_…",
        "SQA_ORG_ID":   "acme"
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
                  Give it a URL. It will handle the rest.
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
            Claude Desktop · MCP: sqa-zero-touch-agent
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
              Test <span style={{ color: K.green }}>https://shop.acme.com</span> with{' '}
              <span style={{ color: K.amber }}>admin@acme.com / hunter2</span>. Save to project{' '}
              <span style={{ color: K.amber }}>ACME Shop</span>. Run the suite.
            </div>
          </div>

          {/* agent output */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-[11.5px] mb-2" style={{ color: K.muted }}>
              <span className="grid place-items-center w-5 h-5 rounded-full text-[10px] font-bold"
                    style={{ background: K.green + '25', color: K.green, border: `1px solid ${K.green}55` }}>C</span>
              Claude · sqa-agent
            </div>
            <div className="pl-7 space-y-1.5">
              <Line label="explore" ok>walked 24 pages, classified checkout, cart, browse, login, profile</Line>
              <Line label="generate" ok>41 test cases across 5 flows</Line>
              <Line label="save" ok>suite <span style={{ color: K.amber }}>ACME_Checkout_v1</span> in SimplifyQA / Payments</Line>
              <Line label="execute" ok>staging: <span style={{ color: K.green }}>37 passed</span>, <span style={{ color: K.red }}>3 failed</span>, <span style={{ color: K.amber }}>1 self-healed</span></Line>
              <Line label="defects" ok>filed in Jira: <span style={{ color: K.amber }}>ACMESH-1041, 1042, 1043</span></Line>
              <Line label="rtm" ok>exported to Excel</Line>
              <div className="mt-3 pt-3 border-t text-[12.5px]" style={{ borderColor: K.border, color: K.muted }}>
                Done in <span style={{ color: K.green }}>14m 22s</span>. Reproduction steps + evidence attached to every defect.
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
