'use client'

import { cn } from '@/lib/utils'

interface GridPatternProps {
  className?: string
  size?: number
  fade?: boolean
}

export function GridPattern({ className, size = 40, fade = true }: GridPatternProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        fade && 'mask-radial-faded',
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}
