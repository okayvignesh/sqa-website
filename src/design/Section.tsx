'use client';

import type { ReactNode } from 'react';
import { cn } from './cn';

export function Section({
  children,
  className,
  id,
  tone = 'white',
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: 'white' | 'soft' | 'warm' | 'tint';
}) {
  const tones = {
    white: 'bg-white',
    soft:  'bg-surface-soft',
    warm:  'bg-surface-warm',
    tint:  'bg-surface-tint',
  } as const;
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden py-14 sm:py-20', tones[tone], className)}
    >
      {children}
    </section>
  );
}
