import {
  Sparkles, Wand2, BrainCircuit, MessageSquare, Microscope, ShieldCheck, Zap,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function AITestAssistantPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'SimplifyQA AI Studio',
        eyebrowIcon: <Sparkles className="w-3.5 h-3.5" />,
        title: (
          <>
            The AI co-pilot for <span className="gradient-text">quality engineering</span>.
          </>
        ),
        subtitle:
          'A quality-tuned model grounded in your codebase, test suites, and ticket history. Built to ship — not to demo.',
        bullets: [
          'Generates test cases from user stories',
          'Self-heals broken locators',
          'Explains failures in plain English',
          'Suggests missing edge cases',
          'Grounded in your private data',
          'Available via MCP protocol',
        ],
        features: [
          { icon: <Wand2 className="w-4 h-4" />,        title: 'Generate from requirements', body: 'Paste a user story or paste a Jira link. Get a full test suite — happy path, edge cases, and negative paths — in seconds.' },
          { icon: <BrainCircuit className="w-4 h-4" />, title: 'Self-healing automation',    body: 'When the frontend shifts, locators repair themselves. The model learns from your application\'s DOM and behavior.' },
          { icon: <MessageSquare className="w-4 h-4" />, title: 'Ask anything, in plain English', body: 'Why did checkout fail in EU? Which tests changed this sprint? The assistant has the context to answer.' },
          { icon: <Microscope className="w-4 h-4" />,  title: 'Coverage gap analysis',       body: 'Point it at a service or release; it tells you what\'s under-tested before you ship, not after.' },
          { icon: <ShieldCheck className="w-4 h-4" />, title: 'Grounded & private',          body: 'Your data trains nothing outside your tenant. Available on-prem, in your VPC, or single-tenant SaaS.' },
          { icon: <Zap className="w-4 h-4" />,         title: 'Open MCP server',             body: 'Built on the Model Context Protocol — plug the assistant into Claude, Cursor, or any MCP-compatible client.' },
        ],
        capabilityHeading: 'AI that earns trust.',
        capabilityList: [
          'Quality-tuned LLM (not generic)',
          'Retrieval grounded in your repo',
          'Per-tenant data isolation',
          'BYO key (Azure OpenAI / OpenAI)',
          'Explainable outputs (cited sources)',
          'Built-in evaluations on each release',
          'Cost controls + per-team quotas',
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
