import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const GoogleAdsManagement = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-24">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-cursive text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Google Ads Management
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
          In a crowded digital marketplace, standing out requires precision and
          strategy. Our Google Ads Management services at Stormy Meadowlark are
          designed to do just that—drive targeted traffic to your website and
          maximize your ROI. We create and manage campaigns that not only reach
          the right audience but also convert, ensuring your business thrives in
          the competitive digital landscape.
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
              Basic Campaign
            </h3>
            <p className="text-lg font-gothic text-light">$500/month</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Perfect for small businesses, this package includes the setup and
              management of a single, high-impact Google Ads campaign.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Advanced Campaign
            </h3>
            <p className="text-lg font-gothic text-light">$1,000/month</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              For businesses ready to expand their digital presence, this
              package includes multiple campaigns with advanced targeting and
              detailed performance reporting.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Custom Campaigns
            </h3>
            <p className="text-lg font-gothic text-light">
              Contact for pricing
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Tailored to your specific needs, custom campaigns offer a
              personalized strategy with unique targeting and creative
              approaches.
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
          Our process begins with a deep understanding of your business goals
          and target audience. We conduct comprehensive keyword research to
          identify the best opportunities for your campaigns. Our team crafts
          compelling ads that capture attention and drive conversions.
          Throughout the campaign, we continuously monitor performance and
          optimize strategies to ensure maximum effectiveness. With detailed
          reporting, we keep you informed every step of the way, making sure you
          see the results that matter.
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
          Ready to Boost Your Business with Google Ads?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-gothic text-dark-primary dark:text-light">
          Let's create a Google Ads campaign that drives results and helps your
          business grow. Contact us today to get started.
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

export default GoogleAdsManagement
