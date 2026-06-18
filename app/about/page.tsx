import AboutPage from '../../src/redesign/pages/AboutPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'About SimplifyQA',
  description:
    'The team and mission behind SimplifyQA — an enterprise ALM platform built for the AI era of software quality.',
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}
