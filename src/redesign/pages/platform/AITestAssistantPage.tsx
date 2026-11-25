'use client';

import {
  Sparkles, Wand2, BrainCircuit, MessageSquare, Microscope, ShieldCheck, Zap,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function AITestAssistantPage() {
  return (
    <ProductPage
      config={{
        video: 'mcp-story-to-tests',
        eyebrow: 'SimplifyQA AI Studio',
        eyebrowIcon: <Sparkles className="w-3.5 h-3.5" />,
        title: (
          <>
            The AI co-pilot for <span className="gradient-text">quality engineering</span>.
          </>
        ),
        subtitle:
          'AI built into stories, test cases, defects and runs, working with your own AI model keys on the provider you choose. Built to ship, not to demo.',
        bullets: [
          'Generates test cases from user stories',
          'Write with AI on stories, tests, defects',
          'Explains why a run failed',
          'AI DataGen for test data',
          'Works with your own AI model keys',
          'Available via MCP protocol',
        ],
        features: [
          { icon: <Wand2 className="w-4 h-4" />,        title: 'Generate from requirements', body: 'Paste a user story or paste a Jira link. Get a full test suite, happy path, edge cases, and negative paths, in seconds.' },
          { icon: <BrainCircuit className="w-4 h-4" />, title: 'AI DataGen',                 body: 'Generate test data for your test cases with AI DataGen instead of building spreadsheets by hand.' },
          { icon: <MessageSquare className="w-4 h-4" />, title: 'Ask anything, in plain English', body: 'Ask the assistant why a run failed and get the answer in plain English.' },
          { icon: <Microscope className="w-4 h-4" />,  title: 'Write with AI',               body: 'Draft and refine user stories, test cases and defects with Write with AI, or shape stories in Story Studio.' },
          { icon: <ShieldCheck className="w-4 h-4" />, title: 'Your provider, your keys',    body: 'AI runs on the provider you choose, with your own model keys. SimplifyQA is available as SaaS or on-premise.' },
          { icon: <Zap className="w-4 h-4" />,         title: 'SimplifyQA MCP',              body: 'From Claude, Cursor, VS Code with Copilot, Windsurf, Codex or Devin, create test cases from user stories, record and run tests, and find out why a run failed.' },
        ],
        capabilityHeading: 'AI that earns trust.',
        capabilityList: [
          'Works with your chosen AI provider',
          'Test cases from user stories',
          'Per-tenant data isolation',
          'BYO key (Azure OpenAI / OpenAI)',
          'Story Studio',
          'AI DataGen for test data',
          'Ask why a run failed',
          'Audit log for every generation',
        ],
        related: [
          { label: 'Test Management',        to: '/platform/test-management' },
          { label: 'Test Automation',        to: '/platform/test-automation' },
          { label: 'Defect Management',      to: '/platform/defect-management' },
        ],
      }}
    />
  );
}
