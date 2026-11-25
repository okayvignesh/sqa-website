'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '../../design';

type Props = {
  className?: string;
  /** spacing between dots (px) */
  spacing?: number;
  /** dot radius (px), both layers */
  dotSize?: number;
  /** radius around the cursor where dots glow maroon (px) */
  radius?: number;
  /** intensity of the soft halo behind the maroon dots (0–1) */
  haloOpacity?: number;
  /** base (non-hover) dot color */
  baseColor?: string;
  /** active (cursor) dot color */
  activeColor?: string;
};

/**
 * Dotted-grid background where the cursor reveals a maroon-tinted orb of dots,
 * trailing the pointer with a smoothed delay.
 */
export default function InteractiveDotGrid({
  className,
  spacing = 52,
  dotSize = 1,
  radius = 240,
  haloOpacity = 0.20,
  baseColor = 'rgba(15, 19, 34, 0.13)',
  activeColor = '#B91D2D',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const target = { x: 0, y: 0, v: 0 };
    const current = { x: 0, y: 0, v: 0 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      target.v = 1;
    };
    const onLeave = () => {
      target.v = 0;
    };

    const tick = () => {
      const k = 0.14;
      current.x += (target.x - current.x) * k;
      current.y += (target.y - current.y) * k;
      current.v += (target.v - current.v) * (target.v ? 0.08 : 0.05);
      el.style.setProperty('--mx', `${current.x}px`);
      el.style.setProperty('--my', `${current.y}px`);
      el.style.setProperty('--mv', current.v.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  // Two background-image dot layers + a glow halo.
  // Note: keep the radial-gradient syntax matching Tailwind's working `.bg-dots`
  // rule, no `circle` keyword, no `at center`, that combination renders
  // reliably across Chromium/WebKit/Firefox.
  const baseDots = `radial-gradient(${baseColor} ${dotSize}px, transparent ${dotSize + 0.5}px)`;
  const activeDots = `radial-gradient(${activeColor} ${dotSize + 0.3}px, transparent ${dotSize + 0.9}px)`;
  const cursorAt = `var(--mx, -400px) var(--my, -400px)`;
  // Solid in the center of the orb, soft falloff at the edge
  const mask = `radial-gradient(circle ${radius}px at ${cursorAt}, #000 28%, rgba(0,0,0,0.5) 60%, transparent 82%)`;

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {/* Base grey dot grid, fades in below the navbar and out before the next section.
          Vertical linear mask handles the top/bottom seam; subtle side fade keeps the
          horizontal edges from feeling like a hard rectangle. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: baseDots,
          backgroundSize: `${spacing}px ${spacing}px`,
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%), linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          maskImage:
            'linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%), linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
          maskComposite: 'intersect',
        }}
      />

      {/* Soft halo behind the maroon dots, the orb glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle ${Math.round(
            radius * 1.4,
          )}px at ${cursorAt}, rgba(185, 29, 45, ${haloOpacity}), transparent 70%)`,
          opacity: 'var(--mv, 0)',
          transition: 'opacity 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Maroon dot layer, visible only inside the cursor mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: activeDots,
          backgroundSize: `${spacing}px ${spacing}px`,
          WebkitMaskImage: mask,
          maskImage: mask,
          opacity: 'var(--mv, 0)',
          transition: 'opacity 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
    </div>
  );
}
