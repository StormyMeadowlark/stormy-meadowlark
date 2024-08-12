import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const blogPostsData = [
  {
    id: 1,
    title: 'Navigating the Digital Storm: Tips for Small Business Owners',
    excerpt:
      'In this post, we discuss key strategies for small business owners to thrive in the digital landscape.',
    date: 'August 10, 2024',
    url: '/blog/navigating-digital-storm',
    tags: ['Business', 'Digital', 'Strategy'],
  },
  {
    id: 2,
    title: 'Why Content Creation is Crucial for Your Business',
    excerpt:
      'Learn how content creation can elevate your brand and drive engagement with your audience.',
    date: 'August 5, 2024',
    url: '/blog/why-content-creation-matters',
    tags: ['Content', 'Marketing', 'Strategy'],
  },
  {
    id: 3,
    title: 'The Importance of API Development in Modern Web Applications',
    excerpt:
      'Explore the role of APIs in modern web development and how they can improve your business operations.',
    date: 'July 30, 2024',
    url: '/blog/api-development-importance',
    tags: ['API', 'Development', 'Technology'],
  },
]

const BlogHome = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedTag, setSelectedTag] = useState('')

  useEffect(() => {
    setBlogPosts(blogPostsData)
    setFilteredPosts(blogPostsData)
  }, [])

  useEffect(() => {
    const filtered = blogPosts.filter(
      (post) =>
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) &&
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
          <h1 className="text-8xl font-cursive mb-4">Tech & Tranquility</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our latest insights, tips, and stories to help you navigate
            the digital storm with tranquility and purpose.
          </p>
        </motion.div>

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
              className={`px-4 py-2 rounded-full text-white ${selectedTag === tag ? 'bg-light-accent dark:bg-dark-accent' : 'bg-light-accent dark:bg-dark-primary hover:bg-light-accent-hover dark:hover:bg-dark-accent'}`}
            >
              {tag}
            </button>
          ))}
          <button
            onClick={() => handleTagClick('')}
            className="px-4 py-2 rounded-full text-white bg-light-acent dark:bg-dark-primary hover:bg-light-accent-hover dark:hover:bg-dark-accent"
          >
            All
          </button>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className="p-6 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="text-2xl font-gothic-bold mb-4">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {post.date}
              </p>
              <p className="text-lg mb-4">{post.excerpt}</p>
              <Link
                to={post.url}
                className="text-light-accent dark:text-dark-accent mt-4 inline-block"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>

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
            <div className="p-6 bg-light-accent dark:bg-dark-accent text-white rounded-lg shadow-md">
              <h3 className="text-2xl font-gothic-bold mb-4">
                Featured Post Title
              </h3>
              <p className="text-lg mb-4">
                An engaging excerpt from one of the featured posts that
                showcases its importance and relevance.
              </p>
              <Link
                to="/blog/featured-post"
                className="text-white underline mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
            <div className="p-6 bg-light-accent dark:bg-dark-accent text-white rounded-lg shadow-md">
              <h3 className="text-2xl font-gothic-bold mb-4">
                Another Featured Post
              </h3>
              <p className="text-lg mb-4">
                A snippet from another post that deserves special attention for
                its valuable content.
              </p>
              <Link
                to="/blog/another-featured-post"
                className="text-white underline mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
            <div className="p-6 bg-light-accent dark:bg-dark-accent text-white rounded-lg shadow-md">
              <h3 className="text-2xl font-gothic-bold mb-4">One More Post</h3>
              <p className="text-lg mb-4">
                Highlighting one more post that provides essential insights for
                your readers.
              </p>
              <Link
                to="/blog/one-more-post"
                className="text-white underline mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </motion.section>

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
                src="/path-to-team-member-photo1.jpg"
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
          <h2 className="text-6xl font-cursive mb-8">
            Ready to Join the Conversation?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're here to learn, share, or connect, the Stormy
            Meadowlark blog is your place to explore the digital landscape with
            us. Dive into our posts, leave your thoughts in the comments, and
            let's grow together.
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
