/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'chsblue': '#1263F0',
        'chsltblue': '#e1e8f5',
        'black': colors.black,
        'white': colors.white,
        'gray': colors.neutral,
        'indigo': colors.indigo,
        'red': colors.rose,
        'yellow': colors.amber,
    }, 
    extend: {},
  },
  plugins: [],
}

