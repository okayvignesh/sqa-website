import AgentPage from '../../src/redesign/pages/AgentPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'SimplifyQA Zero-Touch Agent | An MCP server for any AI',
  description:
    'Give your AI a URL. Get a tested app back. An MCP server that plugs into Claude, ChatGPT, Cursor, Windsurf, and any AI you already use. Explores your app, writes the tests, runs them, files the defects.',
  path: '/agent',
});

export default function Page() {
  return <AgentPage />;
}
