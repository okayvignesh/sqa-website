import LegalPage from '../../src/redesign/pages/LegalPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Security',
  description:
    'SimplifyQA security overview, SOC 2, ISO 27001, data isolation, encryption, and audit controls.',
  path: '/security',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Security', path: '/security' }]} />
      <LegalPage kind="security" />
    </>
  );
}
