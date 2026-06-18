import HomePage from '../src/redesign/HomePage';
import { buildMetadata } from '../src/lib/seo';

export const metadata = buildMetadata({
  title: 'SimplifyQA — Intelligent ALM & Test Management Platform',
  description:
    'Enterprise-grade ALM and test management. Plan, automate, execute, and report — across the entire software lifecycle with AI-powered intelligence.',
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
