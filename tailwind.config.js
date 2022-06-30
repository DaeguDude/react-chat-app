/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      grey: "#65676B",
      black: "#050505",
      white: "#ffffff",
      purple: "#4e61ff",
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
    },
    fontSize: {
      xs: "12px",
      sm: "13px",
      md: "15px",
      lg: "16px",
      xl: "18px",
    },
    borderRadius: {
      sm: 8,
      md: 50,
      full: 9999,
    },
    screens: {
      lg: "900px",
    },
    extend: {},
  },
  plugins: [],
};
