'use client';

import {
  GitBranch, ServerCog, ShieldCheck, GitMerge, Workflow, Network, Webhook,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function ReleaseOrchestrationPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Release Orchestration',
        eyebrowIcon: <GitBranch className="w-3.5 h-3.5" />,
        title: (
          <>
            Gate every release <span className="gradient-text">with quality</span>.
          </>
        ),
        subtitle:
          'Pipelines, environments, approval flows, and quality gates — connected to the CI/CD tools your engineers already use.',
        bullets: [
          'Jenkins · GitLab CI · Azure Pipelines',
          'GitHub Actions · Bitbucket Pipelines',
          'Environment promotion flows',
          'Quality gates with policy rules',
          'Release readiness scoring',
          'One-click rollback hooks',
        ],
        features: [
          { icon: <Network className="w-4 h-4" />,    title: 'Pipeline integrations',  body: 'Native plug-ins for Jenkins, GitLab CI, GitHub Actions, Azure Pipelines, Bitbucket Pipelines, Travis CI, CircleCI, Bamboo, Concourse.' },
          { icon: <ServerCog className="w-4 h-4" />,  title: 'Environments',           body: 'Model dev, QA, staging, UAT, prod. Run the right subset of tests on the right env — automatically.' },
          { icon: <Workflow className="w-4 h-4" />,   title: 'Approval gates',         body: 'Require sign-off from QA leads, release managers, or change-advisory boards before a build can move forward.' },
          { icon: <ShieldCheck className="w-4 h-4" />, title: 'Policy as code',         body: 'Block promotion when escape rate > 1%, flake rate spikes, or critical defects are open. Codify your release standards.' },
          { icon: <GitMerge className="w-4 h-4" />,   title: 'Branch-aware testing',   body: 'Smart selection runs only the tests affected by a diff. Cuts CI minutes without cutting coverage.' },
          { icon: <Webhook className="w-4 h-4" />,    title: 'Webhooks + CLI',         body: 'Trigger SimplifyQA from any tool. Stream results back to Slack, Teams, ServiceNow, PagerDuty — wherever your team listens.' },
        ],
        capabilityList: [
          'Native CI/CD plug-ins',
          'Environment-aware test runs',
          'Quality-gate policies',
          'Release readiness scoring',
          'Diff-aware test selection',
          'Approval chains',
          'Rollback signal hooks',
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
