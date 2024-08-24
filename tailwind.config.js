/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.{js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        white: {
          DEFAULT: "#ffffff",
          300: "#F6F7F7",
          400: "#FFE4E4",
        },

        neutral: {
          200: "#EEE",
          300: "#9E9FA7",
          400: "#D1D1D1",
        },
        black: {
          rgb: "rgba(0,0,0,0.5)",
          DEFAULT: "#000000",
          400: "#858585",
          500: "#757575",
          600: "#BDBDBD",
          700: "#4F4F4F",
          800: "#A7A7A7",
          900: "#222",
          950: "#141414",
        },
        blue: {
          50: "#E0DBFB",
          500: "#5536F5",
        },
        yellow: {
          100: "#FBEECA",
        },
        green: {
          500: "#2CC672",
        },
        red: {
          50: "#FDD",
          100: "#FFF0F0",
          300: "#BDBDBD",
          600: "#FF6B6B",
          700: "#CC0000",
        },
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      backgroundImage: {
        login: "url('./assets/images/loginBg.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
