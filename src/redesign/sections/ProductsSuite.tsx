'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Network, Sparkles, Terminal, Users } from 'lucide-react';
import { Container, Eyebrow, Reveal } from '../../design';

export default function ProductsSuite() {
  return (
    <section className="relative pt-10 sm:pt-12 pb-14 sm:pb-20 bg-white">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>The SimplifyQA suite</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
              Two new products, built on the SimplifyQA platform.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] text-ink-500 max-w-2xl leading-relaxed">
              A living-doc wiki that works for every team, and an MCP server that lets
              your AI assistant create and run SimplifyQA tests. Both share the same identity, users, and
              projects as SimplifyQA core.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          <ScrollCard />
          <AgentCard />
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Scroll card (blue) -------------------- */

function ScrollCard() {
  const V = { 50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8', 800: '#1E40AF', 900: '#1E3A8A' };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[28px] overflow-hidden border p-8 sm:p-10 flex flex-col justify-between min-h-[440px]"
      style={{
        borderColor: V[200],
        background: `linear-gradient(160deg, ${V[50]} 0%, #ffffff 40%, ${V[100]} 100%)`,
        boxShadow: `0 30px 70px -30px ${V[600]}30`,
      }}
    >
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full opacity-60 blur-3xl"
           style={{ background: `radial-gradient(closest-side, ${V[200]}, transparent 70%)` }} />

      <div className="relative">
        <div className="flex items-center gap-2">
          <img src="/scroll-logo.svg" alt="Scroll" className="w-9 h-9 rounded-2xl" draggable={false} />
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: V[700] }}>
            SimplifyQA Scroll
          </span>
        </div>

        <h3 className="mt-6 font-display text-[30px] sm:text-[34px] leading-[1.1] tracking-tight text-ink-900 text-balance">
          The{' '}
          <span style={{ color: V[700] }}>documentation workspace</span>{' '}
          with AI built in.
        </h3>

        <p className="mt-4 text-[14.5px] text-ink-600 leading-relaxed max-w-md">
          A real-time collaborative wiki. Write together live, track every change in version
          history, and draft with AI. For SimplifyQA teams, live test cases and execution
          reports embed as blocks.
        </p>

        {/* Mini blocks preview */}
        <div className="mt-6 grid grid-cols-2 gap-2 max-w-md">
          {[
            { icon: <Users className="w-3.5 h-3.5" />, label: 'Real-time collaboration' },
            { icon: <GitBranch className="w-3.5 h-3.5" />, label: 'Version history' },
            { icon: <Sparkles className="w-3.5 h-3.5" />, label: 'AI writing' },
            { icon: <Network className="w-3.5 h-3.5" />, label: 'Live test blocks' },
          ].map((f) => (
            <div key={f.label}
              className="flex items-center gap-2 rounded-lg px-3 py-2 border text-[12.5px] font-medium"
              style={{ borderColor: V[200], background: 'white', color: V[800] }}>
              <span style={{ color: V[700] }}>{f.icon}</span>
              {f.label}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-8 flex items-center gap-3">
        <Link href="/scroll"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-white text-[14px] font-semibold transition-transform group-hover:-translate-y-0.5"
          style={{
            background: `linear-gradient(180deg, ${V[500]}, ${V[700]})`,
            boxShadow: `0 10px 24px -8px ${V[600]}66`,
          }}>
          Explore Scroll <ArrowUpRight className="w-4 h-4" />
        </Link>
        <a href="https://scroll.simplifyqa.ai/login" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full text-[14px] font-semibold border transition-colors"
          style={{ borderColor: V[200], background: 'white', color: V[700] }}>
          Try Scroll
        </a>
      </div>
    </motion.div>
  );
}

/* -------------------- MCP card (dark terminal) -------------------- */

function AgentCard() {
  const K = { bg: '#0A0A0F', panel: '#111117', border: 'rgba(255,255,255,0.08)', borderH: 'rgba(255,255,255,0.16)', green: '#4ADE80', amber: '#FBBF24', muted: '#8B8B96', faint: '#5C5C68', text: '#E4E4E7' };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[28px] overflow-hidden border p-8 sm:p-10 flex flex-col justify-between min-h-[440px]"
      style={{
        borderColor: K.borderH,
        background: `radial-gradient(60% 60% at 90% 10%, ${K.amber}18, transparent 60%),
                     linear-gradient(160deg, #0E0E14 0%, #050508 100%)`,
        boxShadow: `0 30px 70px -30px #000000`,
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.22]"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(circle at 70% 20%, black, transparent 75%)',
           }} />

      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-2xl text-white font-mono text-[16px] font-bold border"
                style={{ background: K.panel, borderColor: K.borderH, color: K.green }}>&gt;_</span>
          <span className="text-[12.5px] font-mono font-semibold uppercase tracking-[0.14em]" style={{ color: K.green }}>
            SimplifyQA MCP
          </span>
        </div>

        <h3 className="mt-6 font-display text-[30px] sm:text-[34px] leading-[1.1] tracking-tight text-white text-balance">
          Test with SimplifyQA{' '}
          <span style={{ color: K.green }}>from your AI.</span>
        </h3>

        <p className="mt-4 text-[14.5px] leading-relaxed max-w-md" style={{ color: K.muted }}>
          An MCP server for Claude, Cursor, VS Code with Copilot, Windsurf, Codex and Devin.
          Create test cases from user stories, record and run tests on seven technologies,
          and find out why a run failed. You review every recording before it is saved.
        </p>

        {/* Mini terminal preview */}
        <div className="mt-6 rounded-lg border p-3 font-mono text-[12px] max-w-md"
             style={{ background: '#08080D', borderColor: K.border }}>
          <div className="flex items-start gap-2">
            <span style={{ color: K.amber }}>you</span>
            <span style={{ color: K.faint }}>&gt;</span>
            <span style={{ color: K.text }}>why did last night's checkout run fail?</span>
          </div>
          <div className="mt-1 flex items-start gap-2">
            <span style={{ color: K.green }}>mcp</span>
            <span style={{ color: K.faint }}>&gt;</span>
            <span style={{ color: K.muted }}>
              <span style={{ color: K.green }}>37 passed</span>,{' '}
              <span style={{ color: K.amber }}>3 failed</span>: promo banner locator changed
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-8 flex items-center gap-3">
        <Link href="/mcp"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-[14px] font-semibold text-white transition-transform group-hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(180deg, #F04A5B 0%, #C8253A 60%, #9A1525 100%)',
            boxShadow: '0 12px 30px -8px rgba(240,74,91,0.55)',
          }}>
          Explore the MCP <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link href="/mcp#setup"
          className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full text-[14px] font-mono font-semibold border transition-colors"
          style={{ borderColor: K.borderH, background: K.panel, color: K.text }}>
          <Terminal className="w-4 h-4" style={{ color: K.green }} /> setup
        </Link>
      </div>
    </motion.div>
  );
}
