import { motion } from 'framer-motion'

const Portfolio = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-cursive text-center mb-12 text-dark-primary dark:text-light"
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
            src="/path-to-hem-automotive-screenshot.png"
            alt="HEM Automotive Project"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-1/2">
            <p className="text-lg font-gothic text-dark-primary dark:text-light">
              HEM Automotive is a robust automotive repair and service platform
              designed to deliver an exceptional user experience. With a focus
              on advanced technology, this project integrates a secure backend
              API with a modern, responsive frontend. Features include
              comprehensive user management, real-time vehicle diagnostics, and
              seamless data updates, all crafted to provide a top-tier
              experience for both users and service providers.
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
            src="/path-to-stormy-meadowlark-screenshot.png"
            alt="Stormy Meadowlark Website"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-1/2">
            <p className="text-lg font-gothic text-dark-primary dark:text-light">
              Stormy Meadowlark is not just a brand, but a reflection of my
              journey as a developer and designer. This site showcases a
              collection of my work, from intricate web applications to powerful
              APIs, all designed to help businesses thrive in the digital
              landscape. The design embodies creativity and precision,
              delivering an experience that is both visually stunning and
              functionally seamless.
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
        <h2 className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light">
          Additional Projects
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-center mb-12 font-gothic text-dark-primary dark:text-light">
          Explore other projects where I've applied my expertise in web
          development, API integration, and digital design to create solutions
          that meet client needs and drive business success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/path-to-project1-screenshot.jpg')",
            }}
          />
          <div
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/path-to-project2-screenshot.jpg')",
            }}
          />
          <div
            className="bg-cover bg-center h-64 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/path-to-project3-screenshot.jpg')",
            }}
          />
          {/* Add more projects as needed */}
        </div>
      </motion.div>
    </div>
  </div>
)

export default Portfolio
