/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors: {
        'golden' : '#DAA624',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      lineHeight:{
        '12':"3rem",
        '14': "4rem",
        '16': "5rem",
        '18': "6rem"
      },
      fontSize:{
        '4.5xl': "2.7rem",
        '5.5xl': "3.5rem"
      },
    },
  },
  plugins: [],
}

  
