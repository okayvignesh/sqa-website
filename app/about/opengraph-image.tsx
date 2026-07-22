import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Why SimplifyQA — agentic AI, zero-code automation, and unified ALM';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Why SimplifyQA',
    title: 'The ALM built for how teams ship in 2026.',
    subtitle:
      'Agentic AI, zero-code automation, unified lifecycle. One platform for every surface your team ships to.',
    accent: '#F472B6',
    accentTo: '#A78BFA',
  });
}
