import { renderOg } from '../../src/lib/og';
import { SigAbout } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Why SimplifyQA — the intelligent ALM built for how teams ship in 2026';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Why SimplifyQA',
    title: 'ALM, rebuilt around the tests.',
    subtitle:
      'Agentic AI, zero-code automation, unified lifecycle. One platform for every surface your team ships to.',
    path: 'simplifyqa.app/about',
    signature: <SigAbout />,
  });
}
