'use client';

/**
 * Global "Book a demo" modal.
 *
 * Anyone can open it via:
 *   window.dispatchEvent(new Event('sq:book-demo'))
 *
 * Or bind to a button via the exported `useBookDemo()` hook / OpenBookDemo prop.
 *
 * Mounted once by MarketingChrome, listens for the custom event, embeds
 * Calendly inline. Script + CSS are loaded lazily the first time the modal
 * opens so the rest of the site pays zero cost.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarClock, Check, Sparkles, X } from 'lucide-react';

const SUPPORT_EMAIL = 'support@simplify3x.com';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: object;
        utm?: object;
      }) => void;
    };
  }
}

const CAL_URL = 'https://calendly.com/ankita-simplify3x/new-meeting';
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css';

// Ambient accent per theme. When `data-theme="scroll"` or `"agent"` is set on
// an ancestor, we swap Calendly's own primary color + our modal accent.
type Palette = {
  label: string;
  accent: string;
  accentSoft: string;
  bg: string;
  panel: string;
  ink: string;
  inkMuted: string;
  border: string;
  ctaText: string;
  chrome: 'light' | 'dark';
};

const PALETTES: Record<'default' | 'scroll' | 'agent', Palette> = {
  default: {
    label: 'default',
    accent:     '#B91D2D',
    accentSoft: '#FEE2E2',
    bg:         '#FFFFFF',
    panel:      '#FFFFFF',
    ink:        '#0F1322',
    inkMuted:   '#6B7280',
    border:     'rgba(15,19,34,0.08)',
    ctaText:    '#FFFFFF',
    chrome:     'light',
  },
  scroll: {
    label: 'scroll',
    accent:     '#7C3AED',
    accentSoft: '#F5F3FF',
    bg:         '#FFFFFF',
    panel:      '#FFFFFF',
    ink:        '#0F1322',
    inkMuted:   '#6B7280',
    border:     'rgba(124,58,237,0.14)',
    ctaText:    '#FFFFFF',
    chrome:     'light',
  },
  agent: {
    label: 'agent',
    accent:     '#4ADE80',
    accentSoft: 'rgba(74,222,128,0.14)',
    bg:         '#0A0A0F',
    panel:      '#111117',
    ink:        '#E4E4E7',
    inkMuted:   '#8B8B96',
    border:     'rgba(255,255,255,0.10)',
    ctaText:    '#0A0A0F',
    chrome:     'dark',
  },
};

function detectTheme(): 'default' | 'scroll' | 'agent' {
  if (typeof document === 'undefined') return 'default';
  const el = document.querySelector('[data-theme]') as HTMLElement | null;
  const t = el?.dataset.theme;
  if (t === 'scroll' || t === 'agent') return t;
  return 'default';
}

let scriptLoaded: Promise<void> | null = null;
function loadCalendlyOnce(): Promise<void> {
  if (scriptLoaded) return scriptLoaded;
  scriptLoaded = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return resolve();

    // CSS
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }
    // Script
    if (window.Calendly) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Calendly failed')));
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Calendly failed to load'));
    document.head.appendChild(s);
  });
  return scriptLoaded;
}

export function useBookDemo() {
  return useCallback(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('sq:book-demo'));
    }
  }, []);
}

/**
 * Drop-in replacement for a "Book a demo" button. Uses the global modal,
 * so callers don't need to know about the event bus or hook up their own
 * state.
 */
