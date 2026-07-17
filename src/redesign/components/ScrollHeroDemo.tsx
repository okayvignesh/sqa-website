'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowRight, Bold, Circle, Code2, FileText, Hand, Heading1, Heading2,
  Highlighter, Image as ImageIcon, Italic, LineChart, Link as LinkIcon,
  List, ListOrdered, MessageSquare, MousePointer2, Play, Plus, Presentation,
  Quote, Sparkles, Square, StickyNote, Strikethrough, Table as TableIcon,
  Type as TypeIcon, Underline as UnderlineIcon, Wand2,
} from 'lucide-react';
import MermaidDiagram from './MermaidDiagram';

const V = {
  soft: '#F5F3FF',
  50:   '#F5F3FF',
  100:  '#EDE9FE',
  200:  '#DDD6FE',
  400:  '#A78BFA',
  500:  '#8B5CF6',
  600:  '#7C3AED',
  700:  '#6D28D9',
  800:  '#5B21B6',
  900:  '#4C1D95',
};
const AMBER = '#F59E0B';

// Risograph deck theme (mirrors scroll-ui/src/components/decks/themes/risograph.ts)
const RISO = {
  bg:       '#F2EFE7',   // cream paper canvas
  surface:  '#EAE5D6',   // paper-deep for cards
  ink:      '#1A1612',   // near-black paper ink
  inkMuted: '#5A6478',   // slate
  blue:     '#0033CC',   // cobalt (primary)
  red:      '#E63329',   // warm red (secondary)
  bodyMute: '#4A443C',
};

// SVG noise for the printed-grain overlay (data URL, matches the theme's ::after).
const RISO_GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>\")";

const CYCLE_MS = 7000;

const DEMOS = [
  { key: 'doc',    label: 'Docs',      Icon: FileText     },
  { key: 'canvas', label: 'Canvas',    Icon: Wand2        },
  { key: 'deck',   label: 'Deck',      Icon: Presentation },
] as const;
type DemoKey = typeof DEMOS[number]['key'];

