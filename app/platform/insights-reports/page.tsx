import InsightsReportsPage from '../../../src/redesign/pages/platform/InsightsReportsPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Insights & Reports',
  description:
    'Real-time dashboards, flake analytics, and executive reporting that answer "are we ready to ship?"',
  path: '/platform/insights-reports',
});

export default function Page() {
  return <InsightsReportsPage />;
}
