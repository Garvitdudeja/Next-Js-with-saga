/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1B75BC",
        "grey-text": "#637381",
        "error-text": "#FF4242",
        success: "#8DC63F",
        white:"#fff",
      },
      width: {
        300: "300px",
      },
      boxShadow: {
        "common-shadow":
          "6px 2px 96px 25px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)",
      },
      rotate: {
        '54': '54deg',
      }
    },
  },
  plugins: [],
};
