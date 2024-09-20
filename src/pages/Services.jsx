import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic pt-40">
    {/* Hero Section */}
    <motion.div
      className="container mx-auto py-20 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl mb-8">
        Welcome to Stormy Meadowlark
      </h1>
      <p className="text-xl max-w-3xl mb-16">
        Discover our services designed to empower your business with technology,
        creative strategies, and support.
      </p>
      {/* Add an image or video here for more visual impact */}
    </motion.div>

    {/* Service Highlights */}
    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {[
        {
          title: 'Initial Creation Bundles',
          description:
            'Start strong with comprehensive bundles that cover web development, branding, and digital marketing.',
          link: '/services/initial-creation-bundles',
          icon: '🛠️', // Replace with an actual icon/image
        },
        {
          title: 'Ongoing Monthly Packages',
          description:
            'Keep your business thriving with our ongoing support and maintenance packages.',
          link: '/services/ongoing-monthly-packages',
          icon: '📅', // Replace with an actual icon/image
        },
        {
          title: 'API Access Pricing',
          description:
            'Choose the API access plan that suits your business needs, from basic operations to enterprise solutions.',
          link: '/services/api-access',
          icon: '🔌', // Replace with an actual icon/image
        },
        {
          title: 'Digital Marketing Campaigns',
          description:
            'Boost your brand with targeted strategies across Google Ads, Meta Ads, and more.',
          link: '/services/digital-marketing-campaigns',
          icon: '📈', // Replace with an actual icon/image
        },
        {
          title: 'Custom Solutions',
          description:
            'Customize your experience with individual services tailored to your specific needs.',
          link: '/services/custom-solutions',
          icon: '🎨', // Replace with an actual icon/image
        },
        {
          title: 'Contact Us',
          description:
            "Have questions? We're here to help. Reach out to us today.",
          link: '/contact',
          icon: '📞', // Replace with an actual icon/image
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          {/* Service Icon */}
          <div className="text-5xl mb-4">{service.icon}</div>
          <h2 className="text-3xl font-gothic-bold mb-4">{service.title}</h2>
          <p className="text-lg mb-4">{service.description}</p>
          <Link
            to={service.link}
            className="text-light-accent dark:text-dark-accent font-bold"
          >
            Learn More &rarr;
          </Link>
        </motion.div>
      ))}
    </motion.section>

    {/* Client Testimonials Section */}
    <motion.section
      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-dark-accent dark:via-dark-primary dark:to-dark-secondary text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl  mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Example project card */}
          <motion.div
            className="p-8 bg-white text-dark-primary rounded-lg shadow-md"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
            }}
          >
            <h3 className="text-3xl font-gothic-bold mb-4">HEM Automotive</h3>
            <p className="text-lg mb-4">
              A comprehensive automotive repair and service website, designed
              with a focus on user experience, security, and scalability.
            </p>
            <Link
              to="/projects/hem-automotive"
              className="text-indigo-500 font-bold"
            >
              Learn More &rarr;
            </Link>
          </motion.div>
          <motion.div
            className="p-8 bg-white text-dark-primary rounded-lg shadow-md"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
            }}
          >
            <h3 className="text-3xl font-gothic-bold mb-4">API Gateway</h3>
            <p className="text-lg mb-4">
            Built to seamlessly connect and empower your digital solutions, our API gateway stands as the storm-tested core of innovation, ensuring your business flows smoothly in any weather.
            </p>
            <Link
              to="/projects/api-gateway"
              className="text-indigo-500 font-bold"
            >
              Learn More &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Contact CTA Section */}
    <motion.section
      className="container mx-auto py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-6xl mb-6">Let&apos;s Work Together</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Reach out to discuss how we can help you achieve your digital goals.
      </p>
      <Link
        to="/contact"
        className="bg-light-accent dark:bg-dark-secondary text-white font-bold py-3 px-6 rounded-full hover:bg-light-accent-hover dark:hover:bg-dark-accent"
      >
        Contact Us &rarr;
      </Link>
    </motion.section>
  </div>
)

export default Services
