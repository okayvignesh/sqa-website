import { redirect } from 'next/navigation';

// ponytail: the old page was a static "all systems operational" mock, not a real status feed.
export default function Page() {
  redirect('/');
}
