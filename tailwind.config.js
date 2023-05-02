/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 149, 246)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
