import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SolarAthleticsBackground from '../assets/images/DALLE2~2.WEB' // Replace with actual image path
import SolarAthleticsLogo from '../assets/images/Different-Fonts-With-Logo.svg' // Replace with actual image path

const solarAthleticsProject = {
  title: 'Solar Athletics',
  tagline: 'Elevating Brand Identity with Updated Logos and Typography.',
  heroImage: SolarAthleticsBackground, // Background image URL for the hero section
  overviewTitle: 'Project Overview',
  overview:
    'Solar Athletics offers a diverse range of classes, including cheer, gymnastics, tumbling and trampoline, ninja warrior, and adult gymnastics. With a bold space-themed brand and the tagline "Gravity has no limits," Solar Athletics embodies energy, strength, and the drive to push boundaries. Stormy Meadowlark worked closely with Solar Athletics to refresh their visual identity, updating their logos and selecting a modern font that reflects their cosmic vision. This sleek and dynamic branding resonates with their audience, enhancing their visibility and reinforcing their position as leaders in the athletic space.',
  image: SolarAthleticsLogo, // Optional image for the project
  servicesTitle: 'Services Provided',
  services: [
    {
      icon: '🎨',
      title: 'Logo Design',
      description:
        'Updated Solar Athletics’ logos to reflect a modern, athletic brand that connects with their diverse offerings including cheer, gymnastics, and ninja warrior classes.',
    },
    {
      icon: '🔤',
      title: 'Typography Selection',
      description:
        'Selected a new font that enhances the brand’s aesthetic and consistency across all platforms, helping Solar Athletics stand out in the athletic community.',
    },
  ],
  outcomeTitle: 'Project Outcomes',
  outcome:
    'With a refreshed logo and updated typography, Solar Athletics now has a cohesive brand identity that better reflects their services. The updated visuals project a bold and modern image, helping them attract more students for their variety of athletic classes.',
  ctaTitle: 'Interested in a Brand Refresh?',
  ctaDescription:
    'Contact Stormy Meadowlark today to learn how we can help you revitalize your brand with modern design and thoughtful typography.',
  ctaButton: 'Contact Us',
  ctaLink: '/contact',
}

const ProjectPageTemplate = ({ project }) => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Hero Section */}
    <motion.section
      className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
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
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mx-auto mb-12 max-w-80"
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

const SolarAthleticsProjectPage = () => (
  <ProjectPageTemplate project={solarAthleticsProject} />
)

export default SolarAthleticsProjectPage
