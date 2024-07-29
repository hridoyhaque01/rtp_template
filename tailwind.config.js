/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      flex: {
        "1/3": "0 0 calc(100% / 3)",
        "1/2": "0 0 calc(100% / 2)",
        full: "0 0 100%",
      },
      colors: {
        white: {
          DEFAULT: "#fff",
        },
        main: {
          DEFAULT: "#FAF9FF",
          50: "#f6f6f6",
          100: "#E7E7E7",
          300: "#EBE7FF",
          400: "#EAEAEA",
          500: "#FFF4F4",
          600: "#CDC9FF",
        },
        neutral: {
          100: "C9C9CE",
          200: "#D1D1D1",
          300: "#AEAEAE",
          400: "#9E9E9E",
          500: "#6D6D6D",
          600: "#C3C3C3",
          650: "#808080",
          700: "#BDBDBD",
          800: "#616161",
        },
        black: {
          DEFAULT: "#000",
          300: "#101010",
          400: "#4D4D4D",
          500: "#383838",
          550: "#666666",
          600: "#858585",
          700: "#4F4F4F",
          800: "#181A20",
          900: "#222222",
          950: "#141414",
          1000: "#181818",
        },
        blue: {
          500: "#5536F5",
        },
        yellow: {
          100: "#E8FF01",
          400: "#FFC250",
          500: "#ECBB5E",
          "04": "rgba(245, 255, 146, 0.40)",
        },

        error: {
          400: "#FF6B6B",
        },
      },
      fontFamily: {
        bricolage: ["bricolage", "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      boxShadow: {
        box: "0px 2px 2px 0px rgba(0, 0, 0, 0.08)",
        card: "0px 10px 10px 30px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {},
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
