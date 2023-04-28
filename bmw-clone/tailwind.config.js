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
      },
      boxShadow: {
        'buttonBlack': 'inset 0 0 0 1px #262626',
        'buttonWhite': 'inset 0 0 0 1px white',
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

