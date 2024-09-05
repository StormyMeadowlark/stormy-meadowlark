import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // Login function to set user and authentication state
  const login = (userData) => {
    setUser(userData) // Set user data, including role
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(userData)) // Persist user data in local storage
  }

  // Logout function to clear user and authentication state
  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem('user') // Clear user data from local storage
  }

  // Check authentication status on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
