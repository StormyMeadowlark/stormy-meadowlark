
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text">
    {/* Hero Section */}
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-r from-primary to-secondary dark:from-black dark:to-dark-primary flex flex-col items-center justify-center text-center text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-dramatic-cloudscape.jpg')" }}
      />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-6xl font-heading z-10"
      >
        Welcome to Stormy Meadowlark
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-2xl mt-4 z-10"
      >
        Tranquility Among the Storm
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg font-body italic mt-8 z-10"
      >
        We help you navigate the digital storm with solutions that make your
        business smoother and more successful.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="z-10 mt-10"
      >
        <Link
          to="/contact"
          className="bg-white dark:bg-dark-primary text-dark dark:text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-accent dark:hover:bg-dark-accent"
        >
          Get Started
        </Link>
      </motion.div>
    </div>

    {/* Services Section */}
    <section className="py-20 bg-white dark:bg-dark-secondary text-dark dark:text-dark-text">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-heading mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-heading mb-4">Web Development</h3>
            <p>
              We build responsive, visually stunning websites that perform
              seamlessly across all devices.
            </p>
            <Link
              to="/web-development"
              className="text-primary dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-heading mb-4">Content Creation</h3>
            <p>
              We create compelling content that resonates with your audience and
              drives engagement across platforms.
            </p>
            <Link
              to="/content-creation"
              className="text-primary dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-light dark:bg-dark-primary p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-heading mb-4">
              Social Media Management
            </h3>
            <p>
              Our social media strategies build strong online communities and
              increase brand awareness.
            </p>
            <Link
              to="/social-media-management"
              className="text-primary dark:text-accent mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading mb-8">Our Work</h2>
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
          {/* Add more portfolio items as needed */}
        </div>
        <Link
          to="/portfolio"
          className="bg-white dark:bg-dark-primary text-dark dark:text-light font-bold py-3 px-6 rounded-full mt-12 inline-block transition-colors hover:bg-accent dark:hover:bg-dark-accent"
        >
          View Full Portfolio
        </Link>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-light dark:bg-dark-secondary text-dark dark:text-dark-text">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-heading mb-8">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-dark-primary p-6 rounded-lg shadow-md"
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
            className="bg-white dark:bg-dark-primary p-6 rounded-lg shadow-md"
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
            className="bg-white dark:bg-dark-primary p-6 rounded-lg shadow-md"
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
    </section>

    {/* Call to Action Section */}
    <section className="py-20 bg-gradient-to-r from-accent to-secondary dark:from-dark-accent dark:to-dark-primary text-white text-center">
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
          className="bg-white dark:bg-dark-primary text-dark dark:text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-accent dark:hover:bg-dark-accent"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </div>
)

export default Home
