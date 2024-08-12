import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContentCreation = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-light min-h-screen py-40">
    <div className="container mx-auto">
      <motion.h1
        className="text-8xl font-cursive text-center mb-12 text-dark-primary dark:text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Content Creation
      </motion.h1>

      {/* Service Description */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto font-gothic text-dark-primary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          In a world where content is king, we believe that your story deserves
          to be told with creativity, clarity, and authenticity. At Stormy
          Meadowlark, we craft compelling narratives that not only capture
          attention but also resonate deeply with your audience. From blog posts
          and video scripts to social media content, we create tailored content
          that aligns perfectly with your brand voice and marketing goals.
        </motion.p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Blog Post Writing
            </h3>
            <p className="text-lg font-gothic text-light">$150 per post</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Engaging, well-researched blog posts that boost your SEO and
              connect with your readers.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Video Script Writing
            </h3>
            <p className="text-lg font-gothic text-light">$300 per script</p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Compelling video scripts that tell your story and captivate your
              audience.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-accent dark:bg-dark-secondary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-gothic-bold mb-4 text-light">
              Custom Content Packages
            </h3>
            <p className="text-lg font-gothic text-light">
              Contact for pricing
            </p>
            <p className="mt-4 font-gothic-italic text-gray-200">
              Tailored content packages designed to meet your specific needs,
              blending various content types to maximize impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-gothic-italic mb-8 text-dark-secondary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Our Process
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto font-gothic text-dark-primary dark:text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          Our content creation process begins with a deep dive into your brand's
          identity and audience. We collaborate closely with you to develop
          content ideas that align with your business goals. From meticulous
          research and writing to precise editing, we ensure every piece of
          content we produce is designed to engage your audience and drive
          results, whether that means boosting your SEO, enhancing social media
          presence, or telling your brand's story.
        </motion.p>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-6xl font-cursive mb-4 text-dark-secondary dark:text-light">
          Let's Create Together
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-gothic text-dark-primary dark:text-light">
          Ready to elevate your content? Contact us today to discuss your
          content creation needs and start crafting compelling stories together.
        </p>
        <Link
          to="/contact"
          className="bg-accent dark:bg-dark-accent text-light font-gothic-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent dark:hover:bg-accent-dark"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  </div>
)

export default ContentCreation
