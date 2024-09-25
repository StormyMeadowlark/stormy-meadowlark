import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Parse query parameters from the URL
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')
  const tenantId = queryParams.get('tenantId')

  // Ensure the values are not null
  useEffect(() => {
    if (!token || !tenantId) {
      setMessage('Invalid reset link. Please check the URL or contact support.')
    }
  }, [token, tenantId])

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!')
      return
    }

    setIsLoading(true)

    try {
      // Ensure the tenantId and token are included in the URL and request
      const response = await axios.post(
        `https://skynetrix.tech/api/v1/users/${tenantId}/reset-password/${token}`,
        { password },
        {
          headers: {
            'x-tenant-id': tenantId, // Ensure the tenant ID is included as a header
          },
        },
      )

      console.log('Password reset successful:', response.data)
      setMessage('Your password has been successfully reset!')
      navigate('/account') // Redirect to login after success
    } catch (error) {
      console.error('Password reset failed:', error.response?.data)
      setMessage(
        'Failed to reset password. Please try again or contact support.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-secondary rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>
        {message && <p className="text-lg mb-4">{message}</p>}
        {!message && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-lg shadow-md"
                required
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="confirmPassword"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-4 rounded-lg shadow-md"
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ResetPassword
