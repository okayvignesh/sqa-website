'use client';

import { motion } from 'framer-motion';
import { SiClaude, SiOpenai, SiWindsurf } from 'react-icons/si';

// Nothing-brand dot-matrix aesthetic for the SimplifyQA MCP hub.
// Story: AI clients (top) call INTO the MCP server (center); the server
// executes and drives target-technology outputs (bottom strip).

const C = {
  bg:        '#0A0A0F',
  gridDot:   'rgba(255,255,255,0.06)',
  faint:     'rgba(228,228,231,0.35)',
  muted:     '#8B8B96',
  text:      '#E4E4E7',
  greenDim:  'rgba(74,222,128,0.55)',
  green:     '#4ADE80',
  amber:     '#FBBF24',
  amberDim:  'rgba(251,191,36,0.5)',
  border:    'rgba(255,255,255,0.10)',
};

// AI client satellites — top row, INITIATE requests INTO the hub.
// Uses react-icons/si React components where the brand exists there
// (bundled, no network), falls back to simpleicons CDN for missing ones.
type Sat = {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: number;
  Icon?: React.ComponentType<{ className?: string; size?: number | string; color?: string }>;
  logo?: string;
};
const CLIENTS: Sat[] = [
  { id: 'claude',   label: 'Claude',   x: 0.10, y: 0.14, delay: 0.0, Icon: SiClaude },
  { id: 'chatgpt',  label: 'ChatGPT',  x: 0.36, y: 0.10, delay: 0.5, Icon: SiOpenai },
  { id: 'cursor',   label: 'Cursor',   x: 0.64, y: 0.10, delay: 1.0, logo: 'https://cdn.simpleicons.org/cursor/ffffff' },
  { id: 'windsurf', label: 'Windsurf', x: 0.90, y: 0.14, delay: 1.5, Icon: SiWindsurf },
];

// Target technologies the MCP executes against — bottom strip
const TARGETS = [
  'WEB', 'MOBILE', 'API', 'DESKTOP', 'DB', 'MAIN', 'SAP', 'HYBRID',
] as const;

const GRID_COLS = 40;
const GRID_ROWS = 48;

// Hub anchor points (%). No more dot chassis — logo sits directly on the grid.
const HUB_CENTER = { x: 50, y: 50 };
const HUB_TOP    = { x: 50, y: 43 };
const HUB_BOTTOM = { x: 50, y: 58 };

