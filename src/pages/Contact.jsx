import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios' // Import axios for making API requests

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Loading state for API call
  const [apiError, setApiError] = useState('') // Error state for API call

  const tenantId = '66cf01edfc069c867b6fbca9' // Replace with your actual tenant ID

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true)
      setErrors({})
      setApiError('')

      try {
        // Make the API call to the backend
        const response = await axios.post(
          `https://skynetrix.tech/api/v1/email/${tenantId}/contact`, // Update with your API endpoint
          formData,
          {
            headers: {
              'x-tenant-id': tenantId,
            },
          },
        )

        if (response.status === 200) {
          setFormSubmitted(true)
        } else {
          setApiError('An error occurred. Please try again.')
        }
      } catch (error) {
        console.error('Error submitting contact form:', error)
        setApiError('Failed to send your message. Please try again.')
      } finally {
        setIsLoading(false)
      }
    } else {
      setErrors(validationErrors)
    }
  }

  const jobOpenings = [
    {
      id: 1,
      title: 'Front-End Developer',
      location: 'Remote',
      description:
        'We are looking for a talented front-end developer to join our team.',
      url: '/careers/ux-ui-designer',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      location: 'Remote',
      description:
        'Join our creative team as a UX/UI Designer to craft beautiful user experiences.',
      url: '/careers/ux-ui-designer',
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      location: 'Remote',
      description:
        'Help us grow our brand with innovative marketing strategies and campaigns.',
      url: '/careers/marketing-specialist',
    },
  ]

  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-dark dark:text-light p-2">
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-Gothic text-center mb-8 text-dark-primary dark:text-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Get in Touch with Stormy Meadowlark
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl mx-auto text-center mb-12 font-gothic-bold-italic text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Have a question, feedback, or a project you&apos;d like to discuss?
          We&apos;d love to hear from you.
        </motion.p>

        <motion.div
          className="max-w-lg mx-auto bg-light dark:bg-dark-primary p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          {formSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg">
              Thank you for reaching out! We&apos;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-gothic">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-light dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.name ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-light dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.email ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2 text-dark-primary dark:text-light"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className={`w-full p-4 rounded-lg shadow-md bg-light dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.message ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {apiError && (
                <p className="text-red-500 text-sm mt-2">{apiError}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-dark-primary dark:bg-accent text-light font-gothicBoldFont py-3 px-6 rounded-lg shadow-md hover:bg-dark-accent dark:hover:bg-accent-dark transition-colors"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Careers Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-5xl text-center mb-8 text-dark-primary dark:text-light">
            Careers at Stormy Meadowlark
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12 font-gothic-italic text-dark-secondary dark:text-light">
            We&apos;re always looking for talented individuals to join our team.
            Explore our current job openings below and become a part of our
            growing company.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-light dark:bg-dark-primary p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-gothic-bold mb-4 text-dark-primary dark:text-light">
                  {job.title}
                </h3>
                <p className="text-sm font-gothic-italic text-dark-secondary dark:text-light mb-2">
                  {job.location}
                </p>
                <p className="text-lg text-dark dark:text-light mb-4">
                  {job.description}
                </p>
                <Link
                  to={job.url}
                  className="text-dark-primary dark:text-accent font-bold underline mt-4 inline-block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Contact
