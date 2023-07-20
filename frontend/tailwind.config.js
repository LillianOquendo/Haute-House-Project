/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hautehouse_navy: '#0A0A55',
        hautehouse_yellow: '#FFD700',
        hautehouse_ltegold: '#E4CC43',
        hautehouse_gold: '#C1A612'
      },
      fontFamily: {
        'veganstyle' : ['VeganStyle', 'sans-serif']
      },
    },
  },
  plugins: [],
}

