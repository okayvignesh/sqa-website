'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plug } from 'lucide-react';
import Link from 'next/link';
import { Container, Eyebrow, Reveal } from '../../design';
import { integrations } from '../data/integrations';

// Pick a curated set for the home section, visually balanced across categories
const featured = [
  'Jira', 'Slack', 'Microsoft Teams', 'GitHub', 'GitLab', 'Jenkins',
  'Azure DevOps', 'AWS', 'Postman', 'Selenium', 'Playwright', 'BrowserStack',
].map((n) => integrations.find((t) => t.name === n)!).filter(Boolean);

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-16 sm:py-24 bg-white">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Eyebrow icon={<Plug className="w-3.5 h-3.5" />}>Integrations</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
                Slots in beside your <span className="gradient-text">existing stack</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[17px] text-ink-500 max-w-xl">
                Deep, two-way integrations across project management, source control, CI/CD,
                chat, cloud, identity, and test grids. Drop SimplifyQA into your stack,
                not the other way around.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/integrations" className="btn-primary">
                  Browse all integrations <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Talk to solutions
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-8 rounded-[40px] bg-mesh opacity-70 -z-10" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {featured.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="aspect-square rounded-2xl glass-card flex items-center justify-center p-4"
                  title={tool.name}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="max-w-[64%] max-h-[64%] object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
