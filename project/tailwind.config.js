/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        appear: 'appear 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};