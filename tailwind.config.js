/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#092270',   // Bleu IDT principal
          50: '#e6e9f1',
          100: '#c3c9df',
          200: '#a0a8cc',
          300: '#7d87b9',
          400: '#5a67a7',
          500: '#384895',
          600: '#253273',
          700: '#19214c',
          800: '#0d1126',
          900: '#090e1b'
        },
        secondary: {
          DEFAULT: '#fe530a',   // Orange IDT principal
          50: '#fff3ea',
          100: '#ffe3d0',
          200: '#ffc3a3',
          300: '#ffa275',
          400: '#ff8248',
          500: '#fe530a',
          600: '#d94300',
          700: '#b13300',
          800: '#7a2200',
          900: '#401100'
        },
        accent: {
          DEFAULT: '#ffffff',  // Blanc IDT, utile pour accents/fonds
          50: '#ffffff',
          100: '#f7f7f7',
          200: '#e6e6e6',
          300: '#d4d4d4',
          400: '#b3b3b3',
          500: '#929292',
          600: '#6e6e6e',
          700: '#525252',
          800: '#363636',
          900: '#1a1a1a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
