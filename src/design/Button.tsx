'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from './cn';

type Variant = 'primary' | 'ghost' | 'soft' | 'link';
type Size = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-[linear-gradient(180deg,#C8253A_0%,#B91D2D_60%,#9A1525_100%)] shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-10px_rgba(185,29,45,0.45),0_1px_2px_rgba(15,19,34,0.10)] hover:-translate-y-px hover:shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_16px_40px_-10px_rgba(185,29,45,0.55),0_2px_4px_rgba(15,19,34,0.12)] hover:saturate-110',
  ghost:
    'text-ink-900 bg-white/75 backdrop-blur border border-ink-900/10 hover:bg-white hover:-translate-y-px hover:border-ink-900/20 hover:shadow-[0_8px_20px_-10px_rgba(15,19,34,0.16)]',
  soft:
    'text-brand-700 bg-brand-50 border border-brand-100 hover:bg-brand-100/70',
  link:
    'text-brand-700 hover:text-brand-900 underline-offset-4 hover:underline rounded-none px-0',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
