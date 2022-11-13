/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideshow: "slideshow 12s linear infinite",
      },
      keyframes: {
        slideshow: {
          "0%": {
            top: "100%",
          },

          "100%": {
            top: "-100%",
          },
        },
      },
    },
  },
  plugins: [],
};
