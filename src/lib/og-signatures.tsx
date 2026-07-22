// Per-page signature visuals for OG cards. Each renders in a ~460x420 slot
// on a cream canvas — white cards, brand-red accents, ink typography, to
// match the site (bg-white text-ink-900 with brand-600 highlights).
//
// Rendered by Satori: SVG shapes + positioned HTML divs (Satori does not
// support <text> inside SVG).

import type { CSSProperties, ReactElement } from 'react';
import { OG_TOKENS as T } from './og';

const MONO: CSSProperties = { fontFamily: 'Geist Mono, ui-monospace, monospace' };
const BOX: CSSProperties = { position: 'absolute', display: 'flex' };
const CARD_BG = T.paper;
const CARD_BORDER = 'rgba(15,19,34,0.08)';
const CARD_SHADOW = { boxShadow: '0 8px 30px -12px rgba(15,19,34,0.10)' } as CSSProperties;

function frame(children: ReactElement | ReactElement[]): ReactElement {
  return (
    <div style={{ position: 'relative', width: 460, height: 420, display: 'flex' }}>
      {children as any}
    </div>
  );
}

function mkRng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xffffffff; };
}

// ============ SCROLL — brain graph ==============================
// Scroll's own product palette is violet-on-cream. Ambient nodes are
// violet, hub is warm gold — the same combo used on the /scroll page's
// KB brain-graph section.
export function SigScroll(): ReactElement {
  const rng = mkRng(42);
  const nodes: { x: number; y: number; r: number; hemi: 'L' | 'R' }[] = [];
  const push = (cx: number, cy: number, rx: number, ry: number, count: number, hemi: 'L' | 'R') => {
    let placed = 0, guard = 0;
    while (placed < count && guard < 800) {
      guard++;
      const u = rng() * 2 - 1, v = rng() * 2 - 1;
      if (u * u + v * v > 1) continue;
      const nx = cx + u * rx;
      const ny = cy + v * ry * (v > 0 ? 0.9 : 1);
      if (nodes.some((n) => n.hemi === hemi && Math.hypot(n.x - nx, n.y - ny) < 34)) continue;
      nodes.push({ x: nx, y: ny, r: 3 + rng() * 2.5, hemi });
      placed++;
    }
  };
  push(150, 210, 120, 160, 16, 'L');
  push(320, 210, 120, 160, 16, 'R');
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  nodes.forEach((n, i) => {
    const near = nodes
      .map((o, j) => ({ j, d: Math.hypot(o.x - n.x, o.y - n.y), same: o.hemi === n.hemi }))
      .filter((o) => o.j !== i && o.same)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    near.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) return;
      seen.add(key);
      edges.push([i, j]);
    });
  });
  edges.push([
    nodes.findIndex((n) => n.hemi === 'L' && Math.abs(n.y - 210) < 40),
    nodes.findIndex((n) => n.hemi === 'R' && Math.abs(n.y - 210) < 40),
  ]);

  return (
    <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="150" cy="210" rx="128" ry="168" fill="#7C3AED" opacity="0.06" />
      <ellipse cx="320" cy="210" rx="128" ry="168" fill="#7C3AED" opacity="0.06" />
      <line x1="235" y1="70" x2="235" y2="350" stroke="#7C3AED" strokeWidth="0.8" strokeDasharray="2 5" opacity="0.35" />
      {edges.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        if (!na || !nb) return null;
        return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="#7C3AED" strokeOpacity="0.55" strokeWidth="1" />;
      })}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#7C3AED" />
      ))}
      {/* Featured hub — warm gold synapse, matches the scroll page */}
      <circle cx="235" cy="210" r="18" fill="#F59E0B" opacity="0.20" />
      <circle cx="235" cy="210" r="9"  fill="#F59E0B" opacity="0.75" />
      <circle cx="235" cy="210" r="4"  fill="#78350F" />
    </svg>
  );
}

