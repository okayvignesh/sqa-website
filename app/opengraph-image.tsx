import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SimplifyQA — Intelligent ALM & Test Management Platform';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
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
          background:
            'linear-gradient(135deg, #0b1020 0%, #111634 40%, #2a1b6b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background:
                'linear-gradient(135deg, #7c5cff 0%, #38bdf8 100%)',
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
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
            SimplifyQA
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Intelligent ALM & Test Management
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Plan, automate, execute, and report — across the entire software
            lifecycle with AI-powered intelligence.
          </div>
        </div>

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
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span
              style={{
                padding: '8px 16px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                fontSize: 18,
              }}
            >
              Enterprise QA platform
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
