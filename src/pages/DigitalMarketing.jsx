import { motion } from 'framer-motion'

const relatedServices = [
  {
    title: 'Monthly Packages',
    description:
      'Elevate your brand’s digital presence with our tailored ongoing monthly packages',
    link: '/services/ongoing-monthly-packages',
  },
  {
    title: 'Initial Creation Bundles',
    description:
      'Start your digital journey with our all-inclusive creation bundles.',
    link: '/services/initial-creation-bundles',
  },
  {
    title: 'Custom Solutions',
    description:
      'Explore our range of custom digital solutions tailored to your specific needs.',
    link: '/services/custom-solutions',
  },
]

const DigitalMarketing = () => (
  <div className="bg-gradient-to-b from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Main Header */}
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-gothic-bold text-center mb-12 tracking-wide text-shadow">
        Digital Marketing Packages
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        Elevate your brand with our tailored digital marketing packages designed
        to grow your online presence and connect with your audience.
      </p>
    </motion.div>

    {/* Packages Section */}
    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Basic Digital Marketing Package */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">
          Basic Digital Marketing Package
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">$1,200/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Management of 2 platforms (e.g., Facebook and Instagram)</li>
          <li>12 engaging posts per month to boost visibility</li>
          <li>Basic community engagement to foster interaction</li>
          <li>Monthly analytics report to track growth</li>
          <li>Custom graphics and captions tailored to your brand</li>
          <li>Initial digital marketing strategy consultation</li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Ideal for businesses looking to build their online presence with
          foundational marketing support.
        </p>
      </motion.div>

      {/* Standard Digital Marketing Package */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">
          Standard Digital Marketing Package
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">$2,500/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>
            Management of 4 platforms (e.g., Facebook, Instagram, LinkedIn,
            Twitter)
          </li>
          <li>20 high-impact posts per month to drive engagement</li>
          <li>
            Moderate community management (responding to comments, messages, and
            reviews)
          </li>
          <li>
            Comprehensive monthly analytics report with actionable insights
          </li>
          <li>
            Creative content production (graphics, captions, and short videos)
          </li>
          <li>Ongoing digital marketing strategy development</li>
          <li>Basic ad management and optimization</li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Perfect for businesses looking to enhance their digital presence and
          engage more deeply with their audience.
        </p>
      </motion.div>

      {/* Premium Digital Marketing Package */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">
          Premium Digital Marketing Package
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">$4,500/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>
            Management of up to 6 platforms (e.g., Facebook, Instagram,
            LinkedIn, Twitter, YouTube, TikTok)
          </li>
          <li>30 strategic posts per month for maximum reach</li>
          <li>
            Comprehensive engagement (comments, messages, reviews, and community
            building)
          </li>
          <li>Advanced analytics with tailored strategy adjustments</li>
          <li>High-quality content creation (graphics, videos, photography)</li>
          <li>Full digital marketing strategy and continuous optimization</li>
          <li>Complete ad campaign management and optimization</li>
          <li>Monthly strategy sessions for ongoing growth</li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Designed for businesses aiming for a robust online presence and
          comprehensive growth.
        </p>
      </motion.div>

      {/* E-Commerce Digital Marketing Package */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">
          E-Commerce Digital Marketing Package
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">$3,200/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>
            Management of 3 e-commerce-focused platforms (e.g., Facebook,
            Instagram, Pinterest)
          </li>
          <li>20 promotional posts per month to drive sales</li>
          <li>
            Moderate community management (comments, messages, and reviews)
          </li>
          <li>Analytics report focused on sales and conversions</li>
          <li>
            E-commerce content creation (product photography, promotional
            graphics, videos)
          </li>
          <li>Custom digital marketing strategy for maximizing sales</li>
          <li>Targeted ad campaigns to boost product visibility</li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Perfect for e-commerce businesses looking to increase visibility,
          engagement, and sales.
        </p>
      </motion.div>

      {/* Starter Video Marketing Management Package */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">
          Starter Video Marketing Management Package
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">$800/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Management of up to 6 client-provided videos per month</li>
          <li>Basic SEO and trend optimization for YouTube and TikTok</li>
          <li>Comment monitoring and engagement management</li>
          <li>Monthly analytics report on video performance</li>
          <li>30-minute initial strategy consultation</li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Perfect for businesses looking to kickstart their video marketing
          efforts on YouTube and TikTok.
        </p>
      </motion.div>

      {/* Advanced Video Marketing Management Package */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        style={{ minHeight: '450px' }}
      >
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-4xl font-gothic-bold mb-4">
          Advanced Video Marketing Management Package
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">$1,500/month</p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>Management of up to 12 client-provided videos per month</li>
          <li>Advanced SEO and trend strategy for YouTube and TikTok</li>
          <li>Active community engagement and audience building tactics</li>
          <li>Detailed monthly analytics and strategy reports</li>
          <li>1-hour monthly strategy session</li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Ideal for businesses seeking comprehensive video marketing management
          to boost engagement and growth on video platforms.
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
        Ready to Boost Your Digital Marketing?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Contact us today to find the perfect package for your digital marketing
        needs and take your brand to the next level.
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

export default DigitalMarketing
