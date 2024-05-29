/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'logo': ['"Dancing Script"', 'cursive']
      },
      borderWidth: {
       '3': '3px',
      },
      colors: {
        'tertiary': '#f8f9fa',
        'links': '#0d6efd',
        'links-hover': '#0a58ca',
        'navlink': '#ff00008c',
        'navlink-hover': '#ff0000b3',
        'navlink-active': '#ff0000e6',
        'navborder': '#f8f9fa',
        'logo': '#ff0000'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        logo: '0 2px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

