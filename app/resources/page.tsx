import ResourcesPage from '../../src/redesign/pages/ResourcesPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Resources',
  description:
    'Docs, webinars, whitepapers, customer stories, and engineering deep dives from the SimplifyQA team.',
  path: '/resources',
});

export default function Page() {
  return <ResourcesPage />;
}
