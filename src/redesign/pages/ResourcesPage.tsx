'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight, BookOpen, Newspaper, Play, Rocket, Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import CTA from '../sections/CTA';

const tiles = [
  { icon: <BookOpen className="w-4 h-4" />,    t: 'Documentation', d: 'Setup, integrations, automation patterns.', tag: 'Docs', to: 'https://docs.simplifyqa.ai', external: true },
  { icon: <Newspaper className="w-4 h-4" />,   t: 'Blog',          d: 'Engineering deep dives, product updates, opinions.', tag: 'Reading', to: '/blog' },
  { icon: <Play className="w-4 h-4" />,        t: 'Demos',         d: 'Short clips of the SimplifyQA MCP and the platform.', tag: 'Video', to: '/demos' },
  { icon: <Rocket className="w-4 h-4" />,      t: "What's new",    d: 'Every SimplifyQA release in 2026, and what is coming next.', tag: 'Updates', to: '/whats-new' },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Resources</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Learn from teams who <span className="gradient-text">ship every day</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl mx-auto">
                Docs, demos, release notes and engineering deep dives,
                everything we've learned, built into one place.
              </p>
            </Reveal>
          </div>

        </Container>
      </section>

      {/* Category tiles */}
      <section className="relative py-14 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {tiles.map((t) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                      {t.icon}
                    </span>
                    <span className="text-[11.5px] font-medium uppercase tracking-wider text-ink-400">{t.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[20px] text-ink-900">{t.t}</h3>
                  <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{t.d}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-700">
                    Browse <ArrowRight className="w-3 h-3" />
                  </div>
                </>
              );
              const className = 'block rounded-3xl bg-white border border-ink-900/[0.06] p-7 lift';
              return (
                <motion.div key={t.t} variants={fadeUp}>
                  {t.to ? (
                    (t as { external?: boolean }).external ? (
                      <a href={t.to} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
                    ) : (
                      <Link href={t.to} className={className}>{inner}</Link>
                    )
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <CTA />
    </>
  );
}
