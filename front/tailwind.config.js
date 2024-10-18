/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber':{
          100:"#F2ECBE",
          800:'#9A3B3B'
        },
      }
    },
    fontFamily:{
      'custom':["Manrope", "system-ui"]
    },
    fontWeight:{
      thin:'100',
      extralight:'200',
      light:'300',
      normal:'400',
      medium:'500',
      semibold:'600',
      bold:'700',
      extrabold:'800',
    },
  },
  plugins: [],
}