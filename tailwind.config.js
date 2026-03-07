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
        "background-light": "#F8F9FA",
        "background-dark": "#0A0A0B",
      },
      fontFamily: {
        display: ["'Space Grotesque'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
}
