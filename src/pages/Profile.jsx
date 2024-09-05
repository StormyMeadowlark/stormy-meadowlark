import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const tenantId = '66cf01edfc069c867b6fbca9' // Tenant ID

  const handleRedirectBasedOnRole = useCallback(
    (role) => {
      if (role === 'SuperAdmin') {
        navigate('/superadmin/profile')
      }
    },
    [navigate],
  )

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setError('Unauthorized access. Please log in.')
        navigate('/account')
        return
      }

      try {
        // Log headers to verify
        console.log('Authorization Header:', `Bearer ${token}`)
        console.log('x-tenant-id Header:', tenantId)

        const response = await axios.get(
          `https://skynetrix.tech/api/v1/users/${tenantId}/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'x-tenant-id': tenantId,
            },
          },
        )

        console.log('API Response:', response) // Log entire response
        console.log('Response Status:', response.status) // Log response status
        console.log('Response Data:', response.data) // Log response data

        if (response.data) {
          const { username, email, role } = response.data // Destructure needed fields
          setUsername(username) // Set username state
          setEmail(email) // Set email state
          handleRedirectBasedOnRole(role) // Handle role-based redirection
        } else {
          setError('Profile data is empty.')
          console.log('Empty Profile Data:', response.data) // Log empty data
        }
      } catch (err) {
        setError('Failed to load profile data. Please try again.')
        console.error('Error fetching profile:', err)
        if (err.response) {
          console.error('Error Status:', err.response.status)
          console.error('Error Data:', err.response.data)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [navigate, tenantId, handleRedirectBasedOnRole])

  if (loading) {
    return <div>Loading profile...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  // Render with the specific states for username and email
  return (
    <div className="profile-container mt-80">
      <h1>{username}&apos;s Profile</h1>
      <p>Email: {email}</p>
      {/* Display other profile details as needed */}
    </div>
  )
}

export default Profile
