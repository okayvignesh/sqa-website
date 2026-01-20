import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        // Updated brand color: Crimson from logo #AD1927
        brand: {
          50: '#FEF2F3',
          100: '#FDE6E8',
          200: '#FBD0D5',
          300: '#F7A8B2',
          400: '#F17589',
          500: '#E64860',
          600: '#D32A47',
          700: '#AD1927', // Primary brand color from logo
          800: '#951A2B',
          900: '#7F1A29',
          950: '#460A12',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        surface: {
          1: 'hsl(var(--surface-1))',
          2: 'hsl(var(--surface-2))',
          3: 'hsl(var(--surface-3))',
          elevated: 'hsl(var(--surface-elevated))',
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))',
        },
        border: 'hsl(var(--border))',
        'border-subtle': 'hsl(var(--border-subtle))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Refined typography - 10-15% smaller, tighter
      fontSize: {
        'xs': ['0.6875rem', { lineHeight: '1.45', letterSpacing: '0.01em' }],    // 11px
        'sm': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0' }],          // 13px
        'base': ['0.875rem', { lineHeight: '1.55', letterSpacing: '-0.01em' }],  // 14px
        'lg': ['0.9375rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],    // 15px
        'xl': ['1.0625rem', { lineHeight: '1.45', letterSpacing: '-0.015em' }],  // 17px
        '2xl': ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.02em' }],    // 20px
        '3xl': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],    // 24px
        '4xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],    // 30px
        '5xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.035em' }],   // 36px
        '6xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],     // 44px
        '7xl': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],    // 52px
        '8xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.045em' }],         // 64px
        'display': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }], // 72px
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.035em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
      },
      lineHeight: {
        tighter: '1.1',
        tight: '1.25',
        snug: '1.35',
        normal: '1.5',
        relaxed: '1.6',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(173, 25, 39, 0.15)',
        'glow-md': '0 0 50px rgba(173, 25, 39, 0.2)',
        'glow-lg': '0 0 80px rgba(173, 25, 39, 0.25)',
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'elevated': '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.12)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(173, 25, 39, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blur-in': 'blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'orbit': 'orbit 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          from: { opacity: '0', filter: 'blur(12px)' },
          to: { opacity: '1', filter: 'blur(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
