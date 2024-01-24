/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  
  theme: {
    screens: {
      'jose': '520px',
      ...defaultTheme.screens,
    },

    extend: {
      width: {
        st: "15px",
      },
      colors: {
        'aquamarine': {
          '50': '#edfffc',
          '100': '#c0fff9',
          '200': '#81fff4',
          '300': '#3affef',
          '400': '#00ffe1',
          '500': '#00e2c9',
          '600': '#00b7a6',
          '700': '#009185',
          '800': '#00726b',
          '900': '#045d58',
          '950': '#003a39',
        },

      }

    },
  },
  plugins: [],
}