export function BookDemoButton({
  className,
  style,
  children = 'Book a demo',
  ariaLabel,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
}) {
  const open = useBookDemo();
  return (
    <button
      type="button"
      onClick={open}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function CalendlyModal() {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState<Palette>(PALETTES.default);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const widgetRef = useRef<HTMLDivElement>(null);

  // Listen for the global open event
  useEffect(() => {
    const onOpen = () => {
      const theme = detectTheme();
      setPalette(PALETTES[theme]);
      setOpen(true);
    };
    window.addEventListener('sq:book-demo', onOpen);
    return () => window.removeEventListener('sq:book-demo', onOpen);
  }, []);

  // Body scroll lock while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape key closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Load Calendly + init widget
  useEffect(() => {
    if (!open) return;
    setStatus('loading');
    let cancelled = false;

    loadCalendlyOnce()
      .then(() => {
        if (cancelled || !widgetRef.current) return;
        widgetRef.current.innerHTML = '';
        // Compose URL with theme colors — accent hex without '#'
        const accentHex = palette.accent.replace('#', '');
        const url =
          `${CAL_URL}?hide_gdpr_banner=1&primary_color=${accentHex}` +
          (palette.chrome === 'dark' ? '&background_color=0A0A0F&text_color=E4E4E7' : '');
        window.Calendly?.initInlineWidget({
          url,
          parentElement: widgetRef.current,
        });
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [open, palette]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-[1180px] max-h-[96vh] rounded-[24px] overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: palette.panel,
              border: `1px solid ${palette.border}`,
              boxShadow:
                palette.chrome === 'dark'
                  ? '0 40px 100px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05) inset'
                  : '0 40px 100px -20px rgba(15,19,34,0.35)',
              color: palette.ink,
            }}
          >
            {/* Header bar */}
            <div
              className="flex items-center justify-between px-5 sm:px-6 py-3.5 shrink-0"
              style={{ borderBottom: `1px solid ${palette.border}` }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="grid place-items-center w-9 h-9 rounded-xl shrink-0"
                  style={{
                    background: palette.accentSoft,
                    color: palette.accent,
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  <CalendarClock className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div
                    className="text-[15px] sm:text-[16px] font-semibold leading-tight truncate"
                    style={{ color: palette.ink }}
                  >
                    Book a demo
                  </div>
                  <div
                    className="text-[12px] leading-tight truncate"
                    style={{ color: palette.inkMuted }}
                  >
                    A 30-minute walkthrough with our solutions team.
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid place-items-center w-9 h-9 rounded-full transition-colors shrink-0"
                style={{
                  color: palette.ink,
                  border: `1px solid ${palette.border}`,
                  background: 'transparent',
                }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Split body — scrolls inside the modal on tight viewports */}
            <div
              className="flex-1 min-h-0 overflow-y-auto grid md:grid-cols-[minmax(260px,340px)_1fr]"
              style={{ background: palette.chrome === 'dark' ? '#08080D' : '#FBFAFF' }}
            >
              {/* Left: context panel — compact so it fits without inner scroll */}
              <aside
                className="hidden md:flex flex-col p-5 gap-4 relative overflow-hidden"
                style={{
                  background: palette.panel,
                  borderRight: `1px solid ${palette.border}`,
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-16 w-[280px] h-[280px] rounded-full blur-3xl"
                  style={{
                    background: palette.accentSoft,
                    opacity: palette.chrome === 'dark' ? 0.5 : 0.9,
                  }}
                />
                <div className="relative">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full pl-1 pr-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] border"
                    style={{
                      background: palette.accentSoft,
                      color: palette.accent,
                      borderColor: palette.border,
                    }}
                  >
                    <span
                      className="grid place-items-center w-4 h-4 rounded-full"
                      style={{ background: palette.accent, color: palette.ctaText }}
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                    </span>
                    30 mins · free
                  </span>

                  <h3
                    className="mt-3 font-display text-[20px] sm:text-[22px] leading-[1.15] tracking-tight"
                    style={{ color: palette.ink }}
                  >
                    See SimplifyQA on your real workflows.
                  </h3>
                  <p
                    className="mt-2 text-[12.5px] leading-relaxed"
                    style={{ color: palette.inkMuted }}
                  >
                    Not a slideware pitch. We'll walk the platform on a workflow
                    that matches your team.
                  </p>
                </div>

                <ul className="relative space-y-2">
                  {[
                    'Solutions engineer + your AE on the call',
                    'Live walkthrough on your stack',
                    '14-day pilot if it fits',
                    'Pricing tailored to your team',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-[12.5px]">
                      <span
                        className="grid place-items-center w-4 h-4 mt-0.5 rounded-full shrink-0"
                        style={{ background: palette.accentSoft, color: palette.accent, border: `1px solid ${palette.border}` }}
                      >
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span style={{ color: palette.ink }}>{t}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="relative rounded-xl p-3 border"
                  style={{
                    background: palette.chrome === 'dark' ? 'rgba(255,255,255,0.02)' : palette.accentSoft + '60',
                    borderColor: palette.border,
                  }}
                >
                  <div
                    className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-1"
                    style={{ color: palette.accent }}
                  >
                    Trusted by
                  </div>
                  <div className="text-[12.5px] font-medium" style={{ color: palette.ink }}>
                    1,200+ QA and engineering teams
                  </div>
                  <div className="mt-0.5 text-[11px] leading-snug" style={{ color: palette.inkMuted }}>
                    Malaysia Airlines · SMFG · CGC · Quest Alliance
                  </div>
                </div>

                <div className="relative mt-auto text-[11px] leading-snug" style={{ color: palette.inkMuted }}>
                  Not ready to talk?{' '}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-medium underline underline-offset-2"
                    style={{ color: palette.accent }}
                  >
                    Email us instead
                  </a>
                  .
                </div>
              </aside>

              {/* Right: Calendly widget */}
              <div className="relative min-h-[760px]" style={{ background: palette.chrome === 'dark' ? '#0A0A0F' : '#FFFFFF' }}>
                {status !== 'ready' && (
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    {status === 'error' ? (
                      <div className="text-center max-w-xs" style={{ color: palette.inkMuted }}>
                        <div className="text-[13.5px] font-semibold" style={{ color: palette.ink }}>
                          Calendar couldn't load.
                        </div>
                        <div className="mt-1 text-[12.5px]">
                          Try again, or{' '}
                          <a
                            href={`mailto:${SUPPORT_EMAIL}`}
                            className="font-medium underline underline-offset-2"
                            style={{ color: palette.accent }}
                          >
                            email our team
                          </a>
                          .
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3" style={{ color: palette.inkMuted }}>
                        <div
                          className="w-8 h-8 rounded-full border-2"
                          style={{
                            borderColor: palette.border,
                            borderTopColor: palette.accent,
                            animation: 'sq-cal-spin 0.9s linear infinite',
                          }}
                        />
                        <div className="text-[12.5px]">Loading calendar…</div>
                        <style>{`@keyframes sq-cal-spin { to { transform: rotate(360deg); } }`}</style>
                      </div>
                    )}
                  </div>
                )}
                <div ref={widgetRef} style={{ width: '100%', height: '100%', minHeight: 760 }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
