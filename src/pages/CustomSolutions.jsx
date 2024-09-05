import { motion } from 'framer-motion'

const CustomSolutions = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-gothic-bold text-center mb-12">
        Custom Solutions
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        At Stormy Meadowlark, we create bespoke digital experiences that capture
        your brand&apos;s essence and engage your audience in meaningful ways.
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
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Website Development</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Dynamic 5-Page Website: Starting at $3,000</li>
          <li>Custom 10-Page Website: Starting at $5,000</li>
          <li>E-Commerce Storefront: Starting at $6,000</li>
        </ul>
        <p>
          Our websites are not just digital spaces; they are vibrant experiences
          that drive engagement, optimized for speed, and SEO-friendly to boost
          your visibility.
        </p>
      </motion.div>

      {/* Web Application Development */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Web Application Development
        </h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Interactive Web Applications: Starting at $6,000</li>
          <li>Advanced Custom Platforms: Starting at $10,000</li>
          <li>E-Commerce Applications: Starting at $12,000</li>
        </ul>
        <p>
          Custom-built applications tailored to your needs, designed for
          scalability and efficiency, with a focus on user experience and
          innovation.
        </p>
      </motion.div>

      {/* API Development */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">API Development</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Seamless API Integration: Starting at $3,000</li>
          <li>Custom API Solutions: Starting at $6,000</li>
          <li>API for E-Commerce Platforms: Starting at $4,000</li>
        </ul>
        <p>
          Our APIs are crafted to connect and enhance your digital ecosystem,
          enabling seamless data flow and improving your operational efficiency.
        </p>
      </motion.div>

      {/* SEO Services */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">SEO Services</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>On-Page SEO Optimization: Starting at $1,500</li>
          <li>Comprehensive SEO Strategy: Starting at $3,500</li>
          <li>SEO for E-Commerce Sites: Starting at $4,500</li>
        </ul>
        <p>
          Our SEO services go beyond keywords. We use data-driven strategies to
          boost your visibility and ensure your brand stands out in a crowded
          marketplace.
        </p>
      </motion.div>

      {/* Branding and Strategy */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Branding and Strategy
        </h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Brand Style Guide Development: Starting at $2,000</li>
          <li>Comprehensive Brand Identity: Starting at $5,000</li>
          <li>Strategic Marketing Plans: Starting at $3,000</li>
        </ul>
        <p>
          Build a brand that resonates. We craft unique identities and
          strategies that connect with your audience and drive long-term
          success.
        </p>
      </motion.div>

      {/* Content Creation */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Content Creation</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Engaging Photography Sessions: Starting at $1,000</li>
          <li>Compelling Videography Packages: Starting at $2,000</li>
          <li>Custom Copywriting Services: Starting at $1,500</li>
          <li>Social Media Graphics Packages: Starting at $1,000</li>
        </ul>
        <p>
          Transform your content into a powerful marketing tool with stunning
          visuals and compelling messaging that aligns with your brand&apos;s voice.
        </p>
      </motion.div>

      {/* Sellable Merchandise */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">Branded Merchandise</h2>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Custom T-Shirts and Apparel: Starting at $12 each</li>
          <li>Sublimated Mugs and Tumblers: Starting at $15 each</li>
          <li>Unique Branded Hoodies and Jackets: Starting at $15 each</li>
        </ul>
        <p>
          Extend your brand&apos;s reach with unique merchandise, designed to engage
          and connect with your audience, from apparel to custom accessories.
        </p>
      </motion.div>
    </motion.section>
  </div>
)

export default CustomSolutions
