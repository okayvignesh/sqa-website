import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA AI Test Assistant — quality-tuned LLMs that draft, repair, and review tests';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · AI Test Assistant',
    title: 'Tests, drafted in plain English.',
    subtitle:
      'Quality-tuned LLMs that draft tests, suggest fixes, and review releases, grounded in your own product context.',
    accent: '#D946EF',
    accentTo: '#A78BFA',
  });
}
