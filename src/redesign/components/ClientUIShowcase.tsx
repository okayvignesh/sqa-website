'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, Paperclip, Plus, Search, Send,
  Sparkles, Terminal, User,
} from 'lucide-react';
import { SiClaude, SiOpenai, SiWindsurf } from 'react-icons/si';

/* -------------------------------------------------------------------------- */
/*  Conversations                                                             */
/* -------------------------------------------------------------------------- */

type ClientKey = 'claude' | 'cursor' | 'windsurf' | 'chatgpt';

type Convo = {
  key: ClientKey;
  clientName: string;
  workspace: string;         // shown in the chrome / sidebar
  prompt: string;
  response: string[];
};

const CONVOS: Convo[] = [
  {
    key: 'claude',
    clientName: 'Claude',
    workspace: 'ACME Shop · QA',
    prompt: 'Test https://shop.acme.com with admin@acme.com / hunter2. Save to project ACME Shop. Run the suite.',
    response: [
      'I explored 24 pages and generated 41 test cases across login, browse, cart, checkout, and profile.',
      'Saved as suite ACME_Checkout_v1 in your SimplifyQA Payments project.',
      'Executed against staging: 37 passed, 3 failed (defects auto-filed in Jira: ACMESH-1041, 1042, 1043), 1 self-healed (locator drift on the promo banner).',
      "Here's the RTM as Excel.",
    ],
  },
  {
    key: 'cursor',
    clientName: 'Cursor',
    workspace: '~/payments · main',
    prompt: 'Here is the Payments BRD. Generate features → stories → API tests, then run them against staging.',
    response: [
      'Uploaded the BRD, extracted 8 features, generated 25 user stories with acceptance criteria.',
      'Then 120 API test cases with proper tcType=API. All saved to your Payments project.',
      'Triggered execution against staging. 112 passed, 8 failed (defects in Jira). RTM exported.',
    ],
  },
  {
    key: 'windsurf',
    clientName: 'Windsurf',
    workspace: 'payments-svc · Cascade',
    prompt: 'Make TC-1041 focus on negative scenarios — invalid tokens, expired tokens, malformed payloads.',
    response: [
      'Fetched TC-1041, regenerated the steps with negative-scenario focus, saved in place.',
      'Test ID unchanged. Test Management updated. Version history preserved.',
    ],
  },
  {
    key: 'chatgpt',
    clientName: 'ChatGPT',
    workspace: 'Order-flow verification',
    prompt: 'Test the order placement flow: web checkout, then verify the API received it, then verify the DB row exists.',
    response: [
      'Generated a HYBRID test case with three phases: web steps for checkout, API assertion for the order endpoint, SQL query for the orders table.',
      'Executed across all three plugins. Passed end-to-end.',
      'Order ORD-78421 confirmed in DB with matching payload.',
    ],
  },
];

const CYCLE_MS = 7000;

/* -------------------------------------------------------------------------- */
/*  Carousel                                                                  */
/* -------------------------------------------------------------------------- */

