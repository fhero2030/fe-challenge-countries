/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          element: "hsl(209, 23%, 22%)",
          background: "hsl(207, 26%, 17%)",
          text: "hsl(0, 0%, 100%)",
        },
        light: {
          text: " hsl(200, 15%, 8%)",
          background: "hsl(0, 0%, 98%)",
          input: "hsl(0, 0%, 52%)",
        },
      },
    },
  },
  plugins: [],
};
