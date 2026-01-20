import { cn } from '@/lib/utils'

interface GradientOrbProps {
  className?: string
}

export function GradientOrb({ className }: GradientOrbProps) {
  return (
    <div
      className={cn(
        'absolute w-[600px] h-[500px] rounded-full pointer-events-none',
        'bg-gradient-to-br from-brand-700/10 via-brand-600/5 to-transparent',
        'dark:from-brand-500/15 dark:via-brand-400/8 dark:to-transparent',
        'blur-3xl',
        className
      )}
      aria-hidden="true"
    />
  )
}
