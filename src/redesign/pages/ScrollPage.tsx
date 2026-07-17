'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Bot, Braces, Brain, Check, ChevronDown, ChevronRight, Cpu, Database, FileText,
  GitBranch, HelpCircle, LayoutDashboard, Layers, LineChart, Link2, Lock, MessageSquare,
  Presentation, Search, ShieldCheck, Sparkles, Users, Workflow, X, Zap,
} from 'lucide-react';
import { Container, Reveal, RevealGroup, cn, fadeUp } from '../../design';
import ScrollHeroDemo from '../components/ScrollHeroDemo';
import { BookDemoButton } from '../CalendlyModal';

// Section eyebrow in the Scroll violet palette (the shared design/Eyebrow
// uses the site brand maroon).
function VEyebrow({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full pl-1 pr-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] border"
      style={{ background: '#F5F3FF', color: '#6D28D9', borderColor: '#DDD6FE' }}
    >
      {icon && (
        <span
          className="grid place-items-center w-5 h-5 rounded-full"
          style={{ background: '#EDE9FE', color: '#7C3AED', border: '1px solid #DDD6FE' }}
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

// Purple gradient span for accented words inside Scroll page headings.
// All four CSS properties set inline because `bg-clip-text` alone has
// failed to render on some parent structures (see ProductsSuite fix).
function Grad({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: 'linear-gradient(120deg, #4C1D95 0%, #7C3AED 55%, #A78BFA 100%)',
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

const SCROLL_URL = 'https://scroll.simplifyqa.app';

// Scroll violet palette (Tailwind violet-500 through violet-800), used inline
// so we don't have to introduce a whole theme layer for one page.
const V = {
  soft:   '#F5F3FF',
  50:     '#F5F3FF',
  100:    '#EDE9FE',
  200:    '#DDD6FE',
  400:    '#A78BFA',
  500:    '#8B5CF6',
  600:    '#7C3AED',
  700:    '#6D28D9',
  800:    '#5B21B6',
  900:    '#4C1D95',
};
const AMBER = '#F59E0B';

const stats = [
  { v: '120+', k: 'Shipped features' },
  { v: '12+',  k: 'AI capabilities' },
  { v: '5',    k: 'QA-native block types' },
  { v: '100+', k: 'Fine-grained privileges' },
];

const pillars = [
  {
    tag: '01 · AI-Native',
    title: 'Not AI-bolted-on.',
    body:
      'Every other doc tool added AI as a sidebar. Scroll was designed around an MCP-powered AI server from day one, the same backbone that powers writing also powers semantic search, diagram generation, presentation creation, and Q&A grounded in your real content.',
    icon: <Brain className="w-5 h-5" />,
  },
  {
    tag: '02 · QA-Aware',
    title: 'From the schema up.',
    body:
      'The only doc platform with native test case, execution report, traceability matrix, defect analysis, and dashboard blocks. Not iframes, not screenshots, real React components with live SimplifyQA data.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    tag: '03 · Ecosystem-Native',
    title: 'Built for SimplifyQA.',
    body:
      'Single sign-on, shared users, shared projects, shared roles. A SimplifyQA admin does not onboard Scroll separately, their team is already there. Switching between testing and documentation is one click.',
    icon: <Link2 className="w-5 h-5" />,
  },
];

const blocks = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Test Case Block',
    body: 'Preconditions, steps, expected results, data variables, version, and live pass/fail status, rendered as a first-class React component.',
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: 'Execution Report Widget',
    body: 'Five-stage drill-down from execution to items to runs to steps to failed-step detail. Live. Never a screenshot.',
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'Traceability Matrix',
    body: 'Auto-generated from linked requirements, test cases, and defects. Coverage analysis. Orphan detection. Zero spreadsheets.',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Defect Analysis',
    body: 'Structured RCA: category, root cause, contributing factors, corrective actions, with live status pulled from SimplifyQA.',
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Environment Block',
    body: 'Live environment status, configuration, dependencies, and version info embedded right next to the runbooks that reference them.',
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: 'Dashboard Widgets',
    body: '10+ live SimplifyQA metric widgets, execution status, pass rate trend, defect count, release health, traceability coverage.',
  },
];

const aiCapabilities = [
  { icon: <MessageSquare className="w-4 h-4" />, title: 'AI Writing Assistant',   body: 'Generate, improve, rewrite, summarize (short / bullets / TLDR / executive), translate with formatting preserved.' },
  { icon: <Sparkles className="w-4 h-4" />,      title: 'Tone & Style Control',   body: 'Rewrite in formal, casual, friendly, professional, technical, or neutral tone, and adjust length independently.' },
  { icon: <Search className="w-4 h-4" />,        title: 'Semantic Search',        body: 'pgvector-powered embeddings that find documents by meaning, not just keywords.' },
  { icon: <Bot className="w-4 h-4" />,           title: 'Conversational Q&A',     body: 'Ask questions of a single page, an entire space, or a connected repository, with citations to the source content.' },
  { icon: <Workflow className="w-4 h-4" />,      title: 'AI Diagram Generation',  body: 'Describe a system in plain English, get a Mermaid flowchart, sequence diagram, ER diagram, or mindmap.' },
  { icon: <Presentation className="w-4 h-4" />,  title: 'AI Presentation',        body: 'Turn any page or space into a slide deck with 15+ web-native layouts. Export to PDF or PPTX.' },
  { icon: <Braces className="w-4 h-4" />,        title: 'AI From Repository',     body: 'Connect a GitHub / GitLab / Bitbucket repo and generate architecture docs, API references, and onboarding guides from the code.' },
  { icon: <Cpu className="w-4 h-4" />,           title: 'Multi-LLM Support',      body: 'OpenAI, Anthropic, Google Gemini, Azure OpenAI. Per-org cost caps. Per-user rate limits. Full audit trail.' },
];

// Comparison rows for the vs-alternatives table. `cells` is 4 values,
// one per competitor (Confluence, Notion, GitBook, Coda). Scroll column
// is always ✓ and separately rendered.
type Support = 'no' | 'partial' | 'yes';
type CompareRow = { feature: string; cells: [Support, Support, Support, Support]; scroll: string };

const compareRows: CompareRow[] = [
  { feature: 'Live test-case blocks',        cells: ['no', 'no', 'no', 'no'],           scroll: 'First-class, versioned, live pass/fail' },
  { feature: 'Live execution reports',       cells: ['no', 'no', 'no', 'no'],           scroll: 'Five-stage drill-down, always current' },
  { feature: 'Auto-generated traceability',  cells: ['no', 'no', 'no', 'no'],           scroll: 'Requirements ↔ tests ↔ defects, from real data' },
  { feature: 'Real-time collaboration',      cells: ['partial', 'yes', 'partial', 'yes'], scroll: 'Yjs CRDT · live cursors · 260K ops/sec' },
  { feature: 'MCP-native AI (grounded)',     cells: ['no', 'partial', 'partial', 'no'], scroll: '12+ capabilities · multi-LLM · full audit log' },
  { feature: 'AI diagram + presentation',    cells: ['no', 'partial', 'no', 'no'],      scroll: 'Mermaid diagrams + web-native decks' },
  { feature: 'Shared identity with SimplifyQA', cells: ['no', 'no', 'no', 'no'],        scroll: 'Same SSO, users, orgs, projects, roles' },
];

const competitors = [
  { name: 'Confluence', logo: 'https://cdn.simpleicons.org/confluence/172B4D' },
  { name: 'Notion',     logo: 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'GitBook',    logo: 'https://cdn.simpleicons.org/gitbook/BBDDE5' },
  { name: 'Coda',       logo: 'https://cdn.simpleicons.org/coda/F46A54' },
];

export default function ScrollPage() {
  return (
    <div className="relative">
      {/* Top-of-page ambient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px] -z-10"
        style={{
          background:
            `radial-gradient(60% 60% at 50% 0%, ${V[100]}, transparent 70%),
             radial-gradient(40% 40% at 85% 10%, ${V[200]}80, transparent 70%),
             radial-gradient(40% 40% at 15% 20%, #FDE68A55, transparent 70%)`,
        }}
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20">
        <Container size="wide">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border pl-1 pr-4 py-1"
                     style={{ borderColor: V[200], background: V.soft }}>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white font-display text-[13px] font-bold"
                        style={{ background: V[600] }}>S</span>
                  <span className="text-[12.5px] font-semibold" style={{ color: V[700] }}>
                    Part of the SimplifyQA Platform · Scroll
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-display-md leading-[1.1] pb-[0.06em] text-ink-900 text-balance">
                  The AI-native documentation platform for{' '}
                  <Grad>every team.</Grad>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-500 max-w-xl">
                  Scroll is a real-time collaborative wiki for product, engineering, QA,
                  design, sales, and ops, anyone who works out of a shared knowledge base.
                  Everyone gets AI writing, semantic search, diagrams, and decks. Teams
                  on SimplifyQA also get live test cases, execution reports, and
                  traceability embedded as first-class blocks.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a
                    href={SCROLL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-[15px] font-semibold text-white transition-all"
                    style={{
                      background: `linear-gradient(180deg, ${V[500]} 0%, ${V[600]} 60%, ${V[800]} 100%)`,
                      boxShadow: `0 12px 32px -8px ${V[600]}66, 0 1px 0 rgba(255,255,255,0.2) inset`,
                    }}
                  >
                    Try Scroll <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="#pillars"
                    className="inline-flex items-center gap-1 h-12 px-6 rounded-full text-[15px] font-medium text-ink-800 border border-ink-900/10 bg-white hover:bg-ink-50 transition-colors"
                  >
                    See the features <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>

              {/* Compact stat bar, fills space below the copy inside the left column */}
              <Reveal delay={0.22}>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
                  {stats.map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl border bg-white px-3.5 py-3"
                      style={{ borderColor: V[100] }}
                    >
                      <div
                        className="font-display text-[22px] tracking-tight leading-none"
                        style={{ color: V[700] }}
                      >
                        {s.v}
                      </div>
                      <div className="mt-1 text-[11.5px] text-ink-500 leading-tight">
                        {s.k}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <ScrollHeroDemo />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ THREE PILLARS ============ */}
      <section id="pillars" className="relative py-20 sm:py-28" style={{ background: V.soft }}>
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal><VEyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>The three pillars</VEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Three architectural decisions{' '}
                <Grad>no other doc tool can retrofit.</Grad>
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid md:grid-cols-3 gap-4" delay={0.06}>
            {pillars.map((p) => (
              <motion.article key={p.tag} variants={fadeUp}
                className="rounded-3xl bg-white p-7 border transition-all hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(124,58,237,0.30)]"
                style={{ borderColor: V[100] }}
              >
                <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em]"
                     style={{ color: V[700] }}>
                  <span className="grid place-items-center w-6 h-6 rounded-full border"
                        style={{ background: V[50], color: V[700], borderColor: V[100] }}>
                    {p.icon}
                  </span>
                  {p.tag}
                </div>
                <h3 className="mt-5 font-display text-[22px] text-ink-900">{p.title}</h3>
                <p className="mt-3 text-[14.5px] text-ink-500 leading-relaxed">{p.body}</p>
              </motion.article>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ============ QA-NATIVE BLOCKS ============ */}
      <section className="relative py-20 sm:py-28 bg-white">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full pl-1 pr-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em]"
                    style={{ background: '#FEF3C7', color: '#92400E' }}>
                <span className="grid place-items-center w-5 h-5 rounded-full" style={{ background: AMBER, color: 'white' }}>
                  <Zap className="w-3 h-3" />
                </span>
                The differentiator
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Five block types <Grad>only Scroll ships.</Grad>{' '}
                All live, all bidirectional.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[17px] text-ink-500 max-w-2xl leading-relaxed">
                Not embeds. Not screenshots. Not iframes. Live React components rendered
                inside the editor, pulling real data from SimplifyQA in real time.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" delay={0.05}>
            {blocks.map((b) => (
              <motion.div key={b.title} variants={fadeUp}
                className="group rounded-3xl bg-white p-6 border transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(124,58,237,0.25)]"
                style={{ borderColor: '#F4F1FE' }}
              >
                <div className="grid place-items-center w-11 h-11 rounded-2xl transition-transform group-hover:scale-110"
                     style={{ background: V[50], color: V[700], border: `1px solid ${V[100]}` }}>
                  {b.icon}
                </div>
                <h3 className="mt-5 font-display text-[17px] text-ink-900">{b.title}</h3>
                <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ============ AI CAPABILITIES ============ */}
      <section className="relative py-20 sm:py-28"
        style={{
          background: `linear-gradient(180deg, ${V.soft} 0%, #ffffff 100%)`,
        }}
      >
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal><VEyebrow icon={<Brain className="w-3.5 h-3.5" />}>AI capabilities</VEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                12+ AI features. Every one through{' '}
                <Grad>a hardened MCP server.</Grad>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[17px] text-ink-500 max-w-2xl leading-relaxed">
                Multi-LLM. Per-org daily cost caps. Per-user rate limiting. Secret detection
                on every input. Prompt-injection wrapping. Full audit log. Enterprise AI, not
                a sidebar chatbot.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3" delay={0.04}>
            {aiCapabilities.map((c) => (
              <motion.div key={c.title} variants={fadeUp}
                className="rounded-2xl bg-white border p-5 hover:-translate-y-0.5 transition-transform"
                style={{ borderColor: V[100] }}
              >
                <div className="grid place-items-center w-9 h-9 rounded-xl"
                     style={{ background: V[50], color: V[700], border: `1px solid ${V[100]}` }}>
                  {c.icon}
                </div>
                <div className="mt-4 text-[13.5px] font-semibold text-ink-900">{c.title}</div>
                <p className="mt-1.5 text-[12.5px] text-ink-500 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ============ VS ALTERNATIVES ============ */}
      <section className="relative py-20 sm:py-24 bg-white">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <VEyebrow icon={<Layers className="w-3.5 h-3.5" />}>
                Scroll vs. the alternatives
              </VEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Why teams pick Scroll over{' '}
                <Grad>Confluence, Notion, and the rest.</Grad>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[16.5px] text-ink-500 max-w-2xl leading-relaxed">
                Every doc tool got the wiki part right. Scroll gets the QA part right too,
                and pairs it with an MCP-native AI backbone the others cannot retrofit.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <VsComparison />
          </Reveal>
        </Container>
      </section>

      {/* ============ INTEGRATION + ENTERPRISE strip ============ */}
      <section className="relative py-20 sm:py-24" style={{ background: V.soft }}>
        <Container size="wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <Reveal><VEyebrow icon={<Link2 className="w-3.5 h-3.5" />}>SimplifyQA Integration</VEyebrow></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                  Not an API connector.{' '}
                  <Grad>Shared infrastructure.</Grad>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[16.5px] text-ink-500 leading-relaxed max-w-xl">
                  Same SSO, same users, same organizations, same projects. A user already in
                  SimplifyQA is already in Scroll. Auto-refreshing tokens. Permission cache
                  invalidated on any role change. Auth is invisible to the user.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['SAML SSO','OAuth 2.0','OIDC','Jira','Slack','GitHub','GitLab','REST API','Webhooks','Git sync'].map((t) => (
                    <span key={t}
                      className="px-3 py-1.5 rounded-full text-[12.5px] font-medium border"
                      style={{ background: 'white', color: V[800], borderColor: V[200] }}>
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-white p-6 border"
                   style={{ borderColor: V[100], boxShadow: `0 30px 60px -30px ${V[700]}30` }}>
                <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider text-ink-400">
                  <Lock className="w-3.5 h-3.5" /> Enterprise-grade
                </div>
                <ul className="mt-4 space-y-3">
                  {[
                    ['Row-level security',   'Multi-tenant isolation baked into every query.'],
                    ['100+ privileges',      'Fine-grained RBAC that mirrors real org structures.'],
                    ['Full audit log',       'Every AI call, every doc change, every permission event.'],
                    ['Version history',      'Full page + block history with restore.'],
                  ].map(([t, d]) => (
                    <li key={t as string} className="flex items-start gap-3">
                      <span className="grid place-items-center w-6 h-6 rounded-lg mt-0.5"
                            style={{ background: V[50], color: V[700], border: `1px solid ${V[100]}` }}>
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[14px] font-semibold text-ink-900">{t}</div>
                        <div className="text-[12.5px] text-ink-500 leading-snug">{d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <ScrollFAQ />

      {/* ============ FINAL CTA ============ */}
      <section className="relative pt-0 pb-20 sm:pb-28 bg-white">
        <Container size="wide">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] p-10 sm:p-16 border"
              style={{
                background: `linear-gradient(135deg, ${V[900]} 0%, ${V[700]} 55%, ${V[500]} 100%)`,
                borderColor: V[800],
              }}
            >
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
                   style={{ background: AMBER }} />
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-wider text-white">
                    <Users className="w-3.5 h-3.5" /> For every team
                  </div>
                  <h2 className="mt-5 font-display text-4xl sm:text-5xl text-white tracking-tight text-balance">
                    Stop pasting screenshots into Confluence.
                  </h2>
                  <p className="mt-4 text-[16px] text-white/80 max-w-xl">
                    See what documentation looks like when it knows about your tests, your
                    defects, and your releases.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a href={SCROLL_URL} target="_blank" rel="noreferrer"
                     className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white text-[15px] font-semibold hover:bg-white/90 transition-colors"
                     style={{ color: V[700] }}>
                    Try Scroll <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <BookDemoButton className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/30 text-white text-[15px] font-semibold hover:bg-white/10 transition-colors">
                    Book a demo
                  </BookDemoButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

/* ============ FAQ section (violet themed) ============ */

const scrollFaqs = [
  {
    q: 'What is SimplifyQA Scroll?',
    a: 'Scroll is an AI-native documentation platform for any team, product, engineering, QA, design, sales, ops. It is a real-time collaborative wiki with AI writing, semantic search, diagrams, and decks. For teams already on SimplifyQA, it also renders live test cases, execution reports, and traceability as first-class blocks inside the page.',
  },
  {
    q: 'How is Scroll different from Confluence or Notion?',
    a: 'Every existing doc tool treats a test plan as a wiki page and an execution report as a screenshot. Scroll treats them as structured objects: a test case is a first-class block, an execution report is live data with drill-down, and traceability is auto-generated from your real requirements-tests-defects graph.',
  },
  {
    q: 'Does it work with our existing SimplifyQA setup?',
    a: 'Yes. Scroll shares the same identity, users, organizations, and projects as SimplifyQA core. A user already in SimplifyQA is already in Scroll. Permissions and role mappings sync bidirectionally, so switching between testing and documentation is a single click, not a fresh onboarding.',
  },
  {
    q: 'What AI capabilities are included?',
    a: '12+ features via a hardened MCP server: writing assistant, tone and style control, semantic search, conversational Q&A grounded in your pages, AI diagram generation (Mermaid), AI presentation generation, and AI-from-repository. Multi-LLM (OpenAI, Anthropic, Google, Azure) with per-org cost caps, per-user rate limits, and full audit logging.',
  },
  {
    q: 'What integrations ship out of the box?',
    a: 'Jira, Azure DevOps, GitHub, GitLab, Slack, Microsoft Teams, plus a REST API, webhooks, and Git-based content sync. Anything you can already connect to SimplifyQA works in Scroll automatically because the two share the same integration layer.',
  },
];

const scrollFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: scrollFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function ScrollFAQ() {
  return (
    <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-14 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scrollFaqJsonLd) }}
      />
      <Container size="wide">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <Reveal>
              <VEyebrow icon={<HelpCircle className="w-3.5 h-3.5" />}>FAQ</VEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Everything teams ask <Grad>before switching.</Grad>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-2">
            <RevealGroup className="space-y-2">
              {scrollFaqs.map((f) => (
                <motion.div key={f.q} variants={fadeUp}>
                  <ScrollFaqRow q={f.q} a={f.a} />
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ScrollFaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl bg-white overflow-hidden border transition-colors"
      style={{ borderColor: open ? '#DDD6FE' : '#EDE9FE' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 transition-colors"
        style={{ background: open ? '#F5F3FF' : 'white' }}
        aria-expanded={open}
      >
        <span className="text-[14.5px] font-semibold text-ink-900">{q}</span>
        <ChevronDown
          className={cn('w-4 h-4 transition-transform shrink-0', open && 'rotate-180')}
          style={{ color: open ? '#6D28D9' : '#6B7280' }}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-[14px] text-ink-500 leading-relaxed">{a}</div>
      </motion.div>
    </div>
  );
}

/* ============ VS Alternatives comparison ============ */

function SupportCell({ v }: { v: Support }) {
  if (v === 'yes') {
    return (
      <span
        className="grid place-items-center w-6 h-6 rounded-full mx-auto"
        style={{ background: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0' }}
        aria-label="Supported"
        title="Supported"
      >
        <Check className="w-3.5 h-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (v === 'partial') {
    return (
      <span
        className="grid place-items-center w-6 h-6 rounded-full mx-auto"
        style={{ background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A' }}
        aria-label="Partial"
        title="Partial support"
      >
        <span className="text-[10px] font-bold leading-none">~</span>
      </span>
    );
  }
  return (
    <span
      className="grid place-items-center w-6 h-6 rounded-full mx-auto"
      style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA' }}
      aria-label="Not supported"
      title="Not supported"
    >
      <X className="w-3.5 h-3.5" strokeWidth={3} />
    </span>
  );
}

function VsComparison() {
  return (
    <div
      className="mt-12 rounded-3xl border overflow-x-auto"
      style={{ borderColor: V[100], background: 'white', boxShadow: `0 24px 60px -30px ${V[700]}20` }}
    >
     <div className="min-w-[820px]">
      {/* Header row: feature label + 4 competitor logos + Scroll */}
      <div
        className="grid items-center border-b"
        style={{
          gridTemplateColumns: '1.6fr repeat(4, 1fr) 1.4fr',
          borderColor: V[100],
          background: V.soft,
        }}
      >
        <div className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
          Capability
        </div>
        {competitors.map((c) => (
          <div key={c.name} className="px-3 py-4 flex flex-col items-center gap-1.5">
            <img
              src={c.logo}
              alt={c.name}
              className="h-6 w-6 object-contain"
              draggable={false}
              loading="lazy"
            />
            <div className="text-[12px] font-semibold text-ink-700">{c.name}</div>
          </div>
        ))}
        <div
          className="px-3 py-4 flex flex-col items-center gap-1.5"
          style={{ background: V[600], color: 'white', borderLeft: `1px solid ${V[100]}` }}
        >
          <span className="grid place-items-center w-6 h-6 rounded-full bg-white/20 font-display text-[13px] font-bold">
            S
          </span>
          <div className="text-[12px] font-semibold">Scroll</div>
        </div>
      </div>

      {/* Rows */}
      {compareRows.map((r, i) => (
        <div
          key={r.feature}
          className="grid items-center"
          style={{
            gridTemplateColumns: '1.6fr repeat(4, 1fr) 1.4fr',
            background: i % 2 ? '#FBFAFF' : 'white',
            borderTop: `1px solid ${V[100]}`,
          }}
        >
          <div className="px-5 py-4 text-[14px] font-semibold text-ink-900">
            {r.feature}
          </div>
          {r.cells.map((v, idx) => (
            <div key={idx} className="px-3 py-4">
              <SupportCell v={v} />
            </div>
          ))}
          <div
            className="px-3 py-4 flex items-center gap-2"
            style={{ background: V[50], borderLeft: `1px solid ${V[100]}` }}
          >
            <span
              className="grid place-items-center w-6 h-6 rounded-full shrink-0"
              style={{ background: V[600], color: 'white' }}
            >
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </span>
            <span className="text-[12.5px] text-ink-800 leading-tight">{r.scroll}</span>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div
        className="px-5 py-3 text-[11.5px] flex items-center justify-end gap-4"
        style={{ borderTop: `1px solid ${V[100]}`, background: V.soft, color: '#6B7280' }}
      >
        <span className="inline-flex items-center gap-1.5">
          <SupportCell v="yes" /> Supported
        </span>
        <span className="inline-flex items-center gap-1.5">
          <SupportCell v="partial" /> Partial
        </span>
        <span className="inline-flex items-center gap-1.5">
          <SupportCell v="no" /> Not supported
        </span>
      </div>
     </div>
    </div>
  );
}

