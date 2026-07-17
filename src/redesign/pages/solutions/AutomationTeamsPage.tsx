'use client';

import {
  Cpu, Wand2, Smartphone, Globe, Database, Bot, Boxes,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function AutomationTeamsPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Automation Teams',
        eyebrowIcon: <Cpu className="w-3.5 h-3.5" />,
        title: (
          <>
            Replace fragile scripts with <span className="gradient-text">intelligence</span>.
          </>
        ),
        subtitle:
          'A platform designed for the people maintaining automation suites at scale. Low-code authoring, self-healing locators, and AI-driven coverage analysis.',
        bullets: [
          'Author once, run on web · mobile · API · desktop',
          'Self-healing locators',
          'Parallel execution grids',
          'AI test generation + repair',
          'Reusable keyword libraries',
          'CI/CD-native triggers',
        ],
        features: [
          { icon: <Wand2 className="w-4 h-4" />,     title: 'Low-code authoring',   body: 'A visual canvas your QA team can drive, no Selenium expertise required. Drop into code-mode whenever you need.' },
          { icon: <Bot className="w-4 h-4" />,       title: 'Self-healing locators', body: 'AI keeps suites green across UI drift and frontend rewrites. Repair suggestions you can approve in one click.' },
          { icon: <Globe className="w-4 h-4" />,     title: 'Cross-platform',       body: 'Web, mobile (iOS + Android), API, desktop, and enterprise apps (SAP, Salesforce, Siebel). One platform, every surface.' },
          { icon: <Database className="w-4 h-4" />,  title: 'Data-driven testing',  body: 'Excel, CSV, JSON, and direct DB queries, feed any source into any test, with parameterization the whole team understands.' },
          { icon: <Boxes className="w-4 h-4" />,     title: 'Scale execution',      body: 'Bring your own grid or use BrowserStack, Sauce Labs, LambdaTest. Distribute thousands of tests across nodes in parallel.' },
          { icon: <Smartphone className="w-4 h-4" />, title: 'Real device clouds',   body: 'iOS and Android testing on real devices. Touch gestures, location, network shaping, all scriptable.' },
        ],
        capabilityList: [
          'Visual + code-mode authoring',
          'Selenium / Playwright compatible',
          'Object repository with versioning',
          'AI-generated edge cases',
          'Auto-retry with smart backoff',
          'Screenshot + video evidence',
          'Custom keyword libraries',
          'Webhook + Slack notifications',
        ],
        related: [
          { label: 'AI Test Assistant',  to: '/platform/ai-test-assistant' },
          { label: 'Test Automation',    to: '/platform/test-automation' },
          { label: 'Integrations',       to: '/integrations' },
        ],
      }}
    />
  );
}
