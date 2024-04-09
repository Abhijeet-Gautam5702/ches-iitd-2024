/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        head: ["Alice", "sans-serif"],
        primary: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
