'use client';

import { useMemo, useRef, useState } from 'react';

// Deterministic PRNG so hemisphere layouts are stable across renders and SSR.
function mkRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

type Hemi = 'L' | 'R';
interface Node { id: number; x: number; y: number; hemi: Hemi; r: number }
interface Edge { a: number; b: number }
interface Feature { x: number; y: number; label: string; side: 'left' | 'right' }

function generateNodes(): Node[] {
  const nodes: Node[] = [];
  const push = (cx: number, cy: number, rx: number, ry: number, count: number, seed: number, hemi: Hemi) => {
    const rng = mkRng(seed);
    let placed = 0;
    let guard = 0;
    while (placed < count && guard < 3000) {
      guard++;
      const u = rng() * 2 - 1;
      const v = rng() * 2 - 1;
      if (u * u + v * v > 1) continue;
      const nx = cx + u * rx;
      const ny = cy + v * ry * (v > 0 ? 0.85 : 1);
      const collides = nodes.some(
        (n) => n.hemi === hemi && Math.hypot(n.x - nx, n.y - ny) < 26,
      );
      if (collides) continue;
      const size = 1.6 + rng() * 1.4;
      nodes.push({ id: nodes.length, x: nx, y: ny, hemi, r: size });
      placed++;
    }
  };
  push(250, 260, 175, 205, 32, 42,  'L');
  push(490, 260, 175, 205, 32, 137, 'R');
  return nodes;
}

