/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#120b2e',
        violet: { 50: '#f6f3ff', 100: '#ede8ff', 200: '#dcd2ff', 300: '#c1aeff', 400: '#9f7dff', 500: '#7c4dff', 600: '#6a2fe6', 700: '#5a22c4', 800: '#3f1a8a', 900: '#27104f' },
        magenta: { 500: '#c026d3', 600: '#a21caf' },
        gold: { 300: '#ffe27a', 400: '#fdd24a', 500: '#f5bd1f' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(60,20,140,.04), 0 12px 32px -12px rgba(90,34,196,.18)',
        lift: '0 2px 4px rgba(60,20,140,.06), 0 24px 48px -16px rgba(90,34,196,.32)',
      },
    },
  },
  plugins: [],
}
