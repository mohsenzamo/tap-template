/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#180161',
        secondry: '#4F1787',
        info: '#EB3678',
        danger: '#FB773C',
      }
    },
  },
  plugins: [],
}