// ============ AGENT — MCP request card ==========================
export function SigAgent(): ReactElement {
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        {/* Card */}
        <rect x="30" y="60" width="400" height="300" rx="18" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
        {/* Traffic lights */}
        <circle cx="52" cy="82" r="5" fill="#F87171" />
        <circle cx="70" cy="82" r="5" fill="#FBBF24" />
        <circle cx="88" cy="82" r="5" fill="#34D399" />
        {/* MCP badge */}
        <rect x="332" y="70" width="80" height="24" rx="6" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
        {/* Step dots */}
        <circle cx="60" cy="182" r="4" fill="#059669" />
        <circle cx="60" cy="212" r="4" fill="#059669" />
        <circle cx="60" cy="242" r="4" fill="#059669" />
        <circle cx="60" cy="272" r="4" fill={T.brand600} />
        {/* Response strip */}
        <rect x="40" y="298" width="380" height="46" rx="10" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      </svg>
      <div style={{ ...BOX, top: 74, left: 342, ...MONO, fontSize: 12, color: '#4338CA', fontWeight: 700 }}>MCP</div>
      {/* Prompt line — single flex row so token spacing stays intact */}
      <div style={{ ...BOX, top: 128, left: 52, ...MONO, fontSize: 16, display: 'flex', alignItems: 'center', gap: 0 }}>
        <span style={{ color: '#4338CA', fontWeight: 700 }}>→ agent.explore(</span>
        <span style={{ color: T.brand600 }}>&quot;url&quot;</span>
        <span style={{ color: '#4338CA', fontWeight: 700 }}>)</span>
      </div>
      <div style={{ ...BOX, top: 172, left: 76, ...MONO, fontSize: 14, color: T.ink500 }}>explored 42 screens</div>
      <div style={{ ...BOX, top: 202, left: 76, ...MONO, fontSize: 14, color: T.ink500 }}>generated 128 tests</div>
      <div style={{ ...BOX, top: 232, left: 76, ...MONO, fontSize: 14, color: T.ink500 }}>ran 128 · passed 124</div>
      <div style={{ ...BOX, top: 262, left: 76, ...MONO, fontSize: 14, color: T.ink500 }}>filed 4 defects to Jira</div>
      <div style={{ ...BOX, top: 312, left: 56, ...MONO, fontSize: 14, color: '#4338CA', fontWeight: 700 }}>
        ← done. 96.9% pass · 4 filed.
      </div>
    </>,
  );
}

// ============ PRICING — three tier chips ========================
export function SigPricing(): ReactElement {
  const tiers = [
    { y: 60,  h: 90,  price: 'Free',   tag: 'PILOT',      accent: T.ink400,  note: '14-day pilot · every feature' },
    { y: 165, h: 110, price: '$29',    tag: 'TEAM',       accent: T.brand600, note: 'per seat / month · billed yearly' },
    { y: 290, h: 100, price: 'Custom', tag: 'ENTERPRISE', accent: '#B45309', note: 'unlimited seats · white-glove' },
  ];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        {tiers.map((t, i) => (
          <g key={i}>
            <rect x="40" y={t.y} width="380" height={t.h} rx="14"
                  fill={CARD_BG}
                  stroke={i === 1 ? t.accent : CARD_BORDER}
                  strokeWidth={i === 1 ? 2 : 1} />
            {/* Tag chip fill */}
            <rect x="230" y={t.y + 22} width="120" height="26" rx="13" fill={i === 1 ? T.brand50 : T.ink050} />
            <line x1="60" y1={t.y + 66} x2="400" y2={t.y + 66} stroke={T.hairline} />
          </g>
        ))}
      </svg>
      {tiers.map((t, i) => (
        <div key={i} style={{ display: 'flex' }}>
          <div style={{ ...BOX, top: t.y + 14, left: 60, fontSize: 30, fontWeight: 800, color: T.ink900, letterSpacing: -1, fontFamily: 'Geist, Inter, sans-serif' }}>
            {t.price}
          </div>
          <div style={{ ...BOX, top: t.y + 26, left: 245, fontSize: 13, fontWeight: 700, letterSpacing: 3, color: t.accent }}>
            {t.tag}
          </div>
          <div style={{ ...BOX, top: t.y + t.h - 26, left: 60, fontSize: 14, color: T.ink500 }}>
            {t.note}
          </div>
        </div>
      ))}
    </>,
  );
}

