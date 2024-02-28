/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "748px",
          lg: "1004px",
          xl: "1200px",
          "2xl": "1400px",
          "3xl": "1400px",
        },
      },
      colors:{
        primary:"#201E30"
      }
    },
  },
  plugins: [],
}

