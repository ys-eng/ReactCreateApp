module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['hover'],
      animation: {
        'spin-hour': 'spin 43200s linear infinite',
        'spin-minute': 'spin 3600s linear infinite',
        'spin-second': 'spin 60s linear infinite',
        'spin-reactLogo': 'spin 25s linear infinite reverse',
      },
      backgroundImage: {
        'clock': "url('/src/components/image/clock.png')",
      },
      gridTemplateColumns: {
        'calculator': 'repeat(4, 80px)',
      },
      gridTemplateRows: {
        'calculator': '100px 80px 80px 80px 80px 80px',
      },
      gap: {
        'calculator': '10px',
      },
      gridColumn: {
        'calculator': 'span 1 / span 4',
      },
      lineHeight: {
        'result': '100px',
        'button': '80px',
      },
    },
    width: {
      "clock": "600px",
      "clockPointer": "22px",
      "hourHand": "12px",
      "minuteHand": "8px",
      "secondHand": "2px",
      "calculator": "410px",
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
    margin: {
      calculator: '140px auto 0px auto',
      result: '20px',
    },
    padding: {
      calculator: '30px',
      result: '10px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
