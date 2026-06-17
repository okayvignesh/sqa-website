import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';
import CTA from '../sections/CTA';

const sampleBody = [
  { h: 'Why generic LLMs fall short for QA',
    p: 'Off-the-shelf LLMs are trained for general-purpose reasoning. They’re strong at summarization and code completion, but quality engineering asks specific, structured questions — about coverage, about edge cases, about regressions. The mismatch shows up the moment you put one in a real workflow.' },
  { h: 'What we tuned for',
    p: 'We focused on three jobs the model has to be great at: generating high-signal test cases from requirements, repairing locators after UI drift, and explaining why a test failed in plain language. We collected millions of structured traces, ran a curated supervised fine-tune, then layered RLHF using QA-engineer reviewers.' },
  { h: 'Grounding matters more than scale',
    p: 'The most expensive model isn\'t the most useful one. Grounding the LLM in the customer\'s own codebase, test suites, and ticket history beats parameter count every time. We built a retrieval layer that surfaces exactly the right context — without the model hallucinating about your private data.' },
  { h: 'What we shipped, and what\'s next',
    p: 'AI Studio is now generally available across the platform. Next on the roadmap: customer-specific fine-tunes, multi-modal inputs (screenshots → tests), and on-device inference for regulated deployments.' },
];

export default function BlogDetailPage() {
  const { slug } = useParams();

  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.35} />
        </div>
        <Container size="sm">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-500 hover:text-ink-900">
              <ArrowLeft className="w-3.5 h-3.5" /> All posts
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>{slug ? 'Engineering' : 'Blog'}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-display-md text-ink-900 text-balance">
              Building quality-tuned LLMs for the SimplifyQA AI Studio
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-5 flex items-center gap-4 text-[13px] text-ink-500">
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Mar 28, 2026</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 9 min read</span>
              <span className="text-ink-300">·</span>
              <span>by Anika Reddy, Principal AI Engineer</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Cover */}
      <Container size="sm">
        <Reveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-gradient-to-br from-brand-50 via-white to-brand-100 aspect-[16/8] relative">
            <div aria-hidden className="absolute inset-0 bg-mesh opacity-80" />
          </div>
        </Reveal>
      </Container>

      {/* Body */}
      <article className="relative py-16">
        <Container size="sm">
          <div className="prose-content text-[17px] leading-[1.75] text-ink-700">
            <p>
              When we set out to build an AI assistant for quality engineering, we already
              knew the headline answer wouldn't be "bigger model." It was going to be
              "right model for the job, grounded in the customer's data, evaluated on the
              tasks that actually matter."
            </p>
            {sampleBody.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-2xl mt-12 mb-3 text-ink-900">{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}
            <p className="mt-12">
              If any of this resonates — or if you'd like to bring AI Studio into your own
              quality stack — <Link to="/request-demo" className="text-brand-700 font-medium underline underline-offset-4">we'd love to talk</Link>.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink-700 hover:text-ink-900">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to all posts
            </Link>
            <button className="btn-ghost h-9 px-4 text-[12.5px]">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </Container>
      </article>

      {/* Related */}
      <section className="relative py-16 bg-surface-soft">
        <Container size="wide">
          <Eyebrow>Keep reading</Eyebrow>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { t: 'Self-healing locators in production', tag: 'Engineering' },
              { t: 'Release readiness scoring',           tag: 'Product' },
              { t: 'How Carelon cut regression by 78%',   tag: 'Customer' },
            ].map((p) => (
              <Link key={p.t} to="/blog" className="block rounded-3xl border border-ink-900/[0.06] bg-white p-6 lift">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-700">{p.tag}</div>
                <h3 className="mt-3 font-display text-[17px] text-ink-900">{p.t}</h3>
                <div className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-700">
                  Read <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
