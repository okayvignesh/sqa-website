'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../src/redesign/Navbar';
import Footer from '../src/redesign/Footer';

export default function MarketingChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const isAdmin = pathname === '/admin' || pathname.startsWith('/admin/');

  if (isAdmin) return <>{children}</>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
