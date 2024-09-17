import { motion } from 'framer-motion'

const OngoingPackages = () => {
  const relatedServices = [
    {
      title: 'Digital Marketing Packages',
      description:
        'Ongoing strategies to grow your digital presence and engage your audience.',
      link: '/services/digital-marketing-campaigns',
    },
    {
      title: 'Custom Solutions',
      description:
        'Bring your vision to life with our bespoke solutions, tailored precisely to your needs.',
      link: '/services/custom-solutions',
    },
    {
      title: 'API Access',
      description:
        'Unlock the power of seamless integration with our versatile API access plans.',
      link: '/services/api-access',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-light-text dark:text-light min-h-screen font-gothic">
      {/* Main Header */}
      <motion.div
        className="container mx-auto py-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-8xl font-gothic-bold text-center mb-12 tracking-wide text-shadow">
          Ongoing Monthly Packages
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Continue growing your business with our tailored ongoing packages.
          Each package is designed to provide consistent support and management
          for your digital presence, ensuring your brand remains dynamic and
          competitive.
        </p>
      </motion.div>

      {/* Packages Section */}
      <motion.section
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        {/* Basic Ongoing Package */}
        <motion.div
          className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          style={{ minHeight: '550px' }}
        >
          {/* Decorative Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

          <h2 className="text-4xl font-gothic-bold mb-4">
            Basic Ongoing Package
          </h2>
          <p className="text-4xl font-bold mb-4 text-accent">$2,000/month</p>
          <ul className="text-left list-disc list-inside mb-4 space-y-2">
            <li>Regular Website Maintenance and Updates</li>
            <li>Ongoing Basic SEO: Monthly updates and quarterly audits</li>
            <li>Monthly Social Media Management (up to 8 posts)</li>
            <li>Monthly Analytics Reports with insights</li>
            <li>Basic Content Creation</li>
            <li>Monthly 30-Minute Consultation</li>
          </ul>
          <p className="italic text-gray-500 mt-4">
            Perfect for businesses looking to maintain their online presence
            with essential support.
          </p>
        </motion.div>

        {/* Standard Ongoing Package */}
        <motion.div
          className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          style={{ minHeight: '550px' }}
        >
          {/* Decorative Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

          <h2 className="text-4xl font-gothic-bold mb-4">
            Standard Ongoing Package
          </h2>
          <p className="text-4xl font-bold mb-4 text-accent">$3,500/month</p>
          <ul className="text-left list-disc list-inside mb-4 space-y-2">
            <li>Comprehensive Web Application and API Maintenance</li>
            <li>Strategic SEO Management: Monthly reviews and optimizations</li>
            <li>Active Social Media Management (up to 12 posts per month)</li>
            <li>Continuous Digital Marketing Campaigns</li>
            <li>Creative Monthly Content Production</li>
            <li>1-Hour Monthly Consultation</li>
          </ul>
          <p className="italic text-gray-500 mt-4">
            Ideal for growing businesses seeking more comprehensive digital
            management and strategic support.
          </p>
        </motion.div>

        {/* Premium Ongoing Package */}
        <motion.div
          className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          style={{ minHeight: '550px' }}
        >
          {/* Decorative Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

          <h2 className="text-4xl font-gothic-bold mb-4">
            Premium Ongoing Package
          </h2>
          <p className="text-4xl font-bold mb-4 text-accent">$4,500/month</p>
          <ul className="text-left list-disc list-inside mb-4 space-y-2">
            <li>Full Website, Web Application, and API Support</li>
            <li>Advanced SEO Management: Ongoing optimizations and audits</li>
            <li>Comprehensive Social Media and Digital Marketing Management</li>
            <li>
              Extensive Content Creation: Custom graphics, photography, and
              copywriting
            </li>
            <li>1.5-Hour Monthly Strategy Sessions</li>
            <li>Detailed Monthly Analytics Reports</li>
          </ul>
          <p className="italic text-gray-500 mt-4">
            Best for established businesses needing full-scale digital
            management and in-depth support.
          </p>
        </motion.div>
      </motion.section>

      {/* Related Services Section */}
      <motion.div
        className="container mx-auto py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <h3 className="text-5xl font-gothic-bold text-center mb-8 text-shadow">
          You May Also Like
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((related) => (
            <motion.div
              key={related.title}
              className="p-6 bg-light-accent dark:bg-dark-accent text-dark-primary dark:text-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl font-gothic-bold mb-2">
                {related.title}
              </h4>
              <p>{related.description}</p>
              <a href={related.link} className="underline hover:text-primary">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-primary dark:bg-dark-primary text-light-text dark:text-light py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-gothic-bold mb-4">
            Ready to Take Your Digital Presence to the Next Level?
          </h3>
          <p className="text-xl mb-8">
            Contact us today to discuss how our ongoing packages can help you
            maintain and enhance your online presence.
          </p>
          <a
            href="/contact"
            className="bg-accent text-dark-primary py-3 px-6 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default OngoingPackages
