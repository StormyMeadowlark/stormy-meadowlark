import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const Account = () => {
    const [isLogin, setIsLogin] = useState(true) // Toggle between login and registration
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    const [errors, setErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [message, setMessage] = useState('')

    const tenantName = 'Skynetrix' // Tenant name determined based on the frontend context
    const tenantId = '66c722e0c17e4a7ff29243a6' // Tenant ID included in the URL

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }

    const validateForm = () => {
      const newErrors = {}
      if (!formData.username) newErrors.username = 'Username is required'
      if (!formData.password) newErrors.password = 'Password is required'
      if (!isLogin && !formData.email) {
        newErrors.email = 'Email is required'
      } else if (!isLogin && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid'
      }
      if (!isLogin && formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
      return newErrors
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log('Form submitted with data:', formData)
      const validationErrors = validateForm()
      if (Object.keys(validationErrors).length === 0) {
        const apiEndpoint = isLogin
          ? `https://skynetrix.tech/api/v1/users/${tenantId}/login`
          : `https://skynetrix.tech/api/v1/users/${tenantId}/register`

        const payload = {
          username: formData.username,
          password: formData.password,
            email: formData.email,
          tenant: tenantName
           // Include tenant name in the request body
        }

        if (!isLogin) {
 // Include email only for registration
        }

        console.log('Sending request to:', apiEndpoint)
        console.log('Payload:', payload)

        try {
          const response = await axios.post(apiEndpoint, payload, {
            headers: {
              'x-tenant-id': tenantId, // Include tenant ID as a header
            },
          })

          console.log('Response received:', response)

          if (response.status === 200) {
            if (isLogin) {
              setMessage('Logged in successfully!')
            } else {
              setMessage(
                'Registered successfully! Please verify your email before logging in.',
              )
            }
            setFormSubmitted(true)
          } else {
            setErrors({ form: response.data.message })
            console.log('Error response:', response.data)
          }
        } catch (error) {
          setErrors({ form: 'An error occurred. Please try again.' })
          console.log('Error caught:', error)
        }
      } else {
        setErrors(validationErrors)
        console.log('Validation errors:', validationErrors)
      }
    }

  return (
    <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-40">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl font-heading text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {isLogin ? 'Login to Your Account' : 'Register a New Account'}
        </motion.h1>

        <motion.div
          className="max-w-lg mx-auto bg-light dark:bg-dark-secondary p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          {formSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg">
              {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-gray-100 dark:bg-dark-tertiary text-dark dark:text-light ${
                    errors.username ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-2">{errors.username}</p>
                )}
              </div>

              {/* Email Field (for registration) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg shadow-md bg-gray-100 dark:bg-dark-tertiary text-dark dark:text-light ${
                      errors.email ? 'border-red-500' : 'border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>
              )}

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-gray-100 dark:bg-dark-tertiary text-dark dark:text-light ${
                    errors.password ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field (for registration) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg shadow-md bg-gray-100 dark:bg-dark-tertiary text-dark dark:text-light ${
                      errors.confirmPassword
                        ? 'border-red-500'
                        : 'border-transparent'
                    }`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-dark-primary dark:bg-accent text-light font-bold py-3 px-6 rounded-lg shadow-md hover:bg-dark-accent dark:hover:bg-accent-dark transition-colors"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>

              {errors.form && (
                <p className="text-red-500 text-center mt-4">{errors.form}</p>
              )}
            </form>
          )}
          {/* Toggle between login and registration */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-dark-primary dark:text-accent font-bold underline"
            >
              {isLogin
                ? 'Need an account? Register'
                : 'Already have an account? Login'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Account
