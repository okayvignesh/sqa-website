'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase, Heart, MapPin, Sparkles, Code, Bot, Megaphone, Users, ArrowRight,
} from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import CTA from '../sections/CTA';

const values = [
  { icon: <Sparkles className="w-4 h-4" />, t: 'Ship like you mean it', d: 'We move quickly because we trust each other. Decisions get made; work gets done.' },
  { icon: <Bot className="w-4 h-4" />,      t: 'AI that earns trust',    d: 'We build AI features only when they hold up in real production workflows.' },
  { icon: <Heart className="w-4 h-4" />,    t: 'Customers, not seats',   d: 'Long-term partnerships beat short-term ARR. We measure success by shipping velocity.' },
  { icon: <Users className="w-4 h-4" />,    t: 'Bring your whole self',  d: 'Remote-friendly across three time zones. Quiet hours protected. Family-aware schedules.' },
];

const teams = [
  { icon: <Code className="w-4 h-4" />,      name: 'Engineering',  desc: 'Distributed systems, automation runtimes, and the AI Studio platform.' },
  { icon: <Bot className="w-4 h-4" />,       name: 'AI / ML',      desc: 'Quality-tuned models, retrieval, evals, and on-device inference.' },
  { icon: <Users className="w-4 h-4" />,     name: 'Customer Success', desc: 'Onboarding, enablement, and white-glove implementations at enterprise scale.' },
  { icon: <Megaphone className="w-4 h-4" />, name: 'Go-to-market', desc: 'Sales, partnerships, marketing, and developer relations.' },
];

export default function CareersPage() {
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
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Briefcase className="w-3.5 h-3.5" />}>Careers</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Build the quality platform <span className="gradient-text">you wished you had</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl leading-relaxed">
                We're growing across engineering, AI, customer success, and go-to-market.
                If you care about quality engineering at the deepest level — we'd love to talk.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary h-12 px-6 text-[15px]">
                  Send us your CV <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:info@simplify3x.com" className="btn-ghost h-12 px-6 text-[15px]">
                  info@simplify3x.com
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative py-14 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">What we care about.</h2>
            </Reveal>
          </div>
          <RevealGroup className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4" delay={0.06}>
            {values.map((v) => (
              <motion.div key={v.t} variants={fadeUp} className="rounded-3xl bg-white border border-ink-900/[0.06] p-6 lift">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  {v.icon}
                </span>
                <div className="mt-4 text-[14.5px] font-semibold text-ink-900">{v.t}</div>
                <p className="mt-1.5 text-[13px] text-ink-500 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative py-16 sm:py-20 bg-white">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Briefcase className="w-3.5 h-3.5" />}>Teams</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">Where we're hiring.</h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid md:grid-cols-2 gap-4" delay={0.06}>
            {teams.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="rounded-3xl bg-white border border-ink-900/[0.06] p-7 lift">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                  {t.icon}
                </span>
                <h3 className="mt-4 font-display text-[20px] text-ink-900">{t.name}</h3>
                <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </RevealGroup>

          <div className="mt-14 rounded-3xl bg-surface-soft border border-ink-900/[0.06] p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl text-ink-900">Don't see your role?</h3>
              <p className="mt-2 text-[15px] text-ink-500 leading-relaxed">
                We're always interested in talking to extraordinary people. Send a CV and a note about
                what kind of work you'd want to do here.
              </p>
            </div>
            <a href="mailto:info@simplify3x.com" className="btn-primary">
              Reach out <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="relative py-14 bg-surface-soft">
        <Container size="wide">
          <div className="flex items-center gap-2 text-[12.5px] text-brand-700 font-semibold">
            <MapPin className="w-3.5 h-3.5" /> Where we are
          </div>
          <h3 className="mt-3 font-display text-2xl text-ink-900">Bengaluru · Orlando · Kuala Lumpur</h3>
          <p className="mt-2 text-[14px] text-ink-500 max-w-2xl">
            Remote-friendly across our office hubs. See <Link href="/contact" className="text-brand-700 font-medium underline underline-offset-4">contact</Link> for office addresses.
          </p>
        </Container>
      </section>

      <CTA />
    </>
  );
}
