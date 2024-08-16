import { motion } from 'framer-motion'

const ApiAccess = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        API Access Pricing
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Choose the API access plan that fits your business needs. Whether
        you&apos;re starting small or scaling up, we have the right plan for
        you.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto flex flex-col md:flex-row gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Basic Plan */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '350px' }} // Consistent height for all cards
        tabIndex="0"
        aria-label="Basic Plan"
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Basic Plan</h2>
        <p className="text-4xl font-bold mb-4">$150/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Access to core API endpoints (limited to basic operations)</li>
          <li>Up to 10,000 API requests per month</li>
          <li>Basic support (email support with a 48-hour response time)</li>
        </ul>
      </motion.div>

      {/* Standard Plan */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '350px' }} // Consistent height for all cards
        tabIndex="0"
        aria-label="Standard Plan"
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Standard Plan</h2>
        <p className="text-4xl font-bold mb-4">$350/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Access to core and advanced API endpoints</li>
          <li>Up to 50,000 API requests per month</li>
          <li>
            Standard support (email and chat support with a 24-hour response
            time)
          </li>
        </ul>
      </motion.div>

      {/* Premium Plan */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '350px' }} // Consistent height for all cards
        tabIndex="0"
        aria-label="Premium Plan"
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Premium Plan</h2>
        <p className="text-4xl font-bold mb-4">$750/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Access to all API endpoints, including premium features</li>
          <li>Up to 100,000 API requests per month</li>
          <li>
            Priority support (phone, chat, and email with a 12-hour response
            time)
          </li>
          <li>Access to detailed analytics and usage reports</li>
        </ul>
      </motion.div>

      {/* Enterprise Plan */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '350px' }} // Consistent height for all cards
        tabIndex="0"
        aria-label="Enterprise Plan"
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Enterprise Plan</h2>
        <p className="text-4xl font-bold mb-4">Starting at $2,000/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Everything in the Premium Plan</li>
          <li>Custom SLAs (Service Level Agreements)</li>
          <li>Unlimited API requests</li>
          <li>Dedicated account manager</li>
          <li>Custom development and priority feature requests</li>
        </ul>
      </motion.div>
    </motion.section>
  </div>
)

export default ApiAccess
