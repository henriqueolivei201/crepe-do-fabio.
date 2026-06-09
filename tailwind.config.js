/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0B1B2B',
        cream: '#FFFDF9',
        cream2: '#F8FAFC',
        rouge: '#C1121F',
        gold: '#C9A227',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(11,27,43,0.10)'
      }
    }
  },
  plugins: []
};