// ============ SOLUTIONS — four persona quadrants ================
export function SigSolutions(): ReactElement {
  const cells = [
    { primary: 'Enterprise',  secondary: 'QA',         color: T.brand600 },
    { primary: 'Engineering', secondary: 'Leaders',    color: '#7C3AED' },
    { primary: 'Automation',  secondary: 'Teams',      color: '#0369A1' },
    { primary: 'Regulated',   secondary: 'Industries', color: '#B45309' },
  ];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        {cells.map((c, i) => {
          const x = 30 + (i % 2) * 205;
          const y = 30 + Math.floor(i / 2) * 190;
          return (
            <g key={i}>
              <rect x={x} y={y} width="180" height="160" rx="14" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
              <circle cx={x + 44} cy={y + 44} r="22" fill={`${c.color}18`} />
              <circle cx={x + 44} cy={y + 44} r="8" fill={c.color} />
              <line x1={x + 20} y1={y + 144} x2={x + 40} y2={y + 144} stroke={c.color} strokeWidth="2" />
            </g>
          );
        })}
      </svg>
      {cells.map((c, i) => {
        const x = 30 + (i % 2) * 205;
        const y = 30 + Math.floor(i / 2) * 190;
        return (
          <div key={i} style={{ display: 'flex' }}>
            <div style={{ ...BOX, top: y + 92, left: x + 20, fontSize: 19, fontWeight: 800, color: T.ink900, fontFamily: 'Geist, Inter, sans-serif' }}>
              {c.primary}
            </div>
            <div style={{ ...BOX, top: y + 118, left: x + 20, fontSize: 15, fontWeight: 600, color: T.ink500 }}>
              {c.secondary}
            </div>
          </div>
        );
      })}
    </>,
  );
}

// ============ CUSTOMER SUCCESS — constellation ==================
export function SigCustomerSuccess(): ReactElement {
  const rings = [
    { r: 60,  n: 6,  size: 12 },
    { r: 120, n: 10, size: 9 },
    { r: 180, n: 14, size: 6 },
  ];
  const cx = 230, cy = 200;
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        {rings.map((ring, r) => (
          <g key={r}>
            <circle cx={cx} cy={cy} r={ring.r} fill="none" stroke={T.brand600} strokeOpacity="0.18" strokeDasharray="2 6" />
            {Array.from({ length: ring.n }).map((_, i) => {
              const a = (i / ring.n) * Math.PI * 2 + r * 0.3;
              return (
                <circle
                  key={i}
                  cx={cx + Math.cos(a) * ring.r}
                  cy={cy + Math.sin(a) * ring.r}
                  r={ring.size / 2}
                  fill={r === 0 ? '#B45309' : T.brand600}
                  opacity={r === 0 ? 1 : r === 1 ? 0.85 : 0.55}
                />
              );
            })}
          </g>
        ))}
        <circle cx={cx} cy={cy} r="26" fill={T.brand600} />
      </svg>
      <div style={{
        ...BOX, top: cy - 14, left: 0, width: 460,
        justifyContent: 'center', fontSize: 24, fontWeight: 800, color: 'white', fontFamily: 'Geist, Inter, sans-serif',
      }}>
        S
      </div>
      <div style={{
        ...BOX, top: 388, left: 0, width: 460,
        justifyContent: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 4, color: T.ink500,
      }}>
        FORTUNE 100 · 40+ ENTERPRISES
      </div>
    </>,
  );
}

