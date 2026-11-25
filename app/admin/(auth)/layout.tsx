import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../src/lib/auth';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (user) redirect('/admin');
  return <>{children}</>;
}
