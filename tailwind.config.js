/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#1D242B",
        "main-white": "#FAFAFA",
        "main-blue": "#0077C0",
        "secondary-blue": "#C7EEFF",
      },
      screens: {
        sm: "425px",
        // => @media (min-width: 425px)

        md: "768px",
        // => @media (min-width: 768px)

        lg: "1024px",
        // => @media (min-width: 1024px)

        xl: "1280px",
        // => @media (min-width: 1280px)
      },
    },
  },
  plugins: [],
};
