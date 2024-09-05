// src/components/CommentsSection.jsx

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const CommentsSection = ({ postId, tenantId, isAuthenticated }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)

  // Fetch comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}/comments`,
          {
            headers: {
              'x-tenant-id': tenantId,
            },
          },
        )
        setComments(response.data)
      } catch (err) {
        console.error('Failed to fetch comments:', err.message)
        setError('Failed to fetch comments.')
      }
    }

    fetchComments()
  }, [tenantId, postId])

  const handleCommentSubmit = async (e) => {
    e.preventDefault()

    if (!isAuthenticated) {
      alert('Please log in to comment.')
      return
    }

    try {
      const response = await axios.post(
        `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}/comments`,
        { content: comment },
        {
          headers: {
            'x-tenant-id': tenantId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )

      setComments([...comments, response.data])
      setComment('')
    } catch (err) {
      console.error('Failed to add comment:', err.message)
      setError('Failed to add comment.')
    }
  }

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <h2 className="text-4xl font-gothic-bold mb-4">Comments</h2>
      {error && <p className="text-red-500">{error}</p>}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-light-secondary dark:bg-dark-secondary p-4 rounded-lg shadow-md"
            >
              <p className="text-sm">{comment.content}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}

      {isAuthenticated && (
        <form onSubmit={handleCommentSubmit} className="mt-8">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-4 rounded-lg shadow-md bg-light-primary dark:bg-dark-primary text-dark dark:text-light mb-4"
          />
          <button className="bg-light-accent dark:bg-dark-accent text-white font-bold py-2 px-6 rounded-lg">
            Submit Comment
          </button>
        </form>
      )}
    </motion.section>
  )
}

export default CommentsSection
