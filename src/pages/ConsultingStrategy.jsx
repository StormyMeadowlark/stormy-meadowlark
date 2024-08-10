
import { Link } from 'react-router-dom'

const ConsultingStrategy = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        Consulting & Strategy
      </h1>

      {/* Service Description */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Navigating the digital landscape can be challenging, especially when
          you’re focused on running your business. At Stormy Meadowlark, we
          offer expert consulting and strategy services to help you make
          informed decisions and achieve your business goals. Our team provides
          strategic insights and actionable plans that align with your vision,
          whether you’re launching a new product, expanding your digital
          presence, or optimizing your existing operations.
        </p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Hourly Consulting</h3>
            <p className="text-lg">$150/hour</p>
            <p className="mt-4">
              Perfect for quick consultations and addressing specific
              challenges.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Strategic Planning</h3>
            <p className="text-lg">$1,200</p>
            <p className="mt-4">
              Includes a comprehensive strategic plan with actionable insights
              and recommendations.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Ongoing Consulting</h3>
            <p className="text-lg">Contact for pricing</p>
            <p className="mt-4">
              Tailored consulting services with ongoing support and strategy
              sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Our Process</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our consulting and strategy process starts with a deep understanding
          of your business objectives and challenges. We work closely with you
          to develop a strategic plan that aligns with your goals, offering
          expert advice and guidance every step of the way. Our recommendations
          are based on industry best practices, data-driven insights, and a
          thorough analysis of your business environment. We also provide
          ongoing support to help you implement the strategies and achieve
          success.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Contact us today to discuss your consulting and strategy needs and
          start planning for success.
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

export default ConsultingStrategy
