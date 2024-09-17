import { motion } from 'framer-motion'

const ApiAccess = () => (
  <div className="bg-gradient-to-b from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Main Header */}
    <motion.div
      className="container mx-auto py-32"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-gothic-bold text-center mb-12 tracking-wide text-shadow">
        API Access Pricing
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        Choose the API access plan that fits your business needs. Whether
        you&apos;re starting small or scaling up, we have the right plan for
        you.
      </p>
    </motion.div>

    {/* Pricing Section */}
    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Basic Plan */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        tabIndex="0"
        aria-label="Basic Plan"
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">Basic Plan</h2>
        <p className="text-4xl font-bold mb-4 text-accent">$10/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Access to core API endpoints (limited to basic operations)</li>
          <li>Up to 1,000 API requests per month</li>
          <li>Basic support (email support with a 48-hour response time)</li>
        </ul>
      </motion.div>

      {/* Standard Plan */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        tabIndex="0"
        aria-label="Standard Plan"
      >
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">Standard Plan</h2>
        <p className="text-4xl font-bold mb-4 text-accent">$30/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Access to core and advanced API endpoints</li>
          <li>Up to 10,000 API requests per month</li>
          <li>
            Standard support (email and chat support with a 24-hour response
            time)
          </li>
        </ul>
      </motion.div>

      {/* Premium Plan */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        tabIndex="0"
        aria-label="Premium Plan"
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">Premium Plan</h2>
        <p className="text-4xl font-bold mb-4 text-accent">$70/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Access to all API endpoints, including premium features</li>
          <li>Up to 50,000 API requests per month</li>
          <li>
            Priority support (phone, chat, and email with a 12-hour response
            time)
          </li>
          <li>Access to detailed analytics and usage reports</li>
        </ul>
      </motion.div>

      {/* Enterprise Plan */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        tabIndex="0"
        aria-label="Enterprise Plan"
      >
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">Enterprise Plan</h2>
        <p className="text-4xl font-bold mb-4 text-accent">Custom Pricing</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Everything in the Premium Plan</li>
          <li>Custom SLAs (Service Level Agreements)</li>
          <li>Unlimited API requests</li>
          <li>Dedicated account manager</li>
          <li>Custom development and priority feature requests</li>
        </ul>
      </motion.div>
    </motion.section>

    {/* Related Services Section */}
    <motion.div
      className="container mx-auto py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
    >
      <h3 className="text-5xl font-gothic-bold text-center mb-8 text-shadow">
        You May Also Be Interested In
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedServices.map((related) => (
          <motion.div
            key={related.title}
            className="p-6 bg-light-accent dark:bg-dark-accent text-dark-primary dark:text-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-3xl font-gothic-bold mb-2">{related.title}</h4>
            <p>{related.description}</p>
            <a href={related.link} className="underline hover:text-primary">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Call to Action */}
    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-light py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-6xl font-gothic-bold mb-4 text-shadow">
        Ready to Get Started with Our API?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Contact us today to choose the best plan for your needs and start
        integrating with our powerful APIs.
      </p>
      <a
        href="/contact"
        className="bg-light-secondary text-dark-primary py-4 px-8 rounded-full font-gothic-bold text-2xl hover:bg-dark-secondary hover:text-light transition duration-300 transform hover:scale-105"
      >
        Get in Touch
      </a>
    </motion.div>
  </div>
)

// Related Services Data

export default ApiAccess
const relatedServices = [
  {
    title: 'Custom Solutions',
    description:
      'Explore our range of custom digital solutions tailored to your specific needs.',
    link: '/services/custom-solutions',
  },
  {
    title: 'Initial Creation Bundles',
    description:
      'Start your digital journey with our all-inclusive creation bundles.',
    link: '/services/initial-creation-bundles',
  },
  {
    title: 'Digital Marketing Packages',
    description:
      'Maintain and grow your digital presence with continuous support and strategy.',
    link: '/services/digital-marketing-campaigns',
  },
]
