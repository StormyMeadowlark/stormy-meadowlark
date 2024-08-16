import { motion } from 'framer-motion'

const Disclaimer = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">Disclaimer</h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        The following disclaimer outlines the limitations and responsibilities
        associated with the use of our website and services.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">General Disclaimer</h2>
        <p className="text-lg mb-4">
          The services provided by Stormy Meadowlark (&quot;we,&quot;
          &quot;us&quot; or &quot;our&quot;) on this website (the
          &quot;Site&quot;) are intended for informational purposes and to
          assist businesses with their digital needs. While we strive to offer
          accurate and current information, we make no warranties or
          representations about the accuracy, reliability, or completeness of
          any content on the Site or the services we provide.
        </p>
        <p className="text-lg mb-4">
          Stormy Meadowlark disclaims any liability for errors or omissions in
          the content of this Site and for any loss or damage incurred by users
          as a result of using the Site or relying on any information provided.
          All services are provided &quot;as is&quot; and &quot;as
          available,&quot; and we do not warrant that our services will meet
          your specific requirements or be uninterrupted, timely, secure, or
          error-free.
        </p>
      </motion.div>

      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Third-Party Tools and Links
        </h2>
        <p className="text-lg mb-4">
          Any third-party tools, software, or integrations recommended or used
          by Stormy Meadowlark are provided &quot;as is&quot; without warranties
          of any kind, either express or implied. We are not responsible for the
          functionality, security, or performance of any third-party tools or
          integrations.
        </p>
        <p className="text-lg mb-4">
          The content on this Site may include links to other websites or
          third-party content. Stormy Meadowlark does not endorse, guarantee, or
          assume responsibility for any information, products, or services
          offered by third parties through the Site or any linked websites. Your
          use of third-party websites or services is at your own risk.
        </p>
      </motion.div>

      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          Modifications and Updates
        </h2>
        <p className="text-lg mb-4">
          Stormy Meadowlark reserves the right to modify or update the content
          on this Site and the terms of service at any time without prior
          notice. By using this Site or our services, you agree to this
          disclaimer and our terms and conditions.
        </p>
        <p className="text-lg">
          If you have any questions about this disclaimer, please contact us at
          privacy@stormymeadowlark.com.
        </p>
      </motion.div>
    </motion.section>
  </div>
)

export default Disclaimer