// ============ ABOUT — QA sigil ==================================
export function SigAbout(): ReactElement {
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <circle cx="230" cy="210" r="184" fill="none" stroke={T.brand600} strokeOpacity="0.14" strokeWidth="1" />
        <circle cx="230" cy="210" r="142" fill="none" stroke={T.brand600} strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="230" cy="210" r="100" fill={T.brand50} />
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 230 + Math.cos(rad) * 178, y1 = 210 + Math.sin(rad) * 178;
          const x2 = 230 + Math.cos(rad) * 190, y2 = 210 + Math.sin(rad) * 190;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={T.brand600} strokeWidth="2.5" />;
        })}
      </svg>
      <div style={{
        ...BOX, top: 40, left: 0, width: 460, height: 340,
        alignItems: 'center', justifyContent: 'center',
        fontSize: 220, fontWeight: 800, letterSpacing: -14, color: T.brandQA,
        fontFamily: 'Geist, Inter, sans-serif',
      }}>
        QA
      </div>
    </>,
  );
}

// ============ TEST MANAGEMENT — traceability ====================
export function SigTestManagement(): ReactElement {
  const cols = [
    { x: 55,  label: 'REQS',    color: '#0369A1', dots: [70, 140, 210, 280] },
    { x: 210, label: 'TESTS',   color: T.brand600, dots: [90, 160, 230, 300] },
    { x: 365, label: 'DEFECTS', color: '#B45309', dots: [180, 250] },
  ];
  const dotR = 10;
  const traces: [number, number, number, number, string][] = [
    [cols[0].x, 70,  cols[1].x, 90,  '#0369A1'],
    [cols[0].x, 70,  cols[1].x, 160, '#0369A1'],
    [cols[0].x, 140, cols[1].x, 160, '#0369A1'],
    [cols[0].x, 210, cols[1].x, 230, '#0369A1'],
    [cols[0].x, 280, cols[1].x, 300, '#0369A1'],
    [cols[1].x, 160, cols[2].x, 180, T.brand600],
    [cols[1].x, 230, cols[2].x, 250, T.brand600],
  ];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        {cols.map((c) => (
          <rect key={c.label} x={c.x - 40} y="30" width="80" height="24" rx="6" fill={`${c.color}18`} />
        ))}
        {traces.map(([x1, y1, x2, y2, s], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={s} strokeOpacity="0.42" strokeWidth="1.5" />
        ))}
        {cols.map((c) =>
          c.dots.map((y, j) => (
            <g key={`${c.label}-${j}`}>
              <circle cx={c.x} cy={y} r={dotR + 4} fill={`${c.color}20`} />
              <circle cx={c.x} cy={y} r={dotR} fill={c.color} />
            </g>
          )),
        )}
      </svg>
      {cols.map((c) => (
        <div key={c.label} style={{
          ...BOX, top: 33, left: c.x - 40, width: 80,
          justifyContent: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: c.color,
        }}>
          {c.label}
        </div>
      ))}
      <div style={{
        ...BOX, top: 372, left: 0, width: 460,
        justifyContent: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 4, color: T.ink500,
      }}>
        100% COVERAGE · 2 OPEN
      </div>
    </>,
  );
}

