/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ivory: '#FCFBF7',
        'stone-paper': '#F3F1E9',
        parchment: '#FAF9F4',
        rule: '#E4E1D6',
        'rule-strong': '#DCD8CA',
        'rule-subtle': '#EBE8DE',
        'ink-secondary': '#27272A',
        'ink-subtle': '#75736B',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        brand: {
          50: '#FAF3FA',
          100: '#F6ECF5',
          200: '#DFC0DE',
          300: '#C990C6',
          400: '#B460AF',
          500: '#A6459F',
          600: '#9C3495',
          700: '#7B2276',
          800: '#631B5F',
          900: '#4D154A',
          950: '#2E0B2C',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        ring: 'hsl(var(--ring))',
        success: 'hsl(var(--success))',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20, 20, 20, 0.04)',
        elevated: '0 12px 32px -16px rgba(20, 20, 20, 0.08)',
      },
    },
  },
  plugins: [],
};
