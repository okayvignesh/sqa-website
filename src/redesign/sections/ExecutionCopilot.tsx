'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle, Camera, CircleDot, Clock, CornerDownLeft, Crosshair, Database,
  ExternalLink, FileSearch, FileText, MessageSquare, RotateCcw, Send, Shuffle,
  Sparkles, Timer, Video, Wifi, Wrench,
} from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup,
  easeExpo, fadeUp,
} from '../../design';

/* -- Static content ------------------------------------------------------- */

const capabilities = [
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: 'Ask in plain language',
    body: 'Query execution data across suites, runs, and releases. No query syntax, no dashboards to build.',
  },
  {
    icon: <Crosshair className="w-4 h-4" />,
    title: 'Pinpoint the exact step',
    body: 'The failing test case and step, the precise reason, then the correlated evidence behind it.',
  },
  {
    icon: <RotateCcw className="w-4 h-4" />,
    title: 'Failed tests re-run',
    body: 'Failed tests re-run automatically, and failed runs log defects for you.',
  },
  {
    icon: <Wrench className="w-4 h-4" />,
    title: 'Fix, not just diagnose',
    body: 'Suggested fixes with links to the test case, logs, screenshots, and session video.',
  },
  {
    icon: <FileSearch className="w-4 h-4" />,
    title: 'Beyond failures',
    body: 'Ask about any defect, requirement, or release, not only the runs that went red.',
  },
  {
    icon: <Database className="w-4 h-4" />,
    title: 'No extra setup',
    body: 'Works over the execution data SimplifyQA already stores, with nothing new to instrument.',
  },
];

/* -- Chat mockup ---------------------------------------------------------- */

function ChatPanel() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-brand-soft -z-10" />

      <div className="rounded-3xl bg-white border border-ink-900/[0.06] shadow-plate overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ink-900/[0.06] bg-white/80 backdrop-blur">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="grid place-items-center w-7 h-7 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div className="leading-tight min-w-0">
              <div className="font-display text-[13px] tracking-tight text-ink-900 truncate">SimplifyQA Chatbot</div>
              <div className="text-[10.5px] text-ink-500 truncate">AI assistant · your AI provider</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-ink-50 border border-ink-200 text-ink-700 text-[10.5px] font-mono">
              <Database className="w-3 h-3 text-ink-400" /> run #4821
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10.5px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
        </div>

        {/* Conversation log */}
        <div className="px-4 py-5 space-y-3.5 bg-gradient-to-b from-white to-surface-warm/50">
          <UserBubble delay={0.05}>Why did the Checkout suite fail in last night&apos;s run?</UserBubble>

          <AssistantBubble delay={0.18}>
            I checked run #4821. The Checkout suite finished at 96%, with one failure.
          </AssistantBubble>

          <RootCauseCard delay={0.3} />

          <AssistantBubble delay={0.72}>
            Want the test case or the step screenshot next?
          </AssistantBubble>

          <TypingBubble delay={0.86} />
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-3 border-t border-ink-900/[0.06] bg-white">
          <div className="rounded-2xl border border-ink-200 bg-white px-3 py-2.5 focus-within:border-brand-300 transition-colors">
            <div className="flex items-start gap-2 text-[12.5px] text-ink-500">
              <MessageSquare className="w-3.5 h-3.5 mt-0.5 shrink-0 text-ink-400" />
              <span className="flex-1 truncate">Ask about any run, suite, defect, or release</span>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[11px] text-ink-500">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-50 border border-brand-100 text-brand-700 font-medium">
                  <Sparkles className="w-2.5 h-2.5" /> Grounded in your data
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="hidden sm:inline-flex items-center gap-1 text-[10.5px] text-ink-400 font-mono">
                  <CornerDownLeft className="w-3 h-3" /> send
                </span>
                <button
                  type="button"
                  aria-label="Send message"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-brand-600 hover:bg-brand-700 text-white shadow-soft"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating callout, time saved */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeExpo, delay: 0.7 }}
        className="hidden lg:flex absolute -right-5 -top-5 items-center gap-3 rounded-2xl bg-ink-900 text-white shadow-elevate px-4 py-3"
      >
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/10">
          <Timer className="w-4 h-4" />
        </span>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-white/60">Run #4821</div>
          <div className="font-display text-[17px]">1 failure <span className="text-white/50 font-sans text-[11px]">explained</span></div>
        </div>
      </motion.div>

      {/* Floating callout, defect logged */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeExpo, delay: 0.82 }}
        className="hidden lg:flex absolute -left-6 bottom-16 items-center gap-2.5 rounded-2xl bg-white border border-ink-900/[0.06] shadow-soft px-3.5 py-2.5"
      >
        <span className="grid place-items-center w-8 h-8 rounded-xl bg-amber-50 text-amber-700 border border-amber-100">
          <Shuffle className="w-3.5 h-3.5" />
        </span>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-ink-400">Defect</div>
          <div className="text-[12.5px] font-semibold text-ink-900">Logged from the failed run</div>
        </div>
      </motion.div>
    </div>
  );
}

