const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {

    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],

    safelist: [
      {
        pattern: /bg-(green|blue|red|gray)-(400|700)/,
      },
      {
        pattern: /from-(green|blue|red|gray)-(400|700)/,
      },
      {
        pattern: /to-(green|blue|red|gray)-(400|700)/,
      },
    ],

  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  
  plugins: [],
}
