/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#030817',
          surface: '#071225',
          card: '#0A1629',
          border: 'rgba(70, 150, 220, 0.18)',
          'border-hover': 'rgba(0, 212, 255, 0.35)',
          cyan: '#00D4FF',
          blue: '#1769FF',
          teal: '#18C8A0',
          text: '#F5F8FF',
          muted: '#91A4BD',
        },
        dark: {
          950: '#030817', // Main background
          900: '#071225', // Secondary surfaces
          850: '#0A1629', // Card surfaces
          800: '#0E1B33',
          700: '#162646',
          600: '#22365D',
        },
        corporate: {
          blue: '#1769FF',
          'blue-hover': '#2977FF',
          'blue-glow': 'rgba(23, 105, 255, 0.35)',
          cyan: '#00D4FF',
          'cyan-glow': 'rgba(0, 212, 255, 0.25)',
          teal: '#18C8A0',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
      },
      boxShadow: {
        'glow-blue': '0 0 24px -4px rgba(23, 105, 255, 0.3)',
        'glow-cyan': '0 0 24px -4px rgba(0, 212, 255, 0.25)',
        'corporate-card': '0 8px 32px -4px rgba(2, 6, 23, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