export default function DottedAgent() {
  const cell = 100 / GRID_COLS;
  const rowCell = 100 / GRID_ROWS;

  const hubCenter = HUB_CENTER;
  const hubTop = HUB_TOP;
  const hubBottom = HUB_BOTTOM;

  // Target-strip position — below the hub
  const targetStripY = 0.82;

  return (
    <div className="relative w-full" style={{ aspectRatio: '10 / 11' }}>
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, rgba(74,222,128,0.06), transparent 70%),
                       ${C.bg}`,
          border: `1px solid ${C.border}`,
          boxShadow: '0 40px 80px -30px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.02)',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          {/* Base grid dots */}
          {Array.from({ length: GRID_ROWS }).map((_, r) =>
            Array.from({ length: GRID_COLS }).map((_, c) => (
              <circle
                key={`g-${r}-${c}`}
                cx={(c + 0.5) * cell}
                cy={(r + 0.5) * rowCell}
                r={0.28}
                fill={C.gridDot}
              />
            )),
          )}

          {/* Dashed beams: AI clients → hub top */}
          {CLIENTS.map((s) => (
            <line
              key={`beam-${s.id}`}
              x1={s.x * 100}
              y1={s.y * 100 + 7}
              x2={hubTop.x}
              y2={hubTop.y - 1}
              stroke={C.greenDim}
              strokeWidth={0.18}
              strokeDasharray="0.6 0.9"
              strokeLinecap="round"
            />
          ))}

          {/* Signal pulses: AI clients → hub (satellite to center) */}
          {CLIENTS.map((s) => (
            <motion.circle
              key={`pulse-${s.id}`}
              r={0.7}
              fill={C.green}
              initial={{ cx: s.x * 100, cy: s.y * 100 + 7, opacity: 0 }}
              animate={{
                cx: [s.x * 100, hubTop.x],
                cy: [s.y * 100 + 7, hubTop.y - 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                delay: s.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Vertical trunk: hub bottom → target strip */}
          <line
            x1={hubBottom.x}
            y1={hubBottom.y + 1}
            x2={hubBottom.x}
            y2={targetStripY * 100 - 3}
            stroke={C.amberDim}
            strokeWidth={0.22}
            strokeDasharray="0.6 0.9"
            strokeLinecap="round"
          />
          {/* Output pulse: hub → targets */}
          <motion.circle
            r={0.75}
            fill={C.amber}
            initial={{ cx: hubBottom.x, cy: hubBottom.y + 1, opacity: 0 }}
            animate={{
              cy: [hubBottom.y + 1, targetStripY * 100 - 3],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

        </svg>

        {/* HUB LABEL — SimplifyQA wordmark + MCP pill inside the chassis */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2.5 pointer-events-none"
          style={{
            left: `${hubCenter.x}%`,
            top: `${hubCenter.y}%`,
          }}
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img
              src="/simplify_logo.svg"
              alt="SimplifyQA"
              className="h-3.5 sm:h-4 w-auto"
              draggable={false}
            />
            <span
              className="px-1.5 py-0.5 rounded font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em]"
              style={{
                background: C.green,
                color: C.ink,
              }}
            >
              MCP
            </span>
          </div>
          <div
            className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-[0.22em] flex items-center gap-1.5"
            style={{ color: C.green }}
          >
            <motion.span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: C.green }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            50 tools · online
          </div>
        </div>

        {/* AI client chips at the top — real brand logos */}
        {CLIENTS.map((s) => (
          <SatelliteChip key={s.id} label={s.label} x={s.x} y={s.y} Icon={s.Icon} logo={s.logo} />
        ))}

        {/* Target-tech pill strip along the bottom */}
        <TargetStrip yPct={targetStripY} />

        {/* Corner status readouts */}
        <StatusReadout position="tl" text="MCP · ONLINE" ok />
        <StatusReadout position="tr" text="TOOLS · 50" />
        <StatusReadout position="bl" text="LATENCY 42MS" />
        <StatusReadout position="br" text="TARGETS · 8" ok />
      </div>
    </div>
  );
}

/* ---------- AI-client chip ---------- */
function SatelliteChip({
  label, x, y, Icon, logo,
}: {
  label: string;
  x: number;
  y: number;
  Icon?: React.ComponentType<{ className?: string; size?: number | string; color?: string }>;
  logo?: string;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
    >
      <div
        className="grid place-items-center w-10 h-10 rounded-xl"
        style={{
          background: 'rgba(15,15,22,0.9)',
          border: `1px solid ${C.border}`,
          boxShadow: `0 0 24px rgba(74,222,128,0.15), 0 4px 12px rgba(0,0,0,0.4)`,
          backdropFilter: 'blur(6px)',
        }}
      >
        {Icon ? (
          <Icon className="w-5 h-5" color="#FFFFFF" />
        ) : logo ? (
          <img
            src={logo}
            alt={label}
            className="w-5 h-5 object-contain"
            draggable={false}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}
      </div>
      <div
        className="px-1.5 py-0.5 rounded text-[9.5px] font-mono font-semibold uppercase tracking-[0.14em]"
        style={{
          background: 'rgba(15,15,22,0.85)',
          color: C.green,
          border: `1px solid ${C.border}`,
          backdropFilter: 'blur(6px)',
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ---------- Target-tech strip (bottom) ---------- */
function TargetStrip({ yPct }: { yPct: number }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[440px] pointer-events-none"
      style={{ top: `${yPct * 100}%` }}
    >
      <div
        className="rounded-xl border px-2 py-2 flex items-center justify-between gap-1"
        style={{
          background: 'rgba(15,15,22,0.75)',
          borderColor: C.border,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 20px -10px rgba(0,0,0,0.6)',
        }}
      >
        {TARGETS.map((t, i) => (
          <motion.span
            key={t}
            className="flex-1 min-w-0 text-center rounded-md py-1 text-[9.5px] font-mono font-semibold uppercase tracking-wider"
            initial={{ background: 'rgba(255,255,255,0.03)', color: C.faint }}
            animate={{
              background: [
                'rgba(255,255,255,0.03)',
                'rgba(251,191,36,0.20)',
                'rgba(255,255,255,0.03)',
              ],
              color: [C.faint, C.amber, C.faint],
            }}
            transition={{
              duration: 2.4,
              delay: i * 0.28,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'easeInOut',
            }}
            style={{ border: `1px solid ${C.border}` }}
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div
        className="mt-1.5 text-[9px] font-mono uppercase tracking-[0.22em] text-center"
        style={{ color: C.muted }}
      >
        Target technologies
      </div>
    </div>
  );
}

/* ---------- Corner status readout ---------- */
function StatusReadout({
  position, text, ok,
}: { position: 'tl' | 'tr' | 'bl' | 'br'; text: string; ok?: boolean }) {
  const pos: React.CSSProperties = {
    tl: { top: 14, left: 14 },
    tr: { top: 14, right: 14 },
    bl: { bottom: 14, left: 14 },
    br: { bottom: 14, right: 14 },
  }[position];

  return (
    <div
      className="absolute inline-flex items-center gap-1.5 px-2 py-1 rounded text-[9.5px] font-mono font-semibold uppercase tracking-[0.14em] pointer-events-none"
      style={{
        ...pos,
        background: 'rgba(15,15,22,0.7)',
        color: C.faint,
        border: `1px solid ${C.border}`,
      }}
    >
      {ok && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: C.green }}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      )}
      {text}
    </div>
  );
}
