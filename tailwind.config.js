/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
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
    extend: {
      fontFamily: {
        logo: ['CustomFont', 'inter'],
        header: ['CustomFont', 'hind']
      },
      colors: {
        film: "#370C1A"
      },
      dropShadow: {
        'banner': [
            '0 5px 5px rgba(216, 186, 13, 0.78)',
            '0 4px 15px rgba(194, 16, 105, 0.6)'
        ]
    }
  },
  extend: {
    colors: {
      customGray: '#404040', 
    },
  },
  plugins: []
  }
}
