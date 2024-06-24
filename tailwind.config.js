/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.{html,js}"],
  mode: 'jit',
  purge: './**/*.html',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Raleway"', ...defaultTheme.fontFamily.sans],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      colors: {
        'contessa': {
          '50': '#fbf6f5',
          '100': '#f6ecea',
          '200': '#f0dcd8',
          '300': '#e4c3bd',
          '400': '#d3a096',
          '500': '#ba7264',
          '600': '#aa6558',
          '700': '#8e5347',
          '800': '#77463d',
          '900': '#643f38',
          '950': '#351e1a',
        },
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        moveInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "80%": { transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translate(0)" },
        },
        moveInBottom: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translate(0)" },
        },
      },
      animation: {
        typing: "typing 1s steps(50) infinite alternate, blink .7s infinite",
        moveInLeft: "moveInLeft 2s ease-in .5s",
        moveInBottom: "moveInBottom .5s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
};
