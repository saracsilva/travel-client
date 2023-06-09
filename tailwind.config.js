/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5b5ce3",
        "highlighter-green": "#d9ed09",
        "light-pink": "#f3cdfb",
      },
      fontFamily: {
        kronaOne: ["Krona One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 15px 15px -10px rgba(91, 92, 227, 0.25)",
      },
    },
  },
  plugins: [],
};