export default function ScrollHeroDemo() {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % DEMOS.length), CYCLE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 blur-3xl -z-10"
        style={{
          background: `radial-gradient(45% 45% at 65% 40%, ${V[200]}90, transparent 70%),
                       radial-gradient(35% 35% at 20% 80%, #FDE68A55, transparent 70%)`,
        }}
      />

      <div className="relative w-full" style={{ aspectRatio: '10 / 11' }}>
        {DEMOS.map((d, i) => {
          const distance = (i - active + DEMOS.length) % DEMOS.length;
          return (
            <StackedCard key={d.key} distance={distance}>
              {distance === 0
                ? <DemoBody demoKey={d.key} nonce={active} />
                : <DemoBody demoKey={d.key} nonce={-1} />}
            </StackedCard>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {DEMOS.map((d, i) => {
          const isActive = i === active;
          const Ico = d.Icon;
          return (
            <button
              key={d.key}
              onClick={() => setActive(i)}
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.10em] transition-colors border"
              style={{
                background: isActive ? V[600] : 'white',
                borderColor: isActive ? V[600] : V[200],
                color: isActive ? 'white' : V[700],
              }}
              aria-label={`Show ${d.label} demo`}
            >
              <Ico className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{d.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Stack shell ---------------- */

function StackedCard({ distance, children }: { distance: number; children: React.ReactNode }) {
  const config = distance === 0
    ? { y: 0,  scale: 1,    opacity: 1,   z: 30, blur: 0 }
    : distance === 1
    ? { y: 22, scale: 0.94, opacity: 0.7, z: 20, blur: 0 }
    : { y: 44, scale: 0.88, opacity: 0.35, z: 10, blur: 1 };

  return (
    <motion.div
      className="absolute inset-0"
      style={{ zIndex: config.z }}
      animate={{
        y: config.y,
        scale: config.scale,
        opacity: config.opacity,
        filter: `blur(${config.blur}px)`,
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative h-full rounded-[28px] border overflow-hidden bg-white"
        style={{
          borderColor: V[200],
          boxShadow: `0 40px 80px -30px ${V[700]}35, 0 1px 0 rgba(255,255,255,0.6) inset`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ---------------- Chrome (shared) ---------------- */

function WindowChrome({ url, label }: { url: string; label: string }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 border-b"
      style={{ borderColor: V[100], background: V.soft }}
    >
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div
        className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[11.5px] font-mono border truncate max-w-[220px]"
        style={{ borderColor: V[100], color: V[800] }}
      >
        {url}
      </div>
      <span
        className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: V[700] }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: V[600] }} />
        {label}
      </span>
    </div>
  );
}

/* Toolbar button */
function TBtn({
  children, active, onClick,
}: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="grid place-items-center w-7 h-7 rounded-md transition-colors"
      style={{
        background: active ? V[100] : 'transparent',
        color:      active ? V[700] : '#4B5563',
      }}
    >
      {children}
    </button>
  );
}
function TSep() {
  return <span className="w-px h-4 mx-0.5" style={{ background: V[100] }} />;
}

/* ---------------- Demo router ---------------- */

function DemoBody({ demoKey, nonce }: { demoKey: DemoKey; nonce: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${demoKey}-${nonce}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        {demoKey === 'doc'    ? <DocDemo />    : null}
        {demoKey === 'canvas' ? <CanvasDemo /> : null}
        {demoKey === 'deck'   ? <DeckDemo />   : null}
      </motion.div>
    </AnimatePresence>
  );
}

/* ===================== DEMO 1: DOC (TipTap editor look) ===================== */

function DocDemo() {
  return (
    <>
      <WindowChrome url="scroll / payments / checkout-flow" label="Live" />

      {/* Editor toolbar */}
      <div
        className="flex items-center gap-0.5 px-3 py-2 border-b overflow-x-auto"
        style={{ borderColor: V[100], background: 'white' }}
      >
        <TBtn active><Heading1 className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Heading2 className="w-3.5 h-3.5" /></TBtn>
        <TSep />
        <TBtn active><Bold className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Italic className="w-3.5 h-3.5" /></TBtn>
        <TBtn><UnderlineIcon className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Strikethrough className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Highlighter className="w-3.5 h-3.5" /></TBtn>
        <TSep />
        <TBtn><List className="w-3.5 h-3.5" /></TBtn>
        <TBtn><ListOrdered className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Quote className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Code2 className="w-3.5 h-3.5" /></TBtn>
        <TSep />
        <TBtn><LinkIcon className="w-3.5 h-3.5" /></TBtn>
        <TBtn><TableIcon className="w-3.5 h-3.5" /></TBtn>
        <TBtn><ImageIcon className="w-3.5 h-3.5" /></TBtn>
        <TSep />
        <button
          className="ml-1 inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold border"
          style={{ background: V[600], color: 'white', borderColor: V[700] }}
        >
          <Plus className="w-3 h-3" /> Insert
        </button>
        <button
          className="ml-auto inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold"
          style={{ background: V[50], color: V[700], border: `1px solid ${V[200]}` }}
        >
          <Sparkles className="w-3 h-3" /> AI
        </button>
      </div>

      {/* Editor body */}
      <div className="p-5 space-y-3.5 flex-1 min-h-0 overflow-hidden">
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: V[600] }}>
          Payments space · Runbooks
        </div>

        <Typewriter text="Checkout flow · v4.18" className="font-display text-[20px] leading-tight text-ink-900" />
        <BodyLines widths={['92%', '86%', '72%']} startDelay={1.3} />

        <StaggerBlock delay={2.3}>
          <TestCaseBlock />
        </StaggerBlock>

        <StaggerBlock delay={3.0}>
          <ExecutionReport />
        </StaggerBlock>
      </div>
    </>
  );
}

/* ===================== DEMO 2: CANVAS (Mermaid) ===================== */

type MermaidExample = { prompt: string; label: string; code: string };

const MERMAID_EXAMPLES: MermaidExample[] = [
  {
    label: 'Flowchart',
    prompt: 'Add a cache layer between the API and the DB, plus an async worker.',
    code: `
flowchart LR
  Client([Client]) --> API[API]
  API --> Cache[(Cache)]
  API --> DB[(Database)]
  DB --> Worker([Worker])
`,
  },
  {
    label: 'Sequence',
    prompt: 'Show the checkout 3DS handshake as a sequence diagram.',
    code: `
sequenceDiagram
  autonumber
  participant U as User
  participant W as Web
  participant P as Payments API
  participant B as Bank
  U->>W: Tap Apple Pay
  W->>P: Create session
  P->>B: 3DS challenge
  B-->>P: Auth token
  P-->>W: Session OK
  W-->>U: Order placed
`,
  },
  {
    label: 'ER',
    prompt: 'Sketch the payments data model.',
    code: `
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ ITEM : contains
  ORDER }o--|| PAYMENT : uses
`,
  },
];

function CanvasDemo() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % MERMAID_EXAMPLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  const ex = MERMAID_EXAMPLES[idx];

  return (
    <>
      <WindowChrome url="scroll / canvas / payments-architecture" label="Canvas" />

      {/* Canvas toolbar */}
      <div
        className="flex items-center gap-0.5 px-3 py-2 border-b overflow-x-auto"
        style={{ borderColor: V[100], background: 'white' }}
      >
        <TBtn active><MousePointer2 className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Hand className="w-3.5 h-3.5" /></TBtn>
        <TSep />
        <TBtn><Square className="w-3.5 h-3.5" /></TBtn>
        <TBtn><Circle className="w-3.5 h-3.5" /></TBtn>
        <TBtn><ArrowRight className="w-3.5 h-3.5" /></TBtn>
        <TBtn><TypeIcon className="w-3.5 h-3.5" /></TBtn>
        <TBtn><StickyNote className="w-3.5 h-3.5" /></TBtn>
        <TBtn><MessageSquare className="w-3.5 h-3.5" /></TBtn>
        <TSep />
        <button
          className="ml-1 inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold"
          style={{ background: V[600], color: 'white' }}
        >
          <Wand2 className="w-3 h-3" /> AI diagram
        </button>
        <span
          className="ml-auto inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold border"
          style={{ background: 'white', color: V[700], borderColor: V[200] }}
        >
          Mermaid · <span className="font-mono text-[10.5px]">{ex.label}</span>
        </span>
      </div>

      {/* Prompt bar */}
      <div className="px-4 pt-3">
        <div
          className="rounded-xl border p-2.5 flex items-start gap-2.5"
          style={{ borderColor: V[200], background: V.soft }}
        >
          <span
            className="grid place-items-center w-7 h-7 rounded-lg shrink-0"
            style={{ background: V[600], color: 'white' }}
          >
            <Wand2 className="w-3.5 h-3.5" />
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
              className="mt-0.5 text-[12px] text-ink-800 font-medium"
            >
              {ex.prompt}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mermaid canvas */}
      <div className="p-4 pt-3 flex-1 min-h-0">
        <div
          className="relative w-full h-full rounded-xl border overflow-hidden"
          style={{
            background: `radial-gradient(1px 1px at 10px 10px, ${V[200]} 1px, transparent 1px)`,
            backgroundSize: '18px 18px',
            backgroundColor: 'white',
            borderColor: V[100],
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 p-3"
            >
              <MermaidDiagram code={ex.code} className="w-full h-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

/* ===================== DEMO 3: DECK (Risograph, 16:9) ===================== */

type RisoSlide =
  | { kind: 'cover';    kicker: string; title: string; subtitle: string; author: string }
  | { kind: 'bigstat';  kicker: string; value: string; label: string; caption: string }
  | { kind: 'section';  number: string; kicker: string; title: string }
  | { kind: 'bullets';  kicker: string; title: string; bullets: string[] };

const DECK_SLIDES: RisoSlide[] = [
  { kind: 'cover',    kicker: 'Payments Platform · 2026', title: 'Q4 Quality Review',
    subtitle: 'How the platform performed, and what we shipped.', author: 'Quality Engineering · SimplifyQA' },
  { kind: 'bigstat',  kicker: 'Automation coverage', value: '98.4%', label: 'Pass rate',
    caption: '+1.6 points vs Q3' },
  { kind: 'section',  number: '02', kicker: 'What we shipped', title: 'Zero-touch release gates.' },
  { kind: 'bullets',  kicker: 'Highlights', title: '2,184 tests automated this quarter',
    bullets: ['Web · 812 flows', 'Mobile · 604 flows', 'API · 768 flows'] },
];

function DeckDemo() {
  const [slideIdx, setSlideIdx] = useState(0);

  // Lazy-load Space Grotesk only when the Deck demo mounts.
  useEffect(() => {
    if (document.getElementById('sq-space-grotesk-font')) return;
    const l = document.createElement('link');
    l.id = 'sq-space-grotesk-font';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
    document.head.appendChild(l);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((i) => (i + 1) % DECK_SLIDES.length), 2400);
    return () => clearInterval(t);
  }, []);

  const s = DECK_SLIDES[slideIdx];

  return (
    <>
      <WindowChrome url="scroll / decks / q4-quality-review" label="Deck" />

      {/* Deck toolbar */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b"
        style={{ borderColor: V[100], background: 'white' }}
      >
        <button
          className="inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold"
          style={{ background: V[600], color: 'white' }}
        >
          <Sparkles className="w-3 h-3" /> New with AI
        </button>
        <span
          className="inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold border"
          style={{ background: 'white', color: V[700], borderColor: V[200] }}
        >
          Theme · <span className="font-mono text-[10.5px]">Risograph</span>
        </span>
        <span className="ml-auto text-[10.5px] font-mono" style={{ color: V[700] }}>
          Slide <span className="font-semibold">{slideIdx + 1}</span> / {DECK_SLIDES.length}
        </span>
        <button
          className="inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold"
          style={{ background: V[900], color: 'white' }}
        >
          <Play className="w-3 h-3 fill-current" /> Present
        </button>
      </div>

      {/* Deck viewport (16:9) */}
      <div className="p-4 flex-1 min-h-0 flex flex-col justify-center">
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '16 / 9',
            background: RISO.bg,
            border: `1.5px solid ${RISO.ink}`,
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            boxShadow: '0 24px 60px -30px rgba(0,0,0,0.28)',
            isolation: 'isolate',
          }}
        >
          {/* Halftone base */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(26,22,18,0.10) 1px, transparent 1.4px)',
              backgroundSize: '6px 6px',
              opacity: 0.7,
              zIndex: 0,
            }}
          />
          {/* Grain overlay (multiply, above shapes) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: RISO_GRAIN,
              mixBlendMode: 'multiply',
              opacity: 0.35,
              zIndex: 5,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={slideIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ zIndex: 2 }}
            >
              {s.kind === 'cover'   && <RisoCoverSlide s={s} />}
              {s.kind === 'bigstat' && <RisoBigStatSlide s={s} />}
              {s.kind === 'section' && <RisoSectionSlide s={s} />}
              {s.kind === 'bullets' && <RisoBulletsSlide s={s} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Filmstrip */}
        <div className="mt-3 flex items-center gap-1.5">
          {DECK_SLIDES.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 transition-colors"
              style={{ background: i === slideIdx ? RISO.blue : RISO.ink + '22' }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* -------- Risograph slide layouts (scaled mockups) -------- */

function RisoKicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: '9.5px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: RISO.red,
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

function RisoCoverSlide({ s }: { s: Extract<RisoSlide, { kind: 'cover' }> }) {
  return (
    <div className="relative w-full h-full">
      {/* Cobalt rectangle + red circle top-right, multiply blend */}
      <div
        aria-hidden
        className="absolute"
        style={{
          top: '10%', right: '10%',
          width: '30%', height: '38%',
          background: RISO.blue,
          mixBlendMode: 'multiply',
          zIndex: 1,
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          top: '30%', right: '20%',
          width: '30%', aspectRatio: '1',
          background: RISO.red,
          mixBlendMode: 'multiply',
          zIndex: 1,
        }}
      />

      <div className="relative h-full flex flex-col justify-between p-5" style={{ zIndex: 3 }}>
        <RisoKicker>{s.kicker}</RisoKicker>
        <div>
          <div
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 4.4vw, 42px)',
              letterSpacing: '-0.045em',
              lineHeight: 0.96,
              color: RISO.blue,
              maxWidth: '72%',
            }}
          >
            {s.title}
          </div>
          <div
            className="mt-2 text-[12.5px]"
            style={{
              fontFamily: '"Inter", sans-serif',
              color: RISO.bodyMute,
              fontWeight: 400,
              maxWidth: '58%',
              lineHeight: 1.5,
            }}
          >
            {s.subtitle}
          </div>
        </div>
        <div
          className="flex items-center justify-between pt-2"
          style={{ borderTop: `1.5px solid ${RISO.ink}` }}
        >
          <div
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: RISO.ink,
            }}
          >
            <span style={{ color: RISO.blue, fontWeight: 700 }}>QE</span>
            <span style={{ color: RISO.red, margin: '0 6px', fontWeight: 700 }}>/</span>
            SimplifyQA
          </div>
          <div
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              color: RISO.red,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            01
          </div>
        </div>
      </div>
    </div>
  );
}

function RisoBigStatSlide({ s }: { s: Extract<RisoSlide, { kind: 'bigstat' }> }) {
  return (
    <div className="relative w-full h-full">
      {/* Red circle + cobalt square top-right (theme's big-stat signature) */}
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          top: '18%', right: '22%',
          width: '28%', aspectRatio: '1',
          background: RISO.red,
          mixBlendMode: 'multiply',
          zIndex: 1,
        }}
      />
      <div
        aria-hidden
        className="absolute"
        style={{
          top: '40%', right: '10%',
          width: '25%', aspectRatio: '1',
          background: RISO.blue,
          mixBlendMode: 'multiply',
          zIndex: 1,
        }}
      />

      <div className="relative h-full flex flex-col justify-between p-5" style={{ zIndex: 3 }}>
        <RisoKicker>{s.kicker}</RisoKicker>
        <div>
          <div
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(56px, 11vw, 116px)',
              letterSpacing: '-0.07em',
              lineHeight: 0.84,
              color: RISO.blue,
            }}
          >
            {s.value}
          </div>
          <div
            className="mt-1"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: RISO.ink,
              lineHeight: 1.2,
              maxWidth: '55%',
            }}
          >
            {s.label}
          </div>
        </div>
        <div
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: RISO.blue,
          }}
        >
          {s.caption}
        </div>
      </div>
    </div>
  );
}

