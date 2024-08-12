import React, { useState, useEffect } from 'react'

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
    <div
      onClick={toggleTheme}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="sr-only"
      />
      <div className="w-14 h-8 bg-light-accent dark:bg-dark-secondary rounded-full shadow-inner transition-colors duration-300 ease-in-out"></div>
      <div
        className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-dark-accent rounded-full shadow-md transition-all duration-300 transform ${
          theme === 'dark' ? 'translate-x-6' : ''
        }`}
      >
        <span className="absolute inset-0 flex items-center justify-center text-xl text-dark-primary dark:text-light">
          {theme === 'light' ? '🌞' : '🌜'}
        </span>
      </div>
    </div>
  )
}

export default ThemeToggle
