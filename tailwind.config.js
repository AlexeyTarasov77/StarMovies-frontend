/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
  plugins: []
  }
}
