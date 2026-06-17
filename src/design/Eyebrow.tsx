import type { ReactNode } from 'react';
import { cn } from './cn';

export function Eyebrow({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn('eyebrow', className)}>
      {icon && <span className="text-brand-600">{icon}</span>}
      <span className="tracking-wide">{children}</span>
    </span>
  );
}
