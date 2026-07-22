import LegalPage from '../../src/redesign/pages/LegalPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How SimplifyQA collects, uses, and protects your information.',
  path: '/privacy',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy' }]} />
      <LegalPage kind="privacy" />
    </>
  );
}
