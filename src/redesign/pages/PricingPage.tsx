'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, ChevronDown, Database, Globe, HelpCircle, Monitor,
  ShieldCheck, Smartphone, Sparkles, Zap,
} from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp, cn,
} from '../../design';
import CTA from '../sections/CTA';

const almFeatures = [
  'Requirements Management',
  'Test Planning & Execution',
  'Requirements Traceability Matrix',
  'Custom Workflows & Automation',
  'Integrations (Jira, Azure DevOps, Git)',
  'Audit Trails & Compliance',
  'Test Case Management',
  'Defect Tracking & Management',
  'Real-time Collaboration',
  'Custom Reports & Dashboards',
  'Role-based Access Control',
  'SSO/SAML + audit logs',
];

type Addon = {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

const addons: Addon[] = [
  {
    name: 'Web Automation',
    price: '$299',
    icon: <Globe className="w-4 h-4" />,
    description: 'Cross-browser automation and visual regression testing.',
    features: [
      'Selenium & Playwright support',
      'Visual regression testing',
      'Cross-browser testing',
      'Responsive design testing',
      'Performance monitoring',
    ],
  },
  {
    name: 'API & Database Automation',
    price: '$349',
    icon: <Database className="w-4 h-4" />,
    description: 'Complete API testing and database validation suite.',
    features: [
      'REST & GraphQL testing',
      'API test automation',
      'Database validation',
      'Data-driven testing',
      'Schema verification',
    ],
  },
  {
    name: 'Desktop Automation',
    price: '$399',
    icon: <Monitor className="w-4 h-4" />,
    description: 'Native desktop application testing capabilities.',
    features: [
      'Windows / Mac / Linux support',
      'Native app automation',
      'UI element recognition',
      'Desktop performance testing',
      'Screenshot capture',
    ],
  },
  {
    name: 'Mobile Automation',
    price: '$449',
    icon: <Smartphone className="w-4 h-4" />,
    description: 'iOS and Android testing on real devices and simulators.',
    features: [
      'iOS & Android support',
      'Real device cloud',
      'Emulator / simulator testing',
      'Touch gesture testing',
      'Mobile performance testing',
    ],
  },
];

const faqs = [
  {
    q: 'What types of processes can you automate?',
    a: 'We specialize in automating end-to-end QA workflows — test management, test execution across web/mobile/API/desktop, defect triage, release gating, and reporting — using a mix of low-code automation and AI.',
  },
  {
    q: 'Do I need technical knowledge to use SimplifyQA?',
    a: 'Not for the core platform. Our team handles setup, integration, and migration. QA engineers can drive day-to-day usage; SDETs can drop into code-mode whenever needed.',
  },
  {
    q: 'Can you integrate with our existing tools?',
    a: 'Yes. SimplifyQA integrates natively with Jira, Azure DevOps, GitLab, GitHub, Slack, Microsoft Teams, Jenkins, BrowserStack, Sauce Labs, and 100+ more — tailored to your stack.',
  },
  {
    q: 'Is your platform secure and compliant?',
    a: 'Absolutely. SimplifyQA is SOC 2 Type II audited and ISO 27001 certified, with HIPAA- and GDPR-aligned workflows. Enterprise customers can choose single-tenant, VPC, or fully on-prem deployments.',
  },
  {
    q: 'What\'s included in the base ALM package vs. add-ons?',
    a: 'The ALM Package covers everything you need for end-to-end test management, defect tracking, and reporting. Automation add-ons (Web, API/DB, Desktop, Mobile) are activated only when your team needs that surface — pay only for what you use.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-8 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Pricing</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Simple, transparent <span className="gradient-text">pricing</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] leading-relaxed text-ink-500 max-w-2xl mx-auto">
                Start with the complete ALM package, then expand with automation
                add-ons as your team grows. Pay only for the surfaces you actually test.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ALM Package — main offering */}
      <section className="relative pb-12">
        <Container size="wide">
          <Reveal>
            <div className="relative rounded-[28px] overflow-hidden border border-brand-200 bg-white shadow-[0_24px_80px_-30px_rgba(185,29,45,0.35)]">
              <div aria-hidden className="absolute inset-0 bg-mesh opacity-80" />

              <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 p-8 sm:p-12">
                <div>
                  <span className="eyebrow"><Sparkles className="w-3.5 h-3.5" /> ALM Package</span>
                  <h2 className="mt-5 font-display text-3xl sm:text-4xl text-ink-900 tracking-tight text-balance">
                    Complete Application Lifecycle Management.
                  </h2>
                  <p className="mt-4 text-[15px] text-ink-500 max-w-xl leading-relaxed">
                    Test management, execution, requirements, defect tracking, traceability,
                    and analytics — everything you need to ship quality software, in one workspace.
                  </p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl">
                    {almFeatures.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                        <span className="grid place-items-center w-5 h-5 mt-px rounded-full bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="rounded-3xl bg-white/80 backdrop-blur border border-ink-900/[0.06] p-6">
                    <div className="text-[12px] font-semibold uppercase tracking-wider text-ink-400">Starting from</div>
                    <div className="mt-1 font-display text-4xl text-ink-900 tracking-tight">Talk to sales</div>
                    <p className="mt-2 text-[13px] text-ink-500">
                      Volume-based pricing tailored to your team size, deployment model, and compliance needs.
                    </p>

                    <Link href="/request-demo" className="btn-primary mt-6 w-full h-11">
                      Book a demo <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="btn-ghost mt-2 w-full h-11">
                      Talk to sales
                    </Link>

                    <div className="mt-5 pt-5 border-t border-ink-900/[0.06] text-[12.5px] text-ink-500 leading-relaxed">
                      Includes 14-day free pilot, migration support from Zephyr / TestRail / qTest, and white-glove onboarding for enterprise customers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Add-ons */}
      <section className="relative py-14 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Zap className="w-3.5 h-3.5" />}>Powerful add-ons</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Activate automation, only where you need it.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[16px] text-ink-500 max-w-2xl leading-relaxed">
                Per-surface pricing means you pay only for the automation domains your team
                actually tests. Add or remove modules at any time.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" delay={0.06}>
            {addons.map((a) => (
              <motion.div
                key={a.name}
                variants={fadeUp}
                className="group rounded-3xl bg-white border border-ink-900/[0.06] p-7 lift relative overflow-hidden"
              >
                <div aria-hidden className="absolute -top-20 -right-20 w-44 h-44 bg-brand-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100">
                    {a.icon}
                  </span>
                  <h3 className="mt-5 font-display text-[18px] text-ink-900">{a.name}</h3>
                  <p className="mt-1.5 text-[13px] text-ink-500 leading-relaxed">{a.description}</p>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-display text-2xl text-ink-900 tracking-tight">{a.price}</span>
                    <span className="text-[12px] text-ink-400">/ month</span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {a.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12.5px] text-ink-700">
                        <span className="grid place-items-center w-4 h-4 mt-px rounded-full bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </RevealGroup>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Zap className="w-4 h-4" />, t: '14-day free pilot',  d: 'On real workflows, no credit card.' },
              { icon: <ShieldCheck className="w-4 h-4" />, t: 'Enterprise security', d: 'SOC 2 · ISO 27001 · GDPR · HIPAA.' },
              { icon: <Sparkles className="w-4 h-4" />, t: 'Migration support', d: 'White-glove from Zephyr / TestRail / qTest.' },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-white border border-ink-900/[0.06] p-4 flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                  {v.icon}
                </span>
                <div>
                  <div className="text-[14px] font-semibold text-ink-900">{v.t}</div>
                  <div className="text-[12.5px] text-ink-500">{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-20 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <Reveal>
                <Eyebrow icon={<HelpCircle className="w-3.5 h-3.5" />}>FAQ</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                  Pricing questions, answered.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-[15px] text-ink-500">
                  Still on the fence? Talk to our solutions team —{' '}
                  <Link href="/contact" className="text-brand-700 font-medium hover:underline underline-offset-4">info@simplify3x.com</Link>
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-2">
              <RevealGroup className="space-y-2">
                {faqs.map((f) => (
                  <motion.div key={f.q} variants={fadeUp}>
                    <FaqRow q={f.q} a={f.a} />
                  </motion.div>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-ink-900/[0.06] bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-surface-soft transition-colors"
        aria-expanded={open}
      >
        <span className="text-[14.5px] font-semibold text-ink-900">{q}</span>
        <ChevronDown className={cn('w-4 h-4 text-ink-500 transition-transform shrink-0', open && 'rotate-180')} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-[14px] text-ink-500 leading-relaxed">{a}</div>
      </motion.div>
    </div>
  );
}
