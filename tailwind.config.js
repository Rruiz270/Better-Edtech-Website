/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#001011',
        'gray-custom': '#757780',
        'baby-powder': '#FFFFFC',
        'yellow-green': '#A4DF00',
        'pale-azure': '#6CCFF6',
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-custom': 'bounce-custom 2s infinite',
        'pulse-custom': 'pulse-custom 2s infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-50px) rotate(180deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'bounce-custom': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'pulse-custom': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}