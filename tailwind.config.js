/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf4f4',
          100: '#fbe8e9',
          200: '#f6d5d7',
          300: '#eeb4b8',
          400: '#e38890',
          500: '#d35d69',
          600: '#be3d4d',
          700: '#9f2d3d',
          800: '#852737',
          900: '#722434',
          950: '#3f1018',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
