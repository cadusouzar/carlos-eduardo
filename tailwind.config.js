/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#474747',
      },
      colors:{
        'font-primary': '#FFFFFF',
      },
      fontSize:{
        'very-small': '26px',
        'small':'1.8125rem',
        'medium-small':'2.25rem',
        'medium': '2.4375rem',
        'large': '2.5rem',
        'extra-large': '4rem'
      },
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
      },
      aspectRatio:{
        '1/1.5': '1/1.5',
      },
      blur:{
        primary: '3.5rem'
      },
      margin:{
        icon: '9px'
      }
    },
  },
  plugins: [],
}