export default function ClientUIShowcase() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % CONVOS.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [paused]);

  const go = (i: number) => setIdx(((i % CONVOS.length) + CONVOS.length) % CONVOS.length);

  const active = CONVOS[idx];

  return (
    <div
      className="relative mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top tab strip — click to jump */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {CONVOS.map((c, i) => {
          const IconEl = ICONS[c.key];
          const on = i === idx;
          return (
            <button
              key={c.key}
              onClick={() => go(i)}
              className="group inline-flex items-center gap-2 rounded-full pl-1.5 pr-3 py-1.5 text-[12px] font-semibold font-mono uppercase tracking-[0.14em] transition-colors border"
              style={{
                background: on ? 'rgba(74,222,128,0.14)' : 'rgba(15,15,22,0.85)',
                borderColor: on ? 'rgba(74,222,128,0.55)' : 'rgba(255,255,255,0.10)',
                color: on ? '#4ADE80' : '#8B8B96',
              }}
              aria-current={on ? 'true' : undefined}
            >
              <span
                className="grid place-items-center w-6 h-6 rounded-full"
                style={{
                  background: on ? '#4ADE80' : 'rgba(255,255,255,0.06)',
                  color: on ? '#0A0A0F' : '#E4E4E7',
                }}
              >
                <IconEl className="w-3 h-3" />
              </span>
              {c.clientName}
            </button>
          );
        })}

        {/* Prev / next */}
        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => go(idx - 1)}
            className="grid place-items-center w-8 h-8 rounded-full border transition-colors"
            style={{
              background: 'rgba(15,15,22,0.85)',
              borderColor: 'rgba(255,255,255,0.12)',
              color: '#E4E4E7',
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(idx + 1)}
            className="grid place-items-center w-8 h-8 rounded-full border transition-colors"
            style={{
              background: 'rgba(15,15,22,0.85)',
              borderColor: 'rgba(255,255,255,0.12)',
              color: '#E4E4E7',
            }}
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Frame */}
      <div
        className="relative rounded-[24px] overflow-hidden"
        style={{
          background: '#0A0A0F',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 40px 80px -30px rgba(0,0,0,0.6)',
        }}
      >
        {/* Ambient wash matching the active brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-colors duration-700"
          style={{
            background:
              active.key === 'claude'
                ? 'radial-gradient(50% 40% at 20% 0%, rgba(217,119,87,0.14), transparent 70%)'
                : active.key === 'cursor'
                ? 'radial-gradient(50% 40% at 20% 0%, rgba(139,92,246,0.10), transparent 70%)'
                : active.key === 'windsurf'
                ? 'radial-gradient(50% 40% at 20% 0%, rgba(0,166,126,0.14), transparent 70%)'
                : 'radial-gradient(50% 40% at 20% 0%, rgba(255,255,255,0.05), transparent 70%)',
          }}
        />

        {/* Slide viewport (16:10) */}
        <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 p-3 sm:p-5"
            >
              {active.key === 'claude'   && <ClaudeDesktopSlide c={active} />}
              {active.key === 'cursor'   && <CursorSlide c={active} />}
              {active.key === 'windsurf' && <WindsurfSlide c={active} />}
              {active.key === 'chatgpt'  && <ChatGPTSlide c={active} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom progress bar */}
        <div className="relative h-1 w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            key={idx + (paused ? '-paused' : '')}
            initial={{ width: 0 }}
            animate={{ width: paused ? '100%' : '100%' }}
            transition={{ duration: paused ? 0 : CYCLE_MS / 1000, ease: 'linear' }}
            className="absolute inset-y-0 left-0"
            style={{ background: '#4ADE80' }}
          />
        </div>
      </div>
    </div>
  );
}

const ICONS: Record<ClientKey, React.ComponentType<{ className?: string }>> = {
  claude:   SiClaude,
  cursor:   () => <span className="font-mono font-bold text-[11px]">C</span>,
  windsurf: SiWindsurf,
  chatgpt:  SiOpenai,
};

/* -------------------------------------------------------------------------- */
/*  Slide: Claude Desktop                                                     */
/* -------------------------------------------------------------------------- */

