const { link } = require('fs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      colors: {
        primary: '#1a1a1a',
        dblue: 'hsl(243, 87%, 12%)',
        blue: 'hsl(238, 22%, 44%)',
        brightBlue: 'hsl(224, 93%, 58%)',
        moderateCyan: 'hsl(170, 45%, 43%)',
        lightGrayish: 'hsl(240, 75%, 98%)',
        lightGray: 'hsl(0,0%,75%)',
        dark: {
          main: '#1a1a1a',
        },
        background: {
          footer: '',
          main: '#1c2431',
          testimonials: '#202a3c',
        },
      },
      baseFlex: {
        'flex items-center justify-center': 'flex items-center justify-center',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
