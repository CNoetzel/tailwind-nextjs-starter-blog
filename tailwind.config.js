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
        primary: colors.teal,
        gray: colors.neutral,
        noticeBoxBlue: {
          light: '#d9edf7',
          DEFAULT: '#bce8f1',
          dark: '#31708f',
        },
        noticeBoxRed: {
          light: '#f2dede',
          DEFAULT: '#ebccd1',
          dark: '#a94442',
        },
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
              backgroundColor: theme('colors.noticeBoxBlue.light'),
              color: theme('colors.noticeBoxBlue.dark'),
            },
            '.red': {
              backgroundColor: theme('colors.noticeBoxRed.light'),
              color: theme('colors.noticeBoxRed.dark'),
            },
            '.shadow-blue': {
              boxShadow: '0 6px 10px -5px #bce8f1, 0 4px 6px -2px #31708f',
            },
            '.shadow-red': {
              boxShadow: '0 6px 10px -5px #ebccd1, 0 4px 6px -2px #a94442',
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
