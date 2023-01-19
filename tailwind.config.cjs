/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A' //criando cor global custom
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))' //colocar 7 linhas no grid
      }
    },
  },
  plugins: [],
}
