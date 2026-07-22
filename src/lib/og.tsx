import type { ReactElement } from 'react';
import { ImageResponse } from 'next/og';

// Edge-rendered OG card system for SimplifyQA. Matches the site: cream
// canvas, brand maroon accents, ink typography, Geist + Inter + Geist Mono
// from Google Fonts (the same faces app/layout.tsx loads via next/font).
//
// Split layout:
//   left column: wordmark → eyebrow → headline → subhead → mono URL
//   right column: page-specific signature visual (see og-signatures below)
//
// The wordmark is the real /public/simplify_logo.svg (paths inlined) — the
// warm #FF583D "QA" glyphs are what registers the brand at thumbnail size.

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';
export const OG_RUNTIME = 'edge' as const;

// Site tokens (mirrors tailwind.config.js).
const T = {
  cream:     '#FBF8F6',   // surface.warm
  paper:     '#FFFFFF',
  ink900:    '#0E1322',
  ink700:    '#2B3447',
  ink500:    '#5F6B81',
  ink400:    '#8B94A6',
  ink300:    '#BCC3CF',
  ink200:    '#DDE1E8',
  ink100:    '#EEF0F4',
  ink050:    '#F7F8FA',
  hairline:  'rgba(15,19,34,0.06)',
  hairline2: 'rgba(15,19,34,0.10)',
  brand50:   '#FDF3F4',
  brand100:  '#FCE3E5',
  brand200:  '#F7C1C6',
  brand600:  '#B91D2D',
  brand700:  '#9A1525',
  brandQA:   '#FF583D',   // the warm QA-glyph red used in the wordmark
} as const;

export interface OgOptions {
  eyebrow: string;
  title: string;
  subtitle: string;
  path: string;
  accent?: string;
  signature: ReactElement;
}

