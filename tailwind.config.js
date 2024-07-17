/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-2px -5px 25px -2px rgba(34, 60, 80, 0.36)',
      },
    },
  },
  plugins: [],
}

