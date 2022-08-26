/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      
      'purple': '#c084fc',
      
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}


