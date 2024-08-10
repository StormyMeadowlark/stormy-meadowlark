
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const UxUiDesigner = () => (
  <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-dark dark:text-light">
    <div className="container mx-auto">
      <motion.h1
        className="text-5xl font-heading text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        UX/UI Designer
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        We are seeking a talented UX/UI Designer to craft engaging and intuitive
        digital experiences.
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-dark-primary p-8 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <div>
          <h2 className="text-3xl font-heading mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Design and implement user-centric digital experiences.</li>
            <li>Work closely with developers to bring designs to life.</li>
            <li>Conduct user research and evaluate user feedback.</li>
            <li>Create wireframes, prototypes, and high-fidelity designs.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-heading mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Proven experience as a UX/UI Designer.</li>
            <li>Strong portfolio showcasing design skills and process.</li>
            <li>
              Proficiency in design tools like Sketch, Figma, or Adobe XD.
            </li>
            <li>Understanding of responsive design principles.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-heading mb-4">How to Apply</h2>
          <p>
            If you are passionate about design and want to make an impact with
            your creativity, please submit your application through our{' '}
            <Link
              to="/resume-portal"
              className="text-indigo-500 dark:text-accent underline"
            >
              Resume Portal
            </Link>
            . We look forward to reviewing your work!
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-8">
          <Link
            to="/resume-portal"
            className="bg-indigo-600 dark:bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-accent-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
)

export default UxUiDesigner
