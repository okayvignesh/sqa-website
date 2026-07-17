'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight, BookOpen, Calendar, FileText, GraduationCap, Mic, Newspaper, Play, Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import CTA from '../sections/CTA';

const featured = {
  type: 'Webinar',
  title: 'The 2026 State of QA: AI, automation, and the new release cadence',
  desc: 'A 45-minute briefing with our Chief QA Architect and three Fortune 100 quality leaders.',
  date: 'Live · April 10',
  icon: <Mic className="w-3.5 h-3.5" />,
};

const tiles = [
  { icon: <BookOpen className="w-4 h-4" />,    t: 'Documentation', d: 'Setup, integrations, automation patterns.', tag: 'Docs' },
  { icon: <GraduationCap className="w-4 h-4" />, t: 'Academy',       d: 'Free certification tracks for QA engineers.', tag: 'Training' },
  { icon: <FileText className="w-4 h-4" />,    t: 'Whitepapers',   d: 'Deep dives on test automation ROI and AI in QA.', tag: 'Reading' },
  { icon: <Mic className="w-4 h-4" />,         t: 'Webinars',      d: 'Live sessions with quality leaders. Replays available.', tag: 'Events' },
  { icon: <Newspaper className="w-4 h-4" />,   t: 'Blog',          d: 'Engineering deep dives, product updates, opinions.', tag: 'Reading', to: '/blog' },
  { icon: <Play className="w-4 h-4" />,        t: 'Video library', d: 'Product tours, customer stories, technical talks.', tag: 'Video' },
];

const upcoming = [
  { date: 'Apr 10', title: 'The 2026 State of QA',     speaker: 'CQA · 3 Fortune 100 leaders' },
  { date: 'Apr 24', title: 'Self-healing automation, in practice', speaker: 'Eng. Director, SimplifyQA' },
  { date: 'May 08', title: 'AI test generation: what works, what doesn’t', speaker: 'Head of AI Studio' },
];

const reads = [
  { tag: 'Whitepaper', title: 'Replacing fragile UI scripts with intent-based automation', read: '12 min read' },
  { tag: 'Engineering', title: 'How we built quality-tuned LLMs for the SimplifyQA AI Studio', read: '9 min read' },
  { tag: 'Customer story', title: 'How Carelon cut regression cycles by 78% in 90 days', read: '6 min read' },
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
                Docs, webinars, whitepapers, customer stories, and engineering deep dives,
                everything we've learned, built into one place.
              </p>
            </Reveal>
          </div>

          {/* Featured webinar */}
          <Reveal delay={0.18}>
            <div className="mt-14 rounded-3xl overflow-hidden border border-ink-900/[0.06] relative">
              <div aria-hidden className="absolute inset-0 bg-mesh opacity-80" />
              <div className="relative p-8 sm:p-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
                <div>
                  <span className="eyebrow">{featured.icon} Featured · {featured.type}</span>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink-900 tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-[15px] text-ink-500 max-w-xl">{featured.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-ink-700">
                    <Calendar className="w-3.5 h-3.5 text-brand-700" /> {featured.date}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <button className="btn-primary">Save my seat <ArrowRight className="w-4 h-4" /></button>
                    <button className="btn-ghost">Watch trailer</button>
                  </div>
                </div>
                <div className="rounded-2xl glass-strong p-1.5 shadow-plate">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-ink-900 to-ink-700 grid place-items-center">
                    <span className="grid place-items-center w-14 h-14 rounded-full bg-white/90 text-ink-900 animate-pulse-ring">
                      <Play className="w-5 h-5 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Category tiles */}
      <section className="relative py-14 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
                    <Link href={t.to} className={className}>{inner}</Link>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Upcoming + reading */}
      <section className="relative py-16 sm:py-20 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <Reveal>
                <Eyebrow icon={<Mic className="w-3.5 h-3.5" />}>Upcoming webinars</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900">Live sessions</h2>
              </Reveal>
              <div className="mt-8 space-y-3">
                {upcoming.map((u) => (
                  <div key={u.title} className="rounded-2xl border border-ink-900/[0.06] bg-white p-5 lift flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[12.5px] font-semibold text-brand-700">{u.date}</div>
                      <div className="mt-1 text-[14.5px] font-semibold text-ink-900">{u.title}</div>
                      <div className="text-[12.5px] text-ink-500">{u.speaker}</div>
                    </div>
                    <button className="btn-ghost h-9 px-4 text-[12.5px]">Register</button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <Eyebrow icon={<BookOpen className="w-3.5 h-3.5" />}>Worth reading</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900">From the library</h2>
              </Reveal>
              <div className="mt-8 space-y-3">
                {reads.map((r) => (
                  <Link key={r.title} href="/blog" className="block rounded-2xl border border-ink-900/[0.06] bg-white p-5 lift">
                    <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-700">{r.tag}</div>
                    <div className="mt-1 text-[14.5px] font-semibold text-ink-900">{r.title}</div>
                    <div className="text-[12.5px] text-ink-500">{r.read}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
