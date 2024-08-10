
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MarketingSpecialist = () => (
  <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-dark dark:text-light">
    <div className="container mx-auto">
      <motion.h1
        className="text-5xl font-heading text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Marketing Specialist
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Help us grow our brand and reach new audiences as our Marketing
        Specialist.
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-dark-primary p-8 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <div>
          <h2 className="text-3xl font-heading mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Develop and execute marketing campaigns across various channels.
            </li>
            <li>Analyze market trends and identify growth opportunities.</li>
            <li>Manage social media accounts and content creation.</li>
            <li>
              Collaborate with the design and development teams to ensure brand
              consistency.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-heading mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Proven experience as a Marketing Specialist.</li>
            <li>Strong understanding of digital marketing strategies.</li>
            <li>Excellent communication and project management skills.</li>
            <li>
              Experience with social media management and analytics tools.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-heading mb-4">How to Apply</h2>
          <p>
            If you are a strategic thinker with a passion for marketing, please
            submit your application through our{' '}
            <Link
              to="/resume-portal"
              className="text-indigo-500 dark:text-accent underline"
            >
              Resume Portal
            </Link>
            . We look forward to hearing from you!
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-8">
          <Link
            to="/resume-portal"
            className="bg-indigo-600 dark:bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-accent-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
)

export default MarketingSpecialist
