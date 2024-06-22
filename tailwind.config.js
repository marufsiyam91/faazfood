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
        'lmd': '880px',
        'lg': '1024px',
        'pxl': '1200px',
        'xl': '1280px',
        '2xl': '1370px',
        '4xl': '1536px'
      },
      backgroundImage: {
        'ChickenBackground': "url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h2_bn-1.jpg')",
        'BurgerBackground': "url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h2_bn-2.jpg')",
      },
      animation: {
        'spin-slow': 'spin 13s linear infinite',
      },
    },
    fontFamily: {
      primary: ["Barlow Condensed", "sans-serif"],
      cursive: ["Kaushan Script", "cursive"]
    }
  },
  plugins: [],
}

