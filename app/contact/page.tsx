import ContactPage from '../../src/redesign/pages/ContactPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact SimplifyQA',
  description:
    'Talk to our team about SimplifyQA, pricing, enterprise rollouts, integrations, or partnership opportunities.',
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
