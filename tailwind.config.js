/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00f4fe',
          500: '#00dce5',
        },
        dark: {
          900: '#0a0a1a',
          800: '#0e0e1f',
          700: '#141428',
          600: '#1a1a2e',
          500: '#201f35',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,244,254,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(0,244,254,0.35)' },
        },
      },
    },
  },
  plugins: [],
}
