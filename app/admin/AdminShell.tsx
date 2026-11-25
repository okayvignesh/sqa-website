'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Settings,
  LogOut,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';

type Props = {
  user: { id: string; email: string; name: string; role: string };
  children: React.ReactNode;
};

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/posts', label: 'Posts', icon: FileText },
  { href: '/admin/media', label: 'Media', icon: ImageIcon, disabled: true },
  { href: '/admin/settings', label: 'Settings', icon: Settings, disabled: true },
];

export default function AdminShell({ user, children }: Props) {
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function signOut() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-ink-50/60 text-ink-900 font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-ink-200/70 bg-white transition-transform duration-200 ease-spring ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-5 border-b border-ink-200/70">
          <Link href="/admin" className="flex items-center gap-2.5 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/SimplifyQA%20logo%20Grey.png"
              alt="SimplifyQA"
              className="h-5 w-auto"
            />
            <span className="text-[10.5px] uppercase tracking-wider text-ink-400 border-l border-ink-200 pl-2.5">
              Admin
            </span>
          </Link>
          <button
            type="button"
            className="md:hidden p-1.5 rounded-md hover:bg-ink-100 text-ink-500"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="px-3 py-4 space-y-0.5">
          {NAV.map((n) => {
            const Icon = n.icon;
            const active = n.exact ? pathname === n.href : pathname.startsWith(n.href);
            const cls = active
              ? 'bg-brand-50 text-brand-700'
              : n.disabled
                ? 'text-ink-300 cursor-not-allowed'
                : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900';
            const content = (
              <span className="flex items-center gap-2.5 text-[13.5px] font-medium">
                <Icon className="w-4 h-4" />
                {n.label}
                {n.disabled && (
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-ink-400">Soon</span>
                )}
              </span>
            );
            return n.disabled ? (
              <div key={n.href} className={`px-3 py-2 rounded-lg ${cls}`}>
                {content}
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg transition-colors ${cls}`}
              >
                {content}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-3 inset-x-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-ink-500 hover:bg-ink-100 hover:text-ink-900"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View live site
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <button
          aria-label="Close sidebar overlay"
          className="md:hidden fixed inset-0 z-30 bg-ink-900/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main column */}
      <div className="md:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-ink-200/70 bg-white/80 backdrop-blur px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-ink-500 hover:bg-ink-100"
              onClick={() => setOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
            <Breadcrumbs pathname={pathname} />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMenuOpen(false), 120)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-ink-100"
            >
              <span className="grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-white text-[11px] font-semibold">
                {(user.name || user.email).slice(0, 1).toUpperCase()}
              </span>
              <span className="hidden sm:flex flex-col items-start leading-tight">
                <span className="text-[12.5px] font-medium text-ink-900">{user.name || user.email}</span>
                <span className="text-[10.5px] text-ink-400 capitalize">{user.role}</span>
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-ink-400" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-ink-200/70 bg-white shadow-ring py-1.5 z-50">
                <div className="px-3 py-2 border-b border-ink-100">
                  <div className="text-[12.5px] font-medium text-ink-900 truncate">{user.email}</div>
                  <div className="text-[11px] text-ink-400 capitalize">{user.role}</div>
                </div>
                <button
                  type="button"
                  onMouseDown={signOut}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-[12.5px] text-ink-700 hover:bg-ink-100"
                >
                  <LogOut className="w-3.5 h-3.5" /> Sign out
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="p-4 sm:p-8 max-w-[1400px] mx-auto">{children}</main>
      </div>
    </div>
  );
}

function Breadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  return (
    <nav className="flex items-center gap-1.5 text-[12.5px] text-ink-500 font-medium">
      {segments.map((seg, i) => {
        const isLast = i === segments.length - 1;
        const href = '/' + segments.slice(0, i + 1).join('/');
        return (
          <span key={href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-ink-300">/</span>}
            {isLast ? (
              <span className="text-ink-900 capitalize">{seg}</span>
            ) : (
              <Link href={href} className="hover:text-ink-900 capitalize">
                {seg}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
