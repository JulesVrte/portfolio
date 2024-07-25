/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      'none': '0',
      'navbar': '50px',
    },
    boxShadow: {
      'navbar': '0px 0px 100px 0px #FFFBFB inset, rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      'navbar-black': '0px 0px 50px 0px #888888 inset, 0px 3px 8px 0px #b0b0b0 ',
    },
    extend: {
      colors: {
        "primary": "#A6BBCC"
      },
      keyframes: {
        autoRun: {
          "from": {left: '100%' },
          "to": {left: 'calc(300px*-1)'}
          
        }
      },
      animation : {
        autoRun: "autoRun 10s linear infinite"
      },
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      K2D: ["K2D", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
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
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}

