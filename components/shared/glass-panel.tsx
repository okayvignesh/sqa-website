import { cn } from '@/lib/utils'

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'heavy'
}

export function GlassPanel({
  className,
  intensity = 'medium',
  children,
  ...props
}: GlassPanelProps) {
  const intensityStyles = {
    light: 'bg-white/90 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm',
    medium: 'bg-white dark:bg-zinc-900/70 backdrop-blur-md shadow-md',
    heavy: 'bg-white dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg',
  }

  return (
    <div
      className={cn(
        intensityStyles[intensity],
        'border border-gray-200/80 dark:border-white/10',
        'rounded-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
