import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AboutImage from '../assets/images/AboutImage.jpg?react'
import OurStoryImage from '../assets/images/OurStoryImage.jpg?react'
import InnovationImage from '../assets/images/InnovationImage.jpg?react'
import IntegrityImage from '../assets/images/IntegrityImage.jpg?react'
import ClientCentricImage from '../assets/images/ClientCentricImage.jpg?react'
import HeadshotImage from '../assets/images/Ashlee-Headshot.png?react'



const About = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Introduction Section */}
    <motion.section
      className="w-full py-40 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h1 className="text-6xl md:text-8xl font-gothic-bold text-center mb-8">
            About Stormy Meadowlark
          </h1>
          <p className="text-lg max-w-lg mx-auto">
            At Stormy Meadowlark, we specialize in creating digital experiences
            that not only stand out but resonate deeply with your audience. Our
            mission is to empower small businesses with the digital tools and
            strategies they need to thrive, from bespoke web development to
            comprehensive digital marketing. We are your partners in navigating
            the complexities of the digital landscape with creativity,
            precision, and care.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={AboutImage}
            alt="About Stormy Meadowlark"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </motion.section>

    {/* Our Story Section */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4 order-last md:order-first">
          <img
            src={OurStoryImage}
            alt="Our Story"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-gothic-bold mb-4">Our Story</h2>
          <p className="text-lg max-w-lg mx-auto">
            Founded in 2023, Stormy Meadowlark was built on a passion for
            blending technology and creativity to help small business owners
            succeed in the digital age. Our name is inspired by the resilience
            and beauty found in nature after a storm—just as we aim to help your
            business emerge stronger and more vibrant from the challenges of
            today&apos;s fast-paced digital world.
          </p>
        </div>
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
        <h2 className="text-3xl font-gothic-bold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={InnovationImage}
              alt="Innovation"
              className="mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-gothic-bold mb-2">Innovation</h3>
            <p>
              We are dedicated to staying ahead of the curve, using the latest
              technologies and creative approaches to deliver cutting-edge
              solutions.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={IntegrityImage}
              alt="Integrity"
              className="mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-gothic-bold mb-2">Integrity</h3>
            <p>
              Our relationships are built on trust and transparency. We believe
              in delivering on our promises and maintaining the highest
              standards in everything we do.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={ClientCentricImage}
              alt="Client-Centric"
              className="mb-4 w-20 h-20"
            />
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
        <h2 className="text-3xl font-gothic-bold mb-8">Meet the Founder</h2>
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <img
            src={HeadshotImage}
            alt="Ashlee"
            className="w-40 h-40 rounded-full mb-4"
          />
          <h3 className="text-2xl font-gothic-bold">Ashlee</h3>
          <p className="text-lg mb-4">Founder & CEO</p>
          <p className="text-md max-w-xl mx-auto">
            As the founder of Stormy Meadowlark, I am passionate about blending
            technology and creativity to help small businesses succeed in the
            digital age. With a deep understanding of both the challenges and
            opportunities faced by entrepreneurs, I bring a personal touch to
            every project, ensuring tailored digital solutions that truly
            resonate.
          </p>
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
        <h2 className="text-3xl font-gothic-bold mb-8">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto"></div>
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
        <h2 className="text-3xl font-gothic-bold mb-8">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you&apos;re looking to build a cutting-edge website, create
          compelling content, or develop a robust digital marketing strategy,
          Stormy Meadowlark is here to help you succeed. Let&apos;s collaborate to
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
