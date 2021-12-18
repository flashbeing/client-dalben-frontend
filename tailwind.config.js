module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Georama', 'sans-serif'],
      // serif: ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        primary: '#EA0A2A',
        secondary: '#F7F7F7',
        orange: '#FF422E',
        placeholder: '#eeeeee',
        input: '#F2F2F2',
        'input-focus': '#F0F0F0',
        contrast: '#f9f9f9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
