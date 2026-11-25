'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Container, Eyebrow, Reveal, RevealGroup, fadeUp } from '../../design';
import { releases } from '../pages/WhatsNewPage';

// The three latest releases; the full list lives on /whats-new.
export default function WhatsNew() {
  return (
    <section className="relative py-14 sm:py-20 bg-surface-soft">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Reveal><Eyebrow icon={<Rocket className="w-3.5 h-3.5" />}>What's new</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900">Latest releases</h2>
            </Reveal>
          </div>
          <Link href="/whats-new" className="inline-flex items-center gap-1 text-[14px] font-semibold text-brand-700 hover:gap-2 transition-all">
            All releases <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <RevealGroup className="mt-10 grid md:grid-cols-3 gap-4 sm:gap-5">
          {releases.slice(0, 3).map((r) => (
            <motion.div key={r.v} variants={fadeUp} className="rounded-3xl bg-white border border-ink-900/[0.06] p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[20px] text-ink-900">SimplifyQA {r.v}</h3>
                <span className="text-[12.5px] text-ink-400">{r.m} 2026</span>
              </div>
              <ul className="mt-4 space-y-1.5 text-[14px] text-ink-600">
                {r.items.map((i) => <li key={i}>· {i}</li>)}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
