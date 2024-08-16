import { motion } from 'framer-motion'

const OngoingPackages = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Ongoing Monthly Packages
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Continue growing your business with our tailored ongoing packages. Each
        package is designed to provide consistent support and management for
        your digital presence.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto flex gap-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Basic Ongoing Package */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '550px' }} // Ensures that all cards have the same base height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Basic Ongoing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $2,000/month - Estimated 20 hours/month
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Website Maintenance and Updates</li>
          <li>Basic SEO Maintenance</li>
          <li>Monthly Social Media Management (up to 8 posts)</li>
          <li>Monthly Analytics Reports</li>
          <li>Basic Content Creation (as needed)</li>
        </ul>
        <p className="text-lg">
          This package is ideal for small businesses that need regular updates
          and maintenance without a full-scale digital strategy.
        </p>
      </motion.div>

      {/* Standard Ongoing Package */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '550px' }} // Ensures that all cards have the same base height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Standard Ongoing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $3,000/month - Estimated 30 hours/month
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Web Application and API Maintenance</li>
          <li>Comprehensive SEO Management</li>
          <li>Ongoing Social Media Management (up to 12 posts)</li>
          <li>Continuous Digital Marketing Campaigns (Google Ads, Meta Ads)</li>
          <li>Monthly Content Creation (photography, graphics, copywriting)</li>
        </ul>
        <p className="text-lg">
          This package is perfect for businesses looking to maintain and grow
          their digital presence with a more hands-on approach.
        </p>
      </motion.div>

      {/* Premium Ongoing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex-grow"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '550px' }} // Ensures that all cards have the same base height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Premium Ongoing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $4,500/month - Estimated 45 hours/month
        </p>
        <ul className="text-left list-disc list-inside">
          <li>Full Website, Web Application, and API Support</li>
          <li>Advanced SEO with Continuous Optimization</li>
          <li>
            Full Social Media and Digital Marketing Management (across all major
            platforms)
          </li>
          <li>
            Extensive Content Creation (including videography and custom
            photography)
          </li>
          <li>Monthly Strategy Sessions and In-Depth Analytics</li>
        </ul>
        <p className="text-lg">
          This package is designed for businesses that require full-scale
          digital support and are looking to leverage advanced strategies for
          continuous growth.
        </p>
      </motion.div>
    </motion.section>
  </div>
)

export default OngoingPackages
