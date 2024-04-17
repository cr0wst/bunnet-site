/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Shadows Into Light"', "cursive"],
      },
    },
  },
  plugins: [],
};
