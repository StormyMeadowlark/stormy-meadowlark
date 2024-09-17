import { motion } from 'framer-motion'

const CustomSolutions = () => (
  <div className="bg-gradient-to-b from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Main Header */}
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-gothic-bold text-center mb-12 tracking-wide text-shadow">
        Custom Solutions
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        At Stormy Meadowlark, we craft tailored digital experiences that
        captivate, engage, and convert your audience into loyal customers. Let
        us help you bring your brand's vision to life with creative and
        customized solutions.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Service Cards */}
      {services.map((service) => (
        <motion.div
          key={service.title}
          className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 1 }}
          style={{ minHeight: '450px' }}
        >
          {/* Decorative Element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 transform rotate-45"></div>
          <h2 className="text-4xl font-gothic-bold mb-4">{service.title}</h2>
          <ul className="text-left list-disc list-inside mb-4 space-y-2">
            {service.details.map((detail) => (
              <li key={detail} className="flex items-start">
                <span className="ml-2">{detail}</span>
              </li>
            ))}
          </ul>
          <p className="italic text-gray-500 mt-4">{service.description}</p>
        </motion.div>
      ))}
    </motion.section>

    {/* Related Services and Call to Action */}
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
            <h4 className="text-3xl font-gothic-bold mb-2">{related.title}</h4>
            <p>{related.description}</p>
            <a href={related.link} className="underline hover:text-primary">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Call to Action */}
    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-light py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-6xl font-gothic-bold mb-4 text-shadow">
        Ready to Elevate Your Brand?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Let us create something extraordinary for your brand. Contact us today
        to discuss your needs and get a customized solution that works for you.
      </p>
      <a
        href="/contact"
        className="bg-light-secondary text-dark-primary py-4 px-8 rounded-full font-gothic-bold text-2xl hover:bg-dark-secondary hover:text-light transition duration-300 transform hover:scale-105"
      >
        Get in Touch
      </a>
    </motion.div>
  </div>
)

// Services Data
const services = [
  {
    title: 'Website Development',
    details: [
      'Dynamic 5-Page Website: Starting at $3,200',
      'Custom 10-Page Website: Starting at $5,200',
      'E-Commerce Storefront: Starting at $6,400',
    ],
    description:
      'Our websites are crafted to be visually stunning, lightning-fast, and fully optimized for SEO, ensuring maximum engagement and visibility. Each website includes responsive design, mobile optimization, basic on-page SEO, and integration with your social media and marketing tools. For e-commerce websites, we handle setup, secure checkout, and payment integration. Note: Complex customizations or advanced features may require additional time and collaboration to ensure we meet your specific needs.',
  },
  {
    title: 'Web Application Development',
    details: [
      'Interactive Web Applications: Starting at $6,400',
      'Advanced Custom Platforms: Starting at $10,400',
      'E-Commerce Applications: Starting at $12,800',
    ],
    description:
      'Custom-built web applications designed for your business, offering seamless user experiences, scalability, and innovative solutions. Our applications feature secure, user-friendly interfaces and integration with third-party services. Note: For highly complex custom platforms or specialized e-commerce applications, we will work closely with you to define the scope and ensure all features meet your needs. Additional time may be required for advanced functionalities or integrations.',
  },
  {
    title: 'API Development',
    details: [
      'Seamless API Integration: Starting at $3,200',
      'Custom API Solutions: Starting at $6,400',
      'API for E-Commerce Platforms: Starting at $4,800',
    ],
    description:
      'Our APIs are designed to connect and enhance your digital ecosystem, enabling seamless data flow and improving operational efficiency. We provide robust, secure API development tailored to your system architecture, with a focus on easy integration. For complex API needs, we collaborate with your technical team to ensure compatibility and functionality.',
  },
  {
    title: 'SEO Services',
    details: [
      'On-Page SEO Optimization: Starting at $1,600',
      'Comprehensive SEO Strategy: Starting at $3,600',
      'SEO for E-Commerce Sites: Starting at $4,800',
    ],
    description:
      'We use data-driven strategies to enhance your visibility, focusing on both on-page and off-page optimizations. Our services include a full site audit, content recommendations, and regular updates. For e-commerce sites, we emphasize product page optimization and reducing cart abandonment rates. Note: Advanced SEO tactics may involve collaboration to refine the strategy as your market evolves.',
  },
  {
    title: 'Branding and Strategy',
    details: [
      'Brand Style Guide Development: Starting at $2,400',
      'Comprehensive Brand Identity: Starting at $5,200',
      'Strategic Marketing Plans: Starting at $3,200',
    ],
    description:
      'We craft unique brand identities and strategies that connect with your audience and drive long-term success. Our services range from logo design to full marketing plans with actionable insights. For more complex brand needs, we collaborate closely to refine your strategy and ensure alignment with your goals.',
  },
  {
    title: 'Content Creation',
    details: [
      'Engaging Photography Sessions: Starting at $1,200',
      'Compelling Videography Packages: Starting at $2,400',
      'Custom Copywriting Services: Starting at $1,600',
      'Social Media Graphics Packages: Starting at $1,200',
    ],
    description:
      'Elevate your brand with stunning visuals and compelling messaging. Our content creation services cover everything from photography and video to custom copywriting and social media graphics. Note: As we expand into new areas like videography, there may be a learning curve, and we are committed to working with you to deliver the best results possible.',
  },
  {
    title: 'Branded Merchandise',
    details: [
      'Custom T-Shirts and Apparel: Starting at $15 each',
      'Sublimated Mugs and Tumblers: Starting at $18 each',
      'Unique Branded Hoodies and Jackets: Starting at $18 each',
    ],
    description:
      "Expand your brand's reach with custom merchandise. Our offerings include high-quality apparel and accessories perfect for promotional events or direct sales. We work with you to create unique designs that reflect your brand's identity. Note: We will collaborate to determine the best materials and methods to achieve your desired outcome.",
  },
]

// Related Services Data
const relatedServices = [
  {
    title: 'Digital Marketing Packages',
    description:
      'Ongoing strategies to grow your digital presence and engage your audience.',
    link: '/services/digital-marketing-campaigns',
  },
  {
    title: 'Initial Creation Bundles',
    description:
      'Start your digital journey with our all-inclusive creation bundles.',
    link: '/services/initial-creation-bundles',
  },
  {
    title: 'Monthly Packages',
    description:
      'Elevate your brand’s digital presence with our tailored ongoing monthly packages',
    link: '/services/ongoing-monthly-packages',
  },
]

export default CustomSolutions
