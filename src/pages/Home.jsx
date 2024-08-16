import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SunsetImage from '../assets/images/AI-Generated-Sunset.webp' // Ensure the path is correct
import LogoImage from '../assets/images/GoldStormyMeadowlark.png?react' // Ensure the path is correct

const Home = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text min-h-screen font-gothic">
    {/* Hero Section */}
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center bg-light-primary dark:bg-dark-primary text-light dark:text-light">
      {/* Blurred Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${SunsetImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', // Apply blur filter
          opacity: 0.7, // Reduce opacity for more emphasis on text
          transform: 'scaleX(-1)',
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Content Section */}
      <div className="z-20">
        {/* Logo */}
        <motion.img
          src={LogoImage}
          alt="Stormy Meadowlark Logo"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-72 h-72 mb-8 mx-auto mt-10"
        />

        {/* Hero Text */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-8xl font-cursive text-shadow-lg mx-auto"
        >
          Welcome to Stormy Meadowlark
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-2xl mt-4 text-shadow-lg mx-auto"
        >
          Tranquility Among the Storm
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-lg font-gothic-italic mt-8 max-w-xl text-shadow-lg mx-auto"
        >
          We help small business owners find peace & clarity through tailored
          digital strategies & creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="my-10"
        >
          <Link
            to="/contact"
            className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Services Section */}
    <motion.section
      className="py-24 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-light font-gothic"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-gothic-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Initial Creation Bundles */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Initial Creation Bundles
            </h3>
            <p>
              Get started with our comprehensive creation bundles designed to
              build your brand from the ground up, including web design,
              branding, and more.
            </p>
            <Link
              to="services/initial-creation-bundles"
              className="text-light-link dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Ongoing Monthly Packages */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Ongoing Monthly Packages
            </h3>
            <p>
              Maintain and grow your online presence with our monthly packages
              that cover digital marketing, content updates, and ongoing
              support.
            </p>
            <Link
              to="services/ongoing-monthly-packages"
              className="text-light-link dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Custom Solutions */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-gothic-bold mb-4">Custom Solutions</h3>
            <p>
              Tailor your digital strategy with our custom solutions, offering
              bespoke web development, branding, API creation, and more to meet
              your unique needs.
            </p>
            <Link
              to="services/custom-solutions"
              className="text-light-link dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>

    <motion.section
      className="py-24 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-light-text dark:text-light text-center font-gothic"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-gothic-bold mb-8">Our Work</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Take a look at some of the amazing projects we&apos;ve worked on, from
          stunning websites to powerful APIs. We&apos;re proud to help our clients
          stand out in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* HEM Automotive Project */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/path-to-hem-automotive-image.jpg')",
            }}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-xl font-gothic-bold">HEM Automotive</h3>
                <p className="mt-2">Website & API Development</p>
              </div>
            </div>
          </motion.div>

          {/* Stormy Meadowlark API Gateway */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{ backgroundImage: "url('/path-to-api-gateway-image.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-xl font-gothic-bold">API Gateway</h3>
                <p className="mt-2">Microservices Management</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Campaign for Solar Athletics */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url('/path-to-social-media-campaign-image.jpg')",
            }}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-xl font-gothic-bold">Solar Athletics</h3>
                <p className="mt-2">Brand Refresh</p>
              </div>
            </div>
          </motion.div>

          {/* E-Commerce Solution */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{ backgroundImage: "url('/path-to-ecommerce-image.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-xl font-gothic-bold">
                  E-Commerce Platform
                </h3>
                <p className="mt-2">Custom Development</p>
              </div>
            </div>
          </motion.div>

          {/* Custom CMS */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{ backgroundImage: "url('/path-to-cms-image.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-xl font-gothic-bold">Custom CMS</h3>
                <p className="mt-2">Web Application Development</p>
              </div>
            </div>
          </motion.div>

          {/* Digital Marketing Strategy */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/path-to-digital-marketing-image.jpg')",
            }}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-xl font-gothic-bold">Marketing Strategy</h3>
                <p className="mt-2">SEO & Google Ads</p>
              </div>
            </div>
          </motion.div>
        </div>
        <Link
          to="/portfolio"
          className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-full mt-12 inline-block transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
        >
          View Full Portfolio
        </Link>
      </div>
    </motion.section>

    <motion.section
      className="py-24 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-light font-gothic"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-gothic-bold mb-8">Technology & Tools</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          At Stormy Meadowlark, we utilize the latest technologies and tools to
          ensure our clients receive cutting-edge solutions tailored to their
          needs. Here’s a look at the technology stack we use to bring your
          digital projects to life.
        </p>
        <div className="flex flex-wrap justify-center space-x-8 space-y-8">
          {/* Add logos or icons for the technologies and tools you use */}

          {/* React */}
          <div className="flex flex-col items-center">
            <img src="/path-to-react-logo.png" alt="React" className="h-20" />
            <p className="mt-2 text-lg">React</p>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-nodejs-logo.png"
              alt="Node.js"
              className="h-20"
            />
            <p className="mt-2 text-lg">Node.js</p>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-mongodb-logo.png"
              alt="MongoDB"
              className="h-20"
            />
            <p className="mt-2 text-lg">MongoDB</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-tailwind-logo.png"
              alt="Tailwind CSS"
              className="h-20"
            />
            <p className="mt-2 text-lg">Tailwind CSS</p>
          </div>

          {/* Firebase */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-firebase-logo.png"
              alt="Firebase"
              className="h-20"
            />
            <p className="mt-2 text-lg">Firebase</p>
          </div>

          {/* Heroku */}
          <div className="flex flex-col items-center">
            <img src="/path-to-heroku-logo.png" alt="Heroku" className="h-20" />
            <p className="mt-2 text-lg">Heroku</p>
          </div>

          {/* NodeMailer */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-nodemailer-logo.png"
              alt="NodeMailer"
              className="h-20"
            />
            <p className="mt-2 text-lg">NodeMailer</p>
          </div>

          {/* SendGrid */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-sendgrid-logo.png"
              alt="SendGrid"
              className="h-20"
            />
            <p className="mt-2 text-lg">SendGrid</p>
          </div>

          {/* DigitalOcean Spaces */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-digitalocean-logo.png"
              alt="DigitalOcean Spaces"
              className="h-20"
            />
            <p className="mt-2 text-lg">DigitalOcean Spaces</p>
          </div>

          {/* Jest (For Testing) */}
          <div className="flex flex-col items-center">
            <img src="/path-to-jest-logo.png" alt="Jest" className="h-20" />
            <p className="mt-2 text-lg">Jest</p>
          </div>
        </div>
      </div>
    </motion.section>
    {/* Call to Action Section */}
    <motion.section
      className="py-24 bg-gradient-to-r from-light-accent to-light-secondary dark:from-dark-accent dark:to-dark-primary text-light-text dark:text-light text-center font-gothic-bold"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading mb-8">
          Let’s Create Something Amazing Together
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Ready to start your next project? Whether you need a new website, a
          powerful API, or expert social media management, we’re here to help.
        </p>
        <Link
          to="/contact"
          className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
        >
          Get in Touch
        </Link>
      </div>
    </motion.section>
  </div>
)

export default Home
