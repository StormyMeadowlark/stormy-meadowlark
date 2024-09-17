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
        'light-primary': '##f7faff', // Example color, adjust as needed
        'light-secondary': '#e0e7ff',
        'light-tertiary': '#d1d7e0',
        'light-accent': '#0057b7',
        'light-accent-hover': '#003a8c',
        'light-text': '#2c3e50',
      },
      fontFamily: {
        cursive: ['cursiveFont', 'script'],
        gothic: ['gothicFont', 'sans-serif'],
        'gothic-bold': ['gothicBoldFont', 'sans-serif'],
        'gothic-italic': ['gothicItalicFont', 'sans-serif'],
        'gothic-bold-italic': ['gothicBoldItalicFont', 'sans-serif'],
      },
      screens: {
        // Add custom screen sizes here
        sm: '640px', // Small screen breakpoint (default is 640px)
        md: '768px', // Medium screen breakpoint (default is 768px)
        lg: '1044px', // Custom large screen breakpoint set to 1044px
        xl: '1280px', // Extra large screen breakpoint (default is 1280px)
        '2xl': '1536px', // 2xl screen breakpoint (default is 1536px)
      },
    },
  },
  plugins: [],
}
