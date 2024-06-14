/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      primary_color: "#494C4F",
      checkboxColor: "#9E9E9E",
     buttonColor : "#45484B",
     linkColor: "#8D4B38",
     dashColor: "#F0F0F0",
     inputColor:"#AEAEAE",
     adress:"#222222"
     }
    },
  },
  plugins: [],
};
