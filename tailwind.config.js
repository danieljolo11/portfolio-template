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
    },
  },
  plugins: [],
};
