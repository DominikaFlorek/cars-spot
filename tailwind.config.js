/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        "primary-white": "#F7F7F7",
        "cornflower-blue": "#0147FF",
        "primary-black": "#282828",
        "secondary-black": "#1D1D1B",
        "nonactivated-dots": "#F1F1F1",
      },
    },
  },
  plugins: [],
};
