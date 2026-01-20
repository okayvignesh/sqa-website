import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-surface-1 text-text-secondary border border-border',
        primary:
          'bg-brand-700/10 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
        secondary:
          'bg-surface-2 text-text-secondary',
        outline:
          'border border-border text-text-secondary hover:bg-surface-1',
        success:
          'bg-green-500/10 text-green-700 dark:text-green-400',
        warning:
          'bg-amber-500/10 text-amber-700 dark:text-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
