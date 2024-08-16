import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic pt-40">
    <motion.div
      className="container mx-auto py-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Welcome to Stormy Meadowlark
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Discover our range of services designed to empower your business with
        cutting-edge technology, creative strategies, and unwavering support.
        Explore our offerings below to find the perfect fit for your needs.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Initial Creation Bundles */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">
          Initial Creation Bundles
        </h2>
        <p className="text-lg mb-4">
          Start strong with our comprehensive bundles that cover everything from
          web development to branding and digital marketing.
        </p>
        <Link
          to="/services/initial-creation-bundles"
          className="text-light-accent dark:text-dark-accent font-bold"
        >
          Explore Bundles &rarr;
        </Link>
      </motion.div>

      {/* Ongoing Monthly Packages */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">
          Ongoing Monthly Packages
        </h2>
        <p className="text-lg mb-4">
          Keep your business thriving with our ongoing support and maintenance
          packages.
        </p>
        <Link
          to="/services/ongoing-monthly-packages"
          className="text-light-accent dark:text-dark-accent font-bold"
        >
          Explore Packages &rarr;
        </Link>
      </motion.div>

      {/* API Access Pricing */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">API Access Pricing</h2>
        <p className="text-lg mb-4">
          Choose the API access plan that suits your business needs, from basic
          operations to enterprise-level solutions.
        </p>
        <Link
          to="/services/api-access"
          className="text-light-accent dark:text-dark-accent font-bold"
        >
          Explore API Plans &rarr;
        </Link>
      </motion.div>

      {/* Digital Marketing Campaigns */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">
          Digital Marketing Campaigns
        </h2>
        <p className="text-lg mb-4">
          Boost your brand with targeted strategies across Google Ads, Meta Ads,
          and more.
        </p>
        <Link
          to="/services/digital-marketing-campaigns"
          className="text-light-accent dark:text-dark-accent font-bold"
        >
          Explore Digital Campaigns &rarr;
        </Link>
      </motion.div>

     {/* Custom Solutions */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">Custom Solutions</h2>
        <p className="text-lg mb-4">
          Customize your experience with individual services tailored to your
          specific needs.
        </p>
        <Link
          to="/services/custom-solutions"
          className="text-light-accent dark:text-dark-accent font-bold"
        >
          Explore Custom Solutions &rarr;
        </Link>
      </motion.div>


      {/* Contact Us */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          Have questions? We&apos;re here to help. Reach out to us today.
        </p>
        <Link
          to="/contact"
          className="text-light-accent dark:text-dark-accent font-bold"
        >
          Get in Touch &rarr;
        </Link>
      </motion.div>
    </motion.section>

    {/* Our Work Section with Full-Width Background */}
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-dark-accent dark:via-dark-primary dark:to-dark-secondary text-white">
      <motion.section
        className="container mx-auto py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-5xl font-cursive text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* HEM Project */}
          <motion.div
            className="p-8 bg-white text-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-gothic-bold mb-4">HEM Automotive</h3>
            <p className="text-lg mb-4">
              A comprehensive automotive repair and service platform, designed
              with a focus on user experience, security, and scalability.
            </p>
            <Link
              to="/projects/hem-automotive"
              className="text-indigo-500 font-bold"
            >
              Learn More &rarr;
            </Link>
          </motion.div>

          {/* API Gateway */}
          <motion.div
            className="p-8 bg-white text-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-gothic-bold mb-4">API Gateway</h3>
            <p className="text-lg mb-4">
              A robust and scalable API gateway designed to manage traffic,
              authentication, and data flow between services efficiently.
            </p>
            <Link
              to="/projects/api-gateway"
              className="text-indigo-500 font-bold"
            >
              Learn More &rarr;
            </Link>
          </motion.div>

          {/* Solar Athletics Rebrand */}
          <motion.div
            className="p-8 bg-white text-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-gothic-bold mb-4">
              Solar Athletics Rebrand
            </h3>
            <p className="text-lg mb-4">
              Assisted Solar Athletics in their rebrand, focusing on enhancing
              their digital presence and brand identity.
            </p>
            <Link
              to="/projects/solar-athletics-rebrand"
              className="text-indigo-500 font-bold"
            >
              Learn More &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  </div>
)

export default Services
