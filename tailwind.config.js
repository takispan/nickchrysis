/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.svg'
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
      light: '#fff',
      dark: '#000',
      primary: '#533483',
      secondary: '#E94560',
      teriary: 'gray'
    }
  },
  plugins: [],
}

