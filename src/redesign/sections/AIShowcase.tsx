'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight, BrainCircuit, Database, History, Link2, MessageSquare, Mic,
  Paperclip, Plus, Sparkles, Wand2, X, Zap,
} from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, easeExpo, fadeUp,
} from '../../design';

const features = [
  {
    icon: <Wand2 className="w-4 h-4" />,
    title: 'From story to suite',
    body: 'Paste a user story; get acceptance criteria, edge cases, and an executable test suite in one pass.',
  },
  {
    icon: <BrainCircuit className="w-4 h-4" />,
    title: 'Self-healing automation',
    body: 'AI repairs broken selectors and adapts to UI drift, keeping suites green across releases.',
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: 'Ask anything, in plain English',
    body: '“Why did checkout fail in EU?”, get a real answer, with traces and the suspected cause.',
  },
];

export default function AIShowcase() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <GradientOrb className="-top-32 right-0"   color="brand" size={620} opacity={0.32} blur={120} />
        <GradientOrb className="bottom-0 -left-20" color="rose"  size={520} opacity={0.28} blur={120} />
      </div>

      <Container size="wide" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>AI Test Case Generator · Story Studio</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
              Turn user stories into test cases <span className="gradient-text">automatically</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-[18px] font-medium text-ink-700 max-w-xl">
              The AI co-pilot for quality engineering.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-500 max-w-xl">
              Tuned on quality data. Grounded in your real workflows. Built to ship, not to demo.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 space-y-3" delay={0.08}>
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl p-4 border border-ink-900/[0.06] bg-white lift"
              >
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                  {f.icon}
                </span>
                <div>
                  <div className="text-[14.5px] font-semibold text-ink-900">{f.title}</div>
                  <div className="mt-1 text-[13.5px] text-ink-500 leading-relaxed">{f.body}</div>
                </div>
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal delay={0.25}>
            <div className="mt-8">
              <Link href="/platform/ai-test-assistant" className="btn-primary">
                Explore Story Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ChatPanel />
        </Reveal>
      </Container>
    </section>
  );
}

/* ── Chat panel ───────────────────────────────────────────────────────── */

