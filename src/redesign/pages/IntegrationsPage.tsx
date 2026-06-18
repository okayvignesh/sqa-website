'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plug, Search } from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, cn,
} from '../../design';
import { integrations, integrationCategories, type IntegrationCategory } from '../data/integrations';
import CTA from '../sections/CTA';

const CATEGORIES = ['All', ...integrationCategories] as const;
type Cat = typeof CATEGORIES[number];

export default function IntegrationsPage() {
  const [cat, setCat] = useState<Cat>('All');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return integrations.filter((t) => {
      const matchesCat = cat === 'All' || t.category === (cat as IntegrationCategory);
      const matchesQ = !ql || t.name.toLowerCase().includes(ql);
      return matchesCat && matchesQ;
    });
  }, [cat, q]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-40 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <Eyebrow icon={<Plug className="w-3.5 h-3.5" />}>Integrations</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Connects to <span className="gradient-text">everything you ship with</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl mx-auto leading-relaxed">
                Deep, two-way integrations across project management, source control,
                CI/CD, chat, cloud, identity, and test grids. Drop SimplifyQA into your
                stack — not the other way around.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Filter + grid */}
      <section className="relative pb-24 sm:pb-28">
        <Container size="wide">
          {/* Controls */}
          <div className="rounded-3xl glass-strong p-4 sm:p-5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    'h-9 px-4 rounded-full text-[13px] font-medium transition-all',
                    cat === c
                      ? 'bg-ink-900 text-white shadow-soft'
                      : 'text-ink-600 hover:text-ink-900 bg-white border border-ink-900/[0.06] hover:border-ink-900/15',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search integrations…"
                className="w-full lg:w-72 h-10 pl-9 pr-4 rounded-full bg-white border border-ink-900/[0.08] text-[14px] text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-300"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filtered.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 12) * 0.025, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white border border-ink-900/[0.06] p-5 lift"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="max-h-14 max-w-[70%] object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="mt-3 text-[13.5px] font-semibold text-ink-900 text-center">{t.name}</div>
                <div className="mt-1 text-[11.5px] text-ink-400 text-center">{t.category}</div>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16 text-ink-500">
                Nothing matches “{q}”. <Link href="/contact" className="text-brand-700 font-medium">Request an integration →</Link>
              </div>
            )}
          </div>

          {/* Bottom panel */}
          <div className="mt-14 rounded-3xl bg-surface-soft border border-ink-900/[0.06] p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl text-ink-900">Need something custom?</h3>
              <p className="mt-2 text-[15px] text-ink-500 leading-relaxed">
                Open API, webhooks, and a CLI for whatever isn't on the list yet. Enterprise
                customers get white-glove integration work as part of onboarding.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">Talk to solutions <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/resources" className="btn-ghost">Read API docs</Link>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
