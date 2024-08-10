
import { Link } from 'react-router-dom'

const ApiDevelopment = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        API Development
      </h1>

      {/* Service Description */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto">
          APIs (Application Programming Interfaces) are the backbone of modern
          digital applications. At Stormy Meadowlark, we develop scalable and
          secure APIs that enable seamless communication between your
          applications. Our team specializes in creating RESTful APIs and custom
          integrations that are reliable, efficient, and easy to maintain.
          Whether you need an API for a mobile app, a web service, or an IoT
          device, we have the expertise to deliver high-quality solutions.
        </p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Basic API</h3>
            <p className="text-lg">$2,000</p>
            <p className="mt-4">
              Includes a simple, well-documented API with essential features and
              endpoints.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">
              Complex API with Integrations
            </h3>
            <p className="text-lg">Starting at $4,000</p>
            <p className="mt-4">
              Includes advanced features, integrations with third-party
              services, and custom endpoints.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Custom API Solutions</h3>
            <p className="text-lg">Contact for pricing</p>
            <p className="mt-4">
              Tailored to your specific needs, with custom features and
              extensive documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Our Process</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our API development process starts with understanding your technical
          requirements and business objectives. We design and develop APIs that
          are easy to use, secure, and scalable. Our team follows best practices
          for API design, ensuring that your API is well-documented and easy to
          integrate with other systems. We also provide ongoing support and
          maintenance to ensure that your API continues to perform optimally.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">Let's Build Your API</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Contact us today to discuss your API development needs and get a
          custom solution that fits your business.
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

export default ApiDevelopment
