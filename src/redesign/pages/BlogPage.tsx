'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, cn,
} from '../../design';
import type { PublicPost } from '../../lib/posts';

type Props = { posts: PublicPost[] };

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  } catch { return iso; }
}

export default function BlogPage({ posts }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)] as const;
  }, [posts]);

  const [cat, setCat] = useState<string>('All');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (!ql || p.title.toLowerCase().includes(ql) || p.excerpt.toLowerCase().includes(ql)),
    );
  }, [cat, q, posts]);

  const [hero, ...rest] = filtered;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Tag className="w-3.5 h-3.5" />}>The SimplifyQA blog</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Notes from the <span className="gradient-text">quality frontier</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[17px] text-ink-500 max-w-2xl">
                Engineering deep dives, product decisions, industry takes, and customer stories.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Controls */}
      <section className="relative pb-8">
        <Container size="wide">
          <div className="rounded-3xl glass-strong p-4 sm:p-5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
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
                placeholder="Search posts…"
                className="w-full lg:w-72 h-10 pl-9 pr-4 rounded-full bg-white border border-ink-900/[0.08] text-[14px] focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Hero post + grid */}
      <section className="relative pb-24 sm:pb-28">
        <Container size="wide">
          {hero ? (
            <Link href={`/blog/${hero.slug}`} className="block rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-white lift">
              <div className="grid lg:grid-cols-2 items-stretch">
                <div className="relative aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-brand-50 via-white to-brand-100">
                  <div aria-hidden className="absolute inset-0 bg-mesh opacity-80" />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-wider text-brand-700">
                    <span>{hero.category}</span>
                    <span className="text-ink-300">·</span>
                    <span className="text-ink-500 inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(hero.publishedAt)}</span>
                    <span className="text-ink-300">·</span>
                    <span className="text-ink-500 inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {hero.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink-900 tracking-tight text-balance">
                    {hero.title}
                  </h2>
                  <p className="mt-4 text-[15px] text-ink-500 leading-relaxed">{hero.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-brand-700">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="text-center py-16 text-ink-500">No posts match your search.</div>
          )}

          {/* Grid */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {rest.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/blog/${p.slug}`} className="block rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-white lift h-full">
                  <div className="aspect-[16/9] bg-gradient-to-br from-brand-50 via-white to-brand-100 relative">
                    <div aria-hidden className="absolute inset-0 bg-mesh opacity-70" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-wider text-brand-700">
                      <span>{p.category}</span>
                      <span className="text-ink-300">·</span>
                      <span className="text-ink-500 inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-[18px] text-ink-900 text-balance">{p.title}</h3>
                    <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{p.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
