/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      flex: {
        "1/3": "0 0 calc(100% / 3)",
        "1/2": "0 0 calc(100% / 2)",
        full: "0 0 100%",
      },
      colors: {
        transparent: "transparent",

        white: "#fff",

        "navy-50": "#2E323C",
        "navy-rbg": "rgba(46, 50, 60, 0.50)",
        errorColor: "#ff3d3d",
        primaryColor: "#634cff",
        fade: "#8B8C91",
      },
      backgroundImage: {
        bg: "url('./assets/images/bg.png')",
        gradient: "linear-gradient(94deg, #363E52 -2%, #2B3242 117.56%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
