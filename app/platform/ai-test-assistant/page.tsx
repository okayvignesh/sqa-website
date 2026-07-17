import AITestAssistantPage from '../../../src/redesign/pages/platform/AITestAssistantPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'AI Test Assistant',
  description:
    'Quality-tuned LLMs that draft tests, suggest fixes, and review releases, grounded in your own product context.',
  path: '/platform/ai-test-assistant',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',              path: '/' },
  { name: 'Platform',           path: '/platform/ai-test-assistant' },
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
