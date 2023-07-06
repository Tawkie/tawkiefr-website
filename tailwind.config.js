/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          yellow: "#feea77",
          orange: "#faab22",
          pink: "#a34bb0",
          purple: "#3614a6",
          "purple-alt": "#a34bb0",
        },
      },
    },
  },
  plugins: [],
};