// ============ TEST AUTOMATION — self-healing loop ===============
export function SigTestAutomation(): ReactElement {
  const stops = [
    { a: -Math.PI / 2, label: 'RUN' },
    { a: 0,            label: 'DETECT' },
    { a: Math.PI / 2,  label: 'HEAL' },
    { a: Math.PI,      label: 'RETRY' },
  ];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <circle cx="230" cy="210" r="130" fill="none" stroke={T.brand600} strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="4 8" />
        <path d="M 230 80  A 130 130 0 0 1 360 210" fill="none" stroke={T.brand600} strokeWidth="6" strokeLinecap="round" />
        <path d="M 355 195 L 375 210 L 355 225 Z" fill={T.brand600} />
        {stops.map((s, i) => {
          const x = 230 + Math.cos(s.a) * 130;
          const y = 210 + Math.sin(s.a) * 130;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="14" fill={CARD_BG} stroke={T.brand600} strokeWidth="2" />
              <circle cx={x} cy={y} r="4" fill={T.brand600} />
            </g>
          );
        })}
      </svg>
      {stops.map((s, i) => {
        const x = 230 + Math.cos(s.a) * 130 - 40;
        const y = 210 + Math.sin(s.a) * 130 + (s.a < 0 ? -36 : 24);
        return (
          <div key={i} style={{
            ...BOX, top: y, left: x, width: 80,
            justifyContent: 'center', fontSize: 15, fontWeight: 700, letterSpacing: 2, color: T.ink700,
          }}>
            {s.label}
          </div>
        );
      })}
      <div style={{
        ...BOX, top: 178, left: 0, width: 460,
        justifyContent: 'center', fontSize: 40, fontWeight: 800, letterSpacing: -2, color: T.ink900,
        fontFamily: 'Geist, Inter, sans-serif',
      }}>
        SELF-
      </div>
      <div style={{
        ...BOX, top: 224, left: 0, width: 460,
        justifyContent: 'center', fontSize: 40, fontWeight: 800, letterSpacing: -2, color: T.brand600,
        fontFamily: 'Geist, Inter, sans-serif',
      }}>
        HEALING
      </div>
    </>,
  );
}

// ============ AI TEST ASSISTANT — prompt to tests ================
export function SigAITestAssistant(): ReactElement {
  const rows = [
    { title: 'add to cart · quantity 2',     state: 'PASS' as const },
    { title: 'checkout · guest user',         state: 'PASS' as const },
    { title: 'apply promo · SAVE10',          state: 'PASS' as const },
    { title: 'pay · declined card',           state: 'FAIL' as const },
    { title: 'confirmation · email dispatch', state: 'PASS' as const },
  ];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <rect x="40" y="50" width="380" height="80" rx="18" fill={CARD_BG} stroke={T.brand200} strokeWidth="1.5" />
        <circle cx="70" cy="90" r="14" fill={T.brand50} stroke={T.brand600} strokeWidth="1.5" />
        <path d="M 230 148 L 230 178 M 222 168 L 230 180 L 238 168" stroke={T.brand600} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {rows.map((r, i) => {
          const y = 200 + i * 36;
          const pass = r.state === 'PASS';
          return (
            <g key={i}>
              <rect x="40" y={y} width="380" height="30" rx="8" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
              <circle cx="62" cy={y + 15} r="6" fill={pass ? '#059669' : T.brand600} />
            </g>
          );
        })}
      </svg>
      <div style={{ ...BOX, top: 82, left: 62, fontSize: 18, fontWeight: 800, color: T.brand600, width: 30, justifyContent: 'center' }}>?</div>
      <div style={{ ...BOX, top: 70, left: 100, fontSize: 16, fontWeight: 600, color: T.ink900 }}>
        Write tests for the checkout flow
      </div>
      <div style={{ ...BOX, top: 96, left: 100, fontSize: 14, color: T.ink500 }}>
        product · shipping · payment · confirmation
      </div>
      {rows.map((r, i) => {
        const y = 200 + i * 36;
        const pass = r.state === 'PASS';
        return (
          <div key={i} style={{ display: 'flex' }}>
            <div style={{ ...BOX, top: y + 5, left: 80, ...MONO, fontSize: 14, color: T.ink700 }}>
              {r.title}
            </div>
            <div style={{
              ...BOX, top: y + 8, left: 340, width: 60,
              justifyContent: 'flex-end', fontSize: 12, fontWeight: 700, letterSpacing: 2,
              color: pass ? '#059669' : T.brand600,
            }}>
              {r.state}
            </div>
          </div>
        );
      })}
    </>,
  );
}

