/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF007A", // Vibrant Magenta
        accent: "#D4FF00",  // Cyber Lime/Yellow
        "neon-green": "#39FF14",
        "deep-magenta": "#FF00FF",
        "background-light": "#F8F9FA",
        "background-dark": "#0A0A0B",
        "surface-dark": "#0A0A0A",
      },
      fontFamily: {
        display: ["'Space Grotesque'", "sans-serif"],
        heading: ["'Syne'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
}
