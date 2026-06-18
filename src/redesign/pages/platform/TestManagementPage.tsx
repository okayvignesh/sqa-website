'use client';

import {
  FlaskConical, ListChecks, Workflow, History, Layers, FileCheck2, Network,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function TestManagementPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Test Management',
        eyebrowIcon: <FlaskConical className="w-3.5 h-3.5" />,
        title: (
          <>
            Plan, design and <span className="gradient-text">trace every test case</span>.
          </>
        ),
        subtitle:
          'A purpose-built workspace for QA teams to plan releases, author test cases, run cycles, and trace coverage back to requirements — without leaving a single tab.',
        bullets: [
          'Requirements traceability matrix',
          'Test plans, suites & cycles',
          'Custom workflows & approval gates',
          'Real-time team collaboration',
          'Audit trails & compliance',
          'Native Jira / Azure DevOps sync',
        ],
        features: [
          { icon: <ListChecks className="w-4 h-4" />,  title: 'Test Case Management',     body: 'Author cases with rich text, attachments, and parameterization. Bulk import from Excel, Word, or any tool you\'re migrating from.' },
          { icon: <Network className="w-4 h-4" />,    title: 'Requirements Traceability', body: 'Every requirement is linked to its tests, executions, and defects — automatically. See the full coverage trail in one view.' },
          { icon: <Workflow className="w-4 h-4" />,   title: 'Test Planning & Cycles',    body: 'Build release plans, organize cycles by sprint or milestone, and watch progress against the plan in real time.' },
          { icon: <Layers className="w-4 h-4" />,     title: 'Modules & Hierarchies',     body: 'Mirror your product structure with nested modules. Permissions, ownership, and reporting roll up cleanly.' },
          { icon: <History className="w-4 h-4" />,    title: 'Audit Trails',              body: 'Every edit, status change, and approval is captured. Built for regulated workflows.' },
          { icon: <FileCheck2 className="w-4 h-4" />, title: 'Custom Workflows',          body: 'Define statuses, approvals, and gates that mirror how your team actually ships. No rigid one-size-fits-all states.' },
        ],
        capabilityHeading: 'Everything you\'d expect from enterprise ALM — and nothing you wouldn\'t.',
        capabilityList: [
          'Hierarchical test repository', 'Test case versioning & history',
          'Reusable test steps', 'Parameterization & data-driven tests',
          'Manual + automated cycles', 'Rich-text test design with screenshots',
          'Linked requirements + defects', 'Bulk operations & bulk import',
          'Role-based access control', 'SSO/SAML + audit logs',
          'Custom fields & taxonomies', 'Native Jira/ADO two-way sync',
        ],
        related: [
          { label: 'Test Automation',        to: '/platform/test-automation' },
          { label: 'AI Test Assistant',       to: '/platform/ai-test-assistant' },
          { label: 'Defect Management',       to: '/platform/defect-management' },
        ],
      }}
    />
  );
}
