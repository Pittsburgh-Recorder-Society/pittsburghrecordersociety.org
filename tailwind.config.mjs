/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm charcoal base — scholarly, approachable (inspired by WRS #272423)
        primary: {
          50: '#f7f5f3',
          100: '#edeae6',
          200: '#d9d3cc',
          300: '#c0b7ab',
          400: '#a39888',
          500: '#8d7f6e',
          600: '#756758',
          700: '#5c5047',
          800: '#453c34',
          900: '#2c2420',
          950: '#1a1512',
        },
        // Teal-green — connects to old PRS site identity, early music warmth
        teal: {
          50: '#f0f9f6',
          100: '#d4ede5',
          200: '#a9dbcb',
          300: '#75c4ac',
          400: '#4aaa8d',
          500: '#2d8f73',
          600: '#1f745c',
          700: '#1a5f4c',
          800: '#164d3e',
          900: '#123f33',
          950: '#0a2922',
        },
        // Gold/amber accent — concert program warmth
        gold: {
          50: '#fdfaf1',
          100: '#f9f0d5',
          200: '#f2dea8',
          300: '#e9c873',
          400: '#dfae42',
          500: '#c4923a',
          600: '#a87530',
          700: '#8a5a28',
          800: '#6e4522',
          900: '#5a381d',
        },
      },
      fontFamily: {
        heading: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75' }], // 18px — readability for older audience
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.primary[800]'),
            '--tw-prose-headings': theme('colors.primary[900]'),
            '--tw-prose-links': theme('colors.teal[700]'),
            '--tw-prose-bold': theme('colors.primary[900]'),
            fontSize: '1.125rem',
            lineHeight: '1.8',
            h1: { fontFamily: theme('fontFamily.heading').join(', ') },
            h2: { fontFamily: theme('fontFamily.heading').join(', ') },
            h3: { fontFamily: theme('fontFamily.heading').join(', ') },
            h4: { fontFamily: theme('fontFamily.heading').join(', ') },
            a: {
              textDecorationColor: theme('colors.teal[300]'),
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.teal[500]'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
