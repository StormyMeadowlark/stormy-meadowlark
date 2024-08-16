import { motion } from 'framer-motion'

const DigitalMarketing = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Digital Marketing Packages
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Enhance your online presence with our tailored digital marketing
        packages. Choose the plan that best suits your business needs.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Basic Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }} // Ensures all cards have a consistent height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Basic Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $1,000/month - Estimated 10 hours/month
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Management of 2 platforms (e.g., Facebook and Instagram)</li>
          <li>Up to 12 posts per month (3 posts per week)</li>
          <li>Basic engagement (responding to comments and messages)</li>
          <li>Monthly analytics report</li>
          <li>Content creation (graphics, captions)</li>
          <li>Basic digital marketing strategy consultation</li>
        </ul>
      </motion.div>

      {/* Standard Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }} // Ensures all cards have a consistent height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Standard Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $2,000/month - Estimated 20 hours/month
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            Management of 4 platforms (e.g., Facebook, Instagram, LinkedIn,
            Twitter)
          </li>
          <li>Up to 20 posts per month (5 posts per week)</li>
          <li>
            Moderate engagement (responding to comments, messages, and reviews)
          </li>
          <li>Monthly analytics report with insights and recommendations</li>
          <li>Content creation (graphics, captions, and basic videos)</li>
          <li>Digital marketing strategy development and optimization</li>
          <li>Basic ad management (boosting posts, simple ad campaigns)</li>
        </ul>
      </motion.div>

      {/* Premium Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }} // Ensures all cards have a consistent height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Premium Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $4,000/month - Estimated 40 hours/month
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            Management of up to 6 platforms (e.g., Facebook, Instagram,
            LinkedIn, Twitter, YouTube, TikTok)
          </li>
          <li>Up to 30 posts per month (daily posting)</li>
          <li>
            Comprehensive engagement (responding to comments, messages, reviews,
            and community management)
          </li>
          <li>
            Advanced monthly analytics report with in-depth insights and
            strategy adjustments
          </li>
          <li>
            High-quality content creation (graphics, captions, videos, and
            photography)
          </li>
          <li>
            Comprehensive digital marketing strategy and ongoing optimization
          </li>
          <li>
            Full ad management (campaign creation, management, and optimization
            across platforms)
          </li>
          <li>Monthly strategy sessions</li>
        </ul>
      </motion.div>

      {/* E-Commerce Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }} // Ensures all cards have a consistent height
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          E-Commerce Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">
          $3,000/month - Estimated 30 hours/month
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            Management of 3 platforms focused on e-commerce (e.g., Facebook,
            Instagram, Pinterest)
          </li>
          <li>Up to 20 posts per month (product promotions, offers)</li>
          <li>
            Moderate engagement (responding to comments, messages, and reviews)
          </li>
          <li>
            Monthly analytics report with a focus on sales and conversion
            tracking
          </li>
          <li>
            E-commerce-specific content creation (product photography,
            promotional graphics, videos)
          </li>
          <li>Digital marketing strategy tailored to driving online sales</li>
          <li>
            Product-focused ad management (boosted posts, targeted ad campaigns)
          </li>
        </ul>
      </motion.div>
    </motion.section>
  </div>
)

export default DigitalMarketing
