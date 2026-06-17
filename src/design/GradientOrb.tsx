import { cn } from './cn';

type OrbProps = {
  className?: string;
  color?: 'brand' | 'rose' | 'amber' | 'plum';
  size?: number;        // px
  blur?: number;        // px
  opacity?: number;     // 0..1
  animated?: boolean;
};

const palette = {
  brand: 'rgba(185, 29, 45, 0.55)',
  rose:  'rgba(244, 114, 130, 0.55)',
  amber: 'rgba(245, 158, 11, 0.45)',
  plum:  'rgba(146, 64, 90, 0.55)',
} as const;

export function GradientOrb({
  className,
  color = 'brand',
  size = 520,
  blur = 90,
  opacity = 0.55,
  animated = true,
}: OrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full',
        animated && 'animate-orb-float',
        className,
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 50% 50%, ${palette[color]}, transparent 60%)`,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
}
