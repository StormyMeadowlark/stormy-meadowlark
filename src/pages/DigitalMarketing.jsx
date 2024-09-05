import { motion } from 'framer-motion'

const DigitalMarketing = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-gothic-bold text-center mb-12">
        Digital Marketing Packages
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Elevate your brand with our tailored digital marketing packages designed
        to grow your online presence and connect with your audience.
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
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Basic Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">$1,000/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Management of 2 platforms (e.g., Facebook and Instagram)</li>
          <li>12 engaging posts per month to boost visibility</li>
          <li>Basic community engagement to foster interaction</li>
          <li>Monthly analytics report to track growth</li>
          <li>Custom graphics and captions tailored to your brand</li>
          <li>Initial digital marketing strategy consultation</li>
        </ul>
      </motion.div>

      {/* Standard Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Standard Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">$2,000/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            Management of 4 platforms (e.g., Facebook, Instagram, LinkedIn,
            Twitter)
          </li>
          <li>20 high-impact posts per month to drive engagement</li>
          <li>
            Moderate community management (responding to comments, messages, and
            reviews)
          </li>
          <li>
            Comprehensive monthly analytics report with actionable insights
          </li>
          <li>
            Creative content production (graphics, captions, and short videos)
          </li>
          <li>Ongoing digital marketing strategy development</li>
          <li>Basic ad management and optimization</li>
        </ul>
      </motion.div>

      {/* Premium Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Premium Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">$4,000/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            Management of up to 6 platforms (e.g., Facebook, Instagram,
            LinkedIn, Twitter, YouTube, TikTok)
          </li>
          <li>30 strategic posts per month for maximum reach</li>
          <li>
            Comprehensive engagement (comments, messages, reviews, and community
            building)
          </li>
          <li>Advanced analytics with tailored strategy adjustments</li>
          <li>High-quality content creation (graphics, videos, photography)</li>
          <li>Full digital marketing strategy and continuous optimization</li>
          <li>Complete ad campaign management and optimization</li>
          <li>Monthly strategy sessions for ongoing growth</li>
        </ul>
      </motion.div>

      {/* E-Commerce Digital Marketing Package */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05, rotate: 1 }}
        style={{ minHeight: '450px' }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          E-Commerce Digital Marketing Package
        </h2>
        <p className="text-4xl font-bold mb-4">$3,000/month</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            Management of 3 e-commerce-focused platforms (e.g., Facebook,
            Instagram, Pinterest)
          </li>
          <li>20 promotional posts per month to drive sales</li>
          <li>
            Moderate community management (comments, messages, and reviews)
          </li>
          <li>Analytics report focused on sales and conversions</li>
          <li>
            E-commerce content creation (product photography, promotional
            graphics, videos)
          </li>
          <li>Custom digital marketing strategy for maximizing sales</li>
          <li>Targeted ad campaigns to boost product visibility</li>
        </ul>
      </motion.div>
    </motion.section>
  </div>
)

export default DigitalMarketing
