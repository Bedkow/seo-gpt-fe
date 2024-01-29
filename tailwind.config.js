/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
    colors: {
      main: '#1b2838',
      'text-main': '#ffffff'
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }]
}

