/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
        'fade-in': 'fade-in 1.5s ease-in-out forwards',
      },

      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          'fade-in': {
            '0%': {opacity: '0'},
            '100%': {opacity: '1'},
          },
        },
      },
    },
  },
  plugins: [],
}
