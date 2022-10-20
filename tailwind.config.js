/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin")
module.exports = {
  darkMode: "class",
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addVariant }) {
      // Add a `third` variant, i.e. `third:pb-0`
      addVariant('third', '&:nth-child(3)')
    })
  ],
}
