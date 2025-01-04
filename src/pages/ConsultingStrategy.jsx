import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ConsultingStrategy = () => (
<div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40 p-2">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-cursive text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Consulting & Strategy
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
          In the ever-shifting digital landscape, clear strategy and informed
          decisions are vital for success. At Stormy Meadowlark, we bring you
          the expertise and insight needed to navigate this complex environment.
          Whether you're launching a new product, expanding your digital
          footprint, or refining existing operations, we offer tailored
          consulting services that align with your vision and goals. Let us help
          you carve a path forward with confidence and clarity.
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
              Hourly Consulting
            </h3>
            <p className="text-lg font-gothic text-light">$150/hour</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Ideal for addressing specific challenges and getting expert advice
              on-demand.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Strategic Planning
            </h3>
            <p className="text-lg font-gothic text-light">$1,200</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Comprehensive strategic planning with actionable insights and
              clear roadmaps.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Ongoing Consulting
            </h3>
            <p className="text-lg font-gothic text-light">
              Contact for pricing
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Continuous consulting services with ongoing support to ensure
              long-term success.
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
          Our approach to consulting is rooted in a deep understanding of your
          business, industry, and goals. We begin with a comprehensive analysis
          of your current strategies and challenges, then collaborate with you
          to develop a tailored plan that drives your business forward. Our
          recommendations are grounded in data-driven insights, industry best
          practices, and a commitment to your success. We provide ongoing
          support and strategic adjustments to ensure that your business remains
          on the right track.
        </motion.p>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-8xl font-cursive mb-4 text-dark-secondary dark:text-light">
          Ready to Elevate Your Strategy?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-gothic text-dark-primary dark:text-light">
          Let's work together to create a strategy that transforms your vision
          into reality. Reach out to us today to get started.
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

export default ConsultingStrategy
