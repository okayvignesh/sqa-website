import Link from 'next/link';
import { Container } from '../../design';

const items = [
  ['Project management', '/platform/project-management'],
  ['Test management', '/platform/test-management'],
  ['No-code automation', '/platform/test-automation'],
  ['AI built in', '/platform/ai-test-assistant'],
  ['SimplifyQA MCP', '/mcp'],
];

// One line under the hero naming the five things SimplifyQA does.
export default function CapabilityStrip() {
  return (
    <section aria-label="What SimplifyQA does" className="relative bg-white pb-10">
      <Container size="wide">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[14.5px] font-medium text-ink-700">
          {items.map(([label, to], i) => (
            <li key={to} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-brand-400">·</span>}
              <Link href={to} className="px-1 hover:text-brand-700 transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
