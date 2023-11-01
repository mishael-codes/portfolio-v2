/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "hsl(218, 20%, 16%)",
      textColor: "hsl(0, 0%, 93%)",
      accentColor: "hsl(42, 100%, 71%)",
      shadowColor: "hsl(217, 10%, 25%)",
    },
  },
  plugins: [],
}

