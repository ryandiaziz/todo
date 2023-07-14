/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'todo-yellow': '#fce762',
        'todo-invory': '#fffded',
        'todo-brown': '#ffb17a',
        'todo-violet': '#4f4789',
        'todo-purple': '#201335',
      },
    },
  },
  plugins: [],
}

