/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './partials/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

