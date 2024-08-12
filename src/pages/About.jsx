import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Introduction Section */}
    <motion.section
      className="w-full py-40 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <div className="container mx-auto">
        <h1 className="text-8xl font-cursive text-center mb-12">
          About Stormy Meadowlark
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          At Stormy Meadowlark, we specialize in creating digital experiences
          that not only stand out but resonate deeply with your audience. Our
          mission is to empower small businesses with the digital tools and
          strategies they need to thrive, from bespoke web development to
          comprehensive digital marketing. We are your partners in navigating
          the complexities of the digital landscape with creativity, precision,
          and care.
        </p>
      </div>
    </motion.section>

    {/* Our Story Section */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">Our Story</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Founded in 2023, Stormy Meadowlark was built on a passion for blending
          technology and creativity to help small business owners succeed in the
          digital age. Our name is inspired by the resilience and beauty found
          in nature after a storm—just as we aim to help your business emerge
          stronger and more vibrant from the challenges of today’s fast-paced
          digital world.
        </p>
      </div>
    </motion.section>

    {/* Core Values Section */}
    <motion.section
      className="w-full py-24 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-gothic-bold mb-2">Innovation</h3>
            <p>
              We are dedicated to staying ahead of the curve, using the latest
              technologies and creative approaches to deliver cutting-edge
              solutions.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-gothic-bold mb-2">Integrity</h3>
            <p>
              Our relationships are built on trust and transparency. We believe
              in delivering on our promises and maintaining the highest
              standards in everything we do.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-gothic-bold mb-2">Client-Centric</h3>
            <p>
              Your business is our priority. We work closely with you to
              understand your unique needs and tailor our services to help you
              achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Meet the Team Section */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <img
              src="/path-to-team-member-photo1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-gothic-bold">Ashlee</h3>
            <p className="text-sm">Founder & CEO</p>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Testimonials Section */}
    <motion.section
      className="w-full py-24 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md">
            <p className="italic">
              "Stormy Meadowlark has been a game-changer for our online
              presence. Their expertise in both creative design and web
              development has elevated our brand to new heights."
            </p>
            <cite className="block mt-4 text-right">
              - Alex B., CEO of BrightPath Ventures
            </cite>
          </div>
          <div className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md">
            <p className="italic">
              "Their holistic approach to digital marketing and technical
              support has made a significant impact on our business growth. We
              couldn't have asked for a better partner."
            </p>
            <cite className="block mt-4 text-right">
              - Sarah L., CTO of InnovateX Solutions
            </cite>
          </div>
          <div className="bg-light-tertiary dark:bg-dark-primary p-6 rounded-lg shadow-md">
            <p className="italic">
              "Working with Stormy Meadowlark has been a breath of fresh air.
              They truly understand our vision and have delivered outstanding
              results across all our digital platforms."
            </p>
            <cite className="block mt-4 text-right">
              - Mark D., Founder of Peak Performance Gear
            </cite>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Call to Action */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.4 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you're looking to build a cutting-edge website, create
          compelling content, or develop a robust digital marketing strategy,
          Stormy Meadowlark is here to help you succeed. Let's collaborate to
          create something extraordinary.
        </p>
        <Link
          to="/contact"
          className="bg-light-accent dark:bg-dark-accent text-white dark:text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark"
        >
          Get in Touch
        </Link>
      </div>
    </motion.section>
  </div>
)

export default About
