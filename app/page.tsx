import HomePage from '../src/redesign/HomePage';
import { buildMetadata } from '../src/lib/seo';

export const metadata = buildMetadata({
  title: 'SimplifyQA | AI Test Automation & Test Management Software',
  description:
    'SimplifyQA is an AI-powered test automation and test management platform for web, mobile, API, SAP, and mainframe teams. Plan, automate, execute, report.',
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
