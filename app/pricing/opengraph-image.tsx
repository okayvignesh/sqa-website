import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA pricing — transparent plans from growing teams to global enterprise';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Pricing',
    title: 'Transparent pricing. Start free.',
    subtitle:
      'From growing QA teams to global enterprise rollouts. Per-seat plans, add-ons, and enterprise contracts. Includes a 14-day pilot.',
    accent: '#34D399',
    accentTo: '#7C3AED',
  });
}
