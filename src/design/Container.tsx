import type { ReactNode } from 'react';
import { cn } from './cn';

export function Container({
  children,
  className,
  size = 'default',
}: {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'default' | 'wide';
}) {
  const widths = {
    sm: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  } as const;
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8', widths[size], className)}>
      {children}
    </div>
  );
}
