'use client';

import {
  KanbanSquare, Layers, ListChecks, Rocket, Bug, RefreshCw, Sparkles, LayoutDashboard,
} from 'lucide-react';
import ProductPage from '../ProductPage';

// Copy from the approved facts: epics, features, user stories, tasks; Sprint Board
// and My Board; releases; defects; two-way Jira and Azure DevOps sync; Write with AI.
export default function ProjectManagementPage() {
  return (
    <ProductPage
      config={{
        video: 'idea-to-sprint',
        eyebrow: 'Project Management',
        eyebrowIcon: <KanbanSquare className="w-3.5 h-3.5" />,
        title: (
          <>
            Plan, sprint, <span className="gradient-text">release</span>.
          </>
        ),
        subtitle:
          'Plan epics, features, user stories and tasks. Run sprints on the Sprint Board and My Board, plan releases and track defects, with two-way Jira and Azure DevOps sync.',
        bullets: [
          'Epics, features, user stories and tasks',
          'Sprint Board and My Board',
          'Release planning',
          'Defect tracking',
          'Write with AI on stories',
          'Two-way Jira and Azure DevOps sync',
        ],
        features: [
          { icon: <Layers className="w-4 h-4" />,          title: 'Backlog hierarchy', body: 'Break work down from epics to features, user stories and tasks, and keep every level linked.' },
          { icon: <Sparkles className="w-4 h-4" />,        title: 'Write with AI',     body: 'Draft and refine user stories with AI, then generate test cases straight from them.' },
          { icon: <KanbanSquare className="w-4 h-4" />,    title: 'Sprint Board',      body: 'Plan sprints and move stories and tasks across the board as the team works.' },
          { icon: <LayoutDashboard className="w-4 h-4" />, title: 'My Board',          body: 'Each person sees the work assigned to them in one place.' },
          { icon: <Rocket className="w-4 h-4" />,          title: 'Releases',          body: 'Group sprints and stories into releases and track what is ready to ship.' },
          { icon: <Bug className="w-4 h-4" />,             title: 'Defects',           body: 'Log defects against stories and test runs, and follow them through to closure.' },
        ],
        capabilityHeading: 'Requirements, sprints and tests in the same place.',
        capabilityList: [
          'Epics, features, stories, tasks', 'Sprint Board',
          'My Board', 'Release planning',
          'Defects linked to stories and runs', 'Test cases linked to user stories',
          'Write with AI', 'Two-way Jira sync',
          'Two-way Azure DevOps sync', 'Dashboards for releases and defects',
        ],
        related: [
          { label: 'Test Management',   to: '/platform/test-management' },
          { label: 'AI Test Assistant', to: '/platform/ai-test-assistant' },
          { label: 'Integrations',      to: '/integrations' },
        ],
      }}
    />
  );
}
