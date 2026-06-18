'use client';

import { motion } from 'framer-motion';
import {
  Bot, FlaskConical, GitBranch, LineChart, ShieldCheck, Sparkles, Workflow, Zap,
} from 'lucide-react';
import {
  Container, Eyebrow, Reveal, RevealGroup,
  fadeFromLeft, fadeFromRight, fadeFromBottom, subtleScale,
} from '../../design';
import { certs } from '../data/assets';

// Buttery hover for any bento card — spring lift, no CSS conflict with entrance transforms.
const cardHover = {
  whileHover: { y: -4 },
  transition: { type: 'spring' as const, stiffness: 240, damping: 22 },
};

const cardBase =
  'relative rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-white';

export default function BentoFeatures() {
  return (
    <section id="platform" className="relative py-24 sm:py-32 bg-surface-soft">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<Workflow className="w-3.5 h-3.5" />}>One platform · End-to-end ALM</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
              Every stage of quality, <span className="gradient-text">unified</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] text-ink-500 max-w-2xl">
              SimplifyQA replaces a patchwork of tools with a single intelligent platform —
              built for the way enterprise QA actually ships software.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-12 gap-4 sm:gap-5" delay={0.11}>
          {/* AI Studio — big left card · gentle scale-in */}
          <motion.div
            variants={subtleScale}
            {...cardHover}
            className={`${cardBase} col-span-12 lg:col-span-7`}
          >
            <div aria-hidden className="absolute inset-0 bg-mesh opacity-60" />
            <div className="relative p-8 sm:p-10">
              <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
                <Sparkles className="w-3.5 h-3.5" /> AI Test Assistant
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl text-ink-900 max-w-md">
                Generate, repair, and explain tests in plain English.
              </h3>
              <p className="mt-3 text-[14.5px] text-ink-500 max-w-md leading-relaxed">
                Built on a quality-tuned model. Turn user stories into test cases, auto-heal
                broken locators, and ask “why did this fail?” — get a real answer.
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

          {/* Automation — right top · slides from right */}
          <motion.div
            variants={fadeFromRight}
            {...cardHover}
            className={`${cardBase} col-span-12 lg:col-span-5 p-8 sm:p-10`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <Zap className="w-3.5 h-3.5" /> Test Automation
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink-900">
              Low-code automation, enterprise scale.
            </h3>
            <p className="mt-3 text-[14.5px] text-ink-500 leading-relaxed">
              Author once, run anywhere — web, mobile, API, mainframe, SAP, Salesforce, Siebel. Parallel grids with self-healing locators.
            </p>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {['Web', 'Mobile', 'API', 'SAP', 'Salesforce', 'Mainframe', 'Desktop', 'DB'].map((t) => (
                <span key={t} className="text-center text-[11.5px] font-medium text-ink-600 bg-ink-50 border border-ink-100 rounded-lg px-1.5 py-2">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Test Management — middle row left · slides from left */}
          <motion.div
            variants={fadeFromLeft}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-4 p-7`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <FlaskConical className="w-3.5 h-3.5" /> Test Management
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Plan, design, trace.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Requirements, suites, cycles, and traceability — natively linked to your tickets and code.
            </p>
            <TraceabilityBars />
          </motion.div>

          {/* Defects — middle row center · rises from below */}
          <motion.div
            variants={fadeFromBottom}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-4 p-7`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <Bot className="w-3.5 h-3.5" /> Defect Intelligence
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Smart triage on autopilot.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Clustering, severity scoring, and root-cause hints. Detect flakes before they cost a release.
            </p>
            <div className="mt-5 space-y-2">
              {[
                ['Auth · token refresh', 'Critical', 'bg-brand-50 text-brand-700 border-brand-100'],
                ['Checkout · retry race', 'Major',    'bg-amber-50 text-amber-700 border-amber-100'],
                ['Refunds · webhook',    'Flake',     'bg-ink-50 text-ink-600 border-ink-200'],
              ].map(([label, sev, cls]) => (
                <div key={label} className="flex items-center justify-between text-[12.5px] text-ink-700">
                  <span className="truncate">{label}</span>
                  <span className={`px-2 py-0.5 rounded-full border text-[11px] font-medium ${cls}`}>{sev}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Insights — middle row right · slides from right */}
          <motion.div
            variants={fadeFromRight}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-12 lg:col-span-4 p-7`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <LineChart className="w-3.5 h-3.5" /> Insights & Reports
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Quality, in real time.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Executive dashboards, release readiness scoring, and predictive risk — straight from your test data.
            </p>
            <MiniBars />
          </motion.div>

          {/* Release — bottom left · slides from left */}
          <motion.div
            variants={fadeFromLeft}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-6 p-8`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <GitBranch className="w-3.5 h-3.5" /> Release Orchestration
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Gate every release with quality.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Pipelines, environments, approvals, and quality gates — connected to Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.
            </p>
          </motion.div>

          {/* Security — bottom right · slides from right */}
          <motion.div
            variants={fadeFromRight}
            {...cardHover}
            className={`${cardBase} col-span-12 md:col-span-6 lg:col-span-6 p-8`}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
              <ShieldCheck className="w-3.5 h-3.5" /> Enterprise Security
            </div>
            <h3 className="mt-3 font-display text-xl text-ink-900">Certified, compliant, and audit-ready.</h3>
            <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
              Built for regulated environments. Single tenant, on-prem, or VPC — your choice.
            </p>
            <div className="mt-6 grid grid-cols-4 gap-3">
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
            <div className="mt-4 flex items-center gap-2 flex-wrap text-[11.5px] text-ink-500">
              <span className="font-medium text-ink-700">Also:</span>
              {['SSO/SAML', 'SCIM', 'RBAC', 'Audit logs', 'BYOK'].map((b) => (
                <span key={b} className="bg-ink-50 border border-ink-100 rounded-full px-2.5 py-0.5">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </RevealGroup>
      </Container>
    </section>
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
