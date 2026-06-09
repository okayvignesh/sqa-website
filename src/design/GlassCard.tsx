import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from './cn';

export function GlassCard({
  children,
  className,
  hover = true,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: 'div' | 'a';
}) {
  const Comp = (motion as any)[as];
  return (
    <Comp
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={cn(
        'relative rounded-3xl glass-card p-6',
        hover && 'cursor-pointer',
        className,
      )}
    >
      {children}
    </Comp>
  );
}
