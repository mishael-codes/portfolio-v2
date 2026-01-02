/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 5%)",
        textColor: "hsl(0, 0%, 93%)",
        accentColor: "hsl(51, 100%, 50%)",
        shadowColor: "hsl(217, 10%, 25%)",
      },
    },
  },
  plugins: [],
};
