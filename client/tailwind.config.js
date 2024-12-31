/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":'#EBEBEB',
        "secondary": "#B75B48",
        "tertiary":"#40B2AC",
      }
    },
    screens: {
     'tablet': { max: '1000px' },
      // => @media (min-width: 640px) { ... }

      

      'desktop': { max: '2000px' },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

