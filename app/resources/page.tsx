import ResourcesPage from '../../src/redesign/pages/ResourcesPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Resources',
  description:
    'Docs, webinars, whitepapers, customer stories, and engineering deep dives from the SimplifyQA team.',
  path: '/resources',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }]} />
      <ResourcesPage />
    </>
  );
}
