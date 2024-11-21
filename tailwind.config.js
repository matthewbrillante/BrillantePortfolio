/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Scan all your JS/JSX files
  theme: {
    extend: {
      colors: {
        darkBg: '#1A202C',
        accent: '#4F46E5', // Indigo
        lightText: '#A0AEC0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add a modern font
      },
    },
  },
  plugins: [],
};
