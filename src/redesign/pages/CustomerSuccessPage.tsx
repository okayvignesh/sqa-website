import { motion } from 'framer-motion';
import { ArrowRight, Building2, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';
import { clients } from '../data/clients';
import CTA from '../sections/CTA';

export default function CustomerSuccessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Customer success</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Powering quality across <span className="gradient-text">global teams</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl leading-relaxed">
                From global banks to airlines to healthcare networks — SimplifyQA helps
                enterprise QA teams ship faster, with fewer escapes and less drama.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Client logo wall */}
      <section className="relative py-16 sm:py-20 bg-surface-soft">
        <Container size="wide">
          <Reveal>
            <div className="text-center">
              <Eyebrow icon={<Building2 className="w-3.5 h-3.5" />}>Trusted by</Eyebrow>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                The companies shipping with SimplifyQA.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {clients.slice(0, 24).map((c, i) => (
              <motion.div
                key={c.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className="rounded-2xl bg-white border border-ink-900/[0.06] p-4 flex items-center justify-center aspect-[3/2]"
              >
                <img src={c.src} alt={c.alt} className="max-h-14 max-w-[80%] object-contain" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies placeholder */}
      <section className="relative py-24 sm:py-28 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Eyebrow icon={<TrendingUp className="w-3.5 h-3.5" />}>Case studies</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                  Detailed customer stories — coming soon.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[16px] text-ink-500 leading-relaxed max-w-xl">
                  We're putting together in-depth stories from customers across financial services,
                  healthcare, aviation, and retail — with the numbers and the playbooks they used to
                  get there. Want a private walkthrough in the meantime?
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link to="/request-demo" className="btn-primary">
                    Book a demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="btn-ghost">
                    Request reference call
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative">
                <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-brand-soft -z-10" />
                <div className="rounded-3xl glass-strong shadow-plate p-8 grid grid-cols-2 gap-3">
                  {clients.slice(0, 8).map((c) => (
                    <div key={c.alt} className="aspect-square rounded-2xl bg-white border border-ink-900/[0.06] flex items-center justify-center p-3">
                      <img src={c.src} alt={c.alt} className="max-h-12 max-w-[80%] object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
