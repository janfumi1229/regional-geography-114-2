/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf9f6',
          100: '#f5f0e8',
          200: '#e8dfd0',
          300: '#d4c8b5',
          400: '#b8a990',
          500: '#9c8b72',
          600: '#80725d',
          700: '#6b5e4d',
          800: '#564c3f',
          900: '#3f3830',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
