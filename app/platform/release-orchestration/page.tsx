import ReleaseOrchestrationPage from '../../../src/redesign/pages/platform/ReleaseOrchestrationPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Release Orchestration',
  description:
    'Quality gates, smart promotion, and end-to-end pipeline visibility across every release train.',
  path: '/platform/release-orchestration',
});

export default function Page() {
  return <ReleaseOrchestrationPage />;
}
