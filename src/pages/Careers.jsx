import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Careers = () => {
  // Sample job openings data
  const jobOpenings = [
    {
      id: 1,
      title: 'Front-End Developer',
      location: 'Remote',
      description:
        'We are looking for a talented front-end developer to join our team. You will work closely with our design and backend teams to create responsive, visually appealing web applications.',
      url: '/careers/frontend-developer',
      applyUrl: '/resume-portal?position=frontend-developer',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      location: 'Remote',
      description:
        'Join our creative team as a UX/UI Designer to craft beautiful user experiences. You will collaborate with developers and stakeholders to design interfaces that are both functional and aesthetically pleasing.',
      url: '/careers/ux-ui-designer',
      applyUrl: '/resume-portal?position=ux-ui-designer',
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      location: 'Remote',
      description:
        'Help us grow our brand with innovative marketing strategies and campaigns. You will be responsible for managing social media, content creation, and performance analytics.',
      url: '/careers/marketing-specialist',
      applyUrl: '/resume-portal?position=marketing-specialist',
    },
    // Add more job openings as needed
  ]

  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent text-dark dark:text-light">
      <div className="container mx-auto">
        <motion.h1
          className="text-8xl font-gothic-bold text-center mb-12 text-indigo-900 dark:text-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Careers at Stormy Meadowlark
        </motion.h1>

        <motion.p
          className="text-xl max-w-3xl mx-auto text-center mb-16 font-gothic text-dark-primary dark:text-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          We are always on the lookout for talented individuals to join our
          growing team. Check out the job openings below and apply to become a
          part of the Stormy Meadowlark family.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          {jobOpenings.map((job) => (
            <Link key={job.id} to={job.url} className="block">
              <motion.div
                className="p-6 bg-light dark:bg-dark-secondary rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-gothic-bold mb-4 text-dark-primary dark:text-light">
                  {job.title}
                </h3>
                <p className="text-sm text-indigo-700 dark:text-gray-400 mb-2">
                  {job.location}
                </p>
                <p className="text-lg font-gothic text-dark-primary dark:text-light mb-4">
                  {job.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 dark:text-accent font-gothic-bold">
                    Learn More
                  </span>
                  <Link
                    to={job.applyUrl}
                    className="bg-green-600 dark:bg-accent text-light font-gothic-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 dark:hover:bg-accent-dark transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Careers
