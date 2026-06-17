/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand maroon/crimson from SimplifyQA logo
        brand: {
          50:  '#FDF3F4',
          100: '#FCE3E5',
          200: '#F7C1C6',
          300: '#EF969D',
          400: '#E4646E',
          500: '#D43846',
          600: '#B91D2D', // primary
          700: '#9A1525',
          800: '#7F1422',
          900: '#6B1521',
          950: '#3D080F',
        },
        ink: {
          50:  '#F7F8FA',
          100: '#EEF0F4',
          200: '#DDE1E8',
          300: '#BCC3CF',
          400: '#8B94A6',
          500: '#5F6B81',
          600: '#404B61',
          700: '#2B3447',
          800: '#1B2233',
          900: '#0E1322',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFB',
          warm: '#FBF8F6',
          tint: '#FBF5F5',
        },
      },
      fontFamily: {
        display: ['"Geist"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans:    ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6.4vw, 5.75rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 3.6vw, 3rem)',     { lineHeight: '1.08', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft:    '0 1px 2px rgba(15,19,34,0.04), 0 8px 24px -8px rgba(15,19,34,0.06)',
        glow:    '0 10px 40px -10px rgba(185,29,45,0.28)',
        ring:    '0 0 0 1px rgba(15,19,34,0.06), 0 8px 30px -10px rgba(15,19,34,0.08)',
        plate:   '0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(15,19,34,0.04), 0 24px 60px -20px rgba(15,19,34,0.12)',
        elevate: '0 24px 80px -24px rgba(185,29,45,0.22), 0 2px 6px rgba(15,19,34,0.06)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,19,34,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,19,34,0.06) 1px, transparent 1px)',
        'dot-light':
          'radial-gradient(rgba(15,19,34,0.10) 1px, transparent 1px)',
        'brand-soft':
          'radial-gradient(60% 50% at 50% 0%, rgba(185,29,45,0.10), transparent 70%)',
        'mesh':
          'radial-gradient(40% 60% at 12% 10%, rgba(185,29,45,0.08), transparent 60%), radial-gradient(50% 60% at 88% 8%, rgba(255,180,180,0.18), transparent 60%), radial-gradient(60% 60% at 50% 110%, rgba(185,29,45,0.06), transparent 60%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'dot-22':  '22px 22px',
      },
      transitionTimingFunction: {
        'spring':   'cubic-bezier(0.22, 1, 0.36, 1)',
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'orb-float':   { '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' }, '50%': { transform: 'translate3d(0,-18px,0) scale(1.04)' } },
        'fade-up':     { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'shimmer':     { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'marquee':     { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'pulse-ring': {
          '0%':   { boxShadow: '0 0 0 0 rgba(185,29,45,0.35)' },
          '70%':  { boxShadow: '0 0 0 18px rgba(185,29,45,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(185,29,45,0)' },
        },
        'tick':       { '0%': { strokeDashoffset: '100' }, '100%': { strokeDashoffset: '0' } },
      },
      animation: {
        'orb-float':  'orb-float 12s ease-in-out infinite',
        'fade-up':    'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'shimmer':    'shimmer 2.4s linear infinite',
        'marquee':    'marquee 38s linear infinite',
        'pulse-ring': 'pulse-ring 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
