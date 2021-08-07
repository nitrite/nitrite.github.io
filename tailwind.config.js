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
    extend: {
      colors: {
        "nitrite-purple": "#5267DF",
        "nitrite-red": "#FA5959",
        "nitrite-blue": "#242A45",
        "nitrite-grey": "#9194A2",
        "nitrite-white": "#f7f7f7",
      }
    },
    fontFamily: {
      'open-sans': ['"Open Sans"', "sans-serif"],
      'baloo': ['"Baloo Chettan 2"', "cursive"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
