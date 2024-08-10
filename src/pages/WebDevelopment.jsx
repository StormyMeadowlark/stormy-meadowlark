
import { Link } from 'react-router-dom'
const WebDevelopment = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        Web Development
      </h1>

      {/* Service Description */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Stormy Meadowlark, we specialize in creating responsive, visually
          stunning websites that help your business stand out in the digital
          world. Whether you need a simple landing page or a complex e-commerce
          platform, our team of experts will work with you to bring your vision
          to life. We prioritize user experience, performance, and scalability,
          ensuring that your website not only looks great but also delivers a
          seamless experience across all devices.
        </p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Basic Website</h3>
            <p className="text-lg">$1,500</p>
            <p className="mt-4">
              Includes a responsive design, up to 5 pages, and basic SEO
              optimization.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">E-commerce Website</h3>
            <p className="text-lg">$3,000</p>
            <p className="mt-4">
              Includes a fully functional e-commerce platform, product pages,
              and payment gateway integration.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">
              Custom Web Applications
            </h3>
            <p className="text-lg">Starting at $5,000</p>
            <p className="mt-4">
              Tailored to your specific needs, with custom features and advanced
              functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Our Process</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our web development process begins with a thorough understanding of
          your business goals and target audience. We collaborate closely with
          you to define the project scope, design wireframes, and create a
          prototype. Once the design is approved, our development team brings
          your vision to life, ensuring that every aspect of the site is
          optimized for performance and user experience. We also offer ongoing
          support and maintenance to keep your website running smoothly.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">Ready to Get Started?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Contact us today to discuss your web development needs and get a
          personalized quote.
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

export default WebDevelopment
