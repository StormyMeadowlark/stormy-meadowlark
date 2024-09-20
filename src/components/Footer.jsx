import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const tenantId = '66cf01edfc069c867b6fbca9' // Tenant ID

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `https://skynetrix.tech/api/v1/newsletters/${tenantId}/subscribe`, // Use tenantId in the URL
        { email }, // Send email in the request body
        {
          headers: {
            'Content-Type': 'application/json',
            'x-tenant-id': tenantId, // Use extracted tenantId in the headers
          },
        },
      )

      if (response.status === 200) {
        setSubmitted(true) // Mark the form as submitted if the request was successful
      } else {
        setError('Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <footer className="bg-indigo-200 dark:bg-dark-primary text-dark dark:text-light py-10">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-heading text-dark dark:text-light">
            Stormy Meadowlark
          </h2>
          <p className="text-indigo-800 dark:text-gray-400">
            Tranquility Among the Storm
          </p>
        </div>

        <nav className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
          <Link
            to="/"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Portfolio
          </Link>
          <Link
            to="/tech&tranquility"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Tech & Tranquility
          </Link>
          <Link
            to="/contact"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Contact
          </Link>
          <Link
            to="careers/resume-portal"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Careers
          </Link>
        </nav>

        <div className="text-center">
          <h3 className="text-xl font-heading mb-4 text-dark dark:text-light">
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
                className="p-3 rounded-lg text-dark dark:text-light bg-indigo-50 dark:bg-dark-secondary"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 dark:bg-accent text-light font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-600 dark:text-green-400">
              Thank you for subscribing!
            </p>
          )}
          {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-indigo-800 dark:text-gray-400 text-sm px-8 md:px-16 lg:px-24">
        <div className="flex gap-6">
          <a
            href="https://facebook.com/StormyMeadowlark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://pinterest.com/StormyMeadowlark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            <FaPinterest />
          </a>
          <a
            href="https://linkedin.com/company/stormy-meadowlark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/stormymeadowlark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="mt-4 md:mt-0">
          <Link
            to="/documents/disclaimer"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Disclaimer
          </Link>
          {' | '}
          <Link
            to="/documents/privacy-policy"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Privacy Policy
          </Link>
          {' | '}
          <Link
            to="/documents/terms-of-service"
            className="hover:text-indigo-700 dark:hover:text-indigo-400"
          >
            Terms of Service
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-indigo-800 dark:text-gray-400 text-sm">
        <p>&copy; 2024 Stormy Meadowlark. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
