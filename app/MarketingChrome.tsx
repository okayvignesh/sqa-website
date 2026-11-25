'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../src/redesign/Navbar';
import Footer from '../src/redesign/Footer';
import CalendlyModal from '../src/redesign/CalendlyModal';
import SmoothScroll from './SmoothScroll';

export default function MarketingChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const isAdmin  = pathname === '/admin' || pathname.startsWith('/admin/');
  const isAgent  = pathname === '/mcp' || pathname.startsWith('/mcp/');
  const isScroll = pathname === '/scroll' || pathname.startsWith('/scroll/');

  // Pages that need a theme override without matching a stable pathname (the
  // 404 catch-all is the current case) can set `document.body.dataset.pageTheme`.
  const [override, setOverride] = useState<'dark' | 'scroll' | null>(null);
  useEffect(() => {
    const read = () => {
      const t = document.body.dataset.pageTheme;
      setOverride(t === 'dark' || t === 'scroll' ? t : null);
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.body, { attributes: true, attributeFilter: ['data-page-theme'] });
    return () => obs.disconnect();
  }, []);

  if (isAdmin) return <>{children}</>;

  const theme: 'dark' | 'scroll' | 'light' = override ?? (isAgent ? 'dark' : isScroll ? 'scroll' : 'light');
  const dataTheme = isAgent ? 'agent' : isScroll ? 'scroll' : override === 'dark' ? 'agent' : undefined;

  return (
    <div
      className="flex flex-col min-h-screen"
      data-theme={dataTheme}
      style={isAgent ? { background: '#0A0A0F' } : undefined}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:inline-flex focus:items-center focus:px-4 focus:py-2 focus:rounded-full focus:bg-white focus:text-ink-900 focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar theme={theme} />
      <main id="main-content" className="flex-grow pt-20">{children}</main>
      {isAgent ? (
        <MiniFooter variant="dark" />
      ) : isScroll ? (
        <MiniFooter variant="scroll" />
      ) : (
        <Footer />
      )}

      <SmoothScroll />

      {/* Global "Book a demo" modal (opened via `sq:book-demo` event) */}
      <CalendlyModal />
    </div>
  );
}

function MiniFooter({ variant = 'light' }: { variant?: 'light' | 'dark' | 'scroll' }) {
  const year = new Date().getFullYear();
  const dark = variant === 'dark';
  const scroll = variant === 'scroll';
  const imgStyle: React.CSSProperties | undefined = scroll
    ? { filter: 'hue-rotate(-100deg) saturate(1.15) brightness(1.02)' }
    : undefined;
  return (
    <footer
      className="w-full"
      style={{
        background: dark ? '#0A0A0F' : 'white',
        borderTop: dark
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(15,19,34,0.06)',
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="SimplifyQA home"
        >
          <img
            src="/SimplifyQA%20logo%20Grey.png"
            alt="SimplifyQA"
            width={140}
            height={20}
            className={`h-4 w-auto select-none ${dark ? 'brightness-0 invert opacity-80' : 'opacity-80'}`}
            style={imgStyle}
            draggable={false}
          />
        </Link>
        <p
          className="text-[12.5px]"
          style={{ color: dark ? 'rgba(228,228,231,0.55)' : 'rgba(15,19,34,0.45)' }}
        >
          © {year} SimplifyQA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
