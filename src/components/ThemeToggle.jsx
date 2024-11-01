import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // Motion for smooth animations

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.div
      onClick={toggleTheme}
      className="cursor-pointer flex items-center justify-center p-2 rounded-full transition-colors duration-500 ease-in-out"
      whileHover={{ scale: 1.05 }} // Slight hover effect for emphasis
      whileTap={{ scale: 0.95 }} // Tap effect for interaction
    >
      <span
        className={`text-lg font-semibold transition-colors duration-500 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text'
            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text'
        }`}
      >
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
    </motion.div>
  )
}

export default ThemeToggle
