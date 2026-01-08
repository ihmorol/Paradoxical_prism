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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF5E00", // Safety Orange from design
          foreground: "hsl(var(--primary-foreground))",
          glow: "rgba(255, 94, 0, 0.5)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#0B0C10", // Main container
          foreground: "hsl(var(--card-foreground))",
          bg: "#0B0C10",
        },
        "background-dark": "#050505", // Deepest background
        "dark-bg": "#050505", // Alias for background-dark to support HiddenReportsHome
        "panel-bg": "#121215", // Inner panels
        "input-bg": "#1A1B1F",
        "border-dark": "#27272a", // Zinc 800
        "text-muted": "#8892b0",
        "surface-dark": "#131419",
        "surface-lighter": "#1E2028",
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
      },
      backgroundImage: {
        'carbon': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        'tech-pattern': 'linear-gradient(rgba(19, 20, 25, 0.9), rgba(19, 20, 25, 0.9)), repeating-linear-gradient(0deg, transparent, transparent 1px, #23242a 1px, #23242a 2px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "reverse-spin": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "pulse-orange": {
          "0%, 100%": { boxShadow: "0 0 5px #FF5722" },
          "50%": { boxShadow: "0 0 20px #FF5722, 0 0 10px #FF5722" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 10s linear infinite",
        "reverse-spin": "reverse-spin 10s linear infinite",
        "pulse-orange": "pulse-orange 3s infinite",
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.primary.DEFAULT"), 0 0 20px theme("colors.primary.glow")',
        'inset-panel': 'inset 2px 2px 5px rgba(0,0,0,0.7), inset -1px -1px 2px rgba(255,255,255,0.05)',
        'outer-panel': '5px 5px 10px rgba(0,0,0,0.5), -2px -2px 5px rgba(255,255,255,0.03)',
        'input-active': '0 0 0 1px theme("colors.primary.DEFAULT"), 0 0 15px rgba(255, 87, 34, 0.3)',
      }
    },
  },
  plugins: [],
}
