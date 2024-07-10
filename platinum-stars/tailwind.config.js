/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'green': '#a5ce53',
      'dark-green': '#03B368',
      'purple': '#A86F9B',
      'pink': '#FE4C80',
      'white': '#ffffff',
      'red':'#ff3333',
      'grey':'#d3d3d3'
    },
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'sans-serif'],
        roboto: ['roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '44px',
        'button': '14px',
        'paragraph':'16px'
      },
      borderRadius: {
        '200px': '200px',
      },
    },
  },
  plugins: [],
}

