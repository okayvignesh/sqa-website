import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Test Management — plan, design, and trace tests to requirements';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Test Management',
    title: 'Plan releases. Trace every test.',
    subtitle:
      'Requirements, suites, cycles, and traceability, linked to tickets and code, in one collaborative workspace.',
    accent: '#38BDF8',
    accentTo: '#818CF8',
  });
}
