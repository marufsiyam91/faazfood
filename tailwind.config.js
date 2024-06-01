/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'esm': '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1370px',
        '4xl': '1536px'
      }
    },
    fontFamily: {
      primary: ["Oswald", "sans-serif"]
    }
  },
  plugins: [],
}

