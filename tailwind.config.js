/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow:{
        custom:"0px 6px 15px rgba(0,0,0,0.30)"
      },
      colors:{
        white:"#ffffff",
        black:"#000000",
        accent:"#feda7b",
        overlay:"#00152a",
        secondaryBg:"#efefef",
      },
      fontFamily: {
        head: ["Cantora One", "sans-serif"],
        primary: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
