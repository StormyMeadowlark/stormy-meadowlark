// src/pages/SinglePost.jsx

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import CommentsSection from '../components/CommentsSection' // Import the new CommentsSection component

const SinglePost = () => {
  const { postId } = useParams() // Get the postId from the URL
  const [post, setPost] = useState(null)
  const [suggestedPosts, setSuggestedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [likeCount, setLikeCount] = useState(0)
  const [dislikeCount, setDislikeCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Check if the user is logged in

  const tenantId = '66cf01edfc069c867b6fbca9' // Replace with actual tenant ID or pass it as a prop

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}`,
          {
            headers: {
              'x-tenant-id': tenantId,
            },
          },
        )
        console.log('API Response:', response.data)

        setPost(response.data)
        setLikeCount(response.data.likes.length)
        setDislikeCount(response.data.dislikes.length)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch post:', err.message)
        setError('Failed to fetch the post.')
        setLoading(false)
      }
    }

    fetchPost()
  }, [tenantId, postId])

  useEffect(() => {
    const fetchSuggestedPosts = async () => {
      try {
        const response = await axios.get(
          `https://skynetrix.tech/api/v1/posts/${tenantId}?status=Published`,
          {
            headers: {
              'x-tenant-id': tenantId,
            },
          },
        )
        const filteredPosts = response.data.filter(
          (suggestedPost) =>
            suggestedPost._id !== postId &&
            suggestedPost.publishStatus === 'Published', // Exclude current post and only include published ones
        )
        setSuggestedPosts(filteredPosts)
      } catch (err) {
        console.error('Failed to fetch suggested posts:', err.message)
      }
    }

    fetchSuggestedPosts()
  }, [tenantId, postId])

  const handleLike = async () => {
    if (!isAuthenticated) {
      alert('Please log in to like the post.')
      return
    }

    try {
      await axios.post(
        `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}/like`,
        {},
        {
          headers: {
            'x-tenant-id': tenantId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )

      setLiked(true)
      setDisliked(false)
      setLikeCount((prevCount) => prevCount + 1)
    } catch (err) {
      console.error('Failed to like the post:', err.message)
    }
  }

  const handleDislike = async () => {
    if (!isAuthenticated) {
      alert('Please log in to dislike the post.')
      return
    }

    try {
      await axios.post(
        `https://skynetrix.tech/api/v1/posts/${tenantId}/${postId}/dislike`,
        {},
        {
          headers: {
            'x-tenant-id': tenantId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )

      setDisliked(true)
      setLiked(false)
      setDislikeCount((prevCount) => prevCount + 1)
    } catch (err) {
      console.error('Failed to dislike the post:', err.message)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-40">
        <p>Loading post...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-40">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen pt-40">
      <div className="container mx-auto">
        {/* Post Content */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-6xl font-gothic mb-8">{post.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <div className="prose dark:prose-dark max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </motion.div>

        {/* Like and Dislike Section */}
        <div className="flex items-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${liked ? 'bg-green-500' : 'bg-gray-300'} text-white`}
            onClick={handleLike}
          >
            👍 {likeCount}
          </button>
          <button
            className={`px-4 py-2 rounded ${disliked ? 'bg-red-500' : 'bg-gray-300'} text-white`}
            onClick={handleDislike}
          >
            👎 {dislikeCount}
          </button>
        </div>

        {/* Comments Section */}
        <CommentsSection postId={postId} isAuthenticated={isAuthenticated} />

        {/* Suggested Posts Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <h2 className="text-4xl font-gothic-bold mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedPosts.slice(0, 3).map((suggestedPost) => (
              <div
                key={suggestedPost._id}
                className="p-6 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-gothic-bold mb-4">
                  {suggestedPost.title}
                </h3>
                <p className="text-lg mb-4">{suggestedPost.excerpt}</p>
                <Link
                  to={`/blog/${suggestedPost._id}`}
                  className="text-light-accent dark:text-dark-accent"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-6xl font-gothic mb-8">Join the Discussion</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Have thoughts or questions? Leave a comment below or get in touch
            with us to share your ideas!
          </p>
          <Link
            to="/contact"
            className="bg-light-accent dark:bg-dark-accent text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark"
          >
            Contact Us
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

export default SinglePost