// ============ DEFECT MANAGEMENT — severity stack =================
export function SigDefectManagement(): ReactElement {
  const cards = [
    { p: 'P0', title: 'Payment webhook 500s',      color: '#DC2626', team: 'sre',     cluster: '×12' },
    { p: 'P1', title: 'Login SSO retry on stale',   color: '#D97706', team: 'auth',    cluster: '×3'  },
    { p: 'P2', title: 'Report export truncated',    color: '#B45309', team: 'billing', cluster: '×1'  },
    { p: 'P3', title: 'i18n typo · pt-BR homepage', color: T.ink400,  team: 'i18n',    cluster: '×1'  },
  ];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        {cards.map((c, i) => {
          const y = 30 + i * 92;
          return (
            <g key={i}>
              <rect x="40" y={y} width="380" height="76" rx="12" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
              <rect x="40" y={y} width={6} height={76} fill={c.color} />
              <rect x="60" y={y + 18} width="52" height="22" rx="5" fill={`${c.color}18`} />
            </g>
          );
        })}
      </svg>
      {cards.map((c, i) => {
        const y = 30 + i * 92;
        return (
          <div key={i} style={{ display: 'flex' }}>
            <div style={{
              ...BOX, top: y + 20, left: 60, width: 52,
              justifyContent: 'center', fontSize: 13, fontWeight: 800, letterSpacing: 2, color: c.color,
            }}>
              {c.p}
            </div>
            <div style={{ ...BOX, top: y + 20, left: 122, fontSize: 17, fontWeight: 700, color: T.ink900 }}>
              {c.title}
            </div>
            <div style={{ ...BOX, top: y + 46, left: 122, fontSize: 14, color: T.ink500 }}>
              team {c.team}
            </div>
            <div style={{
              ...BOX, top: y + 46, left: 320, width: 90,
              justifyContent: 'flex-end', fontSize: 14, fontWeight: 700, color: T.ink500,
            }}>
              cluster {c.cluster}
            </div>
          </div>
        );
      })}
    </>,
  );
}

// ============ RELEASE ORCHESTRATION — pipeline stages ============
export function SigReleaseOrchestration(): ReactElement {
  const stages = [
    { label: 'BUILD',    state: 'pass' },
    { label: 'UNIT',     state: 'pass' },
    { label: 'E2E',      state: 'pass' },
    { label: 'PERF',     state: 'gate' },
    { label: 'SIGN-OFF', state: 'wait' },
  ];
  const y = 210;
  const PASS = '#059669';
  const GATE = '#D97706';
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <line x1="45" y1={y} x2="415" y2={y} stroke={T.ink100} strokeWidth="6" strokeLinecap="round" />
        <line x1="45" y1={y} x2="255" y2={y} stroke={PASS} strokeWidth="6" strokeLinecap="round" />
        {stages.map((s, i) => {
          const x = 45 + (i / (stages.length - 1)) * 370;
          const fill = s.state === 'pass' ? PASS : s.state === 'gate' ? GATE : T.ink200;
          const stroke = s.state === 'wait' ? T.ink300 : fill;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="18" fill={CARD_BG} stroke={stroke} strokeWidth="3" />
              {s.state === 'pass' && (
                <path d={`M ${x - 6} ${y} L ${x - 2} ${y + 5} L ${x + 7} ${y - 6}`}
                      stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              )}
            </g>
          );
        })}
      </svg>
      <div style={{
        ...BOX, top: 82, left: 0, width: 460,
        justifyContent: 'center', fontSize: 15, fontWeight: 800, letterSpacing: 4, color: T.ink700,
      }}>
        RELEASE 2026.07 · main
      </div>
      <div style={{
        ...BOX, top: 112, left: 0, width: 460,
        justifyContent: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: GATE,
      }}>
        HELD AT PERF GATE
      </div>
      {stages.map((s, i) => {
        const x = 45 + (i / (stages.length - 1)) * 370;
        const fill = s.state === 'gate' ? GATE : T.ink500;
        return (
          <div key={i} style={{ display: 'flex' }}>
            <div style={{
              ...BOX, top: y - 46, left: x - 50, width: 100,
              justifyContent: 'center', fontSize: 12, fontWeight: 700, letterSpacing: 2, color: T.ink700,
            }}>
              {s.label}
            </div>
            {s.state === 'gate' && (
              <div style={{
                ...BOX, top: y - 12, left: x - 10, width: 20,
                justifyContent: 'center', fontSize: 20, fontWeight: 800, color: fill,
              }}>
                !
              </div>
            )}
          </div>
        );
      })}
      <div style={{
        ...BOX, top: 320, left: 0, width: 460,
        justifyContent: 'center', fontSize: 12, fontWeight: 700, letterSpacing: 3, color: T.ink500,
      }}>
        JENKINS · GITHUB ACTIONS · AZURE DEVOPS
      </div>
    </>,
  );
}

