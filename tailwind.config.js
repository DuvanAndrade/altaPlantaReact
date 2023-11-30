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
        'colorBgNavbar': '#d4d6ce'
      }
    },
  },
  plugins: [],
}

