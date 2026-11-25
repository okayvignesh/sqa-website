'use client';

import { motion } from 'framer-motion';
import { Building2, Sparkles } from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';
import { clients } from '../data/clients';
import LogoStickerBoard from '../components/LogoStickerBoard';
import CTA from '../sections/CTA';

export default function CustomerSuccessPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Customer success</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-display-lg leading-[1.12] pb-[0.06em] text-ink-900 text-balance">
                  Powering quality across <span className="gradient-text">global teams</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[18px] text-ink-500 leading-relaxed">
                  From global banks to airlines to healthcare networks, SimplifyQA helps
                  enterprise QA teams ship faster, with fewer escapes and less drama.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <LogoStickerBoard />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Client logo wall */}
      <section className="relative py-12 sm:py-16 bg-surface-soft">
        <Container size="wide">
          <Reveal>
            <div className="text-center">
              <Eyebrow icon={<Building2 className="w-3.5 h-3.5" />}>Trusted by</Eyebrow>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                The companies shipping with SimplifyQA.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-8">
            {clients.slice(0, 24).map((c, i) => (
              <motion.div
                key={c.alt}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.04 }}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full rounded-2xl bg-white border border-ink-900/[0.06] aspect-[5/3] flex items-center justify-center px-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-16px_rgba(15,19,34,0.16)] group-hover:border-ink-900/10">
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="h-16 sm:h-20 w-auto max-w-[90%] object-contain"
                    style={{
                      transform: `scale(${c.scale ?? (c.src.startsWith('/logos/') ? 0.78 : 1)})`,
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="mt-3.5 text-[13.5px] font-medium text-ink-800 text-center leading-tight">
                  {c.name}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
