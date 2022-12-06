module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'inder': ['Inder', 'sans-serif'],
      'courrier-new': [ 'Courier New','Courier','Lucida Sans Typewriter','Lucida Typewriter', 'monospace']
    },
    colors: {
'dark-blue': '#0C5586',
'medium-blue': '#258BD0',
'light-blue': 'rgba(173, 213, 240, 0.26)',
'light-gradient': 'linear-gradient(180deg, rgba(131, 210, 255, 0) 0%, rgba(131, 210, 255, 0.47) 99.48%)',
'arrow-blue': '#B3D7EF'
    }
  },
  plugins: [],
};
