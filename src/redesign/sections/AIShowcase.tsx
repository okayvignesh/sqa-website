'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, MessageSquare, Sparkles, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp } from '../../design';

const features = [
  {
    icon: <Wand2 className="w-4 h-4" />,
    title: 'Generate from requirements',
    body: 'Paste a user story; get a full test suite — happy path, edge cases, and negative paths.',
  },
  {
    icon: <BrainCircuit className="w-4 h-4" />,
    title: 'Self-healing automation',
    body: 'AI repairs broken selectors and adapts to UI drift, keeping suites green across releases.',
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: 'Ask anything, in plain English',
    body: '“Why did checkout fail in EU?” — get a real answer, with traces and the suspected cause.',
  },
];

export default function AIShowcase() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <GradientOrb className="-top-32 right-0" color="brand" size={620} opacity={0.32} blur={120} />
        <GradientOrb className="bottom-0 -left-20" color="rose" size={520} opacity={0.28} blur={120} />
      </div>

      <Container size="wide" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>SimplifyQA AI Studio</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
              The AI co-pilot for <span className="gradient-text">quality engineering</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-500 max-w-xl">
              Tuned on quality data. Grounded in your real workflows. Built to ship — not to demo.
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
                Explore AI Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Visual: chat-like AI assistant */}
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-brand-soft -z-10" />
            <div className="rounded-3xl glass-strong shadow-plate overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-ink-900/[0.06] bg-white/70">
                <div className="flex items-center gap-2 text-[12.5px] font-semibold text-ink-800">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  AI Studio · payments-api
                </div>
                <span className="text-[11.5px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Online</span>
              </div>

              <div className="p-5 space-y-4 bg-gradient-to-b from-white to-surface-warm">
                <ChatBubble who="you" delay={0}>
                  Generate negative-path tests for our refund API. Cover idempotency and retries.
                </ChatBubble>

                <ChatBubble who="ai" delay={0.25}>
                  <div className="text-[13.5px]">Found <b>14</b> candidate scenarios. I’ll draft 6 high-impact ones first:</div>
                  <ul className="mt-2 space-y-1.5 text-[13px] text-ink-700">
                    <li>· Refund issued twice on retried webhook</li>
                    <li>· Partial refund exceeding original amount</li>
                    <li>· Refund on settled charge after cutover</li>
                    <li>· Idempotency-key collision across regions</li>
                    <li>· Stale auth on long-running batch refunds</li>
                    <li>· Currency mismatch on multi-tender orders</li>
                  </ul>
                  <div className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-brand-700">
                    Add to suite <ArrowRight className="w-3 h-3" />
                  </div>
                </ChatBubble>

                <ChatBubble who="you" delay={0.5}>
                  Why did <i>refund/webhook</i> flake yesterday?
                </ChatBubble>

                <ChatBubble who="ai" delay={0.7}>
                  Root cause: <b>5xx</b> from upstream issuer at 14:02 UTC. Two retries hit a 2s timeout. Suggested fix: bump retry budget to 5s and add a <span className="font-mono text-[12.5px]">jitter</span> backoff. <span className="text-brand-700 font-semibold">Patch ready.</span>
                </ChatBubble>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ChatBubble({
  who, children, delay,
}: { who: 'you' | 'ai'; children: React.ReactNode; delay: number }) {
  const isAI = who === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${isAI ? '' : 'justify-end'}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed ${
          isAI
            ? 'bg-white border border-brand-100 text-ink-800 shadow-soft'
            : 'bg-ink-900 text-white shadow-soft'
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}
