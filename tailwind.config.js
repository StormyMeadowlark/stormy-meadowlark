// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      colors: {
        primary: '#ff7e5f', // Light theme colors
        secondary: '#feb47b',
        accent: '#f093fb',
        dark: '#2c3e50',
        light: '#f5f5f5',
        'cta-hover': '#f5576c',
        // Dark theme colors
        'dark-primary': '#332940', // A deep purple representing the night sky
        'dark-secondary': '#0f0c29', // Darker background, like a late evening sky
        'dark-accent': '#ff5e62', // A strong accent color, representing the last light of sunset
        'dark-text': '#e0e0e0', // Lighter text on a dark background
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
