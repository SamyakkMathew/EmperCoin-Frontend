/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        brightBackground: "#FDF8EE",
        brightBlack: "#45474B",
        lightText: "#F5F7F8",
        maincolor: "#F4CE14",
        backgroundmain: "#F5F7F8",
        color3:"#495E57",
        color4:"#45474B",

      },
    },
  },
  plugins: [],
}

