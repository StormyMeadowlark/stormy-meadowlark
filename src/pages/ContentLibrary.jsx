import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  DocumentTextIcon,
  ChatIcon,
  MicrophoneIcon,
} from '@heroicons/react/outline' // Icons for each type of content

const tenantId = '66cf01edfc069c867b6fbca9'

const ContentLibrary = () => {
  const [tabs] = useState(['Blogs', 'Social Media', 'Podcasts', 'Media', 'Templates'])
  const [isSuperAdmin, setIsSuperAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Fetch user profile to determine if they are a SuperAdmin
  useEffect(() => {
    const fetchUserRole = async () => {
      const token = localStorage.getItem('token')
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
        const { role } = response.data
        setIsSuperAdmin(role === 'SuperAdmin')
      } catch (error) {
        console.error('Failed to fetch user role:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserRole()
  }, [])

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <div className="min-h-full bg-light dark:bg-dark-primary">
      <main className="pt-24 mx-20">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Content Management
        </h1>

        <Tab.Group>
          <Tab.List className="flex space-x-4 border-b pb-2">
            {tabs.map((tab, idx) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  selected
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-2 dark:text-blue-400'
                    : 'text-gray-500 hover:text-blue-600 dark:text-gray-300'
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6">
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Blog posts grid layout */}
                <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-dark-secondary">
                  <DocumentTextIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Blogs
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage all blog posts and articles.
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                    onClick={() =>
                      navigate(
                        isSuperAdmin
                          ? '/superadmin/content-library/blog-management'
                          : '/blogs',
                      )
                    }
                  >
                    {isSuperAdmin ? 'Manage Blogs' : 'View Blogs'}
                  </button>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Social Media posts grid layout */}
                <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-dark-secondary">
                  <ChatIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Social Media
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage social media campaigns and posts.
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                    onClick={() => navigate('/social-media')}
                  >
                    View Social Media Posts
                  </button>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Podcasts grid layout */}
                <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-dark-secondary">
                  <MicrophoneIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Podcasts
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage your podcasts and audio content.
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                    onClick={() => navigate('/podcasts')}
                  >
                    View Podcasts
                  </button>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Media grid layout */}
                <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-dark-secondary">
                  <MicrophoneIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Media
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage your images and videos.
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                    onClick={() => navigate('/media')}
                  >
                    View Media
                  </button>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Media grid layout */}
                <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-dark-secondary">
                  <MicrophoneIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Templates
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage your Email and Newsletter templates.
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                    onClick={() => navigate('/media')}
                  >
                    View Templates
                  </button>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  )
}

export default ContentLibrary
