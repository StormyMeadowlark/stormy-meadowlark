import { useState, useEffect } from 'react'
import axios from 'axios'
import PostEditor from '../components/PostEditor' // Import PostEditor component

const SuperAdminProfile = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingBlog, setEditingBlog] = useState(null)
  const [isSaving, setIsSaving] = useState(false) // State to manage saving status

  const tenantId = '66cf01edfc069c867b6fbca9' // Tenant ID for the SuperAdmin

  // Function to fetch the list of blogs
  const fetchBlogs = async () => {
    setLoading(true) // Start loading when fetching
    setError(null) // Reset error before fetching
    const token = localStorage.getItem('token') // Retrieve token from localStorage

    try {
      const response = await axios.get(
        `https://skynetrix.tech/api/v1/posts/${tenantId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-tenant-id': tenantId,
          },
        },
      )

      if (Array.isArray(response.data)) {
        const validBlogs = response.data.filter(
          (blog) => blog && blog._id && blog.title,
        )
        setBlogs(validBlogs)
      } else {
        console.error('Unexpected API response structure:', response.data)
        setError('Failed to fetch blogs - unexpected response format.')
      }
    } catch (err) {
      console.error('Failed to fetch blogs:', err)
      if (err.response) {
        console.error('Error Response Data:', err.response.data)
        console.error('Error Status:', err.response.status)
      }
      setError('Failed to fetch blogs.')
    } finally {
      setLoading(false) // End loading when fetch is complete
    }
  }

  useEffect(() => {
    fetchBlogs() // Fetch blogs when the component mounts
  }, [])

  const handleEditClick = (blog) => {
    setEditingBlog(blog) // Set the blog to be edited
  }

  const handleCreateClick = () => {
    setEditingBlog({
      title: '',
      content: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      status: 'Draft',
    }) // Open the editor for creating a new blog
  }

  const handleSave = async ({
    title,
    content,
    metaTitle,
    metaDescription,
    metaKeywords,
    status,
  }) => {
    setIsSaving(true) // Start saving
    setError(null) // Reset error before saving
    const token = localStorage.getItem('token') // Retrieve token from localStorage

    try {
      if (editingBlog._id) {
        // If editing an existing blog
        await axios.put(
          `https://skynetrix.tech/api/v1/posts/${tenantId}/${editingBlog._id}`, // Correct URL with postId
          { title, content, metaTitle, metaDescription, metaKeywords, status }, // Send the updated details
          {
            headers: {
              'x-tenant-id': tenantId,
              Authorization: `Bearer ${token}`,
            },
          },
        )
      } else {
        // If creating a new blog
        await axios.post(
          `https://skynetrix.tech/api/v1/posts/${tenantId}`, // URL for creating a new post
          { title, content, metaTitle, metaDescription, metaKeywords, status }, // Send the new details
          {
            headers: {
              'x-tenant-id': tenantId,
              Authorization: `Bearer ${token}`,
            },
          },
        )
      }

      setEditingBlog(null) // Clear the editing state
      fetchBlogs() // Fetch the updated list of blogs
    } catch (error) {
      console.error('Failed to save the blog:', error)
      setError('Failed to save the blog.')
    } finally {
      setIsSaving(false) // End saving
    }
  }

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this post?',
    )
    if (!confirmDelete) return

    const token = localStorage.getItem('token') // Retrieve token from localStorage

    try {
      await axios.delete(
        `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}`,
        {
          headers: {
            'x-tenant-id': tenantId,
            Authorization: `Bearer ${token}`,
          },
        },
      )
      fetchBlogs() // Fetch the updated list of blogs after deletion
    } catch (error) {
      console.error('Failed to delete the blog:', error)
      setError('Failed to delete the blog.')
    }
  }

  const handlePublishToggle = async (postId, currentStatus) => {
    const token = localStorage.getItem('token') // Retrieve token from localStorage
    const newStatus = currentStatus === 'Published' ? 'Draft' : 'Published'

    try {
      await axios.post(
        `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}/${
          newStatus === 'Published' ? 'publish' : 'unpublish'
        }`,
        {},
        {
          headers: {
            'x-tenant-id': tenantId,
            Authorization: `Bearer ${token}`,
          },
        },
      )
      fetchBlogs() // Fetch the updated list of blogs after the status change
    } catch (error) {
      console.error('Failed to toggle publish status:', error)
      setError('Failed to toggle publish status.')
    }
  }

  if (loading) {
    return <div>Loading blogs...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="flex min-h-screen bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text font-gothic pt-32 mx-auto">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-light-secondary dark:bg-dark-secondary p-4 overflow-y-auto ${
          editingBlog ? 'w-20' : 'w-full'
        }`}
      >
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 w-full"
          onClick={handleCreateClick}
        >
          {editingBlog ? '+' : 'Create New Post'}
        </button>
        {!editingBlog && (
          <div className="space-y-4">
            {blogs.map(
              (blog) =>
                blog &&
                blog._id && (
                  <div
                    key={blog._id}
                    className="flex justify-between items-center border-b border-gray-200 py-2"
                  >
                    <span className="text-sm font-bold">{blog.title}</span>
                    <div className="flex gap-2">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleEditClick(blog)}
                      >
                        Edit
                      </button>
                      <button
                        className={`px-2 py-1 rounded ${
                          blog.publishStatus === 'Published'
                            ? 'bg-yellow-500'
                            : 'bg-purple-500'
                        } text-white`}
                        onClick={() =>
                          handlePublishToggle(blog._id, blog.publishStatus)
                        }
                      >
                        {blog.publishStatus === 'Published'
                          ? 'Unpublish'
                          : 'Publish'}
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDelete(blog._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ),
            )}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-8 transition-all duration-300 ${
          editingBlog ? 'ml-20' : 'ml-0'
        }`}
      >
        {editingBlog ? (
          <div className="">
            <PostEditor
              initialTitle={editingBlog.title || ''} // Pass the current blog title or an empty string
              initialContent={editingBlog.content || ''} // Pass the current blog content or an empty string
              initialMetaTitle={editingBlog.metaTitle || ''} // Pass the current meta title or an empty string
              initialMetaDescription={editingBlog.metaDescription || ''} // Pass the current meta description or an empty string
              initialMetaKeywords={editingBlog.metaKeywords || ''} // Pass the current meta keywords or an empty string
              initialStatus={editingBlog.publishStatus || 'Draft'} // Pass the current status or default to Draft
              onSave={handleSave}
            />
            {isSaving && <div>Saving changes...</div>}{' '}
            {/* Show saving status */}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default SuperAdminProfile
