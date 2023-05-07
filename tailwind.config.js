/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBorderColor: "#cccccc",
        fontTextDark: "#222222",
        bgDark: "#222222",
      },
      flex: {
        2: "2 2 0%",
      },
      screens: {
        mobile: { min: "320px", max: "480px" },
        tablet: { min: "481px", max: "768px" },
        laptop: { min: "769px", max: "1024px" },
        desktop: { min: "1025px", max: "1440px" },
        wide: { min: "1440px" },
      },
    },
  },
  plugins: [],
});