// ============ INSIGHTS & REPORTS — chart + gauge =================
export function SigInsightsReports(): ReactElement {
  const bars = [40, 62, 55, 78, 90, 84, 96];
  return frame(
    <>
      <svg width="460" height="420" viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <rect x="30" y="30" width="270" height="220" rx="14" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
        {bars.map((b, i) => {
          const x = 50 + i * 32;
          const h = b * 1.4;
          const yy = 240 - h;
          return <rect key={i} x={x} y={yy} width={20} height={h} rx={4} fill={T.brand600} opacity={0.35 + (i / bars.length) * 0.55} />;
        })}
        <rect x="315" y="30" width="115" height="220" rx="14" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
        <circle cx="372" cy="150" r="46" fill="none" stroke={T.ink100} strokeWidth="10" />
        <path d="M 372 104 A 46 46 0 1 1 328.5 178.5" stroke="#059669" strokeWidth="10" fill="none" strokeLinecap="round" />
        <rect x="30" y="278" width="130" height="70" rx="10" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
        <rect x="170" y="278" width="130" height="70" rx="10" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
        <rect x="310" y="278" width="120" height="70" rx="10" fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="1" />
      </svg>
      <div style={{ ...BOX, top: 46, left: 48, fontSize: 12, fontWeight: 800, letterSpacing: 3, color: T.ink500 }}>
        PASS RATE · 7D
      </div>
      <div style={{ ...BOX, top: 66, left: 48, fontSize: 32, fontWeight: 800, color: T.ink900, fontFamily: 'Geist, Inter, sans-serif' }}>96.9%</div>
      <div style={{ ...BOX, top: 76, left: 148, fontSize: 14, fontWeight: 700, color: '#059669' }}>+2.1</div>
      <div style={{
        ...BOX, top: 46, left: 315, width: 115,
        justifyContent: 'center', fontSize: 12, fontWeight: 800, letterSpacing: 3, color: T.ink500,
      }}>
        READINESS
      </div>
      <div style={{
        ...BOX, top: 134, left: 315, width: 115,
        justifyContent: 'center', fontSize: 26, fontWeight: 800, color: T.ink900, fontFamily: 'Geist, Inter, sans-serif',
      }}>
        A-
      </div>
      <div style={{
        ...BOX, top: 220, left: 315, width: 115,
        justifyContent: 'center', fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#059669',
      }}>
        SHIP
      </div>
      <div style={{ ...BOX, top: 294, left: 46, fontSize: 12, fontWeight: 700, letterSpacing: 2, color: T.ink500 }}>MTTR</div>
      <div style={{ ...BOX, top: 316, left: 46, fontSize: 22, fontWeight: 800, color: T.ink900, fontFamily: 'Geist, Inter, sans-serif' }}>1.4d</div>
      <div style={{ ...BOX, top: 294, left: 186, fontSize: 12, fontWeight: 700, letterSpacing: 2, color: T.ink500 }}>FLAKE</div>
      <div style={{ ...BOX, top: 316, left: 186, fontSize: 22, fontWeight: 800, color: T.ink900, fontFamily: 'Geist, Inter, sans-serif' }}>0.8%</div>
      <div style={{ ...BOX, top: 294, left: 326, fontSize: 12, fontWeight: 700, letterSpacing: 2, color: T.ink500 }}>RUNS</div>
      <div style={{ ...BOX, top: 316, left: 326, fontSize: 22, fontWeight: 800, color: T.ink900, fontFamily: 'Geist, Inter, sans-serif' }}>12k</div>
    </>,
  );
}
