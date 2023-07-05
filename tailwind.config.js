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
        'more-small': '1.3125rem',
        'very-small': '1.625rem',
        'small':'1.625rem',
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
      },
      width: {
        'animation-1080': '1250px',
        'animation-1600': '1100px',
        'animation-1366': '1000px',
        'animation-1024': '900px',
      },
      height:{
        'animation-1080': '800px',
        'animation-1600': '700px',
        'animation-1366': '650px',
        'animation-1024': '600px',
      },
      screens:{
        'biglg': '1400px',
        'bigxl': '1500px',
        '3xl': '1700px',
      }
    },
  },
  plugins: [],
}

