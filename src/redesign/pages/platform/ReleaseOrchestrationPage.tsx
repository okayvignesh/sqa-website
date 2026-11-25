'use client';

import {
  GitBranch, ServerCog, ShieldCheck, GitMerge, Workflow, Network, Webhook,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function ReleaseOrchestrationPage() {
  return (
    <ProductPage
      config={{
        video: 'execution-plan',
        eyebrow: 'Release Orchestration',
        eyebrowIcon: <GitBranch className="w-3.5 h-3.5" />,
        title: (
          <>
            Gate every release <span className="gradient-text">with quality</span>.
          </>
        ),
        subtitle:
          'Environments, approval flows, and quality gates. Any CI tool your engineers already use starts SimplifyQA runs through the REST API.',
        bullets: [
          'Any CI tool via the REST API',
          'GitHub Actions integration',
          'Environment promotion flows',
          'Quality gates with policy rules',
          'Release readiness scoring',
          'Schedules: once to monthly',
        ],
        features: [
          { icon: <Network className="w-4 h-4" />,    title: 'CI through the REST API', body: 'Any CI tool starts SimplifyQA runs through the REST API. A GitHub Actions integration is also available.' },
          { icon: <ServerCog className="w-4 h-4" />,  title: 'Environments',           body: 'Model dev, QA, staging, UAT, prod. Run the right subset of tests on the right env, automatically.' },
          { icon: <Workflow className="w-4 h-4" />,   title: 'Approval gates',         body: 'Require sign-off from QA leads, release managers, or change-advisory boards before a build can move forward.' },
          { icon: <ShieldCheck className="w-4 h-4" />, title: 'Policy as code',         body: 'Block promotion when escape rate > 1%, flake rate spikes, or critical defects are open. Codify your release standards.' },
          { icon: <GitMerge className="w-4 h-4" />,   title: 'Scheduled runs',         body: 'Run suites once, every few minutes, hourly, daily, weekly or monthly, on local or remote agents, cloud machines or Kubernetes.' },
          { icon: <Webhook className="w-4 h-4" />,    title: 'Slack + Teams',          body: 'Start runs from any tool through the REST API. Send results to Slack or Microsoft Teams, wherever your team listens.' },
        ],
        capabilityList: [
          'CI runs via the REST API',
          'Environment-aware test runs',
          'Quality-gate policies',
          'Release readiness scoring',
          'Scheduled runs, once to monthly',
          'Approval chains',
          'Parallel runs + automatic re-runs',
          'Full audit log per release',
        ],
        related: [
          { label: 'Insights & Reports',  to: '/platform/insights-reports' },
          { label: 'Test Automation',     to: '/platform/test-automation' },
          { label: 'Integrations',        to: '/integrations' },
        ],
      }}
    />
  );
}
