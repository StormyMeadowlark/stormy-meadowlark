import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic mt-40">
    <motion.div
      className="container mx-auto py-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Services & Projects
      </h1>
    </motion.div>

    {/* Services Section */}
    <motion.section
      className="w-full py-24 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">Web Development</h3>
            <p>
              We build responsive, visually stunning websites that perform
              seamlessly across all devices.
            </p>
            <Link
              to="/services/web-development"
              className="text-light-accent dark:text-dark-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Content Creation */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">Content Creation</h3>
            <p>
              We create compelling content that resonates with your audience and
              drives engagement across platforms.
            </p>
            <Link
              to="/services/content-creation"
              className="text-light-accent dark:text-dark-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Social Media Management */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Social Media Management
            </h3>
            <p>
              Our social media strategies build strong online communities and
              increase brand awareness.
            </p>
            <Link
              to="/services/social-media-management"
              className="text-light-accent dark:text-dark-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* API Development */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">API Development</h3>
            <p>
              We develop scalable and secure APIs that enable seamless
              communication between your applications.
            </p>
            <Link
              to="/services/api-development"
              className="text-light-accent dark:text-dark-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Consulting & Strategy */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Consulting & Strategy
            </h3>
            <p>
              We provide strategic insights and actionable plans to help you
              achieve your business goals.
            </p>
            <Link
              to="/services/consulting-strategy"
              className="text-light-accent dark:text-dark-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Google Ads Management */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Google Ads Management
            </h3>
            <p>
              Our Google Ads management services drive targeted traffic to your
              website and increase sales.
            </p>
            <Link
              to="/services/google-ads-management"
              className="text-light-accent dark:text-dark-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Portfolio Section */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* HEM Automotive Project */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">HEM Automotive</h3>
            <p className="text-lg">
              HEM Automotive is a comprehensive automotive repair and service
              platform, designed with a focus on user experience, security, and
              scalability.
            </p>
            <p className="mt-4">
              <a
                href="https://hemautomotive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-accent dark:text-dark-accent hover:underline"
              >
                Visit HEM Automotive
              </a>
            </p>
          </motion.div>

          {/* Stormy Meadowlark Project */}
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Stormy Meadowlark
            </h3>
            <p className="text-lg">
              Stormy Meadowlark is my personal brand and portfolio site,
              showcasing the various web and API development projects I've
              completed.
            </p>
            <p className="mt-4">
              <a
                href="https://stormymeadowlark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-accent dark:text-dark-accent hover:underline"
              >
                Visit Stormy Meadowlark
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  </div>
)

export default Services
