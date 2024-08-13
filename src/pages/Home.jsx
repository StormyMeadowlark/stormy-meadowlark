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
          transform: 'scaleX(-1)'
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-gothic-bold mb-4">Web Development</h3>
            <p>
              We build responsive, visually stunning websites that perform
              seamlessly across all devices.
            </p>
            <Link
              to="services/web-development"
              className="text-light-link dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-gothic-bold mb-4">Content Creation</h3>
            <p>
              We create compelling content that resonates with your audience and
              drives engagement across platforms.
            </p>
            <Link
              to="services/content-creation"
              className="text-light-link dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-gothic-bold mb-4">
              Social Media Management
            </h3>
            <p>
              Our social media strategies build strong online communities and
              increase brand awareness.
            </p>
            <Link
              to="services/social-media-management"
              className="text-light-link dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Portfolio Section */}
    <motion.section
      className="py-24 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-light-text dark:text-light text-center font-gothic"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-gothic-bold mb-8">Our Work</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Take a look at some of the amazing projects we’ve worked on, from
          stunning websites to powerful APIs. We’re proud to help our clients
          stand out in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{ backgroundImage: "url('/path-to-portfolio-image1.jpg')" }}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{ backgroundImage: "url('/path-to-portfolio-image2.jpg')" }}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{ backgroundImage: "url('/path-to-portfolio-image3.jpg')" }}
          />
        </div>
        <Link
          to="/portfolio"
          className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-full mt-12 inline-block transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
        >
          View Full Portfolio
        </Link>
      </div>
    </motion.section>

    {/* Testimonials Section */}
    <motion.section
      className="py-24 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-light font-gothic"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-gothic-bold mb-8">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <p className="italic">
              "Stormy Meadowlark transformed our online presence with their
              creative and technical expertise."
            </p>
            <cite className="block mt-4">
              - Alex B., CEO of BrightPath Ventures
            </cite>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <p className="italic">
              "Their API development services have been invaluable to our
              business, providing reliability and ease of use."
            </p>
            <cite className="block mt-4">
              - Sarah L., CTO of InnovateX Solutions
            </cite>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <p className="italic">
              "Working with Stormy Meadowlark was a game-changer for our digital
              strategy."
            </p>
            <cite className="block mt-4">
              - Mark D., Founder of Peak Performance Gear
            </cite>
          </motion.div>
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
