/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors — la jaanqaadan yahay src/index.css
        orange: {
          DEFAULT: '#FF6A00',
          dark: '#e55e00',
          light: '#fff3eb',
          mid: '#ffd5b8',
        },
        navy: {
          DEFAULT: '#1A202C',
          mid: '#2d3748',
          light: '#4a5568',
        },
        muted: '#718096',
        border: '#e8edf2',
        bg: '#F9FAFB',
      },
      fontFamily: {
        // Fonts-kan ayaa ka imanaya index.html (Google Fonts)
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,106,0,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(255,106,0,0.35)' },
        },
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.04)',
        hover: '0 4px 12px rgba(255,106,0,0.15), 0 16px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
