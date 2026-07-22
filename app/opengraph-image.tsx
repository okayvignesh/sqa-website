import { renderOg } from '../src/lib/og';
import { SigAbout } from '../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA — the intelligent ALM & test management platform';

// Site-wide fallback OG. Used by any route without its own opengraph-image
// (e.g. /contact, /careers, /integrations, /resources, legal pages). Reuses
// the About signature — the QA sigil is the truest brand mark we have.
export default function OgImage() {
  return renderOg({
    eyebrow: 'SimplifyQA',
    title: 'Intelligent ALM. Every test.',
    subtitle:
      'Plan, automate, execute, and report across the entire software lifecycle. AI-native, enterprise-grade, and unmistakably yours.',
    path: 'simplifyqa.app',
    signature: <SigAbout />,
  });
}
