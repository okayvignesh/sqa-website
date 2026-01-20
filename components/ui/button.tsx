'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-700 text-white hover:bg-brand-800 shadow-sm hover:shadow-glow active:scale-[0.98]',
        secondary:
          'bg-surface-1 text-text-primary border border-border hover:bg-surface-2 hover:border-border-subtle active:scale-[0.98]',
        ghost:
          'text-text-secondary hover:text-text-primary hover:bg-surface-1',
        link:
          'text-brand-700 underline-offset-4 hover:underline p-0 h-auto',
        outline:
          'border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white',
        glass:
          'glass text-text-primary hover:bg-white/80 dark:hover:bg-white/10 active:scale-[0.98]',
      },
      size: {
        xs: 'h-7 px-3 text-xs rounded-md gap-1.5',
        sm: 'h-8 px-3.5 text-sm rounded-lg gap-1.5',
        md: 'h-9 px-5 text-sm rounded-lg gap-2',
        lg: 'h-11 px-6 text-base rounded-xl gap-2',
        icon: 'h-9 w-9 rounded-lg',
        'icon-sm': 'h-7 w-7 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
