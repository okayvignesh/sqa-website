import CustomerSuccessPage from '../../src/redesign/pages/CustomerSuccessPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Customer Success',
  description:
    'How Fortune 100 quality teams use SimplifyQA to cut regression cycles, scale automation, and ship with confidence.',
  path: '/customer-success',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Customer Success', path: '/customer-success' }]} />
      <CustomerSuccessPage />
    </>
  );
}
