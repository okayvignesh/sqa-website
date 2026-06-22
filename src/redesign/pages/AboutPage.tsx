'use client';

import { motion } from 'framer-motion';
import {
  Award, Building2, Compass, Globe2, Heart, MapPin, Sparkles, Target, Users,
} from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import { offices } from '../data/offices';
import CTA from '../sections/CTA';

const values = [
  { icon: <Target className="w-4 h-4" />, t: 'Quality is a product', d: 'We treat QA as a first-class engineering surface — not an afterthought bolt-on.' },
  { icon: <Sparkles className="w-4 h-4" />, t: 'AI that earns trust', d: 'Tuned, grounded, explainable. We ship AI features only when they hold up in production.' },
  { icon: <Heart className="w-4 h-4" />, t: 'Customers, not seats', d: 'Long-term partnerships beat short-term ARR. We measure success by your shipping velocity.' },
  { icon: <Compass className="w-4 h-4" />, t: 'Bias for clarity',     d: 'Plain language, opinionated defaults, and dashboards an executive can read at a glance.' },
];

const milestones = [
  { year: 'Origin',     t: 'Born from a QA practice', d: 'SimplifyQA started inside an enterprise QA practice — built by the people who lived the pain of every legacy ALM tool.' },
  { year: 'Platform',   t: 'Unified ALM',             d: 'Test management, automation, and reporting brought together in one workspace — replacing patchwork tool stacks.' },
  { year: 'Enterprise', t: 'Compliance & scale',      d: 'SOC 2, ISO 27001, GDPR, HIPAA — and the controls regulated industries require by default.' },
  { year: 'AI',         t: 'Quality-tuned AI Studio', d: 'A model tuned for QA workflows — test generation, self-healing automation, and explainable triage.' },
  { year: 'Today',      t: 'Global footprint',        d: 'Engineering and customer success across India, the US, and Malaysia, serving teams in 90+ countries.' },
];

export default function AboutPage() {
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
              <Eyebrow icon={<Building2 className="w-3.5 h-3.5" />}>About SimplifyQA</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                We're building the operating system for <span className="gradient-text">software quality</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] leading-relaxed text-ink-500 max-w-2xl">
                Enterprise QA is too important to be a patchwork of tools. SimplifyQA brings
                the entire lifecycle — planning, automation, AI, release, insights — into one
                intelligent, trustworthy platform.
              </p>
            </Reveal>
          </div>

          {/* Stat bar */}
          <Reveal delay={0.18}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ['1,200+', 'Customer teams'],
                ['90+',    'Countries deployed'],
                ['12B+',   'Tests executed'],
                ['99.99%', 'Platform uptime'],
              ].map(([v, k]) => (
                <div key={k} className="rounded-3xl bg-white border border-ink-900/[0.06] p-6 lift">
                  <div className="font-display text-3xl sm:text-4xl text-ink-900 tracking-tight">{v}</div>
                  <div className="mt-1 text-[13px] text-ink-500">{k}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="relative py-14 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Eyebrow>Our mission</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                  Make shipping confidently feel boring.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
                  Every release should feel routine. The platform you trust under the hood
                  shouldn't be the one that wakes you up at 2 AM. We're building the
                  infrastructure that takes the drama out of quality — so your team can ship
                  faster, with fewer surprises.
                </p>
              </Reveal>
            </div>
            <RevealGroup className="grid grid-cols-2 gap-3" delay={0.08}>
              {values.map((v) => (
                <motion.div
                  key={v.t}
                  variants={fadeUp}
                  className="rounded-2xl bg-white border border-ink-900/[0.06] p-5 lift"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                    {v.icon}
                  </span>
                  <div className="mt-3 text-[14px] font-semibold text-ink-900">{v.t}</div>
                  <p className="mt-1 text-[13px] text-ink-500 leading-relaxed">{v.d}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="relative py-16 sm:py-20 bg-white">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Award className="w-3.5 h-3.5" />}>Our journey</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                From idea to platform of record.
              </h2>
            </Reveal>
          </div>

          <ol className="mt-14 relative">
            <span aria-hidden className="hidden md:block absolute top-2 bottom-2 left-[88px] w-px bg-gradient-to-b from-transparent via-ink-900/15 to-transparent" />
            {milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-6"
              >
                <div className="font-display text-2xl text-brand-700">{m.year}</div>
                <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-5 lift">
                  <div className="text-[15px] font-semibold text-ink-900">{m.t}</div>
                  <div className="mt-1 text-[14px] text-ink-500 leading-relaxed">{m.d}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Offices */}
      <section id="offices" className="relative py-16 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Globe2 className="w-3.5 h-3.5" />}>Offices</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                A global team, on call where you are.
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid md:grid-cols-2 gap-4" delay={0.08}>
            {offices.map((o, i) => (
              <motion.div key={`${o.city}-${i}`} variants={fadeUp} className="rounded-3xl bg-white border border-ink-900/[0.06] p-6 lift">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12.5px] text-brand-700 font-semibold">
                    <MapPin className="w-3.5 h-3.5" /> {o.country}
                  </div>
                  {o.badge && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-1">
                      {o.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink-900">{o.city}</h3>
                <div className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{o.address}</div>
                <div className="mt-3 text-[13px] text-ink-700">
                  {o.phone}{o.hours ? <span className="text-ink-400"> · {o.hours}</span> : null}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Team note */}
      <section className="relative py-14 bg-white">
        <Container size="wide">
          <div className="rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-gradient-to-br from-white to-surface-warm p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100">
              <Users className="w-5 h-5" />
            </div>
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl sm:text-3xl text-ink-900">We’re hiring across engineering, AI, and CSM.</h3>
              <p className="mt-2 text-[15px] text-ink-500 leading-relaxed">
                If you care about quality engineering at the deepest level — and want to build
                the tools you wished you had — we'd love to talk.
              </p>
            </div>
            <a href="#" className="btn-primary ml-auto">See open roles</a>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
