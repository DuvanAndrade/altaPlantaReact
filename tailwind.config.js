/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'verdePrincipal': '#345430',
        'verdeHover': '#879a80',
        'colorBgMain': '#e8e9e8',
        'colorBgNavbar': '#d4d6ce',
        'alert': '#7f9f9f',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

