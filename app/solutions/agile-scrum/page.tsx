import AgileScrumPage from '../../../src/redesign/pages/solutions/AgileScrumPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Agile & Scrum',
  description:
    'Sprint-ready test plans, in-sprint automation, and shift-left quality for agile teams.',
  path: '/solutions/agile-scrum',
});

export default function Page() {
  return <AgileScrumPage />;
}
