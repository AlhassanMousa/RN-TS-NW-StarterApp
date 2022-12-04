/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './App.tsx/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      green: '#3f9f42',
      freshOnions: '#F7C800',
      blackBlue: '#071327',
      generalBackground: '#dfe6e9',
      liteGray: '#F8F8F8',
      darkGray: '#787878',
      white: '#ffffff',
      backgroundblack: '#1c1917',
      orange: '#FF9F29',
      yellow: '#FAEA48',
      red: '#ef4444',
      bordercolor: '#ddd',
      color: '#71717a',
      borderColor: '#f4f4f4',
      locatoincolor: '#F5F5F5',
      textblue: '#0000b3',
    },
    fontSize: {
      font5XL: 34,
      font4XL: 32,
      font3xl: 28,
      fontXL: 24,
      fontxXl: 20,
      fontL: 18,
      fontM: 16,
      fontS: 14,
    },
    fontFamily: {
      NeoSansArabicBold: 'NeoSansArabicBold',
      NeoSansArabic: 'NeoSansArabic',
    },

    extend: {
      flex: {
        'flex-1': '1 1 0%',
        'flex-5': '5 5 0%',
        'flex-2': '2 2 0%',
      },
      spacing: {
        '1/2': '95%',
      },
    },
  },
  plugins: [],
};
