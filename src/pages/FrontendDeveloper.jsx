 import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FrontendDeveloper = () => (
  <div className="min-h-screen py-40 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-dark dark:text-light">
    <div className="container mx-auto">
      <motion.h1
        className="text-7xl font-gothic-bold text-center mb-12 text-indigo-900 dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Front-End Developer
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl mx-auto text-center mb-12 font-gothic text-indigo-900 dark:text-light"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Join our team as a Front-End Developer and help us build beautiful,
        responsive websites and applications.
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto bg-light dark:bg-dark-secondary p-8 rounded-lg shadow-lg space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <div className="">
          <h2 className="text-4xl font-gothic-bold-italic mb-6 text-indigo-700 dark:text-light">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-4 font-gothic text-indigo-800 dark:text-gray-300">
            <li>
              Develop user-friendly web interfaces using modern front-end
              technologies.
            </li>
            <li>
              Collaborate with designers and back-end developers to implement
              features.
            </li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li>Optimize applications for maximum speed and scalability.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl font-gothic-bold-italic mb-6 text-indigo-700 dark:text-light">
            Requirements
          </h2>
          <ul className="list-disc list-inside space-y-4 font-gothic text-indigo-800 dark:text-gray-300">
            <li>Proven experience as a Front-End Developer.</li>
            <li>
              Strong knowledge of HTML, CSS, JavaScript, and related frameworks
              (e.g., React).
            </li>
            <li>Experience with responsive and adaptive design.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl font-gothic-bold-italic mb-6 text-indigo-700 dark:text-light">
            How to Apply
          </h2>
          <p className="text-lg font-gothic text-indigo-800 dark:text-gray-300">
            If you are passionate about front-end development and want to join
            our dynamic team, please submit your application through our{' '}
            <Link
              to="/careers/resume-portal"
              className="text-indigo-500 dark:text-accent underline"
            >
              Resume Portal
            </Link>
            . We look forward to learning more about you!
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-12">
          <Link
            to="/careers/resume-portal"
            className="bg-indigo-600 dark:bg-accent text-light font-gothic-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-accent-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
)

export default FrontendDeveloper
