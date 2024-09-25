import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
} from '@headlessui/react'


const SuperAdminProfile = () => {
  const [comments, setComments] = useState([]) // New: For comments
  const [likedBlogs, setLikedBlogs] = useState([])
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [avatar, setAvatar] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [recentActivities, setRecentActivities] = useState([])
  const navigate = useNavigate()
  const tenantId = '66cf01edfc069c867b6fbca9' // Tenant ID

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(
        `https://skynetrix.tech/api/v1/users/${tenantId}/change-password`,
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-tenant-id': tenantId,
          },
        },
      )
      alert('Password changed successfully')
      setOldPassword('')
      setNewPassword('')
    } catch (err) {
      setError('Failed to change password.')
    }
  }

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
          setRole(role)
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
    return (
      <div className="text-center text-gray-500 mt-10">Loading profile...</div>
    )
  }

  if (error) {
    return <div className="error text-red-500 text-center mt-10">{error}</div>
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAvatar(URL.createObjectURL(file))
    }
  }

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem('token')
      await axios.put(
        `https://skynetrix.tech/api/v1/users/${tenantId}/profile`,
        { username, email, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-tenant-id': tenantId,
          },
        },
      )
      setEditMode(false)
    } catch (err) {
      setError('Failed to save profile data.')
    }
  }

  const handleBookConsultation = () => {
    navigate('/consultation')
  }

  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Projects', href: '#', current: false },
    { name: 'Content Management', href: '#', current: false },
    { name: 'Analytics', href: '#', current: false },
    { name: 'Documents', href: '#', current: false },
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Billing & Subscription', href: '/billing' }, // Billing Panel
    { name: 'Advanced Settings', href: '/advanced-settings' }, // Advanced Settings
    { name: 'Sign out', href: '#' },
  ]

  const marketingStats = [
    { label: 'Leads generated', value: 320 },
    { label: 'Conversion rate', value: '2.4%' },
    { label: 'Total revenue', value: '$15,500' },
  ]

  const actions = [
    { name: 'Manage Campaigns', href: '#', icon: '📝' },
    { name: 'Content Library', href: '/superadmin/content-library', icon: '📚' },
    { name: 'View Analytics', href: '#', icon: '📊' },
    { name: 'Schedule Emails', href: '#', icon: '✉️' },
    { name: 'Manage Ads', href: '#', icon: '📢' },
    { name: 'Create Project', href: '#', icon: '🛠️' },
  ]

  const metricMinute = [
    { label: 'Website Traffic', value: '5k visits/day' },
    { label: 'Ad Spend', value: '$3,200' },
  ]

  const resources = [
    { name: 'Webinar: Advanced SEO', href: '#', date: 'Sep 20, 2024' },
    { name: 'Class: Social Media Strategy', href: '#', date: 'Oct 05, 2024' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="min-h-full bg-light dark:bg-dark-primary">
      {/* Header with Navigation */}
      <Popover
        as="header"
        className="bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary pb-24 pt-40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-wrap items-center justify-between">
            {/* Logo */}
            <div className="py-5">
              <a href="#">
                <img
                  alt="Stormy Meadowlark"
                  src="https://your-logo-url.com"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4">
              {/* Bell Icon with dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="relative flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                </MenuButton>
              </Menu>

              <Menu as="div" className="relative">
                <MenuButton className="relative flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <img
                    alt="Profile"
                    src={`https://your-image-url.com`}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center lg:hidden">
              <PopoverButton className="p-2 rounded-md text-cyan-200 hover:bg-white hover:bg-opacity-10">
              </PopoverButton>
            </div>
          </div>
        </div>
      </Popover>

      {/* Main Section */}
      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Center Panel */}
            <div className="lg:col-span-2">
              {/* Welcome Section */}
              <section
                aria-labelledby="profile-overview-title"
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                      <div className="flex-shrink-0">
                        <img
                          alt="Profile"
                          src={`https://your-image-url.com`}
                          className="mx-auto h-20 w-20 rounded-full"
                        />
                      </div>
                      <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <p className="text-sm font-medium text-gray-600">
                          Welcome back,
                        </p>
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                          {username}
                        </p>
                        <p className="text-sm font-medium text-gray-600">
                          {role}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={handleBookConsultation}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
                      >
                        Book a Consultation
                      </button>
                    </div>
                    <button
                      className="mt-2 text-blue-600 hover:underline"
                      onClick={() => setEditMode(!editMode)}
                    >
                      {editMode ? 'Cancel' : 'Edit Profile'}
                    </button>
                  </div>
                  {editMode && (
                    <div className="mt-6 space-y-4">
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <input
                        type="email"
                        className="w-full p-2 border rounded"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <div className="flex space-x-4">
                        <input type="file" onChange={handleAvatarChange} />
                        <button
                          onClick={handleSaveProfile}
                          className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                          Save Profile
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Marketing Metrics */}
                <div className="grid grid-cols-1 border-t bg-gray-50 divide-y sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                  {marketingStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="px-6 py-5 text-center text-sm font-medium"
                    >
                      <span className="text-gray-900">{stat.value}</span>{' '}
                      <span className="text-gray-600">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Actions Panel */}
              <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {actions.map((action) => (
                  <div
                    key={action.name}
                    className="bg-white shadow-sm p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-medium">
                      <a href={action.href} className="hover:underline">
                        {action.icon} {action.name}
                      </a>
                    </h3>
                  </div>
                ))}
              </section>
              {/* New: Comments Section */}
              <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">My Comments</h2>
                <ul className="mt-4 space-y-2">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <li key={comment.id} className="text-sm text-gray-600">
                        On{' '}
                        <a
                          href={`/blog/${comment.blogId}`}
                          className="text-blue-500 hover:underline"
                        >
                          {comment.blogTitle}
                        </a>
                        : {comment.text}
                      </li>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">
                      You haven't commented on any posts yet.
                    </p>
                  )}
                </ul>
              </section>

              {/* New: Liked Blogs Section */}
              <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Blogs I Liked</h2>
                <ul className="mt-4 space-y-2">
                  {likedBlogs.length > 0 ? (
                    likedBlogs.map((blog) => (
                      <li key={blog.id} className="text-sm text-gray-600">
                        <a
                          href={`/blog/${blog.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          {blog.title}
                        </a>
                      </li>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">
                      You haven't liked any blogs yet.
                    </p>
                  )}
                </ul>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="grid grid-cols-1 gap-4">
              {/* Metric Minute */}
              <section
                aria-labelledby="metric-minute-title"
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="p-6">
                  <h2
                    id="metric-minute-title"
                    className="text-base font-medium text-gray-900"
                  >
                    Metric Minute
                  </h2>
                  <div className="mt-4">
                    {metricMinute.map((metric) => (
                      <div key={metric.label} className="mb-4">
                        <p className="text-sm text-gray-600">{metric.label}</p>
                        <p className="text-xl font-semibold text-gray-900">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Resource List */}
              <section
                aria-labelledby="resources-title"
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="p-6">
                  <h2
                    id="resources-title"
                    className="text-base font-medium text-gray-900"
                  >
                    Resources
                  </h2>
                  <ul className="mt-4 divide-y divide-gray-200">
                    {resources.map((resource) => (
                      <li key={resource.name} className="py-4">
                        <a
                          href={resource.href}
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {resource.name}
                        </a>
                        <p className="text-xs text-gray-500">{resource.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Change Password */}
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Change Password</h2>
                <div className="mt-4 space-y-2">
                  <input
                    type="password"
                    className="w-full p-2 border rounded"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="w-full p-2 border rounded"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    onClick={handleChangePassword}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Change Password
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SuperAdminProfile
