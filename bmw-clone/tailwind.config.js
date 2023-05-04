/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-70deg': 'linear-gradient(70deg, var(--tw-gradient-stops))',
        'gradient-top': 'linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 70%)'
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

