/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7b4dfa",
        secondary: "#393866",
        background: "#121212",
        "text-primary": "#ffffff",
        accent: "#bb86fc",
        surface: "#1f1f1f",
        error: "#cf6679",
      }
    },
  },
  plugins: [],
}