function generateEdges(nodes: Node[]): Edge[] {
  const edges: Edge[] = [];
  const key = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);
  const seen = new Set<string>();
  const degree = new Map<number, number>();
  const inc = (id: number) => degree.set(id, (degree.get(id) ?? 0) + 1);

  for (const n of nodes) {
    const neighbors = nodes
      .filter((o) => o.id !== n.id && o.hemi === n.hemi)
      .map((o) => ({ o, d: Math.hypot(o.x - n.x, o.y - n.y) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
    for (const { o } of neighbors) {
      const k = key(n.id, o.id);
      if (seen.has(k)) continue;
      if ((degree.get(n.id) ?? 0) >= 4) continue;
      if ((degree.get(o.id) ?? 0) >= 4) continue;
      seen.add(k);
      edges.push({ a: n.id, b: o.id });
      inc(n.id); inc(o.id);
    }
  }

  const midL = nodes.filter((n) => n.hemi === 'L' && Math.abs(n.y - 260) < 100).sort((a, b) => a.y - b.y);
  const midR = nodes.filter((n) => n.hemi === 'R' && Math.abs(n.y - 260) < 100).sort((a, b) => a.y - b.y);
  const bridges = Math.min(5, midL.length, midR.length);
  for (let i = 0; i < bridges; i++) {
    const a = midL[Math.floor((i + 0.5) * (midL.length / bridges))];
    const b = midR[Math.floor((i + 0.5) * (midR.length / bridges))];
    if (a && b) edges.push({ a: a.id, b: b.id });
  }

  return edges;
}

const FEATURES: Feature[] = [
  { x: 40,  y: 130, label: 'Login flow',      side: 'left'  },
  { x: 24,  y: 265, label: 'Auth service',    side: 'left'  },
  { x: 40,  y: 395, label: 'Session tokens',  side: 'left'  },
  { x: 700, y: 130, label: 'Payment API',     side: 'right' },
  { x: 716, y: 265, label: 'Refund policy',   side: 'right' },
  { x: 700, y: 395, label: 'Ledger schema',   side: 'right' },
];

function nearestNodeTo(nodes: Node[], f: Feature): Node {
  let best = nodes[0];
  let bestD = Infinity;
  for (const n of nodes) {
    if (f.side === 'left' && n.hemi !== 'L') continue;
    if (f.side === 'right' && n.hemi !== 'R') continue;
    const d = Math.hypot(n.x - f.x, n.y - f.y);
    if (d < bestD) { bestD = d; best = n; }
  }
  return best;
}

const VIEW_W = 740;
const VIEW_H = 520;

export default function KnowledgeBrainGraph() {
  // Initial layout computed once. Positions after this live in `positions`
  // state so drag/hover interactions can mutate them.
  const initial = useMemo(() => {
    const nodes = generateNodes();
    const edges = generateEdges(nodes);
    const anchors = FEATURES.map((f) => ({ feature: f, nodeId: nearestNodeTo(nodes, f).id }));
    const featuredIds = new Set(anchors.map((a) => a.nodeId));
    const adj = new Map<number, Set<number>>();
    for (const n of nodes) adj.set(n.id, new Set());
    for (const e of edges) {
      adj.get(e.a)!.add(e.b);
      adj.get(e.b)!.add(e.a);
    }
    return { nodes, edges, anchors, featuredIds, adj };
  }, []);

  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>(() => {
    const p: Record<number, { x: number; y: number }> = {};
    for (const n of initial.nodes) p[n.id] = { x: n.x, y: n.y };
    return p;
  });

  const [hovered, setHovered] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragRef = useRef<{ id: number; offX: number; offY: number; moved: boolean } | null>(null);

  // Active set = hovered node + its 1-hop neighbors. Used to decide edge/node
  // highlight vs. dim in the render pass below. null → no dimming.
  const activeSet = useMemo(() => {
    if (hovered == null) return null;
    const s = new Set<number>([hovered]);
    for (const n of initial.adj.get(hovered) ?? []) s.add(n);
    return s;
  }, [hovered, initial.adj]);

  // Screen pixel → SVG viewBox coordinate. Uses getBoundingClientRect so we
  // don't have to touch getScreenCTM (which allocates a matrix per call).
  const toWorld = (clientX: number, clientY: number) => {
    const el = svgRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    return {
      x: ((clientX - r.left) / r.width)  * VIEW_W,
      y: ((clientY - r.top)  / r.height) * VIEW_H,
    };
  };

  const onPointerDownNode = (id: number) => (e: React.PointerEvent<SVGGElement>) => {
    e.stopPropagation();
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    const p = toWorld(e.clientX, e.clientY);
    const cur = positions[id];
    dragRef.current = { id, offX: cur.x - p.x, offY: cur.y - p.y, moved: false };
    setHovered(id);
  };

  const onPointerMoveNode = (e: React.PointerEvent<SVGGElement>) => {
    const d = dragRef.current;
    if (!d) return;
    const p = toWorld(e.clientX, e.clientY);
    const nx = Math.max(12, Math.min(VIEW_W - 12, p.x + d.offX));
    const ny = Math.max(12, Math.min(VIEW_H - 12, p.y + d.offY));
    d.moved = true;
    setPositions((prev) => (prev[d.id].x === nx && prev[d.id].y === ny ? prev : { ...prev, [d.id]: { x: nx, y: ny } }));
  };

  const onPointerUpNode = (e: React.PointerEvent<SVGGElement>) => {
    (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
    dragRef.current = null;
  };

  const resetLayout = () => {
    const p: Record<number, { x: number; y: number }> = {};
    for (const n of initial.nodes) p[n.id] = { x: n.x, y: n.y };
    setPositions(p);
  };

  const isDimmed = (id: number) => activeSet != null && !activeSet.has(id);
  const isEdgeActive = (e: Edge) =>
    activeSet != null && activeSet.has(e.a) && activeSet.has(e.b) &&
    (e.a === hovered || e.b === hovered);
  const isEdgeDimmed = (e: Edge) =>
    activeSet != null && !isEdgeActive(e);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[28px] border"
      style={{
        borderColor: '#312E81',
        background:
          'radial-gradient(60% 60% at 50% 45%, #2E1065 0%, #1E1B4B 55%, #0B1023 100%)',
        boxShadow:
          '0 40px 90px -40px rgba(76,29,149,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(40% 50% at 22% 30%, rgba(167,139,250,0.22), transparent 70%),' +
            'radial-gradient(40% 50% at 78% 70%, rgba(245,158,11,0.14), transparent 70%)',
        }}
      />

      {/* Corner chips */}
      <div
        className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
        style={{ background: 'rgba(139,92,246,0.14)', color: '#DDD6FE', borderColor: 'rgba(167,139,250,0.35)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#A78BFA', boxShadow: '0 0 8px #A78BFA' }} />
        Live KB graph
      </div>
      <button
        onClick={resetLayout}
        className="absolute top-4 right-4 z-10 rounded-full border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] transition-colors"
        style={{ background: 'rgba(139,92,246,0.10)', color: '#DDD6FE', borderColor: 'rgba(167,139,250,0.35)' }}
      >
        Reset layout
      </button>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="kb-brain-graph w-full h-auto block select-none"
        style={{ touchAction: 'none' }}
        role="img"
        aria-label="A brain-shaped constellation of interactive nodes representing linked pages in a Scroll knowledge base. Hover a node to reveal its connections; drag to rearrange."
      >
        <defs>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#F5F3FF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hub-glow-active" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#FEF3C7" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#FBBF24" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#EDE9FE" />
            <stop offset="100%" stopColor="#A78BFA" />
          </radialGradient>
          <radialGradient id="dot-active" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FBBF24" />
          </radialGradient>
          <filter id="synapse-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        {/* Hemisphere silhouettes */}
        <g opacity="0.18" stroke="#A78BFA" strokeDasharray="1 4" fill="none">
          <ellipse cx="250" cy="260" rx="182" ry="212" />
          <ellipse cx="490" cy="260" rx="182" ry="212" />
        </g>
        <line x1="370" y1="80" x2="370" y2="440"
              stroke="#A78BFA" strokeOpacity="0.18" strokeDasharray="2 6" />

        {/* Edges */}
        <g fill="none">
          {initial.edges.map((e, i) => {
            const a = positions[e.a], b = positions[e.b];
            const active = isEdgeActive(e);
            const dim = isEdgeDimmed(e);
            return (
              <line
                key={i}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={active ? '#FBBF24' : '#7C3AED'}
                strokeOpacity={active ? 0.95 : dim ? 0.08 : 0.32}
                strokeWidth={active ? 1.4 : 0.6}
                style={{ transition: 'stroke 200ms, stroke-opacity 200ms, stroke-width 200ms' }}
              />
            );
          })}
        </g>

        {/* Ambient nodes — draggable, hoverable */}
        <g>
          {initial.nodes.map((n) => {
            const pos = positions[n.id];
            const dim = isDimmed(n.id);
            const active = activeSet != null && activeSet.has(n.id);
            const isHubFeatured = initial.featuredIds.has(n.id);
            const dragging = dragRef.current?.id === n.id;
            return (
              <g
                key={n.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                style={{
                  cursor: dragging ? 'grabbing' : 'grab',
                  transition: dragging ? 'none' : 'opacity 200ms',
                  opacity: dim ? 0.25 : 1,
                }}
                onPointerDown={onPointerDownNode(n.id)}
                onPointerMove={onPointerMoveNode}
                onPointerUp={onPointerUpNode}
                onPointerCancel={onPointerUpNode}
                onPointerEnter={() => { if (!dragRef.current) setHovered(n.id); }}
                onPointerLeave={() => { if (!dragRef.current) setHovered(null); }}
              >
                {isHubFeatured && (
                  <circle r="14" fill={active ? 'url(#hub-glow-active)' : 'url(#hub-glow)'} />
                )}
                <circle
                  r={isHubFeatured ? 4.2 : n.r}
                  fill={active ? 'url(#dot-active)' : isHubFeatured ? '#FBFAFF' : 'url(#dot)'}
                  stroke={isHubFeatured ? (active ? '#FBBF24' : '#A78BFA') : 'none'}
                  strokeWidth={isHubFeatured ? 1 : 0}
                >
                  {/* Ambient brightness pulse — only when nothing is hovered */}
                  {!activeSet && (
                    <animate
                      attributeName="opacity"
                      values="0.55;0.95;0.55"
                      dur={`${4 + (n.id % 5) * 0.6}s`}
                      begin={`${(n.id % 7) * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
                {/* Wider invisible hit area — makes the small ambient dots practical to grab */}
                <circle r={12} fill="transparent" />
              </g>
            );
          })}
        </g>

        {/* Feature labels + leader lines. Nodes are rendered above (as hubs), */}
        {/* so labels & leaders live here in their own layer. */}
        <g pointerEvents="none">
          {initial.anchors.map(({ feature: f, nodeId }, i) => {
            const pos = positions[nodeId];
            const x1 = f.side === 'left' ? f.x + 78 : f.x - 78;
            const active = activeSet != null && activeSet.has(nodeId);
            return (
              <g key={i} style={{ transition: 'opacity 200ms', opacity: activeSet && !active ? 0.35 : 1 }}>
                <line
                  x1={pos.x} y1={pos.y}
                  x2={x1}   y2={f.y}
                  stroke={active ? '#FBBF24' : '#C4B5FD'}
                  strokeOpacity={active ? 0.85 : 0.55}
                  strokeWidth="0.7"
                  strokeDasharray="2 3"
                />
                <g transform={`translate(${f.x}, ${f.y})`}>
                  <text
                    textAnchor={f.side === 'left' ? 'start' : 'end'}
                    y="3"
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                    fontSize="10.5"
                    fontWeight="600"
                    letterSpacing="0.08em"
                    fill={active ? '#FEF3C7' : '#EDE9FE'}
                    style={{ textTransform: 'uppercase' }}
                  >
                    <tspan opacity="0.55">[[</tspan>
                    {f.label}
                    <tspan opacity="0.55">]]</tspan>
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Bottom meta strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3"
        style={{ borderColor: 'rgba(139,92,246,0.22)', background: 'rgba(15,10,45,0.55)' }}>
        <div className="flex items-center gap-4 text-[11px]" style={{ color: '#C4B5FD' }}>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: '#A78BFA' }} />
            Page
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: '#FBFAFF', boxShadow: '0 0 8px #A78BFA' }} />
            Hub (many backlinks)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: '#FBBF24', boxShadow: '0 0 8px #F59E0B' }} />
            Selected · neighborhood
          </span>
        </div>
        <div className="text-[11px] font-medium" style={{ color: '#A78BFA' }}>
          Hover to trace links · drag to rearrange
        </div>
      </div>

      {/* Respect reduced motion — hide SMIL animation elements */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: reduce) {
          .kb-brain-graph animate { display: none; }
        }
      `}} />
    </div>
  );
}
