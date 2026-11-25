'use client';

import {
  Zap, Smartphone, Globe, Database, Monitor, Cpu, Boxes,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function TestAutomationPage() {
  return (
    <ProductPage
      config={{
        video: 'automate',
        eyebrow: 'Test Automation',
        eyebrowIcon: <Zap className="w-3.5 h-3.5" />,
        title: (
          <>
            Low-code automation, <span className="gradient-text">enterprise scale</span>.
          </>
        ),
        subtitle:
          'Author tests once and run them across eight technologies: Web, Android, iOS, Desktop, Mainframe, SAP, API and Database. Designed so QA engineers, not just SDETs, can build reliable suites.',
        bullets: [
          'Web · Android · iOS · Desktop',
          'Mainframe · SAP · API · Database',
          'About 370 no-code actions',
          'Parallel runs, automatic re-runs',
          'Rule-based self-healing locators',
          'Any CI tool via the REST API',
        ],
        features: [
          { icon: <Globe className="w-4 h-4" />,     title: 'Web Automation',     body: 'Web automation built from about 370 no-code actions. Rule-based self-healing locators keep tests running when the page changes.' },
          { icon: <Smartphone className="w-4 h-4" />, title: 'Mobile Automation',  body: 'Android and iOS app testing, including on BrowserStack, LambdaTest and Sauce Labs device clouds.' },
          { icon: <Database className="w-4 h-4" />,  title: 'API & Database',     body: 'API and Database testing, mixed with UI steps in the same test case for end-to-end validation.' },
          { icon: <Monitor className="w-4 h-4" />,   title: 'Desktop Automation', body: 'Windows desktop applications, automated with the same no-code actions as the rest of your suite.' },
          { icon: <Cpu className="w-4 h-4" />,       title: 'SAP & Mainframe',    body: 'SAP and Mainframe are built in, alongside Web, Android, iOS, Desktop, API and Database. No third-party plugins.' },
          { icon: <Boxes className="w-4 h-4" />,     title: 'Parallel Runs',      body: 'Run in parallel on local or remote agents, cloud machines or Kubernetes. Failed tests re-run automatically.' },
        ],
        capabilityHeading: 'The breadth that enterprise testing actually needs.',
        capabilityList: [
          'Visual drag-and-drop authoring', 'Code-mode for senior SDETs',
          'Reusable keyword libraries', 'Data-driven testing with Excel/CSV',
          'Rule-based self-healing (web, iOS)', 'Automatic re-run of failed tests',
          'Mix technologies in one test case', 'Defects logged from failed runs',
          'Schedules: once to monthly', 'CI runs via the REST API',
          'Per-team execution credits', 'Step-by-step reports + PDF export',
        ],
        related: [
          { label: 'AI Test Assistant',       to: '/platform/ai-test-assistant' },
          { label: 'Release Orchestration',   to: '/platform/release-orchestration' },
          { label: 'Insights & Reports',      to: '/platform/insights-reports' },
        ],
      }}
    />
  );
}
