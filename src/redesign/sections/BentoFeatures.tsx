'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, FileText, FlaskConical, GitBranch, LineChart, ListChecks, ShieldCheck, Sparkles, Terminal, Wand2, Workflow, Zap,
} from 'lucide-react';
import {
  Container, Eyebrow, Reveal, RevealGroup,
  fadeFromLeft, fadeFromRight, fadeFromBottom, subtleScale,
} from '../../design';
import { certs } from '../data/assets';

// Buttery hover for any bento card, spring lift, no CSS conflict with entrance transforms.
const cardHover = {
  whileHover: { y: -4 },
  transition: { type: 'spring' as const, stiffness: 240, damping: 22 },
};

// Tile copy from the team's approved website copy doc.
const smallTiles = [
  {
    label: 'SimplifyQA MCP',
    icon: <Terminal className="w-3.5 h-3.5" />,
    body: 'From your AI assistant (Claude, Cursor, VS Code, Windsurf, Codex, Devin), create, record and run tests on seven technologies, write custom methods and find out why a run failed. You review every recording before it is saved.',
    href: '/mcp',
  },
  {
    label: 'Self-healing',
    icon: <Wand2 className="w-3.5 h-3.5" />,
    body: 'Self-healing locators for web and iOS keep tests running when the UI changes; the fix is saved to the object repository.',
    extra: <HealMock />,
  },
  {
    label: 'Scroll',
    icon: <FileText className="w-3.5 h-3.5" />,
    body: 'A documentation workspace with live co-editing, version history and AI writing, plus live SimplifyQA test case and report blocks.',
    href: '/scroll',
  },
];

const cardBase =
  'relative rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-white';

