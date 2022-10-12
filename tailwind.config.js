/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        light: 'rgb(245,209,200)',
        dark: 'rgb(85,86,87)'
      },
      screens: {
        'tall': { 'raw': '(min-height: 900px), (min-width: 1536px)' }
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
