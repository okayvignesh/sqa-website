import AITestAssistantPage from '../../../src/redesign/pages/platform/AITestAssistantPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'AI Test Assistant',
  description:
    'Write with AI, test cases from user stories, AI DataGen for test data, and plain-English answers on why a run failed, on the AI provider you choose.',
  path: '/platform/ai-test-assistant',
  image: '/platform/ai-test-assistant/opengraph-image',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',              path: '/' },
  { name: 'Platform',           path: '/#platform' },
  { name: 'AI Test Assistant',  path: '/platform/ai-test-assistant' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AITestAssistantPage />
    </>
  );
}