// Load Google Font as TTF (Satori doesn't accept WOFF2). Crawler-style UA
// makes Google Fonts serve the truetype src.
async function loadGoogleFont(family: string, weight: number, text?: string): Promise<ArrayBuffer> {
  const slug = family.replace(/ /g, '+');
  const cssUrl =
    `https://fonts.googleapis.com/css2?family=${slug}:wght@${weight}` +
    (text ? `&text=${encodeURIComponent(text)}` : '');
  const css = await (await fetch(cssUrl, {
    headers: { 'User-Agent': 'Wget/1.21' },
  })).text();
  const m = css.match(/src:\s*url\((.+?)\)\s*format\(['"]truetype['"]\)/);
  if (!m) throw new Error(`TTF missing for ${family}@${weight}`);
  return await (await fetch(m[1])).arrayBuffer();
}

// SimplifyQA wordmark — paths from public/simplify_logo.svg. `dark=false`
// (default) uses ink-900 for the letters against a light canvas.
export function SimplifyQAWordmark({
  height = 26,
  dark = false,
}: { height?: number; dark?: boolean } = {}) {
  const w = Math.round(height * (129 / 17));
  const letter = dark ? '#FFFFFF' : T.ink900;
  return (
    <svg width={w} height={height} viewBox="0 0 129 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.56821 14.1151C1.19905 13.8654 0.938477 13.4078 0.938477 12.9086C0.938477 12.0764 1.63339 11.4316 2.50202 11.4316C2.93631 11.4316 3.24034 11.5773 3.45751 11.7228C4.60849 12.5341 5.86801 13.0334 7.34469 13.0334C8.71279 13.0334 9.53802 12.5133 9.53802 11.6604V11.6187C9.53802 10.8074 9.01687 10.3914 6.47606 9.76741C3.4141 9.01847 1.43795 8.20721 1.43795 5.31567V5.27405C1.43795 2.6322 3.65295 0.884766 6.75836 0.884766C8.60425 0.884766 10.2112 1.34239 11.5793 2.17449C11.9485 2.38251 12.3177 2.81934 12.3177 3.44342C12.3177 4.27547 11.6228 4.92041 10.7541 4.92041C10.4284 4.92041 10.1678 4.83721 9.90718 4.6916C8.79965 4.06748 7.7573 3.7138 6.71491 3.7138C5.43371 3.7138 4.76052 4.27546 4.76052 4.98274V5.02445C4.76052 5.98127 5.41194 6.29333 8.03961 6.93819C11.1233 7.70788 12.8606 8.76883 12.8606 11.3067V11.3483C12.8606 14.2398 10.5587 15.8624 7.27956 15.8624C5.28168 15.8625 3.26207 15.28 1.56821 14.1151Z" fill={letter} />
      <path d="M15.1929 6.151C15.1929 5.28554 15.9001 4.58496 16.7738 4.58496C17.6475 4.58496 18.3548 5.28554 18.3548 6.151V14.3111C18.3548 15.1765 17.6475 15.8772 16.7738 15.8772C15.9001 15.8772 15.1929 15.1765 15.1929 14.3111V6.151Z" fill={letter} />
      <path d="M18.3637 2.47399C18.3637 3.35921 17.646 4.07683 16.7608 4.07683C15.8756 4.07683 15.158 3.35921 15.158 2.47399C15.158 1.58871 15.8756 0.871094 16.7608 0.871094C17.646 0.871094 18.3637 1.58871 18.3637 2.47399Z" fill={letter} />
      <path d="M21.7004 2.4726C21.7004 1.58814 22.4101 0.871094 23.2855 0.871094H23.6559C24.3423 0.871094 24.8208 1.22843 25.112 1.71184L28.9813 8.08023L32.8713 1.69083C33.2041 1.14434 33.6618 0.871094 34.3066 0.871094H34.677C35.5524 0.871094 36.2621 1.58814 36.2621 2.4726V10.7636C36.2621 11.6053 35.6169 12.3116 34.7851 12.3593C34.7455 12.3616 34.7054 12.3628 34.6649 12.3628C34.6252 12.3628 34.5858 12.3616 34.5468 12.3594C33.7207 12.3127 33.0793 11.6119 33.0793 10.7759V6.84016L30.271 11.2119C29.9382 11.7163 29.5221 12.0316 28.9396 12.0316C28.3572 12.0316 27.9411 11.7163 27.6083 11.2119L24.8416 6.9032V14.1825C24.8416 14.9821 24.2644 15.6772 23.4795 15.7794C22.5043 15.9064 21.7004 15.1727 21.7004 14.2174V2.4726Z" fill={letter} />
      <path d="M36.3019 14.2737C36.3019 15.159 35.5843 15.8766 34.699 15.8766C33.8138 15.8766 33.0962 15.159 33.0962 14.2737C33.0962 13.3885 33.8138 12.6709 34.699 12.6709C35.5843 12.6709 36.3019 13.3886 36.3019 14.2737Z" fill={letter} />
      <path d="M42.6449 14.2679C42.6449 15.1532 41.9273 15.8708 41.0421 15.8708C40.1568 15.8708 39.4392 15.1532 39.4392 14.2679C39.4392 13.3827 40.1568 12.665 41.0421 12.665C41.9273 12.665 42.6449 13.3827 42.6449 14.2679Z" fill={letter} />
      <path d="M39.5747 3.20228C39.5747 1.91858 40.6154 0.87793 41.8991 0.87793H45.5241C48.9981 0.87793 51.0992 2.93738 51.0992 5.91212V5.95374C51.0992 9.3237 48.4781 11.0711 45.2121 11.0711H42.7891C42.7849 11.0711 41.2249 11.0579 40.28 11.0499C39.8893 11.0466 39.5747 10.7289 39.5747 10.3382V3.20228ZM45.3161 8.22117C46.9179 8.22117 47.8539 7.26429 47.8539 6.01615V5.97453C47.8539 4.53911 46.8554 3.76943 45.2537 3.76943H43.5007C43.1017 3.76943 42.7782 4.09291 42.7782 4.49196V7.49859C42.7782 7.8976 43.1017 8.22108 43.5007 8.22108H45.3161V8.22117Z" fill={letter} />
      <path d="M53.2161 2.52979C53.2161 1.61931 53.9234 0.899414 54.8179 0.899414C55.7124 0.899414 56.4197 1.61931 56.4197 2.52979V12.8838H62.3483C63.1596 12.8838 63.8044 13.5402 63.8044 14.366C63.8044 15.1918 63.1596 15.8482 62.3483 15.8482H54.8179C53.9234 15.8482 53.2161 15.1283 53.2161 14.2178V2.52979Z" fill={letter} />
      <path d="M66.1621 6.11224C66.1621 5.23852 66.8694 4.53125 67.7431 4.53125C68.6168 4.53125 69.324 5.23852 69.324 6.11224V14.3499C69.324 15.2236 68.6167 15.9309 67.7431 15.9309C66.8694 15.9309 66.1621 15.2236 66.1621 14.3499V6.11224Z" fill={letter} />
      <path d="M69.3134 2.42023C69.3134 3.3055 68.5958 4.02312 67.7106 4.02312C66.8253 4.02312 66.1077 3.3055 66.1077 2.42023C66.1077 1.535 66.8253 0.817383 67.7106 0.817383C68.5958 0.817427 69.3134 1.53505 69.3134 2.42023Z" fill={letter} />
      <path d="M82.3749 3.94037H74.1902C73.3426 3.94037 72.6555 3.25331 72.6555 2.40573C72.6555 1.5582 73.3426 0.871094 74.1902 0.871094H82.3749C83.2224 0.871094 83.9095 1.5582 83.9095 2.40573C83.9095 3.25331 83.2224 3.94037 82.3749 3.94037Z" fill={letter} />
      <path d="M79.6466 9.80653H74.1902C73.3426 9.80653 72.6555 9.11952 72.6555 8.27194C72.6555 7.42441 73.3426 6.7373 74.1902 6.7373H79.6466C80.4942 6.7373 81.1813 7.42441 81.1813 8.27194C81.1813 9.11947 80.4942 9.80653 79.6466 9.80653Z" fill={letter} />
      <path d="M74.1902 15.8768C73.3426 15.8768 72.6555 15.1898 72.6555 14.3422C72.6555 13.4947 73.3426 12.8076 74.1902 12.8076C75.0377 12.8076 75.7247 13.4947 75.7247 14.3422C75.7247 15.1898 75.0377 15.8768 74.1902 15.8768Z" fill={letter} />
      <path d="M91.0291 10.0624L86.3279 3.62385C86.099 3.30921 85.9326 2.93175 85.9326 2.47042C85.9326 1.61053 86.6399 0.918428 87.5344 0.918428C88.2625 0.918428 88.7201 1.31694 89.1154 1.90412L92.6517 7.04239L96.2506 1.86219C96.6458 1.27496 97.1242 0.897461 97.7899 0.897461C98.7676 0.897461 99.3501 1.58956 99.3501 2.47046C99.3501 2.91082 99.1421 3.30929 98.9341 3.60293L94.2328 9.99959V14.236C94.2328 15.1378 93.5255 15.8509 92.631 15.8509C91.7365 15.8509 91.0292 15.1378 91.0292 14.236L91.0291 10.0624Z" fill={letter} />
      {/* QA glyphs always in the warm brand red — same across dark/light. */}
      <path d="M123.464 11.7425C123.464 12.5775 122.787 13.2545 121.952 13.2545C121.117 13.2545 120.44 12.5775 120.44 11.7425C120.44 10.9074 121.117 10.2305 121.952 10.2305C122.787 10.2305 123.464 10.9074 123.464 11.7425Z" fill={T.brandQA} />
      <path d="M114.223 13.975C114.223 14.81 113.547 15.487 112.711 15.487C111.876 15.487 111.199 14.81 111.199 13.975C111.199 13.1399 111.876 12.4629 112.711 12.4629C113.547 12.4629 114.223 13.1399 114.223 13.975Z" fill={T.brandQA} />
      <path d="M127.489 16.1289C126.924 16.1289 126.387 15.7969 126.153 15.2442L122.128 5.74164L117.72 15.2617C117.383 15.9883 116.522 16.3046 115.795 15.9682C115.068 15.6317 114.752 14.7699 115.088 14.0433L120.727 1.86534C120.993 1.29735 121.573 0.936577 122.207 0.947507C122.84 0.957946 123.408 1.33705 123.655 1.91317L123.658 1.91932L128.823 14.1131C129.136 14.8504 128.791 15.7013 128.054 16.0137C127.869 16.0918 127.677 16.1289 127.489 16.1289Z" fill={T.brandQA} />
      <path d="M107.665 16.0856C103.417 16.0856 99.9619 12.6301 99.9619 8.38267C99.9619 4.13525 103.417 0.679688 107.665 0.679688C111.912 0.679688 115.368 4.13525 115.368 8.38267C115.368 9.1834 114.719 9.83255 113.918 9.83255C113.117 9.83255 112.468 9.1834 112.468 8.38267C112.468 5.73413 110.313 3.57944 107.665 3.57944C105.016 3.57944 102.862 5.73413 102.862 8.38267C102.862 11.0311 105.016 13.1859 107.665 13.1859C108.466 13.1859 109.115 13.835 109.115 14.6357C109.115 15.4365 108.466 16.0856 107.665 16.0856Z" fill={T.brandQA} />
    </svg>
  );
}

// Expose tokens so signatures can reference them without duplicating the map.
export const OG_TOKENS = T;

export async function renderOg({
  eyebrow,
  title,
  subtitle,
  path,
  accent = T.brand600,
  signature,
}: OgOptions) {
  const [geist800, inter400, inter600, inter700, geistMono500] = await Promise.all([
    loadGoogleFont('Geist',      800).catch(() => null),
    loadGoogleFont('Inter',      400).catch(() => null),
    loadGoogleFont('Inter',      600).catch(() => null),
    loadGoogleFont('Inter',      700).catch(() => null),
    loadGoogleFont('Geist Mono', 500).catch(() => null),
  ]);
  const fonts = [
    geist800    && { name: 'Geist',      data: geist800,    weight: 800 as const, style: 'normal' as const },
    inter400    && { name: 'Inter',      data: inter400,    weight: 400 as const, style: 'normal' as const },
    inter600    && { name: 'Inter',      data: inter600,    weight: 600 as const, style: 'normal' as const },
    inter700    && { name: 'Inter',      data: inter700,    weight: 700 as const, style: 'normal' as const },
    geistMono500 && { name: 'Geist Mono', data: geistMono500, weight: 500 as const, style: 'normal' as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400 | 500 | 600 | 700 | 800; style: 'normal' }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 72px',
          backgroundColor: T.cream,
          backgroundImage:
            // Site's `mesh` background pattern — soft brand-red radials on cream.
            `radial-gradient(60% 55% at 88% 4%, ${accent}22, transparent 62%),` +
            `radial-gradient(40% 45% at 4% 96%, ${T.brand100}80, transparent 60%)`,
          color: T.ink900,
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SimplifyQAWordmark height={28} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '9px 18px',
              borderRadius: 999,
              background: T.brand50,
              border: `1px solid ${T.brand100}`,
              color: T.brand700,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Body row: text + signature */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 44, marginTop: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: 620, gap: 24 }}>
            <div
              style={{
                fontSize: 82,
                fontFamily: 'Geist, Inter, sans-serif',
                fontWeight: 800,
                letterSpacing: -3,
                lineHeight: 1.02,
                color: T.ink900,
                display: 'flex',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 25,
                lineHeight: 1.35,
                color: T.ink500,
                display: 'flex',
              }}
            >
              {subtitle}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              height: 420,
            }}
          >
            {signature}
          </div>
        </div>

        {/* Footer: mono path + tagline, hairline rule */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
            paddingTop: 20,
            borderTop: `1px solid ${T.hairline}`,
            fontSize: 20,
            color: T.ink500,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Geist Mono, ui-monospace, monospace' }}>
            <span style={{ width: 6, height: 6, borderRadius: 6, background: T.brand600, display: 'flex' }} />
            {path}
          </div>
          <div style={{ display: 'flex', fontWeight: 600, color: T.ink700 }}>Enterprise ALM &amp; Test Management</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: fonts.length ? fonts : undefined },
  );
}
