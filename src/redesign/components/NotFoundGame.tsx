'use client';

/**
 * 404 experience with two modes.
 *
 *   Landing → clean editorial split: "that page wandered off" copy on the
 *   left, a slim clickable 404 numeral on the right. Click / press Space
 *   to enter the arcade.
 *
 *   Playing → full-viewport Bug Invaders game. Cannon at the bottom, bug
 *   formation marches L→R at the top, big 404 sits behind. ESC exits
 *   back to landing.
 *
 * The 404 numeral morphs between the two modes via a shared framer-motion
 * layoutId, so it feels like the game literally opens out of the number.
 */

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Compass, Gamepad2, Home, LifeBuoy, Search } from 'lucide-react';

type Mode = 'landing' | 'playing';

/* -------------------------------------------------------------------------- */

const QUICK_LINKS = [
  { label: 'Platform',          href: '/platform/test-management' },
  { label: 'Pricing',           href: '/pricing' },
  { label: 'Customer success',  href: '/customer-success' },
  { label: 'Blog',              href: '/blog' },
  { label: 'Contact',           href: '/contact' },
];

export default function NotFoundGame() {
  const [mode, setMode] = useState<Mode>('landing');
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HS_KEY);
      if (raw) setHighScore(parseInt(raw, 10) || 0);
    } catch {}
  }, []);

  // Signal to MarketingChrome to render the navbar in dark theme so its
  // ink-700 links become visible on the dark 404 background.
  useEffect(() => {
    document.body.dataset.pageTheme = 'dark';
    return () => { delete document.body.dataset.pageTheme; };
  }, []);

  // Space (from landing) enters the arcade
  useEffect(() => {
    if (mode !== 'landing') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        setMode('playing');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode]);

  return (
    <div
      // -mt-20 pulls the section up under MarketingChrome's fixed navbar
      // (which has pt-20 spacing) so the dark bg extends all the way to
      // the top of the viewport instead of leaving a white seam.
      className="relative -mt-20 min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(60% 55% at 50% 35%, rgba(185,29,45,0.30), transparent 65%),
          radial-gradient(80% 60% at 15% 100%, rgba(107,21,33,0.20), transparent 65%),
          linear-gradient(180deg, #0F080D 0%, #180810 100%)
        `,
        color: '#F5F5F7',
      }}
    >
      {/* Ambient sparkle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.20) 1px, transparent 1px),' +
            'radial-gradient(1px 1px at 80px 120px, rgba(255,255,255,0.15) 1px, transparent 1px),' +
            'radial-gradient(1.5px 1.5px at 200px 40px, rgba(255,255,255,0.20) 1px, transparent 1px),' +
            'radial-gradient(1px 1px at 320px 240px, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '420px 320px',
        }}
      />

      <AnimatePresence mode="wait" initial={false}>
        {mode === 'landing' ? (
          <Landing
            key="landing"
            highScore={highScore}
            onPlay={() => setMode('playing')}
          />
        ) : (
          <ArcadeGame
            key="arcade"
            onExit={() => setMode('landing')}
            onScore={(v) => {
              if (v > highScore) {
                setHighScore(v);
                try { localStorage.setItem(HS_KEY, String(v)); } catch {}
              }
            }}
            highScore={highScore}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========================================================================== */
/*  Landing (split hero)                                                      */
/* ========================================================================== */

function Landing({ highScore, onPlay }: { highScore: number; onPlay: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen flex items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-24 sm:pt-32 pb-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
          {/* LEFT: copy */}
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{
                background: 'rgba(185,29,45,0.14)',
                borderColor: 'rgba(185,29,45,0.35)',
                color: '#FCA5A5',
              }}
            >
              <Compass className="w-3.5 h-3.5" /> 404 · Off the map
            </div>

            <h1
              className="mt-6 font-display text-white text-balance"
              style={{
                fontSize: 'clamp(40px, 5.4vw, 68px)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
              }}
            >
              That page{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(120deg, #FFFFFF 0%, #F04A5B 70%, #6B1521 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                wandered off.
              </span>
            </h1>

            <p
              className="mt-5 text-[17px] leading-relaxed max-w-lg"
              style={{ color: 'rgba(228,228,231,0.75)' }}
            >
              The URL might be mistyped, or the page moved. While you're here, we
              turned the 404 into a bug hunt. Care to defeat a few?
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-[14px] font-semibold text-white"
                style={{
                  background: 'linear-gradient(180deg, #C8253A 0%, #B91D2D 60%, #9A1525 100%)',
                  boxShadow: '0 10px 28px -10px rgba(185,29,45,0.55)',
                }}
              >
                <Home className="w-4 h-4" /> Back to home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-[14px] font-semibold border"
                style={{
                  color: '#F5F5F7',
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.12)',
                }}
              >
                <LifeBuoy className="w-4 h-4" /> Tell us what you were looking for
              </Link>
            </div>

            {/* Quick links row */}
            <div className="mt-12">
              <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em]"
                   style={{ color: 'rgba(228,228,231,0.5)' }}>
                <Search className="w-3.5 h-3.5" /> Try one of these
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {QUICK_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12.5px] font-medium border transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.10)',
                      color: 'rgba(228,228,231,0.85)',
                    }}
                  >
                    {l.label}
                    <ArrowRight className="w-3 h-3" style={{ color: 'rgba(228,228,231,0.5)' }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: click-to-play 404 */}
          <div className="relative flex items-center justify-center">
            {/* Soft glow behind */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 blur-3xl -z-10"
              style={{
                background:
                  'radial-gradient(50% 50% at 50% 50%, rgba(240,74,91,0.30), transparent 70%)',
              }}
            />

            <motion.button
              type="button"
              onClick={onPlay}
              className="group relative flex flex-col items-center gap-4 rounded-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Play the 404 arcade"
            >
              {/* Corner brackets — arcade feel */}
              <Bracket pos="tl" />
              <Bracket pos="tr" />
              <Bracket pos="bl" />
              <Bracket pos="br" />

              <motion.span
                layoutId="fourohfour"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-display block"
                style={{
                  fontSize: 'clamp(160px, 22vw, 300px)',
                  fontWeight: 200,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: '#F5F5F7',
                  textShadow:
                    '0 30px 60px rgba(185,29,45,0.4), 0 0 40px rgba(185,29,45,0.15)',
                }}
              >
                404
              </motion.span>

              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] transition-colors group-hover:bg-white/10"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#F5F5F7',
                }}
              >
                <Gamepad2 className="w-3.5 h-3.5" style={{ color: '#F04A5B' }} />
                Click to play — <Key>space</Key>
              </span>
            </motion.button>

            {/* Corner meta chips */}
            <div className="absolute top-0 left-0 font-mono text-[10.5px] uppercase tracking-[0.16em]"
                 style={{ color: 'rgba(228,228,231,0.5)' }}>
              Level 1
            </div>
            <div className="absolute bottom-0 right-0 font-mono text-[10.5px]"
                 style={{ color: 'rgba(228,228,231,0.5)' }}>
              High score{' '}
              <span className="font-semibold" style={{ color: '#F5F5F7' }}>
                {String(highScore).padStart(3, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Bracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 18,
    height: 18,
    borderColor: 'rgba(240,74,91,0.55)',
    borderStyle: 'solid',
    borderWidth: 0,
  };
  const map: Record<typeof pos, React.CSSProperties> = {
    tl: { ...base, top: -14, left: -14, borderTopWidth: 2, borderLeftWidth: 2 },
    tr: { ...base, top: -14, right: -14, borderTopWidth: 2, borderRightWidth: 2 },
    bl: { ...base, bottom: -14, left: -14, borderBottomWidth: 2, borderLeftWidth: 2 },
    br: { ...base, bottom: -14, right: -14, borderBottomWidth: 2, borderRightWidth: 2 },
  };
  return <span aria-hidden style={map[pos]} />;
}

/* ========================================================================== */
/*  Arcade (game)                                                             */
/* ========================================================================== */

// Design canvas — actual DOM canvas is scaled with CSS.
const W = 1000;
const H = 620;

const COLS = 8;
const ROWS = 4;
const BUG_W = 44;
const BUG_H = 30;
const BUG_HGAP = 26;
const BUG_VGAP = 22;
const FORMATION_LEFT = 120;
const FORMATION_TOP = 90;

const CANNON_W = 50;
const CANNON_H = 22;
const CANNON_Y = H - 60;
const CANNON_SPEED = 7;

const BULLET_W = 4;
const BULLET_H = 14;
const BULLET_SPEED = 12;

const STEP_MIN = 90;
const STEP_MAX = 460;
const H_STEP_PX = 6;
const V_STEP_PX = 22;

const HS_KEY = 'sq:404:hs:v3';

type Bug = { x: number; y: number; alive: boolean };
type Bullet = { x: number; y: number };
type Phase = 'countdown' | 'playing' | 'won' | 'lost';

function ArcadeGame({
  onExit, onScore, highScore,
}: {
  onExit: () => void;
  onScore: (v: number) => void;
  highScore: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>('countdown');
  const [countdown, setCountdown] = useState(3);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => { onScore(score); }, [score, onScore]);

  const g = useRef({
    bugs: [] as Bug[],
    bullets: [] as Bullet[],
    dir: 1 as 1 | -1,
    cannonX: (W - CANNON_W) / 2,
    left: false,
    right: false,
    stepInterval: STEP_MAX,
    stepAcc: 0,
    fireCooldown: 0,
    running: false,
    raf: 0,
    lastTs: 0,
    frame: 0,
  });

  const buildBugs = useCallback((): Bug[] => {
    const arr: Bug[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        arr.push({
          x: FORMATION_LEFT + c * (BUG_W + BUG_HGAP),
          y: FORMATION_TOP + r * (BUG_H + BUG_VGAP),
          alive: true,
        });
      }
    }
    return arr;
  }, []);

  const resetLevel = useCallback(() => {
    const s = g.current;
    s.bugs = buildBugs();
    s.bullets = [];
    s.dir = 1;
    s.cannonX = (W - CANNON_W) / 2;
    s.stepInterval = STEP_MAX;
    s.stepAcc = 0;
    s.fireCooldown = 0;
  }, [buildBugs]);

  // Countdown before play begins
  useEffect(() => {
    resetLevel();
    setCountdown(3);
    setPhase('countdown');
    const t1 = setTimeout(() => setCountdown(2), 700);
    const t2 = setTimeout(() => setCountdown(1), 1400);
    const t3 = setTimeout(() => {
      setCountdown(0);
      g.current.running = true;
      setPhase('playing');
    }, 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // Input
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') { e.preventDefault(); onExit(); return; }
      if (['ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      const s = g.current;
      if (e.code === 'ArrowLeft')  s.left = true;
      if (e.code === 'ArrowRight') s.right = true;
      if (e.code === 'Space') {
        if (phase === 'lost') { setLevel((l) => l); resetLevel(); setScore(0); setPhase('countdown'); setCountdown(3); }
        else if (phase === 'won') { setLevel((l) => l + 1); }
        else if (phase === 'playing' && s.fireCooldown <= 0) {
          s.bullets.push({ x: s.cannonX + CANNON_W / 2 - BULLET_W / 2, y: CANNON_Y - BULLET_H });
          s.fireCooldown = 260;
        }
      }
    };
    const onUp = (e: KeyboardEvent) => {
      const s = g.current;
      if (e.code === 'ArrowLeft')  s.left = false;
      if (e.code === 'ArrowRight') s.right = false;
    };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, [phase, onExit, resetLevel]);

  // Handle level bumps → replay countdown
  useEffect(() => {
    if (phase !== 'won') return;
    // no auto-advance; waits for Space or button
  }, [phase]);

  // Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const s = g.current;

    const tick = (ts: number) => {
      const dt = s.lastTs ? Math.min(48, ts - s.lastTs) : 16;
      s.lastTs = ts;
      s.frame += 1;

      if (s.running) {
        if (s.left)  s.cannonX = Math.max(20, s.cannonX - CANNON_SPEED);
        if (s.right) s.cannonX = Math.min(W - 20 - CANNON_W, s.cannonX + CANNON_SPEED);

        for (const b of s.bullets) b.y -= BULLET_SPEED;
        s.bullets = s.bullets.filter((b) => b.y + BULLET_H > 0);

        s.fireCooldown = Math.max(0, s.fireCooldown - dt);

        s.stepAcc += dt;
        if (s.stepAcc >= s.stepInterval) {
          s.stepAcc = 0;
          let atEdge = false;
          for (const b of s.bugs) {
            if (!b.alive) continue;
            const nx = b.x + H_STEP_PX * s.dir;
            if (nx < 20 || nx + BUG_W > W - 20) { atEdge = true; break; }
          }
          if (atEdge) {
            s.dir = (s.dir === 1 ? -1 : 1) as 1 | -1;
            for (const b of s.bugs) if (b.alive) b.y += V_STEP_PX;
          } else {
            for (const b of s.bugs) if (b.alive) b.x += H_STEP_PX * s.dir;
          }
        }

        for (const bl of s.bullets) {
          for (const bg of s.bugs) {
            if (!bg.alive) continue;
            if (
              bl.x < bg.x + BUG_W &&
              bl.x + BULLET_W > bg.x &&
              bl.y < bg.y + BUG_H &&
              bl.y + BULLET_H > bg.y
            ) {
              bg.alive = false;
              bl.y = -100;
              setScore((v) => v + 10);
              const aliveCount = s.bugs.filter((b) => b.alive).length;
              const t = 1 - aliveCount / (COLS * ROWS);
              s.stepInterval = Math.max(STEP_MIN, STEP_MAX - t * (STEP_MAX - STEP_MIN));
              break;
            }
          }
        }
        s.bullets = s.bullets.filter((b) => b.y > -20);

        const aliveCount = s.bugs.filter((b) => b.alive).length;
        if (aliveCount === 0) {
          s.running = false;
          setPhase('won');
        } else {
          for (const bg of s.bugs) {
            if (bg.alive && bg.y + BUG_H >= CANNON_Y - 4) {
              s.running = false;
              setPhase('lost');
              break;
            }
          }
        }
      }

      // Draw
      ctx.clearRect(0, 0, W, H);
      drawBugs(ctx, s.bugs, s.frame);
      drawCannon(ctx, s.cannonX);
      drawBullets(ctx, s.bullets);

      // Baseline
      ctx.strokeStyle = 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(20, CANNON_Y + CANNON_H + 6);
      ctx.lineTo(W - 20, CANNON_Y + CANNON_H + 6);
      ctx.stroke();

      s.raf = requestAnimationFrame(tick);
    };

    s.raf = requestAnimationFrame(tick);
    const onResize = () => setSize();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const nextLevel = () => {
    setLevel((l) => l + 1);
    resetLevel();
    setCountdown(3);
    setPhase('countdown');
  };
  const retry = () => {
    resetLevel();
    setScore(0);
    setCountdown(3);
    setPhase('countdown');
  };

  return (
    <motion.section
      key="arcade"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen"
    >
      {/* Top chrome */}
      <div className="absolute top-24 left-6 sm:left-10 z-30 font-mono text-[12px] flex items-center gap-4"
           style={{ color: 'rgba(228,228,231,0.75)' }}>
        <span>Level <span className="font-semibold" style={{ color: '#F5F5F7' }}>{level}</span></span>
      </div>

      <div className="absolute top-24 right-6 sm:right-10 z-30">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full font-mono text-[11px] font-semibold uppercase tracking-[0.14em] border"
          style={{
            background: 'rgba(0,0,0,0.35)',
            borderColor: 'rgba(255,255,255,0.14)',
            color: 'rgba(228,228,231,0.85)',
          }}
        >
          <Key>esc</Key> exit
        </button>
      </div>

      {/* Live 404 counter — parked in the bottom-right, ticks up per kill */}
      <div className="pointer-events-none absolute right-6 sm:right-10 bottom-24 sm:bottom-28 z-20 flex flex-col items-end">
        <span
          className="font-mono text-[10.5px] uppercase tracking-[0.16em] mb-1"
          style={{ color: 'rgba(228,228,231,0.55)' }}
        >
          bugs · counter
        </span>
        <motion.span
          layoutId="fourohfour"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display block"
          style={{
            fontSize: 'clamp(80px, 14vw, 180px)',
            fontWeight: 200,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: '#F5F5F7',
            opacity: 0.96,
            textShadow: '0 20px 50px rgba(185,29,45,0.4)',
          }}
        >
          {404 + Math.floor(score / 10)}
        </motion.span>
      </div>

      {/* Game canvas */}
      <div className="relative z-10 pt-24 pb-10 w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="block w-full max-w-[1200px]"
          style={{ aspectRatio: `${W} / ${H}` }}
        />
      </div>

      {/* Score */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 font-mono text-[12px] px-3.5 py-1.5 rounded-md border"
           style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(255,255,255,0.10)', color: 'rgba(228,228,231,0.65)' }}>
        High Score <span className="font-semibold" style={{ color: '#F5F5F7' }}>{String(highScore).padStart(3, '0')}</span>
        <span className="mx-2 opacity-40">·</span>
        Score <span className="font-semibold" style={{ color: '#F04A5B' }}>{String(score).padStart(3, '0')}</span>
      </div>

      {/* Hint bottom-right */}
      {phase === 'playing' && (
        <div
          className="absolute right-6 bottom-6 sm:right-10 sm:bottom-10 z-30 rounded-lg border px-4 py-3 backdrop-blur-sm font-mono text-[12px] leading-relaxed max-w-[240px]"
          style={{ background: 'rgba(15,8,13,0.7)', borderColor: 'rgba(255,255,255,0.10)', color: 'rgba(228,228,231,0.65)' }}
        >
          <Key>space</Key> fire &nbsp;·&nbsp; <Key>←</Key> <Key>→</Key> move
        </div>
      )}

      {/* Countdown overlay */}
      {phase === 'countdown' && countdown > 0 && (
        <div className="absolute inset-0 z-40 grid place-items-center pointer-events-none">
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(120px, 18vw, 220px)',
              fontWeight: 200,
              color: '#F5F5F7',
              letterSpacing: '-0.04em',
              textShadow: '0 20px 60px rgba(185,29,45,0.4)',
            }}
          >
            {countdown}
          </div>
        </div>
      )}

      {/* Win / lose overlay */}
      <AnimatePresence>
        {(phase === 'won' || phase === 'lost') && (
          <motion.div
            key="ovr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-40 grid place-items-center px-6"
            style={{ background: 'linear-gradient(180deg, rgba(15,8,13,0.55), rgba(15,8,13,0.9))' }}
          >
            <div className="text-center">
              <div
                className="font-mono text-[12px] uppercase tracking-[0.18em]"
                style={{ color: phase === 'won' ? '#4ADE80' : '#F04A5B' }}
              >
                {phase === 'won' ? 'Bugs squashed' : 'Tests failed'}
              </div>
              <h2
                className="mt-3 font-display leading-[0.95] tracking-tight text-white"
                style={{ fontSize: 'clamp(44px, 6.4vw, 78px)', fontWeight: 300 }}
              >
                {phase === 'won' ? 'You Win!' : 'Try again?'}
              </h2>
              <p className="mt-3 font-mono text-[13px]" style={{ color: 'rgba(228,228,231,0.65)' }}>
                Score <span className="font-semibold text-white">{String(score).padStart(3, '0')}</span>
                {score >= highScore && score > 0 && (
                  <span className="ml-2" style={{ color: '#FBBF24' }}>· new best</span>
                )}
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                {phase === 'won' ? (
                  <button
                    type="button"
                    onClick={nextLevel}
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full font-semibold text-[14px] text-[#0F080D]"
                    style={{ background: '#FFFFFF' }}
                  >
                    Next level
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={retry}
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full font-semibold text-[14px] text-[#0F080D]"
                    style={{ background: '#FFFFFF' }}
                  >
                    Retry
                  </button>
                )}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full font-semibold text-[14px] text-white border"
                  style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)' }}
                >
                  <Home className="w-4 h-4" /> Return home
                </Link>
                <button
                  type="button"
                  onClick={onExit}
                  className="text-[12px] font-mono underline underline-offset-4"
                  style={{ color: 'rgba(228,228,231,0.55)' }}
                >
                  back to 404
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

/* ---------- Canvas drawing ---------- */

const BUG_A: number[][] = [
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,1,1,0,1,1,1,0,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,0,1],
  [1,0,1,0,0,0,0,0,1,0,1],
  [0,0,0,1,1,0,1,1,0,0,0],
];
const BUG_B: number[][] = [
  [0,0,1,0,0,0,0,0,1,0,0],
  [1,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,1,1,1,1,1,0,1],
  [1,1,1,0,1,1,1,0,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,1,0,0,0,0,0,0,0,1,0],
];

function drawBugs(ctx: CanvasRenderingContext2D, bugs: Bug[], frame: number) {
  const pattern = Math.floor(frame / 20) % 2 === 0 ? BUG_A : BUG_B;
  const pxW = BUG_W / pattern[0].length;
  const pxH = BUG_H / pattern.length;

  ctx.fillStyle = '#F5F5F7';
  for (const b of bugs) {
    if (!b.alive) continue;
    for (let y = 0; y < pattern.length; y++) {
      for (let x = 0; x < pattern[0].length; x++) {
        if (pattern[y][x]) {
          ctx.fillRect(
            Math.round(b.x + x * pxW),
            Math.round(b.y + y * pxH),
            Math.ceil(pxW),
            Math.ceil(pxH),
          );
        }
      }
    }
  }
}

function drawCannon(ctx: CanvasRenderingContext2D, x: number) {
  const y = CANNON_Y;
  ctx.fillStyle = '#FFFFFF';
  roundedRect(ctx, x, y + 6, CANNON_W, CANNON_H - 6, 4);
  ctx.fill();
  ctx.fillRect(x + CANNON_W / 2 - 5, y - 2, 10, 12);
}

function drawBullets(ctx: CanvasRenderingContext2D, bullets: Bullet[]) {
  for (const b of bullets) {
    ctx.fillStyle = 'rgba(240,74,91,0.35)';
    ctx.fillRect(b.x - 1, b.y - 2, BULLET_W + 2, BULLET_H + 4);
    ctx.fillStyle = '#F04A5B';
    ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);
  }
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/* ---------- Bits ---------- */

function Key({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded font-mono text-[10.5px] font-semibold"
      style={{
        background: 'rgba(255,255,255,0.08)',
        color: '#F5F5F7',
        border: '1px solid rgba(255,255,255,0.14)',
        margin: '0 1px',
      }}
    >
      {children}
    </span>
  );
}
