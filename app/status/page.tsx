import LegalPage from '../../src/redesign/pages/LegalPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'System Status',
  description: 'Real-time uptime and incident history for SimplifyQA services.',
  path: '/status',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Status', path: '/status' }]} />
      <LegalPage kind="status" />
    </>
  );
}
