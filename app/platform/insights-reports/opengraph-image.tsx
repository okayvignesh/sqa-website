import { renderOg } from '../../../src/lib/og';
import { SigInsightsReports } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Insights & Reports: built-in dashboards, execution reports, and PDF exports';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Insights',
    title: 'Are we ready to ship? Answered.',
    subtitle:
      'Built-in dashboards with about 80 ready-made charts, step-by-step execution reports, and PDF exports.',
    path: 'simplifyqa.ai/platform/insights-reports',
    signature: <SigInsightsReports />,
  });
}
