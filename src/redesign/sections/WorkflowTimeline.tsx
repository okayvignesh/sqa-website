'use client';

import { motion } from 'framer-motion';
import { BarChart3, Bot, FlaskConical, GitBranch, Sparkles, Workflow, Zap } from 'lucide-react';
import { Container, Eyebrow, Reveal } from '../../design';

const stages = [
  { icon: <FlaskConical className="w-4 h-4" />, label: 'Plan',     desc: 'Requirements → suites → cycles, with native traceability.' },
  { icon: <Sparkles className="w-4 h-4" />,    label: 'Design',   desc: 'AI generates test cases from user stories and code diffs.' },
  { icon: <Zap className="w-4 h-4" />,         label: 'Automate', desc: 'Author once; run across web, mobile, API and enterprise apps.' },
  { icon: <Workflow className="w-4 h-4" />,    label: 'Execute',  desc: 'Parallel grids, self-healing, and intelligent re-runs.' },
  { icon: <Bot className="w-4 h-4" />,         label: 'Triage',   desc: 'AI clusters defects, scores severity, and suggests fixes.' },
  { icon: <GitBranch className="w-4 h-4" />,   label: 'Release',  desc: 'Quality gates connected to your CI/CD and approval flows.' },
  { icon: <BarChart3 className="w-4 h-4" />,   label: 'Report',   desc: 'Live dashboards, KPIs, and exec-ready release readiness.' },
];

export default function WorkflowTimeline() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface-warm overflow-hidden">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<Workflow className="w-3.5 h-3.5" />}>The QA lifecycle</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
              From idea to release, in <span className="gradient-text">one continuous flow</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] text-ink-500 max-w-2xl">
              No more stitching tools together. SimplifyQA covers every stage — and the AI hand-offs in between.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Connecting rail */}
          <div aria-hidden className="hidden md:block absolute left-0 right-0 top-[44px] h-px">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-ink-900/15 to-transparent" />
          </div>

          <ol className="grid grid-cols-2 md:grid-cols-7 gap-x-4 gap-y-10">
            {stages.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative grid place-items-center w-[88px] h-[88px] rounded-2xl glass-card">
                  <span aria-hidden className="absolute inset-0 rounded-2xl bg-brand-soft opacity-80" />
                  <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-white border border-brand-100 text-brand-700 shadow-soft">
                    {s.icon}
                  </span>
                  <span
                    aria-hidden
                    className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink-900 text-white text-[10px] font-semibold"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <div className="mt-4 font-display text-[15px] font-semibold text-ink-900">{s.label}</div>
                <div className="mt-1.5 text-[12.5px] text-ink-500 leading-relaxed max-w-[180px]">{s.desc}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
