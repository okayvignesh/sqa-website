'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container, Eyebrow, Reveal, RevealGroup, fadeUp, cn } from '../../design';

const faqs = [
  {
    q: 'What is SimplifyQA?',
    a: 'SimplifyQA is an AI-powered test management and automation platform that unifies test planning, AI-generated test cases, self-healing automation, defect triage, and release reporting in one workspace, across web, mobile, API, desktop, SAP, and mainframe.',
  },
  {
    q: "What's the difference between test management and test automation?",
    a: 'Test management covers planning, authoring, and tracing test cases and requirements. Test automation is the codeless execution of those tests across web, mobile, API, and enterprise systems. SimplifyQA includes both in one platform, so nothing has to be stitched together.',
  },
  {
    q: 'Does SimplifyQA support SAP and mainframe testing?',
    a: 'Yes. SimplifyQA has first-class connectors for SAP, mainframe, Salesforce, and Siebel, alongside standard web, mobile, API, and desktop automation, with no third-party plugins required.',
  },
  {
    q: 'Can SimplifyQA integrate with Jira and Azure DevOps?',
    a: 'Yes. SimplifyQA integrates natively with Jira, Azure DevOps, GitHub, GitLab, Jenkins, Slack, Microsoft Teams, and 50+ other tools across your engineering stack.',
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

export default function HomeFAQ() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Container size="wide">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <Reveal>
              <Eyebrow icon={<HelpCircle className="w-3.5 h-3.5" />}>FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Questions, answered.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[15px] text-ink-500">
                Everything teams ask before switching to SimplifyQA.
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
