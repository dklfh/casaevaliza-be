/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Didact Gothic', 'sans-serif'],
      },
      colors: {
        'bold': '#646464',
        'regular': '#999999',
      },
      letterSpacing: {
        custom: '0.09em',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}