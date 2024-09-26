import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext' // Import AuthContext

const Account = () => {
  const { login } = useContext(AuthContext) // Use login function from context
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
  const [loading, setLoading] = useState(false) // Loading state

  const tenantName = 'Stormy Meadowlark' // Tenant name determined based on the frontend context
  const tenantId = '66cf01edfc069c867b6fbca9' // Tenant ID included in the URL

  const navigate = useNavigate() // Hook for navigation

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
    setLoading(true) // Start loading
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      const apiEndpoint = isLogin
        ? `https://skynetrix.tech/api/v1/users/${tenantId}/login`
        : `https://skynetrix.tech/api/v1/users/${tenantId}/register`

      const payload = {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        tenant: tenantName, // Include tenant name in the request body
      }

      try {
        const response = await axios.post(apiEndpoint, payload, {
          headers: {
            'x-tenant-id': tenantId, // Include tenant ID as a header
          },
        })

        if (response.status === 200) {
          if (isLogin) {
            const { token, role } = response.data // Extract token and role from response
            localStorage.setItem('token', token) // Store the JWT token
            login({ token, role }) // Update context with user data
            setMessage('Logged in successfully!')

            // Redirect based on the user's role
            if (role === 'SuperAdmin') {
              navigate('/superadmin/profile')
            } else {
              navigate('/user/profile')
            }
          } else {
            setMessage(
              'Registered successfully! Please verify your email before logging in.',
            )
          }
          setFormSubmitted(true)
        } else {
          setErrors({ form: response.data.message })
        }
      } catch (error) {
        if (error.response) {
          setErrors({
            form: error.response.data.message || 'An error occurred.',
          })
        } else if (error.request) {
          setErrors({
            form: 'No response from the server. Please try again later.',
          })
        } else {
          setErrors({ form: 'An error occurred. Please try again.' })
        }
      } finally {
        setLoading(false) // Stop loading
      }
    } else {
      setErrors(validationErrors)
      setLoading(false) // Stop loading if validation fails
    }
  }

  // Function for handling "Forgot Password"
  const handleForgotPassword = () => {
    navigate('/user/forgot-password') // Redirect to forgot password page
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
              {/* Form Fields */}
              <InputField
                label="Username"
                id="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                error={errors.username}
              />
              {!isLogin && (
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              )}
              <InputField
                label="Password"
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />
              {!isLogin && (
                <InputField
                  label="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                />
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-dark-primary dark:bg-accent text-light font-bold py-3 px-6 rounded-lg shadow-md hover:bg-dark-accent dark:hover:bg-accent-dark transition-colors"
                disabled={loading} // Disable button during loading
              >
                {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
              </button>

              {errors.form && (
                <p className="text-red-500 text-center mt-4">{errors.form}</p>
              )}
            </form>
          )}

          {/* Forgot Password Button */}
          {isLogin && (
            <div className="text-center mt-4">
              <button
                onClick={handleForgotPassword}
                className="text-dark-primary dark:text-accent font-bold underline"
              >
                Forgot Password?
              </button>
            </div>
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

const InputField = ({ label, id, type, value, onChange, error }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full p-4 rounded-lg shadow-md bg-gray-100 dark:bg-dark-tertiary text-dark dark:text-light ${
        error ? 'border-red-500' : 'border-transparent'
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
)

export default Account
