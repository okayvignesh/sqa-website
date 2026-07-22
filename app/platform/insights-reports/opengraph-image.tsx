import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Insights & Reports — release readiness, flake analytics, and executive dashboards';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Insights & Reports',
    title: 'Are we ready to ship? Answered.',
    subtitle:
      'Real-time dashboards, flake analytics, and executive reporting. Predictive risk from your test data.',
    accent: '#38BDF8',
    accentTo: '#34D399',
  });
}
