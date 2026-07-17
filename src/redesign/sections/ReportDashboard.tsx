'use client';

import { motion } from 'framer-motion';
import {
  Activity, Bug, Camera, CheckCircle2, ChevronRight, CircleDot, Clock,
  Download, FileText, Filter, Globe, Layers, LineChart, Maximize2,
  Search, Sparkles, XCircle,
} from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal,
  easeExpo, fadeUp,
} from '../../design';

/* ── Tiny utility components ───────────────────────────────────────────── */

function StatusPill({
  tone, children,
}: { tone: 'pass' | 'fail' | 'warn' | 'neutral'; children: React.ReactNode }) {
  const map = {
    pass:    'bg-emerald-50  text-emerald-700  border-emerald-100',
    fail:    'bg-brand-50    text-brand-700    border-brand-100',
    warn:    'bg-amber-50    text-amber-700    border-amber-100',
    neutral: 'bg-ink-50      text-ink-600      border-ink-200',
  }[tone];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium ${map}`}>
      {children}
    </span>
  );
}

/* Tiny Windows logo glyph (4-square) so we don't import a brand asset. */
function WindowsGlyph({ className = 'w-3 h-3' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <g fill="currentColor">
        <rect x="1"   y="1"   width="6.4" height="6.4" rx="0.6" />
        <rect x="8.6" y="1"   width="6.4" height="6.4" rx="0.6" />
        <rect x="1"   y="8.6" width="6.4" height="6.4" rx="0.6" />
        <rect x="8.6" y="8.6" width="6.4" height="6.4" rx="0.6" />
      </g>
    </svg>
  );
}

/* ── Signature element: segmented donut ring ───────────────────────────── */

function SegmentedDonut({
  segments, centerTop, centerBottom, gradId,
}: {
  segments: { value: number; color: string }[];
  centerTop: React.ReactNode;
  centerBottom: React.ReactNode;
  gradId: string;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  let rotation = -90; // start at top

  return (
    <div className="relative w-[112px] h-[112px] shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r={radius} stroke="rgb(238 240 244)" strokeWidth="9" fill="none" />

        {segments.map((seg, i) => {
          const fraction = seg.value / total;
          const arcLen = circumference * fraction;
          const dash = `${arcLen} ${circumference - arcLen}`;
          const startRotation = rotation;
          rotation += fraction * 360;
          return (
            <motion.circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              stroke={seg.color}
              strokeWidth="9"
              fill="none"
              strokeLinecap="butt"
              strokeDasharray={dash}
              initial={{ strokeDashoffset: arcLen, opacity: 0 }}
              whileInView={{ strokeDashoffset: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: easeExpo, delay: 0.25 + i * 0.18 }}
              transform={`rotate(${startRotation} 50 50)`}
            />
          );
        })}

        <defs>
          <radialGradient id={gradId} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0.55" stopColor="rgba(255,255,255,0)" />
            <stop offset="1"    stopColor="rgba(15,19,34,0.04)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="34" fill={`url(#${gradId})`} />
      </svg>

      <div className="absolute inset-0 grid place-items-center text-center leading-none">
        <div>
          <div className="font-display text-[22px] text-ink-900 tracking-tight">{centerTop}</div>
          <div className="mt-0.5 text-[10.5px] font-medium uppercase tracking-wider text-ink-400">{centerBottom}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Meta chip (OS, testcase type, etc.) ───────────────────────────────── */

function MetaChip({
  icon, label, tone = 'neutral',
}: {
  icon: React.ReactNode;
  label: string;
  tone?: 'neutral' | 'brand' | 'sky';
}) {
  const map = {
    neutral: 'bg-ink-50    text-ink-600   border-ink-200',
    brand:   'bg-brand-50  text-brand-700 border-brand-100',
    sky:     'bg-sky-50    text-sky-700   border-sky-100',
  }[tone];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] font-medium ${map}`} title={label}>
      {icon}
      <span>{label}</span>
    </span>
  );
}

/* ── Step row ──────────────────────────────────────────────────────────── */

const stepRows = [
  { n: '1.1', kind: 'Function', label: 'OHRM Login · valid creds',          dur: '00:00:48', status: 'pass' as const, version: 'v1.2' },
  { n: '1.2', kind: 'Function', label: 'Add SKU 8821 to cart',              dur: '00:00:21', status: 'pass' as const, version: 'v1.0' },
  { n: '1.3', kind: 'Iterator', label: 'Apply promo · 4 currencies',        dur: '00:01:04', status: 'warn' as const, version: 'self-heal' },
  { n: '1.4', kind: 'Function', label: 'Submit payment · 3DS-2.2',          dur: '00:00:36', status: 'pass' as const, version: 'v2.1' },
  { n: '1.5', kind: 'Assert',   label: 'Receipt content · multi-locale',    dur: '00:00:18', status: 'pass' as const, version: '' },
  { n: '1.6', kind: 'Function', label: 'Webhook delivery · ledger sync',    dur: '00:00:09', status: 'fail' as const, version: '' },
];

function StepActionButton({
  icon, label, tone,
}: { icon: React.ReactNode; label: string; tone: 'neutral' | 'brand' | 'ink' }) {
  const map = {
    neutral: 'bg-white         text-ink-600    border-ink-900/[0.08] hover:text-ink-900',
    brand:   'bg-brand-50      text-brand-700  border-brand-100      hover:bg-brand-100',
    ink:     'bg-ink-50        text-ink-700    border-ink-200        hover:bg-ink-100',
  }[tone];
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className={`inline-flex items-center justify-center w-7 h-7 rounded-md border transition-colors ${map}`}
    >
      {icon}
    </button>
  );
}

function StepRow({
  row, delay,
}: { row: (typeof stepRows)[number]; delay: number }) {
  const tone =
    row.status === 'pass' ? 'bg-emerald-500'
    : row.status === 'warn' ? 'bg-amber-500'
    : row.status === 'fail' ? 'bg-brand-600'
    : 'bg-ink-300';

  const railTone =
    row.status === 'pass' ? 'before:bg-emerald-400/70'
    : row.status === 'warn' ? 'before:bg-amber-400/70'
    : row.status === 'fail' ? 'before:bg-brand-500/70'
    : 'before:bg-ink-300/60';

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: easeExpo, delay }}
      className={`relative grid grid-cols-[36px_1fr_auto] items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/70 border border-ink-900/[0.04] before:absolute before:inset-y-2 before:left-0 before:w-[3px] before:rounded-r ${railTone}`}
    >
      <span className="font-mono text-[11px] text-ink-500 tabular-nums">{row.n}</span>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wider text-ink-400">{row.kind}</span>
          <span className={`w-1.5 h-1.5 rounded-full ${tone} shrink-0`} />
        </div>
        <div className="mt-0.5 text-[13px] text-ink-800 truncate">{row.label}</div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {row.version && (
          <span className="hidden sm:inline-flex text-[10.5px] font-medium text-ink-500 bg-ink-50 border border-ink-100 rounded-md px-1.5 py-0.5">
            {row.version}
          </span>
        )}
        <span className="font-mono text-[11.5px] text-ink-700 tabular-nums">{row.dur}</span>

        {/* Failure-only action set */}
        {row.status === 'fail' && (
          <div className="flex items-center gap-1 pl-2 ml-1 border-l border-ink-900/[0.06]">
            <StepActionButton tone="ink"     icon={<Camera   className="w-3.5 h-3.5" />} label="View screenshot" />
            <StepActionButton tone="ink"     icon={<FileText className="w-3.5 h-3.5" />} label="View logs" />
            <StepActionButton tone="brand"   icon={<Bug      className="w-3.5 h-3.5" />} label="Raise defect" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Testcases sidebar ─────────────────────────────────────────────────── */

const testcases = [
  { id: 'TC-10752', name: 'save issue · cart-3ds',     version: 'v1.2', status: 'pass' as const, steps: 21, active: false },
  { id: 'TC-10752', name: 'Webhook delivery · ledger', version: 'v1.0', status: 'fail' as const, steps: 14, active: true },
  { id: 'TC-10891', name: 'Refund · multi-tender',     version: 'v0.9', status: 'pass' as const, steps: 9,  active: false },
  { id: 'TC-10912', name: 'Idempotency · retries',     version: 'v1.0', status: 'warn' as const, steps: 11, active: false },
];

function TestcasesSidebar() {
  return (
    <div className="rounded-2xl bg-white/80 border border-ink-900/[0.06] overflow-hidden">
      <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-ink-900/[0.06]">
        <div className="flex items-center gap-2">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">Testcases</span>
          <span className="font-mono text-[11px] text-ink-700 bg-ink-50 border border-ink-100 rounded-md px-1.5 py-0.5">4</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink-600 bg-white border border-ink-900/[0.08] rounded-md px-2 py-1 hover:text-ink-900"
        >
          <Layers className="w-3 h-3" /> Group by
        </button>
      </div>

      <div className="p-2 space-y-1.5">
        {testcases.map((tc, i) => {
          const dot =
            tc.status === 'pass' ? 'bg-emerald-500'
            : tc.status === 'warn' ? 'bg-amber-500'
            : 'bg-brand-600';

          return (
            <motion.button
              key={i}
              type="button"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: easeExpo, delay: 0.1 + i * 0.05 }}
              className={`w-full text-left rounded-xl px-3 py-2.5 border transition-colors relative ${
                tc.active
                  ? 'bg-brand-50/70 border-brand-100'
                  : 'bg-white border-ink-900/[0.04] hover:bg-ink-50/60'
              }`}
            >
              {tc.active && (
                <span aria-hidden className="absolute inset-y-2 left-0 w-[3px] rounded-r bg-brand-600" />
              )}

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="grid place-items-center w-5 h-5 rounded-md bg-sky-50 text-sky-700 border border-sky-100 shrink-0">
                    <Globe className="w-3 h-3" />
                  </span>
                  <span className="font-mono text-[12px] text-ink-800 truncate">{tc.id}</span>
                </div>
                <span className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0`} />
              </div>

              <div className="mt-1 text-[12px] text-ink-600 truncate">{tc.name}</div>

              <div className="mt-1.5 flex items-center justify-between text-[10.5px]">
                <span className="font-mono text-ink-500">{tc.version}</span>
                <span className="text-ink-400">{tc.steps} steps</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ── The dashboard plate ───────────────────────────────────────────────── */

function DashboardPlate() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-8 sm:-inset-12 rounded-[44px] bg-brand-soft -z-10" />

      <div className="rounded-3xl bg-white border border-ink-900/[0.06] shadow-plate overflow-hidden">
        {/* App chrome */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-ink-900/[0.06] bg-white/80 backdrop-blur">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-ink-100 border border-ink-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink-100 border border-ink-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink-100 border border-ink-200" />
            </div>
            <span className="font-display text-[12.5px] tracking-tight text-ink-900">
              simplify<span className="text-brand-700">QA</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-ink-50 border border-ink-100 text-[11px] text-ink-600">
              Apollo Payments <ChevronRight className="w-3 h-3" />
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-ink-500">
              <Globe className="w-3 h-3" /> us-east · serial
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100 text-[11px] font-medium">
              <Sparkles className="w-3 h-3" /> AI
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
        </div>

        {/* Report title bar */}
        <div className="px-4 sm:px-6 pt-5 pb-3 bg-gradient-to-b from-surface-warm/60 to-transparent">
          <div className="flex items-center gap-1.5 text-[11px] text-ink-500">
            <span>Reports</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-mono text-ink-700">EX-36896</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-mono text-ink-700">SU-50336</span>
          </div>
          <div className="mt-2 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <h3 className="font-display text-[22px] sm:text-[26px] text-ink-900 tracking-tight">
                Card payments · regression
              </h3>
              <StatusPill tone="warn">
                <CircleDot className="w-3 h-3" /> 1 retriable
              </StatusPill>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-ink-900/[0.06] text-[11.5px] text-ink-500">
                <Search className="w-3 h-3" /> Filter steps
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-[11.5px] font-medium shadow-soft"
              >
                <Download className="w-3.5 h-3.5" /> PDF report
              </button>
            </div>
          </div>
        </div>

        {/* Summary cards row */}
        <div className="px-4 sm:px-6 pb-4 grid md:grid-cols-2 gap-3">
          {/* Testcase summary */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-2xl bg-white border border-ink-900/[0.06] p-4 sm:p-5"
          >
            <div className="flex items-center justify-between">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                Testcase summary
              </div>
              <StatusPill tone="pass"><CheckCircle2 className="w-3 h-3" /> Pass</StatusPill>
            </div>

            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[12px] text-ink-700 bg-ink-50 border border-ink-100 rounded-md px-1.5 py-0.5">TC-10752</span>
              <span className="text-[12px] text-ink-500">save issue · cart-3ds</span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <MetaChip tone="sky"     icon={<Globe          className="w-3 h-3" />} label="Web · Chrome 124" />
              <MetaChip tone="neutral" icon={<WindowsGlyph   className="w-3 h-3" />} label="Windows 11" />
              <MetaChip tone="brand"   icon={<Sparkles       className="w-3 h-3" />} label="Automation" />
            </div>

            <div className="mt-4 grid grid-cols-[1fr_auto] gap-4 items-center">
              <dl className="space-y-1.5 text-[11.5px]">
                <Row k="Start" v="11:57:42" />
                <Row k="End"   v="11:57:51" />
                <Row k="Took"  v="00:00:09" highlight />
                <Row k="By"    v="Maya R. · Chrome 124" />
              </dl>

              <SegmentedDonut
                gradId="donut-tc"
                segments={[
                  { value: 18, color: '#10b981' },
                  { value: 3,  color: '#e5e7eb' },
                ]}
                centerTop="21"
                centerBottom="steps"
              />
            </div>
          </motion.div>

          {/* Suite summary */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl bg-white border border-ink-900/[0.06] p-4 sm:p-5"
          >
            <div className="flex items-center justify-between">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                Suite summary
              </div>
              <StatusPill tone="fail"><XCircle className="w-3 h-3" /> 1 failure</StatusPill>
            </div>

            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[12px] text-ink-700 bg-ink-50 border border-ink-100 rounded-md px-1.5 py-0.5">SU-50336</span>
              <span className="text-[12px] text-ink-500">Serial · 12 testcases</span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <MetaChip tone="sky"     icon={<Globe        className="w-3 h-3" />} label="Web · Chrome 124" />
              <MetaChip tone="neutral" icon={<WindowsGlyph className="w-3 h-3" />} label="Windows 11" />
              <MetaChip tone="neutral" icon={<Layers      className="w-3 h-3" />} label="Local · Serial" />
            </div>

            <div className="mt-4 grid grid-cols-[1fr_auto] gap-4 items-center">
              <dl className="space-y-1.5 text-[11.5px]">
                <Row k="Start" v="11:03:56" />
                <Row k="End"   v="11:05:07" />
                <Row k="Took"  v="00:23:04" highlight />
                <Row k="By"    v="Maya R. · grid · 8 shards" />
              </dl>

              <SegmentedDonut
                gradId="donut-su"
                segments={[
                  { value: 11, color: '#10b981' },
                  { value: 1,  color: '#9A1525' },
                ]}
                centerTop="92%"
                centerBottom="pass rate"
              />
            </div>
          </motion.div>
        </div>

        {/* Re-executions strip */}
        <div className="mx-4 sm:mx-6 mb-4 rounded-xl border border-amber-200/70 bg-amber-50/70 px-3.5 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[12px] text-amber-800">
            <Activity className="w-3.5 h-3.5" />
            <span className="font-medium">18 re-executions · self-healed</span>
            <span className="hidden sm:inline text-amber-700/80">locators repaired in 4 functions, no human intervention</span>
          </div>
          <span className="text-[11px] font-semibold text-amber-800 inline-flex items-center gap-1">
            View timeline <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Testcases sidebar + Steps panel */}
        <div className="px-4 sm:px-6 pb-5 grid grid-cols-12 gap-3">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <TestcasesSidebar />
          </div>

          {/* Steps panel */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="rounded-2xl bg-white/80 border border-ink-900/[0.06] overflow-hidden">
              <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-ink-900/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">Steps</span>
                  <span className="font-mono text-[11px] text-ink-700 bg-ink-50 border border-ink-100 rounded-md px-1.5 py-0.5">21</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-ink-500">
                  <span className="hidden sm:inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 18 pass</span>
                  <span className="hidden sm:inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"   /> 2 warn</span>
                  <span className="hidden sm:inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-600"   /> 1 fail</span>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-ink-500 hover:text-ink-900 border border-ink-900/[0.08]"
                    aria-label="Expand"
                    title="Expand"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-2.5 space-y-1.5">
                {stepRows.map((r, i) => (
                  <StepRow key={r.n} row={r} delay={0.1 + i * 0.06} />
                ))}
                <div className="pt-1 text-center">
                  <span className="text-[11px] text-ink-500">+ 15 more steps · expand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating callout, Quality score */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeExpo, delay: 0.5 }}
        className="hidden lg:flex absolute -right-6 top-32 items-center gap-3 rounded-2xl bg-white border border-ink-900/[0.06] shadow-soft px-4 py-3"
      >
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
          <LineChart className="w-4 h-4" />
        </span>
        <div className="text-left">
          <div className="text-[10.5px] font-medium uppercase tracking-wider text-ink-500">Release readiness</div>
          <div className="font-display text-[20px] text-ink-900 leading-none">96<span className="text-ink-400">/100</span></div>
        </div>
      </motion.div>

      {/* Floating callout, Time saved */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeExpo, delay: 0.65 }}
        className="hidden lg:flex absolute -left-6 bottom-24 items-center gap-3 rounded-2xl bg-ink-900 text-white shadow-elevate px-4 py-3"
      >
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/10 text-white">
          <Clock className="w-4 h-4" />
        </span>
        <div className="text-left">
          <div className="text-[10.5px] font-medium uppercase tracking-wider text-white/60">Saved vs. manual</div>
          <div className="font-display text-[20px] leading-none">1h 42m</div>
        </div>
      </motion.div>
    </div>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-ink-500 uppercase tracking-wider text-[10px] font-medium">{k}</dt>
      <dd className={`font-mono tabular-nums ${highlight ? 'text-ink-900 font-semibold' : 'text-ink-700'}`}>{v}</dd>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────────── */

export default function ReportDashboard() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <GradientOrb className="-top-32 -left-20" color="brand" size={580} opacity={0.28} blur={120} />
        <GradientOrb className="bottom-0 -right-10" color="rose"  size={520} opacity={0.22} blur={120} />
      </div>

      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<LineChart className="w-3.5 h-3.5" />}>Test Execution Reports & Analytics</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
              Test execution reports, <span className="gradient-text">explained step by step</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] text-ink-500 max-w-2xl leading-relaxed">
              Drill from suite to individual test step in two clicks: pass/fail status,
              self-healing events, and root-cause hints for every run.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 sm:mt-14">
            <DashboardPlate />
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          {[
            { k: 'Time to triage', v: '↓ 68%',  d: 'Median, vs. legacy reporting stacks.' },
            { k: 'Self-healed',    v: '4 / 18', d: 'Locators auto-repaired this run.' },
            { k: 'Audit trail',    v: 'Always-on', d: 'Every assertion, retry, and screenshot, kept.' },
          ].map((p) => (
            <div key={p.k} className="rounded-2xl bg-white border border-ink-900/[0.06] p-4">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">{p.k}</div>
              <div className="mt-1 font-display text-2xl text-ink-900">{p.v}</div>
              <div className="mt-1 text-[12.5px] text-ink-500">{p.d}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
