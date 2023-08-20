/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'text-primary': '#3d3d3d',
      'yellow-primary' : '#ffdc1c',
      'yellow-secondary': '#ffae5a',
      'blue-primary' : '#124af4',
      'grey-bg': '#f4f4f4',
      'purple-bg': '#e9ebff'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
  plugins: [],
}