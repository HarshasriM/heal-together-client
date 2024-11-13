/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-green-light': '#51b78d',
        'custom-green-dark': '#198a76',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

