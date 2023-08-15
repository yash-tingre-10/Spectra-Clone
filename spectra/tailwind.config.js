/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Display"', 'serif'],
      },
      backgroundColor: {
        'creamyt': '#fefbf0',
        'buttonb': '#5733ff'
      },
    },
  },
  plugins: [],
};
