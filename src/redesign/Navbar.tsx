'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../design';
import { useBookDemo } from './CalendlyModal';

type Theme = 'light' | 'dark' | 'scroll';

const platformLinks = [
  ['Project Management', '/platform/project-management'],
  ['Test Management', '/platform/test-management'],
  ['Test Automation', '/platform/test-automation'],
  ['AI Test Assistant', '/platform/ai-test-assistant'],
  ['Defect Management', '/platform/defect-management'],
  ['Release Orchestration', '/platform/release-orchestration'],
  ['Insights & Reports', '/platform/insights-reports'],
];

const navLinks = [
  ['SimplifyQA MCP', '/mcp'],
  ['Demos', '/demos'],
  ['Integrations', '/integrations'],
  ['Pricing', '/pricing'],
  ['Customers', '/customer-success'],
  ['Docs', 'https://docs.simplifyqa.ai'],
];

// Docs lives on its own site, so it opens in a new tab.
function NavLink({ to, className, onClick, children }: { to: string; className: string; onClick?: () => void; children: React.ReactNode }) {
  return to.startsWith('http')
    ? <a href={to} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{children}</a>
    : <Link href={to} className={className} onClick={onClick}>{children}</Link>;
}

export default function NavbarV2({ theme = 'light' }: { theme?: Theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const dark = theme === 'dark';
  const scroll = theme === 'scroll';
  const bookDemo = useBookDemo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Palette per theme
  const p = dark
    ? {
        navBg:      'bg-[#0F0F16]/85 border border-white/10 backdrop-blur-xl',
        navBgIdle:  'bg-[#0F0F16]/70 border border-white/10 backdrop-blur-xl',
        link:       'text-zinc-300 hover:text-white hover:bg-white/5',
        mobileBtn:  'hover:bg-white/10 text-zinc-200',
        mobilePanel:'bg-[#0F0F16]/95 border border-white/10',
        mobileLink: 'text-zinc-200 hover:bg-white/5',
        logoStyle:  { filter: 'brightness(0) invert(1) opacity(0.9)' } as React.CSSProperties,
        ctaClass:   'bg-white text-[#0A0A0F] hover:bg-zinc-100',
        ctaStyle:   undefined,
      }
    : scroll
    ? {
        navBg:      'glass-strong shadow-[0_10px_40px_-20px_rgba(37,99,235,0.20)]',
        navBgIdle:  '',
        link:       'text-ink-700 hover:text-ink-900 hover:bg-[#EFF6FF]',
        mobileBtn:  'hover:bg-[#EFF6FF]',
        mobilePanel:'glass-strong',
        mobileLink: 'text-ink-800 hover:bg-[#EFF6FF]',
        // Recolor the SimplifyQA wordmark PNG: shift the red "QA" glyphs
        // toward blue (grey portions have no hue so hue-rotate leaves them
        // untouched). Purely a scroll-page treatment.
        logoStyle:  { filter: 'hue-rotate(-132deg) saturate(1.15) brightness(1.02)' } as React.CSSProperties,
        ctaClass:   'text-white',
        ctaStyle:   {
          background: 'linear-gradient(180deg, #3B82F6 0%, #2563EB 60%, #1E40AF 100%)',
          boxShadow: '0 12px 30px -8px rgba(37,99,235,0.55), 0 1px 0 rgba(255,255,255,0.2) inset',
        } as React.CSSProperties,
      }
    : {
        navBg:      'glass-strong shadow-[0_10px_40px_-20px_rgba(15,19,34,0.18)]',
        navBgIdle:  '',
        link:       'text-ink-700 hover:text-ink-900 hover:bg-ink-50',
        mobileBtn:  'hover:bg-ink-50',
        mobilePanel:'glass-strong',
        mobileLink: 'text-ink-800 hover:bg-white',
        logoStyle:  undefined,
        ctaClass:   'btn-primary',
        ctaStyle:   undefined,
      };

  const ctaClassName = 'inline-flex items-center gap-2 whitespace-nowrap h-10 px-5 rounded-full text-[14px] font-semibold transition-colors';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-spring',
        scrolled ? 'pt-3' : 'pt-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            'relative flex items-center justify-between rounded-full transition-all duration-300 ease-spring',
            scrolled ? cn(p.navBg, 'h-14 px-3 sm:px-4') : cn(p.navBgIdle, 'h-16 px-3 sm:px-5'),
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2 group" aria-label="SimplifyQA home">
            <img
              src="/simplifyqa-logo-grey.png"
              alt="SimplifyQA"
              width={140}
              height={20}
              className={cn('w-auto select-none transition-all duration-300', scrolled ? 'h-4' : 'h-[18px]')}
              style={p.logoStyle}
              draggable={false}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-0.5">
            <li className="relative group">
              <button
                type="button"
                className={cn('inline-flex items-center gap-1 h-9 px-3 text-sm font-medium rounded-full transition-colors', p.link)}
              >
                Platform <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-0 top-full pt-2 z-10">
                <div className="w-60 rounded-2xl p-2 bg-white border border-ink-900/[0.08] shadow-[0_20px_50px_-20px_rgba(15,19,34,0.35)]">
                  {platformLinks.map(([label, to]) => (
                    <Link key={to} href={to} className="block px-3 py-2 rounded-xl text-[14px] font-medium text-ink-700 hover:text-ink-900 hover:bg-ink-50">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {navLinks.map(([label, to]) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={cn('inline-flex items-center h-9 px-3 text-sm font-medium rounded-full whitespace-nowrap transition-colors', p.link)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-2">
            {scroll || dark ? (
              <button
                type="button"
                onClick={bookDemo}
                className={cn(ctaClassName, p.ctaClass)}
                style={p.ctaStyle}
              >
                Book a demo
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={bookDemo}
                className="btn-primary h-10 px-5 whitespace-nowrap"
              >
                Book a demo
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className={cn('xl:hidden p-2 rounded-full', p.mobileBtn)}
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="xl:hidden mx-4 mt-3"
          >
            <div data-lenis-prevent className={cn('rounded-3xl p-3 max-h-[calc(100dvh-7rem)] overflow-y-auto', p.mobilePanel)}>
              <div className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider opacity-60">Platform</div>
              {platformLinks.map(([label, to]) => (
                <Link
                  key={to}
                  href={to}
                  onClick={() => setMobile(false)}
                  className={cn('block px-4 py-2 rounded-2xl text-[14px] font-medium', p.mobileLink)}
                >
                  {label}
                </Link>
              ))}
              <div className="my-2 border-t border-current opacity-10" />
              {navLinks.map(([label, to]) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={() => setMobile(false)}
                  className={cn('block px-4 py-3 rounded-2xl text-[15px] font-medium', p.mobileLink)}
                >
                  {label}
                </NavLink>
              ))}
              {scroll || dark ? (
                <button
                  type="button"
                  onClick={() => { setMobile(false); bookDemo(); }}
                  className={cn('mt-2 inline-flex items-center justify-center w-full h-10 rounded-full text-[14px] font-semibold', p.ctaClass)}
                  style={p.ctaStyle}
                >
                  Book a demo
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setMobile(false); bookDemo(); }}
                  className="mt-2 btn-primary w-full"
                >
                  Book a demo
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
