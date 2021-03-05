module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-hour': 'spin 43200s linear infinite',
        'spin-minute': 'spin 3600s linear infinite',
        'spin-second': 'spin 60s linear infinite',
        'spin-reactLogo': 'spin 25s linear infinite reverse',
      },
      backgroundImage: {
        'clock': "url('/src/components/image/clock.png')",
      },
    },
    width: {
      "clock": "600px",
    },
    height: {
      "clock": "600px",
      "reactLogo": "150px",
      "hour": "240px",
      "minute": "280px",
      "second": "300px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
