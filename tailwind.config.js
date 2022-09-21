/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      animation:{
        slideUP: 'slideUP 0.3s ease'
      },
      keyframes: {
        slideUP: {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(5)'},
        }
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
