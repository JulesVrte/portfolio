/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      'none': '0',
      'navbar': '50px',
      'button': '100px'
    },
    boxShadow: {
      'navbar': '0px 0px 100px 0px #FFFBFB inset, rgba(0, 0, 0, 0.24) 0px 3px 8px',
      'navbar-black': '0px 0px 50px 0px #888888 inset, 0px 3px 8px #888888',
      'slider': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      'slider-black': '0px 3px 8px #888888'
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
        autoRun: "autoRun 15s linear infinite"
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
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}

