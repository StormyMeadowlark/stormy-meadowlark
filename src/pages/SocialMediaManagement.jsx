import { Link } from 'react-router-dom'

const SocialMediaManagement = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        Social Media Management
      </h1>

      {/* Service Description */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Social media is a powerful tool for building your brand, engaging with
          your audience, and driving business growth. At Stormy Meadowlark, we
          offer comprehensive social media management services that include
          content creation, account management, and audience engagement
          strategies. We tailor our approach to your specific needs, ensuring
          that your social media presence reflects your brand and resonates with
          your target audience.
        </p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Basic Management</h3>
            <p className="text-lg">$500/month</p>
            <p className="mt-4">
              Includes content creation and management for up to 3 social media
              platforms.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">
              Comprehensive Management
            </h3>
            <p className="text-lg">$1,200/month</p>
            <p className="mt-4">
              Includes content creation, management, and audience engagement for
              up to 5 platforms.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">
              Custom Management Plans
            </h3>
            <p className="text-lg">Contact for pricing</p>
            <p className="mt-4">
              Tailored to your specific needs, with a focus on driving
              engagement and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Our Process</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our social media management process begins with an in-depth analysis
          of your brand and audience. We develop a content strategy that aligns
          with your business goals and create content that engages your
          followers. Our team manages your accounts, posts regularly, and
          interacts with your audience to build a strong online community. We
          also provide detailed analytics and reports to measure success and
          adjust strategies as needed.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">
          Ready to Elevate Your Social Media?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Contact us today to discuss your social media management needs and
          create a plan that works for you.
        </p>
        <Link
          to="/contact"
          className="bg-accent dark:bg-dark-accent text-white dark:text-dark-text font-bold py-3 px-6 rounded-full transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  </div>
)

export default SocialMediaManagement
