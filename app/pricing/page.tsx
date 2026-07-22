import PricingPage from '../../src/redesign/pages/PricingPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Pricing',
  description:
    'Transparent pricing for SimplifyQA, from growing QA teams to global enterprise rollouts. Start free.',
  path: '/pricing',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]} />
      <PricingPage />
    </>
  );
}
