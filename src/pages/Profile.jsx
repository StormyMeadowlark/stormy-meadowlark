import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const tenantId = '66cf01edfc069c867b6fbca9' // Tenant ID

  const handleRedirectToSuperAdminProfile = useCallback(() => {
    navigate('/superadmin/profile')
  }, [navigate])

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setError('Unauthorized access. Please log in.')
        navigate('/account')
        return
      }

      try {
        const response = await axios.get(
          `https://skynetrix.tech/api/v1/users/${tenantId}/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'x-tenant-id': tenantId,
            },
          },
        )

        if (response.status === 200 && response.data) {
          const { username, email, role } = response.data
          setUsername(username)
          setEmail(email)
          setRole(role) // Store role in state
        } else {
          setError('Failed to load profile data.')
          console.log('Empty or Invalid Profile Data:', response.data)
        }
      } catch (err) {
        const status = err.response ? err.response.status : null
        if (status === 401) {
          setError('Unauthorized access. Please log in again.')
          navigate('/account')
        } else {
          setError('Failed to load profile data. Please try again.')
        }
        console.error('Error fetching profile:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [navigate, tenantId])

  if (loading) {
    return <div>Loading profile...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="profile-container mt-80 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">{username}&apos;s Profile</h1>
      <p className="text-lg">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-lg">
        <strong>Role:</strong> {role}
      </p>

      {/* Show the button if the user is a SuperAdmin */}
      {role === 'SuperAdmin' && (
        <button
          onClick={handleRedirectToSuperAdminProfile}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Go to SuperAdmin Profile
        </button>
      )}
    </div>
  )
}

export default Profile