export default function BentoFeatures() {
  return (
    <section id="platform" className="relative py-14 sm:py-20 bg-surface-soft">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
      <Container size="wide">
        <div>
          <Reveal>
            <Eyebrow icon={<Workflow className="w-3.5 h-3.5" />}>One platform · End-to-end ALM</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance xl:whitespace-nowrap">
              Every stage of quality, <span className="gradient-text">unified</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] text-ink-500 xl:whitespace-nowrap">
              SimplifyQA replaces a patchwork of tools with a single intelligent platform,
              built for the way enterprise QA actually ships software.
            </p>
          </Reveal>
        </div>


        <RevealGroup className="mt-14 grid grid-cols-12 gap-4 sm:gap-5" delay={0.11}>
          {/* AI Studio, big left card · gentle scale-in */}
          <motion.div
            variants={subtleScale}
            {...cardHover}
            className={`${cardBase} col-span-12 lg:col-span-7`}
          >
            <div aria-hidden className="absolute inset-0 bg-mesh opacity-60" />
            <div className="relative p-8 sm:p-10">
              <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
                <Sparkles className="w-3.5 h-3.5" /> AI built in
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl text-ink-900 max-w-md">
                Generate and explain tests in plain English.
              </h3>
              <p className="mt-3 text-[14.5px] text-ink-500 max-w-md leading-relaxed">
                Write with AI on stories, test cases and defects; test cases from a user story; Story
                Studio; AI DataGen for test data; ask the AI assistant why a run failed. Works with
                your own AI model keys.
              </p>

              <div className="mt-6 rounded-2xl glass-card p-4 max-w-md">
                <div className="text-[11px] font-medium uppercase tracking-wider text-ink-400">Prompt</div>
                <div className="mt-1 text-[13.5px] text-ink-800">
                  Generate edge-case tests for our 3DS authentication flow.
                </div>
                <div className="mt-3 text-[11px] font-medium uppercase tracking-wider text-ink-400">Generated</div>
                <ul className="mt-1 space-y-1.5 text-[13px] text-ink-700">
                  <li>· OTP timeout on slow networks</li>
                  <li>· Card issuer downgrade to fallback flow</li>
                  <li>· Duplicate authorization on retry</li>
                  <li>· Locale-specific decline messages</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Automation, right top · slides from right */}
          <motion.div
            variants={fadeFromRight}
            {...cardHover}
            className={`${cardBase} col-span-12 lg:col-span-5 p-8 sm:p-10 flex flex-col`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <Zap className="w-3.5 h-3.5" /> No-code automation
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink-900">
              No code. Eight technologies.
            </h3>
            <p className="mt-3 text-[14.5px] text-ink-500 leading-relaxed">
              About 370 no-code actions across eight technologies: Web, Android, iOS, Desktop, Mainframe, SAP, API and Database. Mix technologies in one test case.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Web', 'Android', 'iOS', 'Desktop', 'Mainframe', 'SAP', 'API', 'Database'].map((t) => (
                <span key={t} className="text-center text-[11.5px] font-medium text-ink-600 bg-ink-50 border border-ink-100 rounded-lg px-1.5 py-2">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ['8', 'technologies'],
                ['~370', 'no-code actions'],
                ['1', 'test case, many technologies'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-ink-50/70 border border-ink-100 px-3 py-2.5">
                  <div className="font-display text-lg text-ink-900 leading-none">{v}</div>
                  <div className="mt-1 text-[11px] text-ink-500 leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Test Management, middle row left · slides from left */}
          <motion.div
            variants={fadeFromLeft}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-4 p-7`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <FlaskConical className="w-3.5 h-3.5" /> Test management
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Plan, design, trace.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Manual and automated test cases in one place, with review and approval, links to user stories, and e-signature on manual runs.
            </p>
            <TraceabilityBars />
          </motion.div>

          {/* Defects, middle row center · rises from below */}
          <motion.div
            variants={fadeFromBottom}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-4 p-7`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <ListChecks className="w-3.5 h-3.5" /> Project management
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Plan, sprint, release.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Plan epics, features, user stories and tasks. Run sprints on the Sprint Board and My Board, plan releases and track defects, with two-way Jira and Azure DevOps sync.
            </p>
            <div className="mt-5 space-y-2">
              {[
                ['Wallets',              'Epic',   'bg-brand-50 text-brand-700 border-brand-100'],
                ['Token refresh on login', 'Story',  'bg-amber-50 text-amber-700 border-amber-100'],
                ['Checkout · retry race', 'Defect', 'bg-ink-50 text-ink-600 border-ink-200'],
              ].map(([label, sev, cls]) => (
                <div key={label} className="flex items-center justify-between text-[12.5px] text-ink-700">
                  <span className="truncate">{label}</span>
                  <span className={`px-2 py-0.5 rounded-full border text-[11px] font-medium ${cls}`}>{sev}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Insights, middle row right · slides from right */}
          <motion.div
            variants={fadeFromRight}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-12 lg:col-span-4 p-7`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <LineChart className="w-3.5 h-3.5" /> Reports and dashboards
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Quality, in real time.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Step-by-step execution reports with screenshots, PDF exports, and built-in dashboards with about 80 ready-made charts.
            </p>
            <MiniBars />
          </motion.div>

          {/* Release, bottom left · slides from left */}
          <motion.div
            variants={fadeFromLeft}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-6 p-8 flex flex-col`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <GitBranch className="w-3.5 h-3.5" /> Execution and scheduling
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Run anywhere, on any schedule.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Run on local or remote agents, cloud machines or Kubernetes. Schedule runs once, every few minutes, hourly, daily, weekly or monthly, or start them from CI through the REST API. Test mobile apps on BrowserStack, LambdaTest or Sauce Labs.
            </p>

            <div className="mt-6 rounded-2xl bg-ink-50/70 border border-ink-100 p-4">
              <div className="flex items-center justify-between gap-2 text-[11.5px] font-medium">
                {[
                  ['Build',   'bg-emerald-500'],
                  ['Test',    'bg-emerald-500'],
                  ['Run',     'bg-emerald-500'],
                  ['Re-run',  'bg-amber-500'],
                  ['Report',  'bg-ink-300'],
                ].map(([label, dot], i, arr) => (
                  <div key={label} className="flex items-center gap-2 flex-1 min-w-0">
                    <span className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0`} />
                    <span className="truncate text-ink-700">{label}</span>
                    {i < arr.length - 1 && (
                      <span className="hidden sm:block flex-1 h-px bg-ink-200" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-ink-500">
                <span>Release <span className="font-mono text-ink-700">v4.18.2</span></span>
                <span className="text-emerald-700 font-medium">Pass rate 96%</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 flex-wrap text-[11.5px] text-ink-500">
              <span className="font-medium text-ink-700">Start runs from:</span>
              {['Any CI via REST API', 'GitHub Actions'].map((b) => (
                <span key={b} className="bg-ink-50 border border-ink-100 rounded-full px-2.5 py-0.5">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Security, bottom right · slides from right */}
          <motion.div
            variants={fadeFromRight}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-6 p-8`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <ShieldCheck className="w-3.5 h-3.5" /> Enterprise
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Certified, compliant, and audit-ready.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              SaaS (global and India regions) or on-premise; SSO, roles and privileges, audit trail.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {certs.map((c) => (
                <div
                  key={c.name}
                  className="aspect-square flex items-center justify-center rounded-2xl bg-white border border-ink-900/[0.06] p-2.5"
                  title={c.name}
                >
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </motion.div>
          {smallTiles.map((t) => (
            <motion.div
              key={t.label}
              variants={fadeFromBottom}
              {...cardHover}
              className={`${cardBase} col-span-12 md:col-span-4 p-7 flex flex-col`}
            >
              <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
                {t.icon} {t.label}
              </div>
              <p className="mt-3 text-[13.5px] text-ink-500 leading-relaxed flex-1">{t.body}</p>
              {t.extra}
              {t.href && (
                <Link href={t.href} className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 hover:text-brand-800">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

// Illustrative only: a broken locator and its healed replacement.
function HealMock() {
  return (
    <div className="mt-4 rounded-xl bg-ink-50/70 border border-ink-100 p-3 font-mono text-[11.5px] space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-ink-400 line-through">#checkout</span>
        <span className="shrink-0 text-brand-700">not found</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-ink-800">text=Place order</span>
        <span className="shrink-0 text-emerald-700">healed</span>
      </div>
      <div className="pt-1.5 border-t border-ink-100 font-sans text-[11px] text-ink-500">
        Saved to object repository
      </div>
    </div>
  );
}

function TraceabilityBars() {
  const rows = [
    { l: 'EPIC-204 · Wallets', cov: 92 },
    { l: 'EPIC-218 · 3DS',     cov: 81 },
    { l: 'EPIC-231 · KYC',     cov: 68 },
  ];
  return (
    <div className="mt-5 space-y-2.5">
      {rows.map((r) => (
        <div key={r.l} className="text-[12px]">
          <div className="flex items-center justify-between text-ink-600">
            <span>{r.l}</span><span className="font-semibold text-ink-800">{r.cov}%</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-ink-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${r.cov}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniBars() {
  const vals = [42, 56, 38, 72, 60, 84, 92];
  return (
    <div className="mt-6 flex items-end gap-2 h-24">
      {vals.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${v}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 rounded-md bg-gradient-to-t from-brand-200 to-brand-600"
        />
      ))}
    </div>
  );
}
