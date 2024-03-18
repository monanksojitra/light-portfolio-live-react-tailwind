// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primary: "#FFB400",
    dark: {
      100: "#2B2B2B",
      200: "#18191A",
      300: "#3A3B3C",
      400: "#242526",
      500: "#767676",
    },
    light: {
      100: "#F0F0F6",
      200: "#E4E6EB",
      300: "#E5E5E5",
      400: "#FAFAFA",
    },
  },
};
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: colors,
  },
  plugins: [],
};
