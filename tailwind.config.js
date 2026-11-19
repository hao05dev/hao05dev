/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette sampled from the painting
        ultramarine: '#1b2f7a',
        cobalt: '#2c56c4',
        sky: '#6f9be8',
        cream: '#f6efd6',
        canvas: '#efe4c4',
        sunflower: '#f4b625',
        ochre: '#c7801a',
        umber: '#5a3a17',
        cypress: '#22422a',
        terracotta: '#c4502f',
        ink: '#14204d',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
