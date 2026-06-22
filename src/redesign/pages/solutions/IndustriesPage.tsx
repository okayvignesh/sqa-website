'use client';

import { motion } from 'framer-motion';
import {
  Banknote, HeartPulse, Plane, ShoppingBag, Building2, Globe2, Stethoscope, Truck, GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../../design';
import CTA from '../../sections/CTA';

const industries = [
  {
    icon: <Banknote className="w-5 h-5" />,
    name: 'Financial Services',
    desc: 'Regulator-grade traceability, audit trails, and segregation-of-duties baked into every workflow.',
    chips: ['SOC 2', 'PCI DSS', 'Audit logs', 'Mainframe support'],
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    name: 'Healthcare',
    desc: 'HIPAA-compliant deployments with PHI controls, retention policies, and validated workflows.',
    chips: ['HIPAA', 'GxP', 'BYOK', 'On-prem'],
  },
  {
    icon: <Plane className="w-5 h-5" />,
    name: 'Aviation & Travel',
    desc: 'High-throughput automation across booking, loyalty, and ops systems — proven at airline scale.',
    chips: ['SAP', 'Mainframe', 'Salesforce', 'Real device clouds'],
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    name: 'Retail & E-commerce',
    desc: 'Peak-day readiness testing, omnichannel coverage, and POS / payment integrations.',
    chips: ['Peak load', 'Omnichannel', 'POS', 'Payments'],
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    name: 'Insurance',
    desc: 'Regulator-aligned QA across underwriting, claims, and policy admin systems.',
    chips: ['Audit-ready', 'Legacy systems', 'Workflow gates'],
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    name: 'Telecom',
    desc: 'BSS / OSS integration testing, customer journey automation, and network-aware QA.',
    chips: ['Siebel', 'OSS/BSS', 'Throughput at scale'],
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    name: 'Life Sciences',
    desc: 'GxP-validated workflows, e-signatures, and 21 CFR Part 11 traceability.',
    chips: ['GxP', '21 CFR Part 11', 'E-signatures'],
  },
  {
    icon: <Truck className="w-5 h-5" />,
    name: 'Logistics',
    desc: 'Mainframe + API + mobile testing for shipping, warehousing, and last-mile flows.',
    chips: ['Mainframe', 'EDI', 'Mobile', 'API'],
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    name: 'EdTech',
    desc: 'High-velocity release cadence support and accessibility compliance testing.',
    chips: ['WCAG', 'Velocity', 'Mobile-first'],
  },
];

export default function IndustriesPage() {
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
              <Eyebrow icon={<Building2 className="w-3.5 h-3.5" />}>Industries</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Battle-tested across <span className="gradient-text">regulated industries</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl leading-relaxed">
                SimplifyQA powers QA teams in financial services, healthcare, aviation, retail,
                telecom, and beyond — with the controls each industry requires.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative py-14 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" delay={0.06}>
            {industries.map((ind) => (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                className="group rounded-3xl bg-white border border-ink-900/[0.06] p-7 lift relative overflow-hidden"
              >
                <div aria-hidden className="absolute -top-20 -right-20 w-44 h-44 bg-brand-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100">
                    {ind.icon}
                  </span>
                  <h3 className="mt-5 font-display text-[20px] text-ink-900">{ind.name}</h3>
                  <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{ind.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {ind.chips.map((c) => (
                      <span key={c} className="text-[11.5px] font-medium text-ink-700 bg-ink-50 border border-ink-100 rounded-full px-2.5 py-1">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative py-14 bg-white">
        <Container size="wide">
          <div className="rounded-3xl bg-surface-soft border border-ink-900/[0.06] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl sm:text-3xl text-ink-900">Don't see your industry?</h3>
              <p className="mt-3 text-[15px] text-ink-500 leading-relaxed">
                We work with teams across many more — including manufacturing, energy, public
                sector, and SaaS. Talk to us about your specific compliance and integration
                requirements.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">Talk to solutions</Link>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
