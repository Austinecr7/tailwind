/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        austine: "#ff6363",
        okoro: {
          100: "#e2e2d5",
          200: "#888883"
        }
      },
      fontFamily:{
         nuni: ["Nunito"]
      }
    },
  },
  plugins: [],
}