/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'red-pink' : '#FF4655',
      'white' : colors.white,
      'paia' : '#867166',
    }
  },
  plugins: [],
}

