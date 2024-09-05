import { motion } from 'framer-motion'

const PrivacyPolicy = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-gothic-bold text-center mb-12">
        Privacy Policy
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto mb-16">
        At Stormy Meadowlark, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your data.
      </p>
    </motion.div>

    <motion.section
      className="container mx-auto pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Introduction */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">1. Introduction</h2>
        <p className="text-lg mb-4">
          Stormy Meadowlark (&apos;we,&apos; &apos;us,&apos; or &apos;our&apos;)
          is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          visit our website and use our services. By accessing or using our
          services, you agree to this Privacy Policy.
        </p>
      </motion.div>

      {/* Information We Collect */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          2. Information We Collect
        </h2>
        <p className="text-lg mb-4">
          We may collect information about you in various ways, including:
        </p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>
            <strong>Personal Information:</strong> We may collect personally
            identifiable information such as your name, email address, phone
            number, and other contact details when you interact with our
            services.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about your
            interactions with our website, including your IP address, browser
            type, device information, pages visited, and the date and time of
            your visits.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We may use
            cookies and similar tracking technologies to enhance your experience
            on our website. You can manage your cookie preferences through your
            browser settings.
          </li>
        </ul>
      </motion.div>

      {/* How We Use Your Information */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-lg mb-4">We use the information we collect to:</p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>Provide, operate, and maintain our services.</li>
          <li>Improve, personalize, and expand our services.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>
            Communicate with you, including for customer service, updates, and
            promotional purposes.
          </li>
          <li>Process your transactions and manage your accounts.</li>
          <li>Comply with legal obligations and protect your rights.</li>
        </ul>
      </motion.div>

      {/* Sharing Your Information */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          4. Sharing Your Information
        </h2>
        <p className="text-lg mb-4">We may share your information with:</p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third-party vendors who assist us in operating our
            website, conducting our business, or providing services to you.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of all or a portion of our assets, your
            information may be transferred as part of that transaction.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required to do so by law or in response to valid
            requests by public authorities.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information
            with your consent for other purposes not listed here.
          </li>
        </ul>
      </motion.div>

      {/* Security of Your Information */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          5. Security of Your Information
        </h2>
        <p className="text-lg mb-4">
          We use administrative, technical, and physical security measures to
          protect your personal information. While we strive to use commercially
          acceptable means to protect your information, no method of
          transmission over the Internet or method of electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
      </motion.div>

      {/* Your Privacy Rights */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          6. Your Privacy Rights
        </h2>
        <p className="text-lg mb-4">
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>
            The right to access, update, or delete the information we have on
            you.
          </li>
          <li>
            The right to request the correction of any inaccuracies in your
            personal information.
          </li>
          <li>The right to opt out of marketing communications.</li>
          <li>
            The right to withdraw your consent to our use of your personal
            information.
          </li>
        </ul>
        <p className="text-lg mb-4">
          To exercise these rights, please contact us at{' '}
          <a
            href="mailto:privacy@stormymeadowlark.com"
            className="underline text-light-accent dark:text-dark-accent"
          >
            privacy@stormymeadowlark.com
          </a>
          .
        </p>
      </motion.div>

      {/* Changes to This Privacy Policy */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          7. Changes to This Privacy Policy
        </h2>
        <p className="text-lg mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal obligations. We will notify you of any
          significant changes by posting the new Privacy Policy on our website
          and updating the &apos;Last Updated&apos; date at the top of this
          page. We encourage you to review this Privacy Policy periodically for
          any changes.
        </p>
      </motion.div>

      {/* Contact Us */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">8. Contact Us</h2>
        <p className="text-lg mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p className="text-lg">
          Stormy Meadowlark
          <br />
          
          <a
            href="mailto:privacy@stormymeadowlark.com"
            className="underline text-light-accent dark:text-dark-accent"
          >
            privacy@stormymeadowlark.com
          </a>
        </p>
      </motion.div>
    </motion.section>
  </div>
)

export default PrivacyPolicy
