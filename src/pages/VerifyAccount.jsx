import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const VerifyAccount = () => {
  const [message, setMessage] = useState('')
  const location = useLocation()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    const tenantId = queryParams.get('tenantId')

    if (token && tenantId) {
      verifyAccount(token, tenantId)
    } else {
      setMessage('Invalid verification link.')
    }
  }, [location.search])

  const verifyAccount = async (token, tenantId) => {
    try {
      const response = await axios.post(
        `https://skynetrix.tech/api/v1/users/${tenantId}/verify-email/${token}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Tenant-Id': tenantId,
          },
        },
      )
      setMessage('Your account has been successfully verified!')
    } catch (error) {
      console.error('Verification error:', error)
      setMessage('Verification failed. Please try again or contact support.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark-primary text-dark dark:text-dark-text">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Account Verification</h1>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  )
}

export default VerifyAccount
