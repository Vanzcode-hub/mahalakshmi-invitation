/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        devotional: {
          ivory: '#FFFDF9',
          cream: '#FAF4EB',
          creamDark: '#F2E8D8',
          blush: '#FBEFEB',
          gold: '#C5A059',
          goldLight: '#E8CA82',
          goldDark: '#936E2B',
          maroon: '#791724',
          maroonDark: '#540D17',
          sindoor: '#A32832',
          charcoal: '#2B211D',
          mutedUmber: '#5E4A40',
        }
      },
      fontFamily: {
        devanagari: ['"Rozha One"', '"Tiro Devanagari Hindi"', 'serif'],
        traditional: ['"Yatra One"', 'cursive'],
        bodyHindi: ['"Tiro Devanagari Hindi"', '"Noto Serif Devanagari"', 'serif'],
        englishSerif: ['"Cinzel"', '"Marcellus"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.5)',
        'maroon-soft': '0 10px 30px rgba(121, 23, 36, 0.15)',
        'card-lux': '0 20px 40px -15px rgba(94, 74, 64, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glow-flicker': 'glowFlicker 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        glowFlicker: {
          '0%': { opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(255, 200, 55, 0.6))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 18px rgba(255, 215, 0, 0.9))' },
        }
      }
    },
  },
  plugins: [],
}
