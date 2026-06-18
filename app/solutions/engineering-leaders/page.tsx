import EngineeringLeadersPage from '../../../src/redesign/pages/solutions/EngineeringLeadersPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'For Engineering Leaders',
  description:
    'Executive visibility into quality, velocity, and risk across every product, team, and release train.',
  path: '/solutions/engineering-leaders',
});

export default function Page() {
  return <EngineeringLeadersPage />;
}
