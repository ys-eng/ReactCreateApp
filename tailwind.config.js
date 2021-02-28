module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-hour': 'spin 43200s linear infinite',
        'spin-minute': 'spin 3600s linear infinite',
        'spin-second': 'spin 60s linear infinite',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
