/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['CustomFont', 'inter'],
        header: ['CustomFont', 'hind']
      }
    },
  },
  plugins: [],
}

