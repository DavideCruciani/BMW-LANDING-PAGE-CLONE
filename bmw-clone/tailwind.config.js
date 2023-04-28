/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-70deg': 'linear-gradient(70deg, var(--tw-gradient-stops))'
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

