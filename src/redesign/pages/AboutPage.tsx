'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  Bot, Code2, Compass, Cpu, FileText, Globe2, Heart, Layers, MapPin,
  Puzzle, Server, ShieldCheck, Sparkles, Target, Wand2, Wrench, Zap,
} from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import { offices } from '../data/offices';
import CTA from '../sections/CTA';

const BrandGlobe = dynamic(() => import('../components/BrandGlobe'), {
  ssr: false,
  loading: () => (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      <div
        aria-hidden
        className="absolute inset-8 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(185,29,45,0.22), transparent 75%)',
        }}
      />
    </div>
  ),
});

const values = [
  { icon: <Target className="w-4 h-4" />, t: 'Quality is a product', d: 'We treat QA as a first-class engineering surface, not an afterthought bolt-on.' },
  { icon: <Sparkles className="w-4 h-4" />, t: 'AI that earns trust', d: 'Tuned, grounded, explainable. We ship AI features only when they hold up in production.' },
  { icon: <Heart className="w-4 h-4" />, t: 'Customers, not seats', d: 'Long-term partnerships beat short-term ARR. We measure success by your shipping velocity.' },
  { icon: <Compass className="w-4 h-4" />, t: 'Bias for clarity',     d: 'Plain language, opinionated defaults, and dashboards an executive can read at a glance.' },
];

type Reason = {
  pain: { icon: React.ReactNode; title: string; body: string };
  win: {
    icon: React.ReactNode;
    title: string;
    body: string;
    proof: { icon: React.ReactNode; label: string; sub?: string }[];
  };
};

