import { motion } from 'framer-motion'

const InitialCreationBundles = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Initial Creation Bundles
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        Choose the bundle that best fits your business needs and let us help you
        create a strong foundation for success.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Starter Creation Bundle */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">
          Starter Creation Bundle
        </h2>
        <p className="text-4xl font-bold mb-4">$8,000</p>
        <p className="text-lg mb-4">Estimated Hours: 80 hours</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Custom Website Development (up to 10 pages)</li>
          <li>Basic SEO Setup</li>
          <li>Initial Brand Guide & Voice Guide</li>
          <li>Social Media Setup (Google My Business, Facebook, Instagram)</li>
          <li>
            1 Month of Content Creation (8 social media posts, basic
            photography)
          </li>
          <li>Basic API Development for simple integrations</li>
        </ul>
      </motion.div>

      {/* Growth Creation Bundle */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">
          Growth Creation Bundle
        </h2>
        <p className="text-4xl font-bold mb-4">$12,500</p>
        <p className="text-lg mb-4">Estimated Hours: 125 hours</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Custom Web Application Development (basic functionality)</li>
          <li>Enhanced SEO Strategy</li>
          <li>
            Full Brand Identity Package (including content creation, logo
            design)
          </li>
          <li>API Portal Development</li>
          <li>
            Initial Digital Marketing Campaign Setup (Google Ads, Meta Ads)
          </li>
          <li>
            3 Months of Social Media Content Creation (12 posts per month)
          </li>
        </ul>
      </motion.div>

      {/* Premium Creation Bundle */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-Primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-gothic-bold mb-4">
          Premium Creation Bundle
        </h2>
        <p className="text-4xl font-bold mb-4">$18,750</p>
        <p className="text-lg mb-4">Estimated Hours: 187.5 hours</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Comprehensive Website and Web Application Development</li>
          <li>Advanced SEO Implementation</li>
          <li>
            Full-Scale Branding and Strategy Package (content creation,
            photography, videography, voice and brand guides)
          </li>
          <li>Full API Development and Integration</li>
          <li>
            Initial Setup for Multi-Channel Digital Marketing Campaigns (Google,
            Meta, YouTube, TikTok)
          </li>
          <li>3 Months of Social Media Management and Analytics</li>
        </ul>
      </motion.div>
    </motion.section>
  </div>
)

export default InitialCreationBundles
