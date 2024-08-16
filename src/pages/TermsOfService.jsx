import { motion } from 'framer-motion'

const TermsOfService = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    <motion.div
      className="container mx-auto py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-8xl font-cursive text-center mb-12">
        Terms of Service
      </h1>
      <p className="text-center text-xl max-w-4xl mx-auto">
        Please read these Terms of Service (&quot;Terms&quot;) carefully before
        using the Stormy Meadowlark website and services.
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
          Welcome to Stormy Meadowlark (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern
          your use of our website, services, and products
          (&quot;Services&quot;). By accessing or using our Services, you agree
          to comply with and be bound by these Terms. If you do not agree to
          these Terms, please do not use our Services.
        </p>
      </motion.div>

      {/* Definitions */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">2. Definitions</h2>
        <p className="text-lg mb-4">
          - <strong>&quot;Service(s)&quot;</strong> refers to the website,
          digital marketing, web development, content creation, and all other
          services provided by Stormy Meadowlark.
          <br />- <strong>&quot;User(s)&quot;</strong> refers to individuals,
          businesses, or entities that access or use our Services.
          <br />- <strong>&quot;Content&quot;</strong> includes all text,
          images, graphics, software, and other materials provided through the
          Services.
        </p>
      </motion.div>

      {/* User Eligibility */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">3. User Eligibility</h2>
        <p className="text-lg mb-4">
          You must be at least 18 years of age to use our Services. By using our
          Services, you represent and warrant that you meet the age requirement
          and are legally capable of entering into a binding contract.
        </p>
      </motion.div>

      {/* Account Registration and Security */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          4. Account Registration and Security
        </h2>
        <p className="text-lg mb-4">
          To access certain Services, you may be required to create an account.
          You are responsible for maintaining the confidentiality of your
          account information and for all activities that occur under your
          account. You agree to notify us immediately of any unauthorized use of
          your account.
        </p>
        <p className="text-lg mb-4">
          We reserve the right to terminate or suspend your account at any time
          for any reason, including but not limited to violations of these
          Terms.
        </p>
      </motion.div>

      {/* User Conduct */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">5. User Conduct</h2>
        <p className="text-lg mb-4">By using our Services, you agree to:</p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>
            Use the Services in accordance with all applicable laws and
            regulations.
          </li>
          <li>
            Not engage in any activity that could harm or interfere with the
            Services, including hacking, spamming, or distributing malware.
          </li>
          <li>
            Not post or upload content that is offensive, defamatory, or
            infringes on the rights of others.
          </li>
        </ul>
      </motion.div>

      {/* Intellectual Property */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          6. Intellectual Property
        </h2>
        <p className="text-lg mb-4">
          All content and materials provided through our Services, including but
          not limited to text, images, graphics, and software, are the
          intellectual property of Stormy Meadowlark or our licensors. You are
          granted a limited, non-exclusive, non-transferable license to access
          and use the Services for your personal or business use. You may not
          reproduce, distribute, or create derivative works from any content
          provided through our Services without our express written permission.
        </p>
      </motion.div>

      {/* Payment and Billing */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          7. Payment and Billing
        </h2>
        <p className="text-lg mb-4">
          For Services that require payment, you agree to provide accurate and
          complete billing information. Payments are due in accordance with the
          terms outlined in your service agreement. If your payment method fails
          or your account is past due, we may terminate or suspend your access
          to the Services until payment is made.
        </p>
      </motion.div>

      {/* Refund Policy */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">8. Refund Policy</h2>
        <p className="text-lg mb-4">
          Refunds may be issued at our discretion and in accordance with the
          terms of your service agreement. Please contact us for any questions
          regarding refunds.
        </p>
      </motion.div>

      {/* Disclaimers and Limitation of Liability */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          9. Disclaimers and Limitation of Liability
        </h2>
        <p className="text-lg mb-4">
          Our Services are provided &quot;as is&quot; and &quot;as
          available,&quot; without any warranties, express or implied. We do not
          guarantee that our Services will be uninterrupted, error-free, or
          secure. To the fullest extent permitted by law, Stormy Meadowlark
          disclaims all warranties, including but not limited to implied
          warranties of merchantability and fitness for a particular purpose.
        </p>
        <p className="text-lg mb-4">
          Stormy Meadowlark will not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or related
          to your use of the Services, even if we have been advised of the
          possibility of such damages. Our total liability to you for any claims
          arising out of or related to these Terms or the Services shall not
          exceed the amount you paid to us for the Services in the six months
          preceding the claim.
        </p>
      </motion.div>

      {/* Privacy Policy */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">10. Privacy Policy</h2>
        <p className="text-lg mb-4">
          Your use of our Services is subject to our{' '}
          <a
            href="#privacy-policy"
            className="underline text-light-accent dark:text-dark-accent"
          >
            Privacy Policy
          </a>
          , which explains how we collect, use, and protect your personal
          information. By using our Services, you consent to the practices
          described in the Privacy Policy.
        </p>
      </motion.div>

      {/* Third-Party Services and Links */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          11. Third-Party Services and Links
        </h2>
        <p className="text-lg mb-4">
          Our Services may include links to third-party websites or integrate
          with third-party tools and services. Stormy Meadowlark is not
          responsible for the content, functionality, or security of third-party
          websites or services. Your use of third-party services is at your own
          risk, and you should review the terms and policies of any third-party
          services you use.
        </p>
      </motion.div>

      {/* Termination */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">12. Termination</h2>
        <p className="text-lg mb-4">
          You may terminate your account or stop using our Services at any time.
          Stormy Meadowlark may also terminate or suspend your access to the
          Services at any time, with or without cause, with or without notice.
        </p>
      </motion.div>

      {/* Governing Law and Dispute Resolution */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          13. Governing Law and Dispute Resolution
        </h2>
        <p className="text-lg mb-4">
          These Terms and your use of the Services are governed by the laws of
          the state of Kansas, without regard to its conflict of law principles.
          Any disputes arising out of or related to these Terms or the Services
          shall be resolved through binding arbitration in Topeka, Kansas, in
          accordance with the rules of the American Arbitration Association.
        </p>
      </motion.div>

      {/* Changes to Terms */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">14. Changes to Terms</h2>
        <p className="text-lg mb-4">
          We reserve the right to modify these Terms at any time. Any changes
          will be effective immediately upon posting on our website. Your
          continued use of the Services after the changes have been posted
          constitutes your acceptance of the revised Terms.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="mb-16 p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">
          15. Contact Information
        </h2>
        <p className="text-lg mb-4">
          If you have any questions about these Terms or the Services, please
          contact us at{' '}
          <a
            href="mailto:privacy@stormymeadowlark.com"
            className="underline text-light-accent dark:text-dark-accent"
          >
            privacy@stormymeadowlark.com
          </a>
        </p>

      </motion.div>

      {/* Miscellaneous */}
      <motion.div
        className="p-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-gothic-bold mb-4">16. Miscellaneous</h2>
        <p className="text-lg mb-4">
          These Terms constitute the entire agreement between you and Stormy
          Meadowlark regarding the use of our Services. If any provision of
          these Terms is found to be invalid or unenforceable, the remaining
          provisions will continue in full force and effect. The failure of
          Stormy Meadowlark to enforce any right or provision of these Terms
          shall not constitute a waiver of such right or provision.
        </p>
      </motion.div>
    </motion.section>
  </div>
)

export default TermsOfService
