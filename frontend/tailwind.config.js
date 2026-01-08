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
        primary: "#FF5E00", // Safety Orange from design
        "primary-glow": "rgba(255, 94, 0, 0.5)",
        "dark-bg": "#050505", // Deepest background
        "card-bg": "#0B0C10", // Main container
        "panel-bg": "#121215", // Inner panels
        "input-bg": "#1A1B1F",
        "border-dark": "#27272a", // Zinc 800
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
      },
      backgroundImage: {
        'carbon': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
