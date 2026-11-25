'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Container, Eyebrow, Reveal } from '../../design';
import { TrendingUp } from 'lucide-react';

const stats = [
  { value: 84, suffix: '%', label: 'Faster release cycles',     hint: 'avg across enterprise customers' },
  { value: 6,  suffix: 'x',  label: 'Automation ROI',           hint: 'measured at 12 months in' },
  { value: 70, suffix: '%',  label: 'Less time on test design', hint: 'with AI authoring' },
  { value: 99.99, suffix: '%', label: 'Platform uptime',        hint: 'multi-region SLA', decimals: 2 },
];

export default function Stats() {
  return (
    <section className="relative py-14 sm:py-20 bg-surface-soft">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<TrendingUp className="w-3.5 h-3.5" />}>Outcomes that scale</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
              Built for the speed of <span className="gradient-text">modern engineering</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="rounded-3xl bg-white border border-ink-900/[0.06] p-6 lift"
            >
              <div className="font-display text-4xl sm:text-5xl text-ink-900 tracking-tight">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-2 text-[13.5px] font-semibold text-ink-800">{s.label}</div>
              <div className="text-[12px] text-ink-400 mt-0.5">{s.hint}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      <span className="text-brand-600">{suffix}</span>
    </span>
  );
}
