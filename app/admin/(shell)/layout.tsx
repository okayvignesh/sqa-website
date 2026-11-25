import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../src/lib/auth';
import AdminShell from '../AdminShell';

export default async function ShellLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/admin/login');

  return (
    <AdminShell
      user={{
        id: String(user._id),
        email: user.email,
        name: user.name || user.email,
        role: user.role,
      }}
    >
      {children}
    </AdminShell>
  );
}
