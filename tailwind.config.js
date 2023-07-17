module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
