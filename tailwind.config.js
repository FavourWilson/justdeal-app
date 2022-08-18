/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      coral: '#F47A60',
    },
  },
  theme: {
    extend: {
      colors: {
        coral: '#F47A60',
      },
      height: {
        347: '25.5rem',
      },
    },
  },

  plugins: [],
};
