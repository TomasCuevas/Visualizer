const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#8fccfc",
        "light-text": "#feffff",
        "dark-text": "#181919",
        "dark-light-text": "#514f52",
        "decorate-light": "#feffff",
        "decorate-dark": "#181919",
        "decorate-dark-light": "#514f52",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
