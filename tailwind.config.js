/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#8fccfc",
        lighttext: "#feffff",
        darktext: "#181919",
        darklighttext: "#514f52",
        decoratelight: "#feffff",
        decoratedark: "#181919",
        decoratedarklight: "#514f52",
      },
    },
  },
  plugins: [],
};
