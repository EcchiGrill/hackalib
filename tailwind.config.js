/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#464646',
        'purple-light': '#b39fff',
        gray: '#f5f5f5',
        'gray-dark': '#333',
        'gray-light': '#f9f9f9',
        red: '#ff4d4d',
        'red-dark': '#cc0000',
        'red-light': '#ff6666',
        green: '#00cc66',
        'green-dark': '#009933',
        'green-light': '#00ff99',
        blue: '#4da6ff',
        'blue-dark': '#007acc',
        'blue-light': '#66b3ff',
      },
    },
  },
  plugins: [],
}
