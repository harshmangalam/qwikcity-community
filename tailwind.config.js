/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 149, 246)",
        danger: "rgb(237, 73, 86)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
