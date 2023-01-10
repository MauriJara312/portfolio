/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      //og daycolor #bae8e8
      //og dark color #272343
      //ogmycolor #6246ea
      myColor : "#6246ea",
      dayColor : "#bae8e8",
      darkColor: "#272343",
    },
    extend: {},
  },
  plugins: [],
}
