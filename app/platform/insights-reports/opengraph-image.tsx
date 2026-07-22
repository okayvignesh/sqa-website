import { renderOg } from '../../../src/lib/og';
import { SigInsightsReports } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Insights & Reports — release readiness, flake analytics, and executive dashboards';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Insights',
    title: 'Are we ready to ship? Answered.',
    subtitle:
      'Real-time dashboards, flake analytics, and executive reporting. Predictive release risk from your test data.',
    path: 'simplifyqa.ai/platform/insights-reports',
    signature: <SigInsightsReports />,
  });
}
