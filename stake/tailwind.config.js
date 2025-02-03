/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all your source files
    "./public/index.html", // Add this if using a static HTML template
  ],
  theme: {
    extend: {
      colors: {
        "grey-200": "#b1bad3",
                "grey-300": "rgb(47,69,83)",
        "grey-400": "#B0B0B0", // Custom gray color
        "grey-500": "rgba(33, 55, 67)",
        "grey-600": "#1a2c38",
        "grey-700": "#0f212e",
        "grey-800": "rgba(7,29,42)"
      },
      fontFamily: {
        "monteserrat": "Monterserrat Variable, sans-serif"
      },
      spacing: {
        "18px": "18px", // Custom spacing for gap
        "664px": "664px", // Custom height
        "275px": "275px", // Custom row height
        "300px": "300px", // Custom small screen height
      },
      gridTemplateRows: {
        "275px-275px": "275px 275px", // Custom grid rows
      },
      gridTemplateColumns: {
        "calc-cols": "calc(50% - 9px) calc(50% - 9px)", // Custom grid columns
      },
      transitionDelay: {
        100: "100ms", // Custom transition delay
      },
      transitionProperty: {
        all: "all", // Ensure all properties are transitionable
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.4, 0, 0.2, 1)", // Custom timing function
      },
      transitionDuration: {
        150: "150ms", // Default transition duration
      },
    },
    screens: {
      sm: "640px",
      md: "768px", // Breakpoint for medium screens
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Adds the scrollbar plugin
  ],
};
