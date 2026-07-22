import { renderOg } from '../../src/lib/og';
import { SigPricing } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA pricing — free pilot, team plans, enterprise contracts';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Pricing',
    title: 'Transparent. Start free.',
    subtitle:
      'From growing QA teams to global enterprise rollouts. 14-day pilot on every feature — no card required.',
    path: 'simplifyqa.ai/pricing',
    signature: <SigPricing />,
  });
}
