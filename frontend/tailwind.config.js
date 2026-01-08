/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5722", // Safety Orange
        "primary-glow": "rgba(255, 87, 34, 0.4)",
        "background-light": "#eef2f6", // Fallback
        "background-dark": "#0f1115", // Deep industrial dark
        "surface-dark": "#161920", // Slightly lighter surface
        "surface-light": "#ffffff",
        "border-dark": "#2a2d35",
        "border-light": "#d1d5db",
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'], // For headers
        body: ['"Rajdhani"', 'sans-serif'], // For body text
      },
      borderRadius: {
        'xl': "1rem",
        '2xl': "1.5rem",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 87, 34, 0.3)',
        'glow-hover': '0 0 25px rgba(255, 87, 34, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
