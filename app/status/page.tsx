import LegalPage from '../../src/redesign/pages/LegalPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'System Status',
  description: 'Real-time uptime and incident history for SimplifyQA services.',
  path: '/status',
});

export default function Page() {
  return <LegalPage kind="status" />;
}
