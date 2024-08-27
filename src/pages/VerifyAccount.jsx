import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const VerifyAccount = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')
  const tenantId = queryParams.get('tenantId')

  const [verificationToken, setVerificationToken] = useState(token || '')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `https://skynetrix.tech/api/v1/users/${tenantId}/verify-email/${verificationToken}`,
        {},
        {
          headers: {
            'X-Tenant-Id': tenantId,
          },
        },
      )
      setMessage('Your account has been successfully verified!')
      navigate('/verified-success') // Redirect to a success page or show a success message
    } catch (error) {
      setMessage('Verification failed. Please try again or contact support.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-primary dark:bg-dark-primary text-dark dark:text-light">
      <div className="max-w-lg w-full p-6 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Verify Your Account</h1>
        {message && <p className="text-lg mb-4">{message}</p>}
        {!message && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="verificationToken"
              >
                Verification Token
              </label>
              <input
                type="text"
                id="verificationToken"
                name="verificationToken"
                value={verificationToken}
                onChange={(e) => setVerificationToken(e.target.value)}
                className="w-full p-4 rounded-lg shadow-md bg-light-primary dark:bg-dark-primary text-dark dark:text-light"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-light-accent dark:bg-dark-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark"
            >
              Verify Account
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default VerifyAccount
