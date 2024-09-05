import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const WebDevelopment = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-gothic-bold text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Web Development
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
          At Stormy Meadowlark, we specialize in creating responsive, visually
          stunning websites that help your business stand out in the digital
          world. Whether you need a simple landing page or a complex e-commerce
          platform, our team of experts will work with you to bring your vision
          to life. We prioritize user experience, performance, and scalability,
          ensuring that your website not only looks great but also delivers a
          seamless experience across all devices.
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
              Basic Website
            </h3>
            <p className="text-lg font-gothic text-light">
              $1,500
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Includes a responsive design, up to 5 pages, and basic SEO
              optimization.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              E-comm Website
            </h3>
            <p className="text-lg font-gothic text-light">
              $3,000
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Includes a fully functional e-commerce platform, product pages,
              and payment gateway integration.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Custom Web Apps
            </h3>
            <p className="text-lg font-gothic text-light">
              Starting at $5,000
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Tailored to your specific needs, with custom features and advanced
              functionality.
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
          Our web development process begins with a thorough understanding of
          your business goals and target audience. We collaborate closely with
          you to define the project scope, design wireframes, and create a
          prototype. Once the design is approved, our development team brings
          your vision to life, ensuring that every aspect of the site is
          optimized for performance and user experience. We also offer ongoing
          support and maintenance to keep your website running smoothly.
        </motion.p>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-6xl font-gothic-bold mb-4 text-dark-secondary dark:text-light">
          Ready to Get Started?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-gothic text-dark-primary dark:text-light">
          Contact us today to discuss your web development needs and get a
          personalized quote.
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

export default WebDevelopment
