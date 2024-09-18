import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SunsetImage from '../assets/images/AI-Generated-Sunset.webp'
import LogoImage from '../assets/images/GoldStormyMeadowlark.png?react'
import Image1 from '../assets/images/DALLE2~1.JPG'
import Image2 from '../assets/images/DALLE2~2.JPG'
import Image3 from '../assets/images/DALLE2~3.JPG'

const Home = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  return (
    <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text min-h-screen font-gothic">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${SunsetImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(40%)',
          }}
        />
        <motion.img
          src={LogoImage}
          alt="Stormy Meadowlark Logo"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-96 mb-6 pt-10 z-10"
        />
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white z-10"
        >
          Elevate Your Digital Presence
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl mt-4 text-white z-10 max-w-2xl mx-auto"
        >
          Digital solutions crafted for small businesses to thrive in the online
          world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mt-8 z-10"
        >
          <div className='pb-20'>
            <Link
              to="/contact"
              className="bg-light-accent dark:bg-dark-secondary text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.section
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="py-16 bg-white dark:bg-dark-secondary text-light-text dark:text-light"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            From comprehensive digital strategies to custom web solutions, we
            help you stand out in the crowded digital landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Items */}
            {[
              {
                title: 'Creation Bundles',
                desc: 'Start your journey with tailored branding, web design, and digital marketing.',
                link: '/services/initial-creation-bundles',
              },
              {
                title: 'Monthly Packages',
                desc: 'Continuous growth with our ongoing digital marketing and content management.',
                link: '/services/ongoing-monthly-packages',
              },
              {
                title: 'Custom Solutions',
                desc: 'Unique digital solutions to meet your business goals, from development to strategy.',
                link: '/services/custom-solutions',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-light-secondary dark:bg-dark-primary p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p>{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-light-link dark:text-accent mt-4 inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recent Work Section */}
      <motion.section
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="py-16 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-center"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Links */}
            {[
              {
                image: Image1,
                title: 'HEM Automotive',
                link: '/projects/hem-automotive',
              },
              {
                image: Image2,
                title: 'API Gateway',
                link: '/projects/api-gateway',
              },
              {
                image: Image3,
                title: 'Solar Athletics Rebrand',
                link: '/projects/solar-athletics',
              },
            ].map((project, index) => (
              <Link to={project.link} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-cover bg-center h-64 rounded-lg shadow-md"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <h3 className="text-white text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="bg-light-accent dark:bg-dark-secondary text-white font-bold py-3 px-6 rounded-full mt-12 transition-colors hover:bg-light-accent-hover"
          >
            View Full Portfolio
          </Link>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="py-16 bg-gradient-to-r from-light-accent to-light-secondary dark:from-dark-accent dark:to-dark-primary text-center"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to elevate your digital strategy? Contact us to get started!
          </p>
          <Link
            to="/contact"
            className="bg-light-accent dark:bg-dark-secondary text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