function ChatPanel() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-brand-soft -z-10" />

      <div className="rounded-3xl bg-white border border-ink-900/[0.06] shadow-plate overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ink-900/[0.06] bg-white/80 backdrop-blur">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="grid place-items-center w-7 h-7 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft shrink-0">
              <MessageSquare className="w-3.5 h-3.5" />
            </span>
            <div className="leading-tight min-w-0">
              <div className="font-display text-[13px] tracking-tight text-ink-900 truncate">New Chat Session</div>
              <div className="text-[10.5px] text-ink-500">Story Studio · payments-api</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-600 hover:bg-brand-700 text-white text-[11px] font-semibold"
            >
              <Plus className="w-3 h-3" /> New chat
            </button>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-ink-50 border border-ink-200 text-ink-700 text-[10.5px] font-mono">
              <Database className="w-3 h-3 text-ink-400" /> 42.0K
            </span>
            <button
              type="button"
              aria-label="History"
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-ink-500 hover:text-ink-900 border border-ink-200"
            >
              <History className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              aria-label="Close"
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-ink-500 hover:text-ink-900 border border-ink-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Conversation log */}
        <div className="px-4 py-5 space-y-3.5 bg-gradient-to-b from-white to-surface-warm/50 max-h-[460px] overflow-hidden">
          <AssistantBubble delay={0.05} time="11:27:30 AM">
            Generated: Verify file list displays with correct metadata for accessible user.
          </AssistantBubble>

          <AssistantBubble delay={0.18} time="11:27:30 AM">
            Generated: Verify unauthorized access is blocked for unauthenticated user.
          </AssistantBubble>

          <AssistantBubble delay={0.31} time="11:27:31 AM">
            Generated: Verify dynamic update of file list when a file is locked.
          </AssistantBubble>

          <AssistantBubble delay={0.44} time="11:27:36 AM">
            Generated: Verify the dynamic update of the file list when a new file is added to the Live library.
          </AssistantBubble>

          <StatusToast delay={0.58}>
            <span className="grid place-items-center w-4 h-4 rounded-md bg-emerald-100 text-emerald-700 shrink-0">
              <Zap className="w-2.5 h-2.5" />
            </span>
            <span><span className="font-semibold text-emerald-800">Generated 4 test cases successfully.</span> <span className="text-emerald-700/80">Linked to TC-10752 → TC-10755.</span></span>
          </StatusToast>

          <AssistantBubble delay={0.7} time="11:27:37 AM" subtle>
            Generating test cases…
          </AssistantBubble>

          <AssistantBubble delay={0.78} time="11:27:39 AM" subtle>
            Creating 4 test cases…
          </AssistantBubble>

          <TypingBubble delay={0.9} />
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-3 border-t border-ink-900/[0.06] bg-white">
          <div className="rounded-2xl border border-ink-200 bg-white px-3 py-2.5">
            <div className="flex items-start gap-2 text-[12.5px] text-ink-500">
              <MessageSquare className="w-3.5 h-3.5 mt-0.5 shrink-0 text-ink-400" />
              <span className="flex-1 truncate">What would you like to build today?</span>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[11px] text-ink-500">
                <span className="font-medium">Sources</span>
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-ink-100 text-ink-500 text-[9px] font-semibold">?</span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-5 h-5 rounded bg-brand-50 border border-brand-100 text-brand-700"
                  aria-label="Attach file"
                >
                  <Paperclip className="w-2.5 h-2.5" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Attach"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white border border-ink-200 text-ink-500 hover:text-ink-900"
                >
                  <Paperclip className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Link"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white border border-ink-200 text-ink-500 hover:text-ink-900"
                >
                  <Link2 className="w-3.5 h-3.5" />
                </button>

                <div className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider rounded-md overflow-hidden border border-ink-200">
                  <span className="bg-ink-900 text-white px-2 py-1">AUTO</span>
                  <span className="bg-white text-ink-500 px-2 py-1">MAX</span>
                </div>

                <button
                  type="button"
                  aria-label="Record"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-brand-600 hover:bg-brand-700 text-white"
                >
                  <Mic className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating callout, generation toast */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeExpo, delay: 0.6 }}
        className="hidden lg:flex absolute -right-5 -top-5 items-center gap-2.5 rounded-2xl bg-ink-900 text-white shadow-elevate px-3.5 py-2.5"
      >
        <span className="grid place-items-center w-8 h-8 rounded-xl bg-white/10">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-white/60">Generated</div>
          <div className="font-display text-[15px]">4 test cases · 1.4s</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Bubbles ──────────────────────────────────────────────────────────── */

function AssistantBubble({
  children, delay, time, subtle,
}: { children: React.ReactNode; delay: number; time: string; subtle?: boolean }) {
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
      <div className={`max-w-[88%] rounded-2xl rounded-tl-md px-3.5 py-2.5 border ${
        subtle
          ? 'bg-white/70 border-ink-200/70 text-ink-500'
          : 'bg-white border-ink-200 text-ink-800 shadow-soft'
      }`}>
        <div className="text-[10.5px] font-mono text-ink-400">Jun 22, 2026 · {time}</div>
        <div className="mt-1 text-[13px] leading-relaxed">{children}</div>
      </div>
    </motion.div>
  );
}

function StatusToast({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: easeExpo }}
      className="flex items-start gap-2 rounded-xl border border-emerald-200/70 bg-emerald-50/80 px-3 py-2 text-[12px] text-emerald-800"
    >
      {children}
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
    >
      <span className="grid place-items-center w-7 h-7 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
        <Sparkles className="w-3.5 h-3.5" />
      </span>
      <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-white border border-ink-200 px-3.5 py-3 shadow-soft">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-ink-300"
            animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
