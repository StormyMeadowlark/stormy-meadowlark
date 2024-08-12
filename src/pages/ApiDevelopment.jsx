import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ApiDevelopment = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-cursive text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        API Development
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
          APIs are the invisible threads that connect the digital world. At
          Stormy Meadowlark, we develop scalable and secure APIs that weave
          together your applications, ensuring seamless communication and robust
          performance. From RESTful APIs to custom integrations, we create
          solutions that are reliable, efficient, and built to last.
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
              Basic API
            </h3>
            <p className="text-lg font-gothic text-light">$2,000</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              A straightforward API with essential features and comprehensive
              documentation, tailored to your needs.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Complex API with Integrations
            </h3>
            <p className="text-lg font-gothic text-light">Starting at $4,000</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Advanced APIs with intricate features and seamless integrations,
              designed to support complex systems.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Custom API Solutions
            </h3>
            <p className="text-lg font-gothic text-light">
              Contact for pricing
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Bespoke APIs crafted to meet your unique requirements, complete
              with extensive support and customization.
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
          Our API development journey begins with a deep dive into your business
          and technical needs. We design APIs that are intuitive, secure, and
          scalable, ensuring they are well-documented and easy to integrate.
          Throughout the development process, we adhere to best practices and
          offer ongoing support to keep your APIs running smoothly.
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
          Let's Build Your API
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-gothic text-dark-primary dark:text-light">
          Ready to create an API that enhances your digital ecosystem? Reach out
          to us today, and let's craft a solution that fits your needs
          perfectly.
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

export default ApiDevelopment
