/** @type {import('tailwindcss').Config} */
import hello from "./src/assets/image/footer2.png";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0775F2",
        secondary: "#b4d5fb",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        footerbg: "url('/src/assets/image/bg.png')",
        footerbg2: "url('/src/assets/image/footer2.png')",
      },
    },
  },
  plugins: [],
};
