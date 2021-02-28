module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
