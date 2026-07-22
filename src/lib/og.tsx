import { ImageResponse } from 'next/og';

// Shared edge-rendered OG template. Each per-page opengraph-image.tsx
// wraps this with its own eyebrow, headline, subhead, and accent hex.
// One template, distinct art per page — keeps social cards on-brand without
// hand-designing each PNG.

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';
export const OG_RUNTIME = 'edge' as const;

export interface OgOptions {
  /** Small chip above the headline: "Product", "Platform", etc. */
  eyebrow: string;
  /** Main headline, max ~7 words. */
  title: string;
  /** One-line subhead. */
  subtitle: string;
  /** Primary hex used for the corner mark and accent line. */
  accent?: string;
  /** Optional secondary hex for the corner-mark gradient. */
  accentTo?: string;
  /** Alt text for consumers of `alt` — usually match the title. */
  alt?: string;
}

export function renderOg({
  eyebrow,
  title,
  subtitle,
  accent = '#7C3AED',
  accentTo = '#38BDF8',
}: OgOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #0b1020 0%, #111634 40%, #1E1B4B 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient accent glow, top-right */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: `radial-gradient(closest-side, ${accent}55, transparent 70%)`,
          }}
        />
        {/* Ambient warm glow, bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: 560,
            background: `radial-gradient(closest-side, ${accentTo}40, transparent 70%)`,
          }}
        />

        {/* Header row: brand mark + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${accent} 0%, ${accentTo} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 800,
              color: 'white',
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            SimplifyQA
          </div>
        </div>

        {/* Body: eyebrow + headline + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: accent,
            }}
          >
            <div style={{ width: 28, height: 2, background: accent }} />
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.02,
              maxWidth: 1050,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 960,
              lineHeight: 1.35,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer row: domain + accent chip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <div>simplifyqa.app</div>
          <span
            style={{
              padding: '8px 18px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.10)',
              border: `1px solid ${accent}66`,
              fontSize: 18,
              color: 'white',
            }}
          >
            {eyebrow}
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
