import RequestDemoPage from '../../src/redesign/pages/RequestDemoPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Request a Demo',
  description:
    'See SimplifyQA in action. Book a 30-minute personalised walkthrough with a senior quality engineer.',
  path: '/request-demo',
});

export default function Page() {
  return <RequestDemoPage />;
}
