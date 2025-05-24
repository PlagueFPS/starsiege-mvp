import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#17161b',
        secondary: '#ffc019',
      },
      fontFamily: {
        'orbitron': ['var(--font-orbitron)'],
        'oxanium': ['var(--font-oxanium)'],
      },
      gridTemplateColumns: {
        'news': 'repeat(auto-fill, 375px)',
      },
      keyframes: {
        slideIn: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0%)' }
        },
        slideOut: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(100%)' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        fadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0' }
        },
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.25s ease-in-out forwards',
        'fadeOut': 'fadeOut 0.25s ease-in-out forwards',
        'slideIn': 'slideIn 0.25s ease-in-out forwards',
        'slideOut': 'slideOut 0.25s ease-in-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        'title': '0 4px 10px rgba(0,0,0,1)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config