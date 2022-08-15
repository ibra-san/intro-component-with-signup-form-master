/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        "custome-grey-blue": "#B9B6D3",
        "custome-dark-blue": "#3E3C49",
        "custome-blue": "#6055A5", 
        "custome-red": "#FF7A7A",
        "custome-green":"#38CC8C"
      }
    },
  },
  plugins: [],
}