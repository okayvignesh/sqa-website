import type { Metadata } from 'next';
import NotFoundGame from '../src/redesign/components/NotFoundGame';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'That page wandered off. Defeat the bugs to return to SimplifyQA.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundGame />;
}
