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
      "clockPointer": "22px",
      "hourHand": "12px",
      "minuteHand": "8px",
      "secondHand": "2px",
    },
    height: {
      "clock": "600px",
      "clockPointer": "22px",
      "reactLogo": "150px",
      "hour": "240px",
      "minute": "280px",
      "second": "300px",
      "hourHand": "120px",
      "minuteHand": "140px",
      "secondHand": "220px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
