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
        dark: {
          950: '#050505',
          900: '#07090C',
          850: '#0A0D12',
          800: '#0E131A',
          700: '#161D26',
          600: '#1E2734',
        },
        corporate: {
          blue: '#0050FF',
          'blue-hover': '#1A64FF',
          'blue-glow': 'rgba(0, 80, 255, 0.35)',
          cyan: '#00D6FF',
          'cyan-glow': 'rgba(0, 214, 255, 0.25)',
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
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(0, 80, 255, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(0, 214, 255, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
