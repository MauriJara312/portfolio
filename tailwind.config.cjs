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
      //og mycolor #6246ea
      myColor : "#6246ea",
      dayColor : "#90b4ce",
      darkColor: "#181818",


      ///////////////////opcion de dos colores

      // day:#90b4ce
      // dark:#181818

    },
    extend: {},
  },
  plugins: [],
}
