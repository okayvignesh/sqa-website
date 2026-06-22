'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import CTA from '../sections/CTA';

export type Feature = { icon: ReactNode; title: string; body: string };
export type FaqItem = { q: string; a: string };

export type ProductPageConfig = {
  eyebrow: string;
  eyebrowIcon?: ReactNode;
  title: ReactNode;          // can include <span className="gradient-text"> highlights
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  bullets?: string[];        // short feature checks under the hero
  features: Feature[];       // mid-page feature grid
  capabilityList?: string[]; // optional capability checklist
  capabilityHeading?: string;
  visual?: ReactNode;        // optional hero-side visual (defaults to a placeholder)
  related?: { label: string; to: string }[]; // optional cross-links
};

export default function ProductPage({ config }: { config: ProductPageConfig }) {
  const {
    eyebrow, eyebrowIcon, title, subtitle,
    primaryCta = { label: 'Book a demo', to: '/request-demo' },
    secondaryCta = { label: 'Talk to sales', to: '/contact' },
    bullets, features, capabilityHeading, capabilityList, visual, related,
  } = config;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-40 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>

        <Container size="wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-display-lg text-ink-900 text-balance">
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[18px] leading-relaxed text-ink-500 max-w-xl text-pretty">
                  {subtitle}
                </p>
              </Reveal>

              {bullets && bullets.length > 0 && (
                <Reveal delay={0.15}>
                  <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-xl">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                        <span className="grid place-items-center w-5 h-5 mt-px rounded-full bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Link href={primaryCta.to} className="btn-primary h-12 px-6 text-[15px]">
                    {primaryCta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={secondaryCta.to} className="btn-ghost h-12 px-6 text-[15px]">
                    {secondaryCta.label}
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              {visual || <DefaultVisual eyebrow={eyebrow} />}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Feature grid */}
      <section className="relative py-16 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>What you get</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Designed to fit how modern teams actually work.
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group rounded-3xl bg-white border border-ink-900/[0.06] p-7 lift relative overflow-hidden"
              >
                <div aria-hidden className="absolute -top-20 -right-20 w-44 h-44 bg-brand-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100">
                    {f.icon}
                  </span>
                  <h3 className="mt-5 font-display text-[18px] text-ink-900">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Capability checklist (optional) */}
      {capabilityList && capabilityList.length > 0 && (
        <section className="relative py-16 sm:py-20 bg-white">
          <Container size="wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Reveal>
                  <Eyebrow>Capabilities</Eyebrow>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                    {capabilityHeading || 'Everything in the box.'}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {capabilityList.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                      <span className="grid place-items-center w-5 h-5 mt-px rounded-full bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* Related links (optional) */}
      {related && related.length > 0 && (
        <section className="relative py-14 bg-surface-soft">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow>Explore more</Eyebrow>
              <h3 className="mt-4 font-display text-2xl text-ink-900">Other parts of the platform</h3>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.to}
                  href={r.to}
                  className="group flex items-center justify-between rounded-2xl bg-white border border-ink-900/[0.06] p-5 lift"
                >
                  <span className="text-[14.5px] font-semibold text-ink-900">{r.label}</span>
                  <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-700 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}

function DefaultVisual({ eyebrow }: { eyebrow: string }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-brand-soft -z-10" />
      <div className="rounded-3xl glass-strong shadow-plate overflow-hidden">
        <div className="px-5 py-3 border-b border-ink-900/[0.06] bg-white/70 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[11.5px] font-medium text-ink-500">{eyebrow}</div>
        </div>
        <div className="p-6 bg-gradient-to-b from-white to-surface-warm space-y-3">
          {[80, 64, 92, 52].map((w, i) => (
            <div key={i} className="space-y-2">
              <div className="h-2.5 rounded-full bg-ink-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${w}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-300 to-brand-700"
                />
              </div>
            </div>
          ))}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['Pass', 'Flake', 'Skip'].map((l, i) => (
              <div key={l} className="rounded-xl border border-ink-900/[0.06] bg-white p-3">
                <div className="text-[10.5px] uppercase tracking-wider text-ink-400 font-medium">{l}</div>
                <div className="mt-1 font-display text-[18px] text-ink-900">{['98.4%', '0.6%', '1.0%'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
