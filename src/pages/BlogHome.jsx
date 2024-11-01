import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeadshotImage from '../assets/images/Ashlee-Headshot.png?react'
import axios from 'axios'

const BlogHome = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const tenantId = '66cf01edfc069c867b6fbca9'

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        console.log(`Fetching blog posts for tenant ID: ${tenantId}`)
        const response = await axios.get(
          `https://skynetrix.tech/api/v1/posts/${tenantId}`,
          {
            params: { status: 'Published' },
            headers: {
              'x-tenant-id': tenantId,
            },
          },
        )
        console.log('API Response:', response.data)

        const posts = response.data || []
        if (!posts.length) {
          throw new Error('No posts found in the response.')
        }

        const publishedPosts = posts.filter(
          (post) => post.publishStatus === 'Published',
        )
        const draftPosts = posts.filter(
          (post) => post.publishStatus !== 'Published',
        )

        const sortedPosts = [...publishedPosts, ...draftPosts]

        setBlogPosts(sortedPosts)
        setFilteredPosts(sortedPosts)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch blog posts:', err.message)
        setError('Failed to fetch blog posts.')
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [tenantId])

  useEffect(() => {
    const filtered = blogPosts.filter(
      (post) =>
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.excerpt &&
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))) &&
        (selectedTag === '' || post.tags.includes(selectedTag)),
    )
    setFilteredPosts(filtered)
  }, [searchQuery, selectedTag, blogPosts])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleTagClick = (tag) => {
    setSelectedTag(tag)
  }

  if (loading) {
    return (
      <div className="text-center py-40">
        <p>Loading blog posts...</p>
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
    <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen py-40">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-8xl mb-4">Tech & Tranquility</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our latest insights, tips, and stories to help you navigate
            the digital storm with tranquility and purpose.
          </p>
        </motion.div>
        {/* Featured Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-4xl font-gothic-bold text-center mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample featured posts */}
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post._id}
                className="p-6 bg-light-accent dark:bg-dark-accent text-white rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-gothic-bold mb-4">{post.title}</h3>
                <p className="text-lg mb-4">{post.excerpt}</p>
                <Link
                  to={`/tech&tranquility/${post._id}`}
                  className="text-white underline mt-4 inline-block"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Search Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-4 rounded-lg shadow-md bg-light-secondary dark:bg-dark-secondary text-dark dark:text-light"
          />
        </motion.div>

        {/* Tags Filter */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[
            'Business',
            'Digital',
            'Strategy',
            'Content',
            'Marketing',
            'API',
            'Development',
            'Technology',
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full text-white ${
                selectedTag === tag
                  ? 'bg-light-accent dark:bg-dark-accent'
                  : 'bg-light-accent dark:bg-dark-primary hover:bg-light-accent-hover dark:hover:bg-dark-accent'
              }`}
            >
              {tag}
            </button>
          ))}
          <button
            onClick={() => handleTagClick('')}
            className="px-4 py-2 rounded-full text-white bg-light-accent dark:bg-dark-primary hover:bg-light-accent-hover dark:hover:bg-dark-accent"
          >
            All
          </button>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <motion.div
              key={post._id}
              className="p-6 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="text-2xl font-gothic-bold mb-4">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="text-lg mb-4">
                {post.excerpt || 'No Excerpt Available'}
              </p>
              <Link
                to={`/tech&tranquility/${post._id}`}
                className="text-light-accent dark:text-dark-accent mt-4 inline-block"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup Section */}
        <motion.section
          className="bg-light-tertiary dark:bg-dark-secondary py-16 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2 }}
        >
          <h2 className="text-4xl font-gothic-bold text-center mb-8">
            Stay Updated
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest updates, blog
            posts, and more directly in your inbox.
          </p>
          <div className="max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 rounded-lg shadow-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-light mb-4"
            />
            <button className="w-full bg-light-accent dark:bg-dark-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark">
              Subscribe
            </button>
          </div>
        </motion.section>

        {/* Meet the Team Section */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4 }}
        >
          <h2 className="text-4xl font-gothic-bold text-center mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={HeadshotImage}
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-gothic-bold">Ashlee</h3>
              <p className="text-sm">CEO & Founder</p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.6 }}
        >
          <h2 className="text-5xl mb-8">
            Ready to Join the Conversation?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re here to learn, share, or connect, the Stormy
            Meadowlark blog is your place to explore the digital landscape with
            us. Dive into our posts, leave your thoughts in the comments, and
            let&apos;s grow together.
          </p>
          <Link
            to="/contact"
            className="bg-light-accent dark:bg-dark-accent text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark"
          >
            Get in Touch
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

export default BlogHome
