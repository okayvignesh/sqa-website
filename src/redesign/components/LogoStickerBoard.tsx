'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { clients } from '../data/clients';

// Deterministic scatter (no Math.random → no hydration mismatch).
// Positions are % of the board so chips scale with the container.
const CHIPS: { left: string; top: string; size: number }[] = [
  { left: '6%',  top: '4%',  size: 96 },
  { left: '54%', top: '2%',  size: 84 },
  { left: '30%', top: '24%', size: 100 },
  { left: '72%', top: '30%', size: 88 },
  { left: '4%',  top: '46%', size: 92 },
  { left: '46%', top: '52%', size: 104 },
  { left: '78%', top: '64%', size: 84 },
  { left: '18%', top: '72%', size: 96 },
  { left: '58%', top: '84%', size: 88 },
];

export default function LogoStickerBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const picks = clients.slice(0, CHIPS.length);

  return (
    <div className="relative w-full aspect-[5/6] sm:aspect-[6/5] lg:aspect-[5/6]">
      {/* Board surface */}
      <div
        ref={boardRef}
        className="absolute inset-0 rounded-3xl border border-ink-900/[0.06] bg-white/70 backdrop-blur-sm overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(rgba(15,19,34,0.10) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          backgroundPosition: '0 0',
        }}
      >
        {/* Soft brand wash so the board isn't flat white */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(185,29,45,0.10), transparent 70%)',
          }}
        />

        {picks.map((c, i) => {
          const pos = CHIPS[i];
          return (
            <motion.button
              key={c.name}
              type="button"
              drag
              dragConstraints={boardRef}
              dragElastic={0.12}
              dragMomentum={false}
              dragTransition={{ power: 0.15, timeConstant: 220 }}
              whileHover={reduce ? undefined : { scale: 1.06, y: -3 }}
              whileTap={reduce ? undefined : { scale: 1.02 }}
              whileDrag={
                reduce
                  ? { zIndex: 20 }
                  : {
                      scale: 1.1,
                      zIndex: 20,
                      boxShadow:
                        '0 20px 40px -12px rgba(15,19,34,0.28), 0 4px 12px rgba(185,29,45,0.10)',
                    }
              }
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              aria-label={`${c.name}, drag me`}
              className="group absolute grid place-items-center rounded-2xl bg-white border border-ink-900/[0.08] shadow-[0_2px_6px_rgba(15,19,34,0.06)] cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 select-none"
              style={{
                left: pos.left,
                top: pos.top,
                width: pos.size,
                height: pos.size,
                touchAction: 'none',
              }}
            >
              <img
                src={c.src}
                alt={c.alt}
                draggable={false}
                className="max-h-[78%] max-w-[86%] object-contain pointer-events-none"
                loading="lazy"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap rounded-md bg-ink-900 text-white text-[11px] font-medium px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150"
              >
                {c.name}
              </span>
            </motion.button>
          );
        })}

        {/* Corner hint */}
        <div className="pointer-events-none absolute bottom-3 right-4 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400/80">
          Drag any logo
        </div>
      </div>
    </div>
  );
}
