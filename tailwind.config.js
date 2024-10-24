/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.svg'
  ],
  safelist: [
    'overflow-hidden',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    colors: {
      light: '#ECEFF1',
      dark: '#141314',
      primary: '#e6734c'
    }
  },
  plugins: [],
}

