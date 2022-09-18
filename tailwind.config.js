/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: "#DBFFFF",
        lightGrey: "#999999",
        ironGrey: "#363944",
        blackRussian: "#27282d",
        midNightExpress: "#2a2c33",
      }
    },
    fontFamily: {
      sans: ['Roboto', "sans-serif"]
    },
  },
  plugins: [],
}