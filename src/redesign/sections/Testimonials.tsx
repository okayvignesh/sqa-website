'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Container, Eyebrow, Reveal } from '../../design';

const quotes = [
  {
    body: 'We replaced four tools with SimplifyQA. Our release cycle dropped from 6 weeks to 8 days, and the data finally tells the same story everywhere.',
    name: 'Priya Krishnan',
    role: 'Director of QA · Global FinTech',
  },
  {
    body: 'The AI Studio is the first one I’ve seen that actually understands our codebase. It generates tests we’d have written ourselves, faster.',
    name: 'Mark Sullivan',
    role: 'Head of Engineering · HealthTech',
  },
  {
    body: 'Enterprise-ready out of the box. SSO, RBAC, on-prem, we were in production in three weeks across 40 teams.',
    name: 'Andrei Volkov',
    role: 'VP Platform · Insurance',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 bg-white">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<Quote className="w-3.5 h-3.5" />}>Customer stories</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
              Trusted by teams that <span className="gradient-text">ship every day</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 sm:gap-5">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-7 bg-white border border-ink-900/[0.06] shadow-soft lift relative overflow-hidden"
            >
              <div aria-hidden className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-soft" />
              <div className="relative">
                <div className="flex items-center gap-1 text-brand-600">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <blockquote className="mt-5 text-[15px] leading-relaxed text-ink-800 text-pretty">
                  “{q.body}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-ink-900/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-200 to-brand-600 grid place-items-center text-white text-[12.5px] font-semibold">
                    {q.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}
                  </div>
                  <div className="text-[13px]">
                    <div className="font-semibold text-ink-900">{q.name}</div>
                    <div className="text-ink-500">{q.role}</div>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
