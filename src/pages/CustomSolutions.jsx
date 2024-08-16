import { motion } from 'framer-motion'

const CustomSolutions = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Custom Solutions
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Tailor your digital experience with our custom solutions, designed to
        meet your unique business needs.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Website Development */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Website Development</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Basic 5-Page Website: $3,000 - 30 hours</li>
          <li>10-Page Custom Website: $5,000 - 50 hours</li>
          <li>E-Commerce Website Setup: $6,000 - 60 hours</li>
        </ul>
      </motion.div>

      {/* Web Application Development */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Web Application Development
        </h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Basic Web Application: $6,000 - 60 hours</li>
          <li>Advanced Web Application: $10,000 - 100 hours</li>
          <li>E-Commerce Web Application: $12,000 - 120 hours</li>
        </ul>
      </motion.div>

      {/* API Development */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">API Development</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Basic API Setup: $3,000 - 30 hours</li>
          <li>Advanced API Development: $6,000 - 60 hours</li>
          <li>API Integration for E-Commerce: $4,000 - 40 hours</li>
        </ul>
      </motion.div>

      {/* SEO Services */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">SEO Services</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Basic On-Page SEO (up to 5 pages): $1,500 - 15 hours</li>
          <li>
            Comprehensive SEO (10 pages, includes on-page and off-page): $3,500
            - 35 hours
          </li>
          <li>E-Commerce SEO Optimization: $4,500 - 45 hours</li>
        </ul>
      </motion.div>

      {/* Branding and Strategy */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Branding and Strategy
        </h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Brand Style Guide: $2,000 - 20 hours</li>
          <li>Voice Guide: $1,500 - 15 hours</li>
          <li>Full Brand Identity Package: $5,000 - 50 hours</li>
          <li>Marketing Strategy Development: $3,000 - 30 hours</li>
        </ul>
      </motion.div>

      {/* Content Creation */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Content Creation</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Photography (Basic Shoot, up to 10 images): $1,000 - 10 hours</li>
          <li>Videography (Basic Video, 1-2 minutes): $2,000 - 20 hours</li>
          <li>Copywriting (5 Pages of Web Content): $1,500 - 15 hours</li>
          <li>Social Media Graphics (5 Custom Graphics): $1,000 - 10 hours</li>
        </ul>
      </motion.div>
    </motion.section>
  </div>
)

export default CustomSolutions
