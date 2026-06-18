'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight, Bot, CheckCircle2, Cpu, FlaskConical, GitBranch, LineChart, Play, Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { Container, Eyebrow } from '../../design';
import InteractiveDotGrid from '../components/InteractiveDotGrid';

const lifecycleChips = [
  { icon: <FlaskConical className="w-3.5 h-3.5" />, label: 'Plan' },
  { icon: <Cpu className="w-3.5 h-3.5" />,           label: 'Automate' },
  { icon: <Bot className="w-3.5 h-3.5" />,           label: 'AI-assist' },
  { icon: <GitBranch className="w-3.5 h-3.5" />,     label: 'Release' },
  { icon: <LineChart className="w-3.5 h-3.5" />,     label: 'Insights' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      {/* Background system — plain white. The cursor orb is the only accent. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <InteractiveDotGrid />
      </div>

      <Container size="wide" className="relative">
        {/* Hero text */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>
              Next-gen AI for the entire QA lifecycle
            </Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-6 font-display text-display-xl text-ink-900 text-balance"
          >
            The intelligent platform for{' '}
            <span className="gradient-text">enterprise quality</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-ink-500 max-w-2xl mx-auto text-pretty"
          >
            Plan, automate, execute, and report — across the entire software
            lifecycle. SimplifyQA unifies test management, AI-powered automation, and
            release intelligence in one premium workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/request-demo" className="btn-primary h-12 px-6 text-[15px]">
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions" className="btn-ghost h-12 px-6 text-[15px]">
              <Play className="w-3.5 h-3.5" />
              Watch the product tour
            </Link>
          </motion.div>

          {/* Lifecycle chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center justify-center flex-wrap gap-2"
          >
            {lifecycleChips.map((c, i) => (
              <motion.span
                key={c.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-ink-900/[0.06] text-[12.5px] font-medium text-ink-700 backdrop-blur"
              >
                <span className="text-brand-600">{c.icon}</span>
                {c.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mt-16 sm:mt-20 mx-auto max-w-6xl"
        >
          <DashboardMockup reduce={!!reduce} />
        </motion.div>
      </Container>
    </section>
  );
}

/* ---------- Inlined Dashboard mockup (SVG + cards) ---------- */

function DashboardMockup({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative">
      {/* Soft floor shadow */}
      <div
        aria-hidden
        className="absolute -bottom-10 left-10 right-10 h-24 rounded-[40px] blur-2xl"
        style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(185,29,45,0.18), transparent 70%)' }}
      />

      {/* Main plate */}
      <div className="relative rounded-[28px] glass-strong shadow-plate overflow-hidden">
        {/* Top chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-ink-900/[0.06] bg-white/70">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-ink-50 text-[12px] text-ink-500">
            app.simplifyqa.com / projects / payments-api
          </div>
          <div className="text-[12px] font-medium text-ink-500">Live</div>
        </div>

        <div className="grid grid-cols-12 gap-4 p-4 sm:p-6">
          {/* Sidebar */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 pr-2">
            {['Overview','Test Runs','Defects','Releases','Reports','Settings'].map((l, i) => (
              <div key={l} className={`px-3 py-2 rounded-xl text-[12.5px] font-medium ${i===1 ? 'bg-brand-50 text-brand-700 border border-brand-100' : 'text-ink-500 hover:bg-ink-50'}`}>
                {l}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-12 md:col-span-7 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <Stat title="Pass rate" value="98.4%" trend="+1.6%" />
              <Stat title="Avg run time" value="6m 12s" trend="-22%" />
              <Stat title="Open defects" value="14" trend="-3" />
            </div>

            <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12.5px] font-semibold text-ink-700">Release readiness</div>
                  <div className="text-[12px] text-ink-400">v4.18.0 · 1,284 tests · 96 modules</div>
                </div>
                <span className="text-[11.5px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Ready to ship</span>
              </div>
              <Sparkline reduce={reduce} />
            </div>

            <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[12.5px] font-semibold text-ink-700">Recent runs</div>
                <div className="text-[11.5px] text-ink-400">Auto-refresh</div>
              </div>
              <ul className="space-y-2">
                {[
                  ['Payments / Authorize 3DS', 'passed', '124 / 124'],
                  ['Checkout / Apple Pay flow', 'passed', '88 / 88'],
                  ['Refunds / Async webhook',   'flake',  '42 / 43'],
                  ['Wallets / KYC limits',      'passed', '76 / 76'],
                ].map(([name, status, scope]) => (
                  <li key={name} className="flex items-center justify-between gap-3 text-[12.5px]">
                    <span className="flex items-center gap-2 min-w-0">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${status==='passed' ? 'text-emerald-600' : 'text-amber-600'}`} />
                      <span className="truncate text-ink-700">{name}</span>
                    </span>
                    <span className="text-ink-400">{scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right rail — AI assistant */}
          <div className="col-span-12 md:col-span-3 space-y-4">
            <div className="rounded-2xl border border-brand-100 bg-gradient-to-b from-brand-50 to-white p-4">
              <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
                <Sparkles className="w-3.5 h-3.5" /> AI Assistant
              </div>
              <p className="mt-2 text-[12.5px] text-ink-700 leading-relaxed">
                Detected a regression in <span className="font-semibold">Refunds / Async webhook</span>. Likely cause: timeout on retry. Suggested fix ready.
              </p>
              <button className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-700">
                Review fix <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-4">
              <div className="text-[12px] font-semibold text-ink-700 mb-2">Coverage</div>
              <CoverageRings reduce={reduce} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating side cards */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden sm:block absolute -left-6 lg:-left-14 top-24 w-[230px]"
      >
        <div className="glass-card rounded-2xl p-3.5 lift">
          <div className="text-[11.5px] font-semibold uppercase tracking-wider text-ink-400">Automation</div>
          <div className="mt-2 text-[13.5px] font-semibold text-ink-800">2,184 tests automated this sprint</div>
          <div className="mt-2 h-1.5 rounded-full bg-ink-100 overflow-hidden">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-400 to-brand-700" />
          </div>
          <div className="mt-1 text-[11px] text-ink-400">72% of suite</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="hidden sm:block absolute -right-6 lg:-right-14 bottom-12 w-[240px]"
      >
        <div className="glass-card rounded-2xl p-3.5 lift">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Quality signal: healthy
          </div>
          <div className="mt-2 text-[12.5px] text-ink-600 leading-relaxed">
            No blocking defects across 5 active release trains.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ title, value, trend }: { title: string; value: string; trend: string }) {
  const positive = trend.startsWith('+') || trend.startsWith('-3') || trend.startsWith('-2');
  return (
    <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-3.5">
      <div className="text-[11.5px] font-medium uppercase tracking-wider text-ink-400">{title}</div>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="font-display text-xl font-semibold text-ink-900">{value}</span>
        <span className={`text-[11.5px] font-semibold ${positive ? 'text-emerald-700' : 'text-brand-700'}`}>{trend}</span>
      </div>
    </div>
  );
}

function Sparkline({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 320 80" className="mt-3 w-full h-20">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B91D2D" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#B91D2D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C30,40 50,55 80,42 C110,28 130,45 160,30 C190,16 220,28 250,20 C280,12 305,18 320,12 L320,80 L0,80 Z"
        fill="url(#sparkFill)"
      />
      <motion.path
        d="M0,60 C30,40 50,55 80,42 C110,28 130,45 160,30 C190,16 220,28 250,20 C280,12 305,18 320,12"
        fill="none"
        stroke="#B91D2D"
        strokeWidth="2"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={reduce ? undefined : { pathLength: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      />
    </svg>
  );
}

function CoverageRings({ reduce }: { reduce: boolean }) {
  const rings = [
    { label: 'Unit',        value: 96, color: '#B91D2D' },
    { label: 'Integration', value: 84, color: '#E4646E' },
    { label: 'E2E',         value: 71, color: '#F7C1C6' },
  ];
  return (
    <div className="space-y-2.5">
      {rings.map((r) => {
        const C = 2 * Math.PI * 14;
        const offset = C - (r.value / 100) * C;
        return (
          <div key={r.label} className="flex items-center gap-2.5">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <circle cx="17" cy="17" r="14" fill="none" stroke="#EEF0F4" strokeWidth="4" />
              <motion.circle
                cx="17" cy="17" r="14" fill="none"
                stroke={r.color} strokeWidth="4" strokeLinecap="round"
                strokeDasharray={C}
                initial={reduce ? false : { strokeDashoffset: C }}
                animate={reduce ? undefined : { strokeDashoffset: offset }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                transform="rotate(-90 17 17)"
              />
            </svg>
            <div className="flex-1 min-w-0 flex items-center justify-between">
              <span className="text-[12px] text-ink-600">{r.label}</span>
              <span className="text-[12px] font-semibold text-ink-800">{r.value}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
