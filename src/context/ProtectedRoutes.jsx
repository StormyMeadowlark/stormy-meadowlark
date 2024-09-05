import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext' // Import AuthContext

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isLoggedIn, user } = useContext(AuthContext) // Access the context

  if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    return <Navigate to="/account" />
  }

  if (adminOnly && (!user || user.role !== 'SuperAdmin')) {
    // Redirect non-admin users to their profile if they try to access admin routes
    return <Navigate to="/user/profile" />
  }

  return children // Render the protected content if all conditions are met
}

export default ProtectedRoute
