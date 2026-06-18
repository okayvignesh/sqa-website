'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';
import CTA from '../sections/CTA';
import type { PublicPost } from '../../lib/posts';

type Props = { post: PublicPost; related?: PublicPost[] };

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  } catch { return iso; }
}

export default function BlogDetailPage({ post, related = [] }: Props) {
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
            <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-500 hover:text-ink-900">
              <ArrowLeft className="w-3.5 h-3.5" /> All posts
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>{post.category}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-display-md text-ink-900 text-balance">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-5 flex items-center gap-4 text-[13px] text-ink-500">
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              {post.author?.name && (
                <>
                  <span className="text-ink-300">·</span>
                  <span>by {post.author.name}{post.author.role ? `, ${post.author.role}` : ''}</span>
                </>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Cover */}
      <Container size="sm">
        <Reveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden border border-ink-900/[0.06] bg-gradient-to-br from-brand-50 via-white to-brand-100 aspect-[16/8] relative">
            {post.featuredImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.featuredImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div aria-hidden className="absolute inset-0 bg-mesh opacity-80" />
            )}
          </div>
        </Reveal>
      </Container>

      {/* Body */}
      <article className="relative py-16">
        <Container size="sm">
          <div
            className="prose-content text-[17px] leading-[1.75] text-ink-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink-700 hover:text-ink-900">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to all posts
            </Link>
            <button className="btn-ghost h-9 px-4 text-[12.5px]">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </Container>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative py-16 bg-surface-soft">
          <Container size="wide">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-3xl border border-ink-900/[0.06] bg-white p-6 lift">
                  <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-700">{p.category}</div>
                  <h3 className="mt-3 font-display text-[17px] text-ink-900">{p.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-700">
                    Read <ArrowRight className="w-3 h-3" />
                  </div>
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
