'use client';

import {
  Zap, Smartphone, Globe, Database, Monitor, Cpu, Boxes,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function TestAutomationPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Test Automation',
        eyebrowIcon: <Zap className="w-3.5 h-3.5" />,
        title: (
          <>
            Low-code automation, <span className="gradient-text">enterprise scale</span>.
          </>
        ),
        subtitle:
          'Author tests once and run them across web, mobile, API, desktop, and enterprise apps. Designed so QA engineers, not just SDETs, can build reliable suites.',
        bullets: [
          'Web · Mobile · API · Desktop',
          'Selenium & Playwright compatible',
          'Parallel execution grids',
          'Self-healing locators',
          'Visual regression testing',
          'CI/CD pipeline triggers',
        ],
        features: [
          { icon: <Globe className="w-4 h-4" />,     title: 'Web Automation',     body: 'Cross-browser automation built on Selenium and Playwright. Visual regression, responsive testing, and performance traces, included.' },
          { icon: <Smartphone className="w-4 h-4" />, title: 'Mobile Automation',  body: 'iOS and Android testing on real device clouds, emulators, or your private lab. Touch gestures, location, network shaping, all scriptable.' },
          { icon: <Database className="w-4 h-4" />,  title: 'API & Database',     body: 'REST, GraphQL, and SOAP endpoints with full assertion libraries. Direct DB queries (PostgreSQL, Oracle, SQL Server) for end-to-end validation.' },
          { icon: <Monitor className="w-4 h-4" />,   title: 'Desktop Automation', body: 'Native Windows, Mac, and Linux apps, UI Automation, image recognition, and Java/.NET/Mainframe support.' },
          { icon: <Cpu className="w-4 h-4" />,       title: 'Enterprise Apps',    body: 'SAP, Salesforce, Siebel, Oracle EBS, and Mainframe, first-class connectors. No third-party plugins.' },
          { icon: <Boxes className="w-4 h-4" />,     title: 'Parallel Grids',     body: 'Bring your own grid or use BrowserStack, Sauce Labs, LambdaTest. Distribute thousands of tests across nodes.' },
        ],
        capabilityHeading: 'The breadth that enterprise testing actually needs.',
        capabilityList: [
          'Visual drag-and-drop authoring', 'Code-mode for senior SDETs',
          'Reusable keyword libraries', 'Data-driven testing with Excel/CSV',
          'Self-healing object locators', 'Auto-retry with smart backoff',
          'Screenshot + video evidence', 'Performance metrics per test',
          'Scheduled runs (cron, on-merge)', 'Webhook + CI/CD triggers',
          'Per-team execution credits', 'Rich HTML + PDF reports',
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