function RisoSectionSlide({ s }: { s: Extract<RisoSlide, { kind: 'section' }> }) {
  return (
    <div className="relative w-full h-full">
      <div className="relative h-full flex flex-col justify-center p-5" style={{ zIndex: 3 }}>
        <div
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: RISO.red,
          }}
        >
          {s.kicker}
        </div>
        <div
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(76px, 14vw, 148px)',
            letterSpacing: '-0.06em',
            lineHeight: 0.85,
            color: RISO.red,
          }}
        >
          {s.number}
        </div>
        <div
          className="mt-1"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(20px, 3.8vw, 34px)',
            letterSpacing: '-0.035em',
            lineHeight: 0.98,
            color: RISO.blue,
            maxWidth: '75%',
          }}
        >
          {s.title}
        </div>
      </div>
    </div>
  );
}

function RisoBulletsSlide({ s }: { s: Extract<RisoSlide, { kind: 'bullets' }> }) {
  return (
    <div className="relative w-full h-full">
      <div className="relative h-full flex flex-col justify-between p-5" style={{ zIndex: 3 }}>
        <RisoKicker>{s.kicker}</RisoKicker>
        <div
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(15px, 2.4vw, 24px)',
            letterSpacing: '-0.035em',
            lineHeight: 1.04,
            color: RISO.ink,
          }}
        >
          {s.title}
        </div>
        <ul className="w-full" style={{ borderTop: `1.5px solid ${RISO.ink}` }}>
          {s.bullets.map((b, i) => (
            <li
              key={b}
              className="flex items-baseline gap-3"
              style={{
                padding: '7px 4px',
                borderBottom: `1.5px solid ${RISO.ink}`,
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: RISO.ink,
              }}
            >
              <span
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  color: RISO.blue,
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '-0.02em',
                  minWidth: 24,
                }}
              >
                {String(i + 1).padStart(2, '0')}.
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ===================== SHARED ATOMS ===================== */

function Typewriter({
  text, className, speed = 55,
}: { text: string; className?: string; speed?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <div className={className}>
      {text.slice(0, n)}
      <span
        aria-hidden
        className="inline-block w-[7px] h-[1.05em] align-[-3px] ml-0.5"
        style={{
          background: n >= text.length ? 'transparent' : V[600],
          animation: n >= text.length ? undefined : 'sqScrollCaret 0.9s steps(2) infinite',
        }}
      />
      <style>{`@keyframes sqScrollCaret { 50% { opacity: 0; } }`}</style>
    </div>
  );
}

function BodyLines({ widths, startDelay }: { widths: string[]; startDelay: number }) {
  return (
    <div className="space-y-2">
      {widths.map((w, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: w }}
          transition={{ delay: startDelay + i * 0.28, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="h-2.5 rounded-full"
          style={{ background: V[100] }}
        />
      ))}
    </div>
  );
}

function StaggerBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function TestCaseBlock() {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: V[200], boxShadow: `0 10px 26px -18px ${V[700]}35` }}
    >
      <div
        className="flex items-center justify-between px-3 py-1.5 border-b"
        style={{ background: V.soft, borderColor: V[100] }}
      >
        <div className="flex items-center gap-2 text-[11px] font-semibold" style={{ color: V[700] }}>
          <FileText className="w-3.5 h-3.5" /> Test case · TC-1041
        </div>
        <span
          className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-full text-white"
          style={{ background: '#16A34A' }}
        >
          Passed
        </span>
      </div>
      <ol className="px-3.5 py-2 space-y-0.5 text-[11.5px] text-ink-700">
        <li className="flex gap-2"><span className="text-ink-400">1.</span> Navigate to <span className="font-mono text-ink-900">/checkout</span>.</li>
        <li className="flex gap-2"><span className="text-ink-400">2.</span> Tap <span className="font-mono">Apple Pay</span>.</li>
        <li className="flex gap-2"><span className="text-ink-400">3.</span> Confirm 3DS with test card <span className="font-mono">4000…3184</span>.</li>
      </ol>
    </div>
  );
}

