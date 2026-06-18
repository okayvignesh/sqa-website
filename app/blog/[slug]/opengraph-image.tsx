import { ImageResponse } from 'next/og';
import { getPostBySlug } from '../../../src/lib/posts';

export const runtime = 'nodejs';
export const alt = 'SimplifyQA blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Props = { params: { slug: string } };

export default async function BlogOgImage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  const title = post?.title ?? 'SimplifyQA Blog';
  const excerpt = post?.excerpt ?? 'Engineering deep dives, product updates, and opinions.';
  const category = post?.category ?? 'SimplifyQA';
  const author = post?.author?.name ?? 'SimplifyQA';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'linear-gradient(135deg, #0b1020 0%, #111634 45%, #2a1b6b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background:
                'linear-gradient(135deg, #7c5cff 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>SimplifyQA</div>
          <div
            style={{
              marginLeft: 'auto',
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.12)',
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            fontSize: title.length > 70 ? 56 : 68,
            fontWeight: 800,
            letterSpacing: -1.5,
            lineHeight: 1.08,
            display: 'block',
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.35,
              maxWidth: 1000,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {excerpt}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 20,
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            <div>By {author}</div>
            <div>simplifyqa.app/blog</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
