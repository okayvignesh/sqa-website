import {
  MousePointer,
  Layers,
  Sparkles,
  Cloud,
  Monitor,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  MousePointer,
  Layers,
  Sparkles,
  Cloud,
  Monitor,
  BarChart3,
}

interface FeatureIconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function FeatureIcon({ name, className, size = 'md' }: FeatureIconProps) {
  const Icon = iconMap[name] || Sparkles

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-xl',
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div
      className={cn(
        'bg-brand-700/10 dark:bg-brand-500/15 flex items-center justify-center',
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn('text-brand-700 dark:text-brand-500', iconSizes[size])} />
    </div>
  )
}
