import { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send email to an API
    setSubmitted(true)
  }

  return (
    <footer className="bg-gray-900 dark:bg-dark-primary text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-heading">Stormy Meadowlark</h2>
          <p className="text-gray-400">Tranquility Among the Storm</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0">
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-400">
            About
          </Link>
          <Link to="/services" className="hover:text-indigo-400">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-indigo-400">
            Portfolio
          </Link>
          <Link to="/blog" className="hover:text-indigo-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-indigo-400">
            Contact
          </Link>
          <Link to="/resume-portal" className="hover:text-indigo-400">
            Careers
          </Link>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-heading mb-4">
            Subscribe to Our Newsletter
          </h3>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg text-black dark:text-dark-primary"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 dark:bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-400">Thank you for subscribing!</p>
          )}
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 Stormy Meadowlark. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