function ClaudeDesktopSlide({ c }: { c: Convo }) {
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden flex"
      style={{
        background: '#F7F4EF',
        fontFamily: '"Inter", -apple-system, sans-serif',
        color: '#1A1614',
      }}
    >
      {/* Sidebar */}
      <aside
        className="hidden sm:flex flex-col w-[26%] max-w-[240px] p-3 gap-2"
        style={{ background: '#EFEAE0', borderRight: '1px solid rgba(26,22,20,0.06)' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="grid place-items-center w-6 h-6 rounded-md"
            style={{ background: '#D97757', color: 'white' }}
          >
            <SiClaude className="w-3.5 h-3.5" />
          </div>
          <div className="text-[12.5px] font-semibold" style={{ color: '#1A1614' }}>Claude</div>
        </div>
        <button
          className="mt-2 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] font-medium"
          style={{ background: 'white', color: '#1A1614', border: '1px solid rgba(26,22,20,0.08)' }}
        >
          <Plus className="w-3.5 h-3.5" /> New chat
        </button>
        <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: '#6B5E5A' }}>
          Recents
        </div>
        <ul className="space-y-1">
          {['Test ACME checkout flow', 'Refactor payments API', 'Review PR #1284', 'Weekly QA report'].map((t, i) => (
            <li
              key={t}
              className="truncate rounded-lg px-2.5 py-1.5 text-[12px]"
              style={{
                background: i === 0 ? '#EAE1D0' : 'transparent',
                color: i === 0 ? '#1A1614' : '#6B5E5A',
                fontWeight: i === 0 ? 600 : 400,
              }}
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px]" style={{ color: '#6B5E5A' }}>
          <div className="grid place-items-center w-6 h-6 rounded-full" style={{ background: '#D97757', color: 'white' }}>
            <User className="w-3 h-3" />
          </div>
          Alex Chen
        </div>
      </aside>

      {/* Main pane */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderBottom: '1px solid rgba(26,22,20,0.06)' }}
        >
          <div className="text-[13px] font-semibold truncate">{c.workspace}</div>
          <div
            className="text-[11px] font-mono px-2 py-0.5 rounded-md"
            style={{ background: '#F0E9DA', color: '#1A1614', border: '1px solid rgba(26,22,20,0.08)' }}
          >
            claude-opus-4.7
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 min-h-0 overflow-hidden px-5 py-5 flex flex-col gap-4">
          {/* User */}
          <div className="flex items-start gap-2.5 justify-end">
            <div
              className="max-w-[70%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed"
              style={{ background: '#EEE6D6', color: '#1A1614' }}
            >
              {c.prompt}
            </div>
            <div
              className="grid place-items-center w-7 h-7 rounded-full shrink-0"
              style={{ background: '#1A1614', color: 'white' }}
            >
              <User className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Claude */}
          <div className="flex items-start gap-2.5">
            <div
              className="grid place-items-center w-7 h-7 rounded-full shrink-0"
              style={{ background: '#D97757', color: 'white' }}
            >
              <SiClaude className="w-3.5 h-3.5" />
            </div>
            <div className="max-w-[85%] space-y-2 text-[13px] leading-relaxed" style={{ color: '#1A1614' }}>
              {c.response.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <div
                className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded-md"
                style={{ background: '#EDE1CB', color: '#8A5A2E', border: '1px solid #E2D3B0' }}
              >
                <Sparkles className="w-3 h-3" /> via SQA Zero-Touch Agent
              </div>
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="px-5 pb-4">
          <div
            className="flex items-center gap-2 rounded-2xl px-3 py-2.5"
            style={{ background: 'white', border: '1px solid rgba(26,22,20,0.10)' }}
          >
            <Paperclip className="w-4 h-4 shrink-0" style={{ color: '#6B5E5A' }} />
            <div className="flex-1 text-[12.5px]" style={{ color: '#BAAA9A' }}>Reply to Claude…</div>
            <div className="grid place-items-center w-7 h-7 rounded-lg" style={{ background: '#D97757', color: 'white' }}>
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Slide: Cursor                                                             */
/* -------------------------------------------------------------------------- */

function CursorSlide({ c }: { c: Convo }) {
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden flex flex-col"
      style={{
        background: '#1E1E1E',
        color: '#D4D4D4',
        fontFamily: '"Geist Mono", ui-monospace, monospace',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-3 py-1.5"
        style={{ background: '#3C3C3C', borderBottom: '1px solid rgba(0,0,0,0.4)' }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
        </div>
        <div className="mx-auto text-[11px]" style={{ color: '#CCCCCC' }}>
          Cursor · {c.workspace}
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Activity bar */}
        <div
          className="hidden md:flex flex-col items-center py-3 gap-3 w-10"
          style={{ background: '#2D2D30', borderRight: '1px solid #1E1E1E' }}
        >
          {['≡', '⌕', 'Δ', '⌥', '⚙'].map((g) => (
            <div key={g} className="text-[13px]" style={{ color: '#858585' }}>{g}</div>
          ))}
        </div>

        {/* Explorer */}
        <div
          className="hidden lg:block w-[18%] max-w-[180px] p-2 text-[11.5px]"
          style={{ background: '#252526', borderRight: '1px solid #1E1E1E' }}
        >
          <div className="text-[10px] uppercase tracking-[0.12em] py-1" style={{ color: '#858585' }}>
            Explorer
          </div>
          {['📁 payments', '  📄 checkout.ts', '  📄 api.ts', '  📄 brd.md', '📁 tests'].map((f, i) => (
            <div
              key={f}
              className="px-1.5 py-0.5 rounded"
              style={{
                background: i === 3 ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: i === 3 ? '#C586C0' : '#CCCCCC',
              }}
            >
              {f}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 min-w-0 hidden sm:flex flex-col">
          <div
            className="flex items-center gap-2 px-3 py-1.5 text-[11px]"
            style={{ background: '#2D2D30', borderBottom: '1px solid #1E1E1E', color: '#CCCCCC' }}
          >
            <span
              className="px-2 py-0.5 rounded"
              style={{ background: '#1E1E1E', color: '#FFFFFF' }}
            >
              brd.md
            </span>
            <span style={{ color: '#858585' }}>checkout.ts</span>
          </div>
          <pre className="p-3 text-[10.5px] leading-relaxed overflow-hidden" style={{ color: '#D4D4D4' }}>
{`# Payments — BRD

## Overview
Checkout supports Apple Pay + 3DS.

## Requirements
- REQ-001 Apple Pay button on cart
- REQ-002 3DS challenge for cards
- REQ-003 Confirmation with tracking ID

## Test scope
> generate: features → stories → API tests`}
          </pre>
        </div>

        {/* Cursor AI panel */}
        <aside
          className="w-full sm:w-[46%] md:w-[42%] lg:w-[38%] flex flex-col"
          style={{ background: '#181818', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between px-3 py-2 text-[11px] uppercase tracking-[0.14em]"
               style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#858585' }}>
            <span>Chat · Composer</span>
            <span
              className="px-1.5 py-0.5 rounded text-[10px]"
              style={{ background: 'rgba(139,92,246,0.14)', color: '#C4B5FD' }}
            >
              claude-sonnet-4
            </span>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden p-3 flex flex-col gap-3">
            {/* User */}
            <div
              className="rounded-md p-2.5 text-[11.5px] leading-relaxed"
              style={{ background: '#252526', color: '#D4D4D4', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: '#858585' }}>You</div>
              {c.prompt}
            </div>

            {/* Cursor response */}
            <div
              className="rounded-md p-2.5 text-[11.5px] leading-relaxed"
              style={{
                background: 'linear-gradient(180deg, rgba(139,92,246,0.09), rgba(139,92,246,0.02))',
                color: '#E4E4E7',
                border: '1px solid rgba(139,92,246,0.20)',
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: '#C4B5FD' }}>
                Cursor · sqa-agent
              </div>
              <ul className="space-y-1">
                {c.response.map((line, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span style={{ color: '#4ADE80' }}>✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-medium px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(74,222,128,0.14)', color: '#4ADE80' }}
              >
                <Terminal className="w-3 h-3" /> Tools: 12 called
              </div>
            </div>
          </div>

          <div className="p-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div
              className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[11px]"
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span style={{ color: '#858585' }}>Ask, plan, or edit…</span>
              <span className="ml-auto text-[10px]" style={{ color: '#4ADE80' }}>⌘L</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center gap-3 px-3 py-1 text-[10px]"
        style={{ background: '#007ACC', color: 'white' }}
      >
        <span className="font-mono">main</span>
        <span>·</span>
        <span>TS</span>
        <span className="ml-auto">Ln 12, Col 24 · UTF-8 · LF</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Slide: Windsurf                                                           */
/* -------------------------------------------------------------------------- */

function WindsurfSlide({ c }: { c: Convo }) {
  const green = '#00A67E';
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden flex flex-col"
      style={{
        background: '#0F1112',
        color: '#E5E7EB',
        fontFamily: '"Geist Mono", ui-monospace, monospace',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-3 py-1.5"
        style={{ background: '#191C1D', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
        </div>
        <div className="flex items-center gap-1.5 mx-auto">
          <SiWindsurf className="w-3.5 h-3.5" color={green} />
          <span className="text-[11px]">Windsurf · {c.workspace}</span>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Editor placeholder */}
        <div className="flex-1 min-w-0 hidden sm:flex flex-col p-3 text-[10.5px] leading-relaxed"
             style={{ color: '#A0A6AC' }}>
          <div className="text-[10px] uppercase tracking-[0.12em] mb-2" style={{ color: green }}>
            tests/checkout/tc-1041.spec.ts
          </div>
{`import { test, expect } from '@simplifyqa/agent';

test('TC-1041 · negative auth', async ({ agent }) => {
  await agent.given('User has expired token');
  await agent.when('POST /checkout with invalid token');
  await agent.then('response.status = 401');
});`}
        </div>

        {/* Cascade panel */}
        <aside
          className="w-full sm:w-[52%] md:w-[46%] flex flex-col"
          style={{ background: '#0B0D0E', borderLeft: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center justify-between px-3 py-2 text-[11px]"
               style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-1.5">
              <span
                className="grid place-items-center w-5 h-5 rounded"
                style={{ background: green, color: '#0F1112' }}
              >
                <SiWindsurf className="w-3 h-3" />
              </span>
              <span className="uppercase tracking-[0.14em]" style={{ color: green }}>Cascade</span>
            </div>
            <span className="text-[10px]" style={{ color: '#71767C' }}>Write mode</span>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden p-3 flex flex-col gap-3">
            <div
              className="rounded-md p-2.5 text-[11.5px] leading-relaxed"
              style={{ background: '#14181A', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: '#71767C' }}>You</div>
              {c.prompt}
            </div>

            <div
              className="rounded-md p-2.5 text-[11.5px] leading-relaxed"
              style={{
                background: 'linear-gradient(180deg, rgba(0,166,126,0.10), rgba(0,166,126,0.02))',
                border: `1px solid ${green}44`,
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: green }}>
                Cascade · sqa-agent
              </div>
              <ul className="space-y-1">
                {c.response.map((line, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span style={{ color: green }}>›</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(0,166,126,0.15)', color: green }}
              >
                <Terminal className="w-3 h-3" /> mcp: sqa-agent
              </div>
            </div>
          </div>

          <div className="p-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div
              className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[11px]"
              style={{ background: '#0F1214', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span style={{ color: '#71767C' }}>Continue in Cascade…</span>
              <span className="ml-auto text-[10px]" style={{ color: green }}>⌘I</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Slide: ChatGPT                                                            */
/* -------------------------------------------------------------------------- */

function ChatGPTSlide({ c }: { c: Convo }) {
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden flex"
      style={{
        background: '#FFFFFF',
        color: '#0D0D0D',
        fontFamily: '"Inter", -apple-system, sans-serif',
      }}
    >
      {/* Sidebar */}
      <aside
        className="hidden sm:flex flex-col w-[24%] max-w-[220px] p-3 gap-2"
        style={{ background: '#F7F7F8', borderRight: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="flex items-center gap-2">
          <div className="grid place-items-center w-6 h-6 rounded" style={{ background: '#0D0D0D', color: '#FFFFFF' }}>
            <SiOpenai className="w-3.5 h-3.5" />
          </div>
          <div className="text-[12.5px] font-semibold">ChatGPT</div>
        </div>
        <button
          className="mt-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] font-medium"
          style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)' }}
        >
          <Plus className="w-3.5 h-3.5" /> New chat
        </button>
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px]"
             style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', color: '#6B7280' }}>
          <Search className="w-3.5 h-3.5" /> Search chats
        </div>
        <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: '#6B7280' }}>
          Today
        </div>
        <ul className="space-y-1">
          {[c.workspace, 'API rate limits', 'SQL performance tips', 'Release notes v4.18'].map((t, i) => (
            <li
              key={t}
              className="truncate rounded-lg px-2.5 py-1.5 text-[12px]"
              style={{
                background: i === 0 ? '#ECECEC' : 'transparent',
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? '#0D0D0D' : '#4B5563',
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main pane */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-4 py-2.5"
             style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="flex items-center gap-1.5 text-[13px] font-semibold">
            ChatGPT
            <span className="text-[11px] font-normal" style={{ color: '#6B7280' }}>· 5</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[11px] px-1.5 py-0.5 rounded"
                 style={{ background: '#ECECEC', color: '#0D0D0D' }}>
              Tools · SQA Agent
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 min-h-0 overflow-hidden px-5 py-5 flex flex-col gap-4">
          {/* User (right-aligned pill on ChatGPT) */}
          <div className="flex justify-end">
            <div
              className="max-w-[75%] rounded-3xl px-4 py-2.5 text-[13.5px] leading-relaxed"
              style={{ background: '#F4F4F4', color: '#0D0D0D' }}
            >
              {c.prompt}
            </div>
          </div>

          {/* GPT (left, no pill, avatar) */}
          <div className="flex items-start gap-3">
            <div
              className="grid place-items-center w-7 h-7 rounded-full shrink-0"
              style={{ background: '#0D0D0D', color: 'white' }}
            >
              <SiOpenai className="w-3.5 h-3.5" />
            </div>
            <div className="max-w-[85%] space-y-2 text-[13.5px] leading-relaxed">
              {c.response.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <div
                className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded"
                style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}
              >
                <Sparkles className="w-3 h-3" /> Called SQA Agent · 3 tools
              </div>
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="px-5 pb-4">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-3"
            style={{ background: '#F4F4F4', border: '1px solid rgba(0,0,0,0.06)' }}
          >
            <Plus className="w-4 h-4 shrink-0" style={{ color: '#6B7280' }} />
            <div className="flex-1 text-[12.5px]" style={{ color: '#9CA3AF' }}>Message ChatGPT</div>
            <div className="grid place-items-center w-7 h-7 rounded-full" style={{ background: '#0D0D0D', color: 'white' }}>
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