/* -- Bubbles -------------------------------------------------------------- */

function UserBubble({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: easeExpo }}
      className="flex items-start gap-2.5 justify-end"
    >
      <div className="max-w-[86%] rounded-2xl rounded-tr-md px-3.5 py-2.5 bg-ink-900 text-white text-[13px] leading-relaxed shadow-soft">
        <div className="text-[10.5px] font-mono text-white/70">11:07:02 PM</div>
        <div className="mt-1">{children}</div>
      </div>
      <span className="grid place-items-center w-7 h-7 rounded-xl bg-ink-100 text-ink-600 border border-ink-200 shrink-0 text-[11px] font-semibold">
        MR
      </span>
    </motion.div>
  );
}

function AssistantBubble({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: easeExpo }}
      className="flex items-start gap-2.5"
    >
      <span className="grid place-items-center w-7 h-7 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
        <Sparkles className="w-3.5 h-3.5" />
      </span>
      <div className="max-w-[88%] rounded-2xl rounded-tl-md px-3.5 py-2.5 bg-white border border-ink-200 text-ink-800 shadow-soft">
        <div className="text-[10.5px] font-mono text-ink-400">Chatbot · 11:07:03 PM</div>
        <div className="mt-1 text-[13px] leading-relaxed">{children}</div>
      </div>
    </motion.div>
  );
}

function EvidenceChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-ink-200 bg-white text-[10.5px] font-medium text-ink-600">
      <span className="text-ink-400">{icon}</span>
      {label}
    </span>
  );
}

function RootCauseCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: easeExpo }}
      className="ml-[38px] rounded-2xl border border-brand-100 bg-brand-50/50 overflow-hidden"
    >
      {/* Card header */}
      <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-b border-brand-100/70 bg-white/60">
        <div className="flex items-center gap-2 min-w-0">
          <span className="grid place-items-center w-6 h-6 rounded-lg bg-brand-600 text-white shrink-0">
            <AlertTriangle className="w-3.5 h-3.5" />
          </span>
          <h3 className="text-[12.5px] font-semibold text-ink-900 truncate">Why it failed</h3>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-brand-200 bg-white text-brand-700 text-[10.5px] font-medium shrink-0">
          <CircleDot className="w-2.5 h-2.5" /> Failed
        </span>
      </div>

      <div className="p-3.5 space-y-3">
        {/* Failing test case + step */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] text-ink-700 bg-white border border-ink-200 rounded-md px-1.5 py-0.5">TC-10752</span>
            <span className="text-[12.5px] font-medium text-ink-800">Webhook delivery · ledger sync</span>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-[11px] text-ink-500">
            <span className="font-mono">Step 1.6 · Assert ledger sync</span>
            <span className="w-1 h-1 rounded-full bg-ink-300" />
            <span>3 retries · 9.4s</span>
          </div>
        </div>

        {/* The reason */}
        <div className="rounded-xl bg-white border border-ink-900/[0.06] p-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-500">The reason</div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-ink-700">
            The ledger service returned <span className="font-mono text-brand-700">503</span> three times on{' '}
            <span className="font-mono text-ink-800">POST /v1/ledger/sync</span>. The retry budget was exhausted
            before reconciliation completed.
          </p>
        </div>

        {/* Correlated evidence */}
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-500">Evidence</div>
          <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
            <EvidenceChip icon={<Camera className="w-3 h-3" />} label="Screenshot" />
            <EvidenceChip icon={<FileText className="w-3 h-3" />} label="Console" />
            <EvidenceChip icon={<Wifi className="w-3 h-3" />} label="Network 503" />
            <EvidenceChip icon={<Video className="w-3 h-3" />} label="Video" />
            <EvidenceChip icon={<Timer className="w-3 h-3" />} label="Trace" />
          </div>
        </div>

        {/* Suggested fix */}
        <div className="rounded-xl bg-emerald-50/70 border border-emerald-200/70 p-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-800">
            <Wrench className="w-3 h-3" /> Suggested fix
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-emerald-900/90">
            The <span className="font-mono">status</span> field is now required by webhook v2. Update the request
            schema and add exponential backoff to the retry.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-wrap pt-0.5">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-[11.5px] font-semibold shadow-soft"
          >
            <FileText className="w-3.5 h-3.5" /> View report
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ink-900/[0.08] text-ink-700 hover:text-ink-900 text-[11.5px] font-medium"
          >
            <ExternalLink className="w-3.5 h-3.5" /> View test case
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ink-900/[0.08] text-ink-700 hover:text-ink-900 text-[11.5px] font-medium"
          >
            <FileText className="w-3.5 h-3.5" /> Open logs
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function TypingBubble({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2.5"
      aria-label="Chatbot is typing"
    >
      <span className="grid place-items-center w-7 h-7 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
        <Sparkles className="w-3.5 h-3.5" />
      </span>
      <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-white border border-ink-200 px-3.5 py-3 shadow-soft">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="w-1.5 h-1.5 rounded-full bg-ink-300"
            animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* -- Section -------------------------------------------------------------- */

export default function ExecutionCopilot() {
  return (
    <section
      aria-labelledby="execution-copilot-heading"
      className="relative py-14 sm:py-20 bg-surface-soft overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <GradientOrb className="-top-32 right-0" color="brand" size={600} opacity={0.3} blur={120} />
        <GradientOrb className="bottom-0 -left-20" color="rose" size={520} opacity={0.24} blur={120} />
      </div>

      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>SimplifyQA Chatbot</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="execution-copilot-heading"
              className="mt-5 font-display text-display-lg text-ink-900 text-balance"
            >
              Ask the AI assistant <span className="gradient-text">why a run failed</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] text-ink-500 max-w-2xl leading-relaxed">
              The assistant reads the execution data SimplifyQA already stores, then answers in plain language: the
              failing test case and step, the reason, and the evidence behind it. It runs on the AI provider you choose.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-12 gap-8 lg:gap-10 items-start">
          <Reveal delay={0.15} className="col-span-12 lg:col-span-7">
            <ChatPanel />
          </Reveal>

          <RevealGroup
            className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
            delay={0.1}
          >
            {capabilities.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl p-4 border border-ink-900/[0.06] bg-white lift"
              >
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                  {c.icon}
                </span>
                <div>
                  <div className="text-[14.5px] font-semibold text-ink-900">{c.title}</div>
                  <div className="mt-1 text-[13.5px] text-ink-500 leading-relaxed">{c.body}</div>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        {/* Supporting strip */}
        <Reveal delay={0.2}>
          <div className="mt-6 rounded-2xl border border-ink-900/[0.06] bg-white px-4 py-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-600">
              <Clock className="w-3.5 h-3.5 text-ink-400" /> Answers in plain language
            </span>
            <span aria-hidden className="hidden sm:block w-px h-4 bg-ink-200" />
            <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-600">
              <Shuffle className="w-3.5 h-3.5 text-ink-400" /> Failed tests re-run automatically
            </span>
            <span aria-hidden className="hidden sm:block w-px h-4 bg-ink-200" />
            <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-600">
              <Database className="w-3.5 h-3.5 text-ink-400" /> Runs on data you already store
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
