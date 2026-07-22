import ContactPage from '../../src/redesign/pages/ContactPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact SimplifyQA',
  description:
    'Talk to our team about SimplifyQA, pricing, enterprise rollouts, integrations, or partnership opportunities.',
  path: '/contact',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <ContactPage />
    </>
  );
}
