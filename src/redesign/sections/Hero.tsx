'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight, Bot, Cpu, FlaskConical, GitBranch, LineChart, Sparkles,
} from 'lucide-react';
import { Container, Eyebrow } from '../../design';
import InteractiveDotGrid from '../components/InteractiveDotGrid';
import { BookDemoButton } from '../CalendlyModal';
import VideoSlot from '../components/VideoSlot';

const lifecycleChips = [
  { icon: <FlaskConical className="w-3.5 h-3.5" />, label: 'Plan' },
  { icon: <Cpu className="w-3.5 h-3.5" />,           label: 'Automate' },
  { icon: <Bot className="w-3.5 h-3.5" />,           label: 'AI-assist' },
  { icon: <GitBranch className="w-3.5 h-3.5" />,     label: 'Release' },
  { icon: <LineChart className="w-3.5 h-3.5" />,     label: 'Insights' },
];

export default function Hero() {
  return (
    <section className="relative isolate pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Background system, plain white. The cursor orb is the only accent. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <InteractiveDotGrid />
      </div>

      <Container size="wide" className="relative">
        {/* Hero text */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />} className="uppercase">
              Plan · Automate · Test · Release
            </Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-6 font-display text-display-lg leading-[1.12] pb-[0.06em] text-ink-900 text-balance"
          >
            From idea to production.
            <br className="hidden sm:block" /> AI drives every step.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-ink-500 max-w-2xl mx-auto text-pretty"
          >
            SimplifyQA unifies the entire quality lifecycle in one AI-augmented workspace. Plan and
            trace tests, generate cases with AI, automate across web, mobile, API, desktop, SAP, and
            mainframe, triage defects, orchestrate releases, and report in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <BookDemoButton className="btn-primary h-12 px-6 text-[15px]">
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </BookDemoButton>
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
          <VideoSlot id="hero" />
        </motion.div>
      </Container>
    </section>
  );
}
