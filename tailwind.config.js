/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: 'JetBrains Mono',
      },
      colors: {
        green: '#84ffa7',
        yellow: '#f8c96d',
        orange: '#ffa500',
        red: '#dc2626',
        black1: '#0c0b10',
        black2: '#181720',
        gray1: '#e5e4e9',
        gray2: '#6f6d79',
        gray3: '#24232c',
      },
      spacing: {
        90: '22.5rem',
        100: '25rem',
      },
      backgroundImage: (theme) => ({
        check: "url('./assets/check.svg')",
      }),
    },
  },
  plugins: [],
};
