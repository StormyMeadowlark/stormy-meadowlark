import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SkynetrixBackground from '../assets/images/skynetrix.webp'

const skynetrixProject = {
  title: 'Skynetrix API Gateway',
  tagline: 'A Unified Platform for Content and Communication Management.',
  heroImage: SkynetrixBackground, // Background image URL for the hero section
  overviewTitle: 'Project Overview',
  overview:
    'Skynetrix is an API gateway that is in its early stages of development. Currently, it offers core features like blog management and newsletter management, providing a foundation for future growth. The goal of Skynetrix is to empower businesses with simple yet powerful tools for content management and communication.',
  servicesTitle: 'Current Features',
  services: [
    {
      icon: '📝',
      title: 'Blog Management',
      description:
        'Enables businesses to manage their blogs with ease, offering features for creating, updating, and organizing blog posts.',
    },
    {
      icon: '📧',
      title: 'Newsletter Management',
      description:
        'Allows users to create and manage newsletters, enabling businesses to maintain communication with their audience.',
    },
  ],
  upcomingFeaturesTitle: 'Upcoming Features (In Development)',
  upcomingFeatures: [
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description:
        'Future updates will include analytics to track blog and newsletter performance, helping businesses optimize their content strategy.',
    },
    {
      icon: '📅',
      title: 'Complex Booking System',
      description:
        'A comprehensive booking system is planned to allow users to schedule appointments or manage bookings directly from the platform.',
    },
    {
      icon: '🔗',
      title: 'Third-Party API Integration',
      description:
        'Integration with third-party APIs will soon allow businesses to connect services such as CRM systems and payment gateways.',
    },
  ],
  outcomeTitle: 'Current Development Progress',
  outcome:
    'Skynetrix is in its early stages, focusing on delivering basic content management features. The next phase will expand its capabilities with enhanced analytics and integrations, making it a comprehensive solution for businesses looking to manage their digital presence.',
  ctaTitle: 'Want to Learn More?',
  ctaDescription:
    'Visit our GitHub repository to see the code and follow the development of Skynetrix, or reach out to us to see how you can leverage its current features.',
  ctaButton: 'Visit GitHub',
  ctaLink: 'https://github.com/StormyMeadowlark/Skynetrix',
}

const ProjectPageTemplate = ({ project }) => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Hero Section */}
    <motion.section
      className="relative h-[75vh] flex items-center justify-center bg-top"
      style={{ backgroundImage: `url(${project.heroImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="bg-black bg-opacity-75 p-8 text-center rounded-lg">
        <h1 className="text-6xl md:text-8xl text-white mb-4">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300">{project.tagline}</p>
      </div>
    </motion.section>

    {/* Project Overview */}
    <motion.section
      className="py-20 px-8 md:px-32 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
    >
      <h2 className="text-4xl md:text-5xl font-gothic-bold mb-8">
        {project.overviewTitle}
      </h2>
      <p className="text-lg md:text-xl mb-16 max-w-5xl mx-auto">
        {project.overview}
      </p>
    </motion.section>

    {/* Current Features */}
    <motion.section
      className="bg-light-secondary dark:bg-dark-secondary py-20 px-8 md:px-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-gothic-bold text-center mb-8">
        {project.servicesTitle}
      </h2>
      <div className="text-lg md:text-xl space-y-8 max-w-4xl mx-auto">
        {project.services.map((service, index) => (
          <p key={index}>
            {service.icon} <strong>{service.title}:</strong>{' '}
            {service.description}
          </p>
        ))}
      </div>
    </motion.section>

    {/* Upcoming Features */}
    <motion.section
      className="py-20 px-8 md:px-32 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-gothic-bold mb-8">
        {project.upcomingFeaturesTitle}
      </h2>
      <div className="text-lg md:text-xl space-y-8 max-w-4xl mx-auto">
        {project.upcomingFeatures.map((feature, index) => (
          <p key={index}>
            {feature.icon} <strong>{feature.title}:</strong>{' '}
            {feature.description}
          </p>
        ))}
      </div>
    </motion.section>

    {/* Project Outcomes */}
    <motion.section
      className="py-20 px-8 md:px-32 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-gothic-bold mb-8">
        {project.outcomeTitle}
      </h2>
      <p className="text-lg md:text-xl mb-16 max-w-5xl mx-auto">
        {project.outcome}
      </p>
    </motion.section>

    {/* Call to Action */}
    <motion.section
      className="bg-light-accent dark:bg-dark-secondary text-white py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-5xl mb-8">{project.ctaTitle}</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">{project.ctaDescription}</p>
      <a
        href={project.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-dark-primary font-bold py-3 px-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {project.ctaButton} &rarr;
      </a>
    </motion.section>
  </div>
)

const SkynetrixProjectPage = () => (
  <ProjectPageTemplate project={skynetrixProject} />
)

export default SkynetrixProjectPage
