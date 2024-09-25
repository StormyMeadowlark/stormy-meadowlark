import { useState } from 'react'
import axios from 'axios'

const RequestPasswordReset = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const tenantId = '66cf01edfc069c867b6fbca9' // Ideally, get this dynamically if needed

    try {
      const response = await axios.post(
        `https://skynetrix.tech/api/v1/users/${tenantId}/forgot-password`,
        { email }, // Pass email as the body
        {
          headers: {
            'x-tenant-id': tenantId,
          },
        },
      )
      console.log('Password reset email sent:', response.data)
      setMessage('Password reset email has been sent to your inbox.')
    } catch (error) {
      console.error('Error requesting password reset:', error.response?.data)
      setMessage('Failed to send password reset email. Please try again.')
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
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Enter Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              {isLoading ? 'Sending...' : 'Send Password Reset Email'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default RequestPasswordReset
