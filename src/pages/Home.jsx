import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LogoImage from '../assets/images/GoldStormyMeadowlark.png?react'
import CarImage1 from '../assets/images/DALLE2~1.JPG'
import CarImage2 from '../assets/images/DALLE2~2.JPG'
import CarImage3 from '../assets/images/DALLE2~3.JPG'

const Home = () => {
  return (
    <div className="main-wrapper min-h-screen bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-text font-serif relative overflow-hidden">
      
      {/* Hero Section with Cinematic Reveal */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-light-primary via-light-accent to-light-secondary dark:from-black dark:via-dark-primary dark:to-gray-900 text-center">
        <motion.img
          src={LogoImage}
          alt="Stormy Meadowlark Logo"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-48 mx-auto mb-12 relative z-20"
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
          className="text-7xl font-extrabold text-dark-text dark:text-white tracking-wide z-20"
        >
          Elevating Automotive Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="text-2xl mt-6 max-w-2xl mx-auto relative z-20 text-dark-text dark:text-light-text"
        >
          Stormy Meadowlark offers tailored, luxury digital solutions for automotive businesses ready to stand above the rest.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 z-20"
        >
          <Link
            to="/contact"
            className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover transition-all duration-300"
           
          >
            Begin Your Journey
          </Link>
        </motion.div>

        {/* Cinematic Background Reveal */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ backgroundImage: `url(${CarImage1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60 z-10"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 8 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Scroll-Based Service Reveals */}
      <section className="py-24 bg-light-primary dark:bg-black text-dark-primary dark:text-white text-center relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-16 tracking-wide"
        >
          The Future of Automotive Digital Solutions
        </motion.h2>

        <div className="flex flex-wrap">
          {/* Left Text with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center p-8"
            style={{ transform: 'translateY(30px)' }}
          >
            <div>
              <h3 className="text-4xl font-bold mb-4">Custom Development</h3>
              <p className="text-lg mb-6 text-dark-primary dark:text-light-text">
                Exclusive web platforms, APIs, and more, meticulously designed for automotive success.
              </p>
              <Link to="/services/custom-development" className="text-accent dark:text-dark-accent underline">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Image with 3D Hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative overflow-hidden"
          >
            <motion.img
              src={CarImage2}
              alt="Custom Development"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Reverse Layout */}
        <div className="flex flex-wrap mt-16">
          {/* Left Image with Parallax Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative overflow-hidden"
          >
            <motion.img
              src={CarImage3}
              alt="Digital Marketing"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>

          {/* Right Text Block with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center p-8"
            style={{ transform: 'translateY(30px)' }}
          >
            <div>
              <h3 className="text-4xl font-bold mb-4">Targeted Digital Marketing</h3>
              <p className="text-lg mb-6 text-dark-primary dark:text-light-text">
                Elevate your brand with tailored, data-driven campaigns that put you ahead in the market.
              </p>
              <Link to="/services/digital-marketing" className="text-accent dark:text-dark-accent underline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive API Integration Section */}
      <section className="relative h-screen bg-gray-900 dark:bg-light-primary text-white dark:text-dark-primary text-center flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.img
            src={CarImage2}
            alt="API Integration"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-6xl font-extrabold mb-8">API Integrations</h2>
          <p className="text-2xl max-w-2xl mx-auto mb-6">
            Enhance your automotive platform with seamless, real-time API solutions for superior efficiency and automation.
          </p>
          <Link to="/services/api-integrations" className="text-accent hover:text-light-hover  dark:text-dark-accent dark:hover:text-cta-hover">
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Portfolio with Cinematic Reveal */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-light-primary dark:via-light-accent dark:to-light-secondary text-center">
        <h2 className="text-5xl font-extrabold text-white dark:text-dark-primary mb-16 tracking-wide">
          Our Craftsmanship
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={CarImage1}
              alt="Project 1"
              className="w-full h-64 object-cover transform transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              HEM Automotive
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={CarImage2}
              alt="Project 2"
              className="w-full h-64 object-cover transform transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              API Gateway
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={CarImage3}
              alt="Project 3"
              className="w-full h-64 object-cover transform transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              Solar Athletics Rebrand
            </div>
          </motion.div>
        </div>
        <Link
          to="/portfolio"
          className="mt-12 px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
        >
          Explore Our Portfolio
        </Link>
      </section>

      {/* Invitation with Elegance */}
      <section className="py-24 bg-black dark:bg-light-primary text-center text-white dark:text-dark-primary">
        <h2 className="text-5xl font-extrabold mb-8">Tailored Luxury for Visionaries</h2>
        <p className="text-xl max-w-3xl mx-auto mb-12">
          Join us on a journey where your digital presence is crafted to perfection, exclusively for those who demand the best.
        </p>
        <Link
          to="/contact"
          className="bg-accent dark:bg-dark-accent hover:bg-light-hover dark:hover:bg-cta-hover text-light-text dark:text-dark-text font-bold py-4 px-8 text-xl rounded-full hover:bg-accent-hover dark:hover:bg-dark-accent-hover"
        >
          Request a Consultation
        </Link>
      </section>
    </div>
  )
}

export default Home
