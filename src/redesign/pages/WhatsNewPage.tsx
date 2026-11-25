'use client';

import { Rocket, Sparkles } from 'lucide-react';
import { Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp } from '../../design';
import { motion } from 'framer-motion';
import CTA from '../sections/CTA';

// Source: the team's release summary for 2026. Add new releases at the top.
const releases = [
  { v: '6.10', m: 'November',  items: ['SimplifyQA MCP', 'Schedules every few minutes', 'Bulk step actions', 'SimplifyQA Scroll'] },
  { v: '6.9',  m: 'October',   items: ['Suite canvas view', 'Copy and paste of steps', 'Richer IF and FOR conditions', 'One-click screenshots and signatures in manual runs'] },
  { v: '6.8',  m: 'September', items: ['Local parallel suite runs', 'Device-cloud, emulator and simulator runs from plans and pipelines', 'Richer completion emails'] },
  { v: '6.7',  m: 'August',    items: ['Re-run history in execution plans', 'Redesigned cloud machines', 'Mac on-premise server', 'Installer auto-update'] },
  { v: '6.6',  m: 'July',      items: ['Automatic re-run of failed tests', 'Custom export and report layouts', 'Test data export by iteration'] },
  { v: '6.5',  m: 'July',      items: ['Stronger roles and privileges', 'Browser auto-update', 'Android screen video', 'Shadow DOM support'] },
  { v: '6.4',  m: 'June',      items: ['Sign-in and signature to finish manual runs', 'Cloud mobile inspector', 'Platform override for hybrid tests'] },
  { v: '6.3',  m: 'May',       items: ['Execution plans on cloud and remote machines with a live view', 'LambdaTest', 'Safari'] },
  { v: '6.2',  m: 'April',     items: ['17 new dashboard charts', 'Bulk review', 'Pause in manual runs', 'Cloud devices without a local agent'] },
  { v: '6.1',  m: 'March',     items: ['E-signature on manual execution', 'New dashboards', 'GitHub Actions', 'Faster UI'] },
];

const comingSoon = [
  'AI-assisted Jira and Azure DevOps set-up, the revamped Azure DevOps integration, and copying integration settings across projects',
  'Project templates and licence management',
  'Scroll: version management, document import, review with e-signature, controlled export',
  'Playwright inside SimplifyQA',
  'An AI agent for chat and coding help',
  'Execution engine and pipeline improvements',
  'SimplifyQA MCP listings in AI marketplaces',
];

export default function WhatsNewPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Rocket className="w-3.5 h-3.5" />}>What's new</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Ten releases <span className="gradient-text">this year</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl leading-relaxed">
                What shipped in SimplifyQA in 2026, newest first, and what is coming next.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container size="wide">
          <RevealGroup className="relative border-l border-ink-900/10 ml-2 space-y-8">
            {releases.map((r) => (
              <motion.div key={r.v} variants={fadeUp} className="relative pl-8">
                <span aria-hidden className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-600" />
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-2xl text-ink-900">SimplifyQA {r.v}</h2>
                  <span className="text-[13px] text-ink-400">{r.m} 2026</span>
                </div>
                <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-[15px] text-ink-600">
                  {r.items.map((i) => <li key={i}>· {i}</li>)}
                </ul>
              </motion.div>
            ))}
          </RevealGroup>

          <div className="mt-16 rounded-3xl glass-card p-8 sm:p-10">
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Coming soon</Eyebrow>
            <ul className="mt-5 space-y-2 text-[15px] text-ink-600">
              {comingSoon.map((c) => <li key={c}>· {c}</li>)}
            </ul>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
