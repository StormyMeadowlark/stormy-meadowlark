// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: 'auto',
              display: 'block',
            },
            blockquote: {
              borderLeftColor: '#ff7e5f',
              fontStyle: 'italic',
            },
            h1: {
              fontSize: '2.25rem', // Custom font size for h1
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.875rem', // Custom font size for h2
              fontWeight: '700',
              color: '#333',
            },
            h3: {
              fontSize: '1.5rem', // Custom font size for h3
              fontWeight: '600',
            },
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.8',
            },
            ul: {
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
      },
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
        'light-primary': '#f7faff',
        'light-secondary': '#e0e7ff',
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
        sm: '640px', // Small screen breakpoint
        md: '768px', // Medium screen breakpoint
        lg: '1044px', // Custom large screen breakpoint
        xl: '1280px', // Extra large screen breakpoint
        '2xl': '1536px', // 2xl screen breakpoint
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Correctly add the typography plugin
  ],
}