function ExecutionReport() {
  return (
    <div className="rounded-2xl border p-3" style={{ borderColor: V[200] }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-semibold" style={{ color: V[700] }}>
          <LineChart className="w-3.5 h-3.5" /> Payments regression
        </div>
        <span className="text-[10px] text-ink-500">Auto-refresh</span>
      </div>
      <div className="mt-2.5 grid grid-cols-4 gap-1.5 text-center">
        <StatTile from={110} to={124} label="Total" color="#0F1322" />
        <StatTile from={104} to={118} label="Passed" color="#16A34A" />
        <StatTile from={6}   to={4}   label="Failed" color="#DC2626" />
        <StatTile from={0}   to={2}   label="Healed" color={V[700]} />
      </div>
    </div>
  );
}

function StatTile({ from, to, label, color }: { from: number; to: number; label: string; color: string }) {
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    const ctl = animate(mv, to, { delay: 3.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return () => ctl.stop();
  }, [mv, to]);
  return (
    <div className="rounded-lg border py-1.5" style={{ borderColor: V[100], background: 'white' }}>
      <motion.div className="font-display text-[15px] tracking-tight leading-none" style={{ color }}>
        {rounded}
      </motion.div>
      <div className="text-[9.5px] text-ink-500 mt-0.5">{label}</div>
    </div>
  );
}
