import { useState } from 'react'
import { motion } from 'framer-motion'

const ResumePortal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    job: '',
    resume: null,
    coverLetter: '',
  })
  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    if (!formData.job) newErrors.job = 'Please select a job'
    if (!formData.resume) newErrors.resume = 'Resume is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      setFormSubmitted(true)
      // Handle form submission, e.g., send data to an API
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-dark dark:text-light">
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-heading text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Apply for a Position
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Fill out the form below to apply for a job at Stormy Meadowlark. We’re
          excited to learn more about you!
        </motion.p>

        <motion.div
          className="max-w-lg mx-auto bg-white dark:bg-dark-primary p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          {formSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg">
              Thank you for your application! We will review your resume and get
              back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2 text-indigo-700 dark:text-accent"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-indigo-50 dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.name ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2 text-indigo-700 dark:text-accent"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-indigo-50 dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.email ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium mb-2 text-indigo-700 dark:text-accent"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-indigo-50 dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.phone ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              {/* Job Position Field */}
              <div>
                <label
                  htmlFor="job"
                  className="block text-lg font-medium mb-2 text-indigo-700 dark:text-accent"
                >
                  Job Position
                </label>
                <select
                  id="job"
                  name="job"
                  value={formData.job}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-indigo-50 dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.job ? 'border-red-500' : 'border-transparent'
                  }`}
                >
                  <option value="">Select a position...</option>
                  <option value="frontend-developer">
                    Front-End Developer
                  </option>
                  <option value="ux-ui-designer">UX/UI Designer</option>
                  <option value="marketing-specialist">
                    Marketing Specialist
                  </option>
                  {/* Add more job positions as needed */}
                </select>
                {errors.job && (
                  <p className="text-red-500 text-sm mt-2">{errors.job}</p>
                )}
              </div>

              {/* Resume Upload Field */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-lg font-medium mb-2 text-indigo-700 dark:text-accent"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className={`w-full p-4 rounded-lg shadow-md bg-indigo-50 dark:bg-dark-secondary text-dark dark:text-light ${
                    errors.resume ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-2">{errors.resume}</p>
                )}
              </div>

              {/* Cover Letter Field */}
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-lg font-medium mb-2 text-indigo-700 dark:text-accent"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full p-4 rounded-lg shadow-md bg-indigo-50 dark:bg-dark-secondary text-dark dark:text-light"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-accent-dark transition-colors"
              >
                Submit Application
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ResumePortal
