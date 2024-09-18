import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HEMAutomotiveOverview1 from '../assets/images/1.png?react'
import StormyMeadowlark from '../assets/images/StormyMeadowlark.webp?react'
import SolarAthleticsLogo from '../assets/images/Different-Fonts-With-Logo.svg?react'

const Portfolio = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Portfolio
      </motion.h1>

      {/* HEM Automotive Project */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light">
          HEM Automotive
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={HEMAutomotiveOverview1}
            alt="HEM Automotive Project"
            className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-1/2">
            <p className="text-lg font-gothic text-dark-primary dark:text-light">
              HEM Automotive is a comprehensive automotive service platform,
              designed to enhance digital reach and brand identity. This project
              integrates a modern, responsive website with cohesive branding and
              targeted digital marketing campaigns. With ongoing efforts toward
              API integration, the platform is set to deliver seamless
              communication between customers and mechanics, ensuring a superior
              user experience.
            </p>

            <p className="mt-4">
              <Link
                to="/projects/hem-automotive"
                className="text-accent dark:text-dark-accent hover:underline"
              >
                Learn more about the HEM Automotive project
              </Link>
            </p>
            <p className="mt-4">
              <a
                href="https://hemautomotive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent dark:text-dark-accent hover:underline"
              >
                Visit HEM Automotive
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stormy Meadowlark Project */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light">
          Stormy Meadowlark
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={StormyMeadowlark}
            alt="Stormy Meadowlark Website"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-1/2">
            <p className="text-lg font-gothic text-dark-primary dark:text-light">
              Stormy Meadowlark is more than a brand—it&apos;s a reflection of
              my journey as a developer and designer. This site brings together
              a collection of projects that blend creativity with functionality,
              from intuitive web applications to powerful APIs. Every design and
              solution is crafted to empower businesses in the digital world,
              delivering an experience that&apos;s visually captivating and
              effortlessly seamless.
            </p>
            <p className="mt-4">
              <Link
                to="/projects/stormy-meadowlark"
                className="text-accent dark:text-dark-accent hover:underline"
              >
                Learn more about the Stormy Meadowlark project
              </Link>
            </p>
            <p className="mt-4">
              <a
                href="https://stormymeadowlark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent dark:text-dark-accent hover:underline"
              >
                Visit Stormy Meadowlark
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Additional Projects */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light text-center">
          Additional Projects
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-center mb-12 font-gothic text-dark-primary dark:text-light">
          Explore other projects where I&apos;ve applied my expertise in web
          development, API integration, and digital design to create solutions
          that meet client needs and drive business success.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solar Athletics Project */}
          <div className="relative h-64 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-dark-secondary hover:scale-105 transform transition-transform duration-300">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url(${SolarAthleticsLogo})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <Link
                  to="/projects/solar-athletics"
                  className="text-white text-lg font-bold hover:text-accent"
                >
                  Learn more about the Solar Athletics project
                </Link>
                <p className="mt-2">
                  <a
                    href="https://gosolarathletics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white dark:text-dark-accent hover:text-accent"
                  >
                    Visit Solar Athletics
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Another Project */}
          <div className="relative h-64 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-dark-secondary hover:scale-105 transform transition-transform duration-300">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url('/path-to-project2-screenshot.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <Link
                  to="/projects/project2"
                  className="text-white text-lg font-bold hover:underline"
                >
                  Learn more about Project 2
                </Link>
              </div>
            </div>
          </div>

          {/* Another Project */}
          <div className="relative h-64 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-dark-secondary hover:scale-105 transform transition-transform duration-300">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url('/path-to-project3-screenshot.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <Link
                  to="/projects/project3"
                  className="text-white text-lg font-bold hover:underline"
                >
                  Learn more about Project 3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
)

export default Portfolio
