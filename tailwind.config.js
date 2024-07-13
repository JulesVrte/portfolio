/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      'none': '0',
      'navbar': '50px',
    },
    boxShadow: {
      'navbar': '0px 0px 100px 0px #FFFBFB inset',
    },
    extend: {
      colors: {
        "primary": "#A6BBCC"
      }
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      K2D: ["K2D", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}

