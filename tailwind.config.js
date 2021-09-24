// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { green } = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            '.blue': {
              backgroundColor: theme('colors.blue.200'),
              color: theme('colors.blue.700'),
            },
            '.yellow': {
              backgroundColor: theme('colors.yellow.200'),
              color: theme('colors.yellow.700'),
            },
            '.red': {
              backgroundColor: theme('colors.red.200'),
              color: theme('colors.red.700'),
            },
            '.shadow-blue': {
              boxShadow: '0 10px 15px -3px #bae6fd, 0 4px 6px -2px #bae6fd',
            },
            '.shadow-yellow': {
              boxShadow: '0 10px 15px -3px #fde68a, 0 4px 6px -2px #fde68a',
            },
            '.shadow-red': {
              boxShadow: '0 10px 15px -3px #fecaca, 0 4px 6px -2px #fecaca',
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    ({ addBase, theme }) => {
      addBase({
        'a, button': {
          outlineColor: theme('colors.primary.500'),
          '&:focus-visible': {
            outline: '2px solid',
            borderRadius: theme('borderRadius.DEFAULT'),
            outlineColor: theme('colors.primary.500'),
          },
        },
      })
    },
  ],
}
