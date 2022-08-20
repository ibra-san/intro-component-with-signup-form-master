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
      }, 

      boxShadow: { 
        "custome-s-shadow": "0px 7px 1px rgba(0,0,0,0.2)",
        "custom-button-shadow":"0 4px 1px rgb(21, 81, 55, 0.6)"
      }
    },
  },
  plugins: [],
}