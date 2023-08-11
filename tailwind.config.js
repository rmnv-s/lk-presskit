/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      s: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      m: '1.8rem',
      l: '2.1rem',
      xl: '3rem',
      '2xl': '3.6rem',
      // '3xl': '1.953rem',
    },
    extend: {
      maxWidth: {
        100: '1300px',
        16: '160px',
      },
      colors: {
        white: '#ffffff',
        black: '#282828',
        grey: '#767676',
      },
      lineHeight: {
        12: '3.5rem',
      },
    },
    spacing: {
      1: '2px',
      2: '5px',
      3: '10px',
      4: '20px',
      5: '25px',
      6: '30px',
      10: '50px',
      11: '60px',
      12: '70px',
      20: '100px',
      22: '120px',
      23: '130px',
      25: '150px',
      26: '160px',

      0.1: '1px',
      0.8: '18px',
      0.32: '32px',
    },
  },
  plugins: [],
};
