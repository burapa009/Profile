/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'typewriter': 'typewriter 2s steps(20) forwards',
      },
      keyframes: {
        typewriter: {
          'to': { 'width': '0' },
        },
      },
    },
  },
  plugins: [],
}