const reasons: Reason[] = [
  {
    pain: {
      icon: <FileText className="w-5 h-5" />,
      title: 'The creation bottleneck',
      body: '80% of testing time is lost on prep work: parsing BRDs, building dummy data, and manually translating requirements into scripts.',
    },
    win: {
      icon: <Bot className="w-5 h-5" />,
      title: 'Agentic AI workforce',
      body: 'Stop writing. Start delegating. Agents ingest your raw assets and build QA artifacts autonomously.',
      proof: [
        { icon: <Wand2 className="w-3.5 h-3.5" />, label: 'Architect Agent', sub: 'Reads BRDs, Figma & videos to draft strategies.' },
        { icon: <Cpu className="w-3.5 h-3.5" />,   label: 'Builder Agent',   sub: 'Generates synthetic data and scripts instantly.' },
        { icon: <Wrench className="w-3.5 h-3.5" />,label: 'Healer Agent',    sub: 'Detects failures and self-corrects scripts.' },
      ],
    },
  },
  {
    pain: {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Dependent on code',
      body: 'Traditional frameworks like Selenium require heavy coding, creating a maintenance nightmare for teams without a bench of SDETs.',
    },
    win: {
      icon: <Zap className="w-5 h-5" />,
      title: 'Zero-code automation',
      body: 'A keyword-driven engine and smart recorder let anyone build complex scenarios in minutes, code-mode still available for SDETs.',
      proof: [
        { icon: <Zap className="w-3.5 h-3.5" />, label: '80% faster test creation' },
        { icon: <Zap className="w-3.5 h-3.5" />, label: 'Human-readable keywords' },
        { icon: <Zap className="w-3.5 h-3.5" />, label: 'Self-healing locators, out of the box' },
      ],
    },
  },
  {
    pain: {
      icon: <Puzzle className="w-5 h-5" />,
      title: 'Fragmented tools',
      body: 'Jira for bugs, Excel for planning, Jenkins for builds, TestRail for cases. Every jump between tools creates a fresh data silo.',
    },
    win: {
      icon: <Layers className="w-5 h-5" />,
      title: 'Unified lifecycle',
      body: 'Test management, automation, defect tracking, release gates, and reporting, all in one platform. Stop paying for six seats per engineer.',
      proof: [
        { icon: <Layers className="w-3.5 h-3.5" />, label: 'One workspace' },
        { icon: <Layers className="w-3.5 h-3.5" />, label: 'Native traceability, requirement to release' },
        { icon: <Layers className="w-3.5 h-3.5" />, label: 'One data model, one report' },
      ],
    },
  },
  {
    pain: {
      icon: <Server className="w-5 h-5" />,
      title: 'Limited coverage',
      body: 'Most tools specialize in just one surface. You end up with one for web, another for mobile, and manual effort for legacy systems.',
    },
    win: {
      icon: <Globe2 className="w-5 h-5" />,
      title: 'Any device, any app',
      body: 'From legacy mainframes to modern web, mobile, API, SAP, Salesforce and Siebel, automate journeys that span your entire tech stack.',
      proof: [
        { icon: <Globe2 className="w-3.5 h-3.5" />, label: 'Web · Mobile · API · Desktop' },
        { icon: <Globe2 className="w-3.5 h-3.5" />, label: 'SAP · Salesforce · Siebel' },
        { icon: <Globe2 className="w-3.5 h-3.5" />, label: 'Mainframe & terminal apps' },
      ],
    },
  },
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
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow icon={<ShieldCheck className="w-3.5 h-3.5" />}>Why SimplifyQA</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-display-lg leading-[1.12] pb-[0.06em] text-ink-900 text-balance">
                  The QA platform enterprise teams pick when <span className="gradient-text">legacy tools stop keeping up</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[18px] leading-relaxed text-ink-500">
                  Four reasons teams switch from patchwork ALM stacks to SimplifyQA: agentic AI
                  that writes tests for you, zero-code automation, a truly unified lifecycle, and
                  coverage across every surface your team ships to.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <BrandGlobe />
            </Reveal>
          </div>

          {/* Stat bar */}
          <Reveal delay={0.22}>
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

      {/* Four reasons: pain -> solution */}
      <section className="relative py-16 sm:py-24 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Four reasons teams switch</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                What legacy ALM gets wrong, and how SimplifyQA fixes it.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 space-y-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.win.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-[1fr_1.35fr] gap-4 lg:gap-0 items-stretch"
              >
                {/* Pain (muted, secondary) */}
                <div className="rounded-3xl lg:rounded-r-none border border-ink-900/[0.06] bg-white/70 p-7 lg:p-8 flex flex-col">
                  <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-ink-100 text-ink-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    Instead of
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-100 text-ink-500 shrink-0">
                      {r.pain.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-[18px] text-ink-700 leading-snug">
                        {r.pain.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">
                        {r.pain.body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Win (brand, primary) */}
                <div className="relative rounded-3xl lg:rounded-l-none bg-white border border-brand-100 lg:border-l-0 p-7 lg:p-8 shadow-[0_18px_50px_-24px_rgba(185,29,45,0.30)] overflow-hidden">
                  <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 w-[280px] h-[280px] rounded-full bg-brand-soft opacity-70" />
                  <div className="relative">
                    <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                      <span className="grid place-items-center w-6 h-6 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                        <Sparkles className="w-3 h-3" />
                      </span>
                      With SimplifyQA
                    </div>
                    <div className="mt-5 flex items-start gap-3">
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                        {r.win.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-[20px] sm:text-[22px] text-ink-900 leading-snug">
                          {r.win.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] text-ink-600 leading-relaxed">
                          {r.win.body}
                        </p>
                      </div>
                    </div>

                    {r.win.proof.length > 0 && (
                      <ul className="mt-6 pt-5 border-t border-ink-900/[0.06] grid sm:grid-cols-1 gap-2.5">
                        {r.win.proof.map((p) => (
                          <li key={p.label} className="flex items-start gap-2.5">
                            <span className="grid place-items-center w-5 h-5 mt-px rounded-md bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                              {p.icon}
                            </span>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-medium text-ink-800 leading-tight">{p.label}</div>
                              {p.sub && (
                                <div className="text-[12.5px] text-ink-500 leading-snug mt-0.5">{p.sub}</div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="relative py-14 sm:py-20 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Eyebrow>What we believe</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                  Make shipping confidently feel boring.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
                  Every release should feel routine. The platform you trust under the hood
                  shouldn't be the one that wakes you up at 2 AM. We build the infrastructure
                  that takes the drama out of quality, so your team can ship faster with fewer
                  surprises.
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

      <CTA />
    </>
  );
}
