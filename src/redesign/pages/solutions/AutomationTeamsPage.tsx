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
          'A platform designed for the people maintaining automation suites at scale. Low-code authoring, rule-based self-healing locators, and test cases drafted with AI.',
        bullets: [
          'Eight technologies, mixable in one test case',
          'Rule-based self-healing locators',
          'Parallel execution',
          'AI test case generation',
          'Reusable keyword libraries',
          'CI runs through the REST API',
        ],
        features: [
          { icon: <Wand2 className="w-4 h-4" />,     title: 'Low-code authoring',   body: 'About 370 no-code actions your QA team can drive, no scripting expertise required.' },
          { icon: <Bot className="w-4 h-4" />,       title: 'Self-healing locators', body: 'Rule-based self-healing for web and iOS keeps suites running through UI changes. Each fix is saved to the object repository.' },
          { icon: <Globe className="w-4 h-4" />,     title: 'Cross-platform',       body: 'Web, Android, iOS, Desktop (Windows), Mainframe, SAP, API and Database. Mix technologies in one test case.' },
          { icon: <Database className="w-4 h-4" />,  title: 'Data-driven testing',  body: 'Excel, CSV, JSON, and direct DB queries, feed any source into any test, with parameterization the whole team understands.' },
          { icon: <Boxes className="w-4 h-4" />,     title: 'Scale execution',      body: 'Run in parallel on local or remote agents, cloud machines or Kubernetes. Failed tests re-run automatically.' },
          { icon: <Smartphone className="w-4 h-4" />, title: 'Mobile device clouds', body: 'Run iOS and Android tests on BrowserStack, LambdaTest or Sauce Labs device clouds.' },
        ],
        capabilityList: [
          'No-code authoring',
          'Object repository with versioning',
          'AI-generated test cases',
          'Automatic re-run of failed tests',
          'Screenshot + video evidence',
          'Custom keyword libraries',
          'Slack + Microsoft Teams notifications',
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
