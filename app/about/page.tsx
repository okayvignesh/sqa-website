import AboutPage from '../../src/redesign/pages/AboutPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Why SimplifyQA',
  description:
    'Why enterprise QA teams pick SimplifyQA over legacy ALM stacks: AI built into the workflow, zero-code automation, unified lifecycle, and coverage across every surface your team ships to.',
  path: '/about',
  image: '/about/opengraph-image',
  absoluteTitle: true,
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <AboutPage />
    </>
  );
}
