'use client';

import {
  Users, FlaskConical, Sparkles, Workflow, GitMerge, Calendar, MessageCircle,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function AgileScrumPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Agile / Scrum',
        eyebrowIcon: <Users className="w-3.5 h-3.5" />,
        title: (
          <>
            Plan sprints around quality, <span className="gradient-text">not the other way</span>.
          </>
        ),
        subtitle:
          'Two-way sync with Jira, Linear, and Azure DevOps. Tests live next to the user story — and follow it through every status change.',
        bullets: [
          'Native Jira / Linear / ADO sync',
          'Stories linked to tests automatically',
          'Sprint-aware QA progress',
          'Story-time AI test drafting',
          'In-Slack standup updates',
          'Live boards & burndowns',
        ],
        features: [
          { icon: <FlaskConical className="w-4 h-4" />, title: 'Story-linked tests',   body: 'Every requirement carries its tests through the sprint lifecycle. No more "did anyone test EPIC-218?".' },
          { icon: <Sparkles className="w-4 h-4" />,    title: 'AI test drafting',      body: 'Paste a user story; get coverage in seconds. Edit, approve, push to the sprint.' },
          { icon: <GitMerge className="w-4 h-4" />,    title: 'Two-way ticket sync',   body: 'Status changes, comments, attachments — flow both ways with Jira, Linear, Azure DevOps.' },
          { icon: <Workflow className="w-4 h-4" />,    title: 'Sprint QA dashboard',   body: 'See test progress live in your standup — without leaving Jira. Burndown for QA, not just dev.' },
          { icon: <Calendar className="w-4 h-4" />,    title: 'Cycle planning',        body: 'Plan test cycles to match sprint cadence. SimplifyQA tracks what got tested by the end of every sprint.' },
          { icon: <MessageCircle className="w-4 h-4" />, title: 'Where your team talks', body: 'Slack + Teams + Google Chat — push test status to the channels your team already lives in.' },
        ],
        capabilityList: [
          'Jira / Linear / ADO two-way sync',
          'Sprint-aware execution',
          'QA burndown charts',
          'Auto-assign tests by story',
          'Story-to-test traceability',
          'AI-generated test cases',
          'In-channel notifications',
          'JQL-style filtering',
        ],
        related: [
          { label: 'Test Management',  to: '/platform/test-management' },
          { label: 'AI Test Assistant', to: '/platform/ai-test-assistant' },
          { label: 'Integrations',     to: '/integrations' },
        ],
      }}
    />
  );
}
