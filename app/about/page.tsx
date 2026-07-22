import AboutPage from '../../src/redesign/pages/AboutPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Why SimplifyQA',
  description:
    'Why enterprise QA teams pick SimplifyQA over legacy ALM stacks: agentic AI, zero-code automation, unified lifecycle, and coverage across every surface your team ships to.',
  path: '/about',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <AboutPage />
    </>
  );
}
