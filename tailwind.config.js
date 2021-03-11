const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      beige: '#f4f2f0',
      black: colors.warmGray[700],
      brown: '#746158',
      green: {
        DEFAULT: '#4f943e',
        dark: colors.green[800],
      },
      transparent: 'transparent',
      white: '#fff',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        // xl: '4rem',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
    },
    listStyleType: {
      none: 'none',
      decimal: 'decimal',
      square: 'square',
    },
    extend: {
      outline: {
        green: ['3px solid rgba(22, 163, 74, 0.5)', '-3px'],
      },
      backgroundImage: (theme) => ({
        filmstrip: "url('/images/animal-filmstrip.jpg')",
      }),
      transitionProperty: {
        height: 'max-height',
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ['hover'],
    },
  },
  plugins: [],
};
