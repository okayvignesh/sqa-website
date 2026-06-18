import EnterpriseQAPage from '../../../src/redesign/pages/solutions/EnterpriseQAPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Enterprise QA',
  description:
    'Govern, scale, and modernise QA across thousands of testers — without losing speed or compliance.',
  path: '/solutions/enterprise-qa',
});

export default function Page() {
  return <EnterpriseQAPage />;
}
