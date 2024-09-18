import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HEMAutomotiveBackground from '../assets/images/DALLE2~4.WEB'
import HEMAutomotiveOverview1 from '../assets/images/1.png?react'

const hemAutomotiveProject = {
  title: 'HEM Automotive',
  tagline:
    'Driving Digital Growth with Branding, Digital Marketing, and Web Development',
  heroImage: HEMAutomotiveBackground, // Background image URL for the hero section
  overviewTitle: 'Project Overview',
  overview:
    'HEM Automotive sought to increase their digital reach and brand identity. Stormy Meadowlark provided a complete package of web development, branding, digital marketing campaigns, and API integration to help them achieve their goals.',
  image: HEMAutomotiveOverview1, // Optional image for the project
  servicesTitle: 'Services Provided',
  services: [
    {
      icon: '⚙️',
      title: 'Website Development',
      description:
        'Designed a user-friendly, scalable website tailored for future growth and API integration.',
    },
    {
      icon: '🎨',
      title: 'Logo Design & Brand Identity',
      description:
        'Created a modern logo and visual style that resonates with HEM’s brand values.',
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description:
        'Launched targeted Google Ads and Meta Ads campaigns to boost digital reach and service inquiries.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description:
        'Ongoing improvements to boost HEM’s visibility in search engines.',
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description:
        'In-progress: Developing a custom API that enables seamless communication between customers and their mechanics',
    },
  ],
  outcomeTitle: 'Project Outcomes',
  outcome:
    'As a result of our collaboration, HEM Automotive experienced significant digital growth, improved brand recognition, and increased customer inquiries. With ongoing SEO efforts and the upcoming API launch, we’re excited to see HEM’s continued success.',
  ctaTitle: "Let's Work Together",
  ctaDescription:
    'Reach out to Stormy Meadowlark today to discuss how we can help your business achieve digital growth through branding, web development, and targeted marketing.',
  ctaButton: 'Contact Us',
  ctaLink: '/contact',
}



const ProjectPageTemplate = ({ project }) => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Hero Section */}
    <motion.section
      className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage:  `url(${project.heroImage})` }}
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
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mx-auto mb-12"
        />
      )}
    </motion.section>

    {/* Services Provided */}
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
      <Link
        to={project.ctaLink}
        className="bg-white text-dark-primary font-bold py-3 px-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {project.ctaButton} &rarr;
      </Link>
    </motion.section>
  </div>
)

const HEMProjectPage = () => <ProjectPageTemplate project={hemAutomotiveProject} />

export default HEMProjectPage;