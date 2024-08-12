import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SocialMediaManagement = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-cursive text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Social Media Management
      </motion.h1>

      {/* Service Description */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto font-gothic text-dark-primary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          Social media is more than just a platform—it's a powerful tool for
          building your brand, engaging with your audience, and driving business
          growth. At Stormy Meadowlark, we offer comprehensive social media
          management services that go beyond mere posting. We craft strategies
          that amplify your brand's voice, foster authentic connections, and
          create lasting impacts in the digital world.
        </motion.p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Basic Management
            </h3>
            <p className="text-lg font-gothic text-light">$500/month</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Ideal for small businesses, this package includes content creation
              and management for up to 3 social media platforms.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Comprehensive Management
            </h3>
            <p className="text-lg font-gothic text-light">$1,200/month</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              For businesses looking to expand their reach, this package
              includes content creation, management, and audience engagement for
              up to 5 platforms.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Custom Management Plans
            </h3>
            <p className="text-lg font-gothic text-light">
              Contact for pricing
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Tailored management plans designed to meet your specific needs,
              focusing on driving engagement and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Our Process
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto font-gothic text-dark-primary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          Our social media management process begins with a deep understanding
          of your brand and target audience. We develop a content strategy that
          aligns with your business goals, creating engaging content that
          resonates with your followers. Our team handles all aspects of account
          management, from posting to interacting with your audience, ensuring
          your brand remains active and engaging across platforms. We also
          provide detailed analytics to track success and refine strategies as
          needed.
        </motion.p>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-6xl font-cursive mb-4 text-dark-secondary dark:text-light">
          Ready to Elevate Your Social Media?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-gothic text-dark-primary dark:text-light">
          Let's work together to create a social media strategy that truly
          represents your brand and engages your audience. Contact us today to
          get started.
        </p>
        <Link
          to="/contact"
          className="bg-accent dark:bg-dark-accent text-light font-gothic-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent dark:hover:bg-accent-dark"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  </div>
)

export default SocialMediaManagement
