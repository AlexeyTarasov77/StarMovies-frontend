/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        top: "#424242",
        bottom: "rgba(255, 255, 255, 0)"
      },
      backgroundImage: {
        image:"https://programmi.sky.it/images/cc/upload/c_scale,w_1920/f_webp/v1/background/background-men-in-black"
      }
    },
  },
  plugins: [],
}

