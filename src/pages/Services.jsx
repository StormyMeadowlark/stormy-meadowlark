import { Link } from 'react-router-dom'

const Services = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">Our Services</h1>
      <p className="text-lg max-w-2xl mx-auto text-center mb-12">
        At Stormy Meadowlark, we offer a range of digital solutions designed to
        help you navigate the complexities of the digital world. Explore our
        services below and learn how we can help your business thrive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
          <h3 className="text-2xl font-heading mb-4">Web Development</h3>
          <p>
            We build responsive, visually stunning websites that perform
            seamlessly across all devices.
          </p>
          <Link
            to="/web-development"
            className="text-primary dark:text-accent mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* Content Creation */}
        <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
          <h3 className="text-2xl font-heading mb-4">Content Creation</h3>
          <p>
            We create compelling content that resonates with your audience and
            drives engagement across platforms.
          </p>
          <Link
            to="/content-creation"
            className="text-primary dark:text-accent mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* Social Media Management */}
        <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
          <h3 className="text-2xl font-heading mb-4">
            Social Media Management
          </h3>
          <p>
            Our social media strategies build strong online communities and
            increase brand awareness.
          </p>
          <Link
            to="/social-media-management"
            className="text-primary dark:text-accent mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* API Development */}
        <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
          <h3 className="text-2xl font-heading mb-4">API Development</h3>
          <p>
            We develop scalable and secure APIs that enable seamless
            communication between your applications.
          </p>
          <Link
            to="/api-development"
            className="text-primary dark:text-accent mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* Consulting & Strategy */}
        <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
          <h3 className="text-2xl font-heading mb-4">Consulting & Strategy</h3>
          <p>
            We provide strategic insights and actionable plans to help you
            achieve your business goals.
          </p>
          <Link
            to="/consulting-strategy"
            className="text-primary dark:text-accent mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* Google Ads Management */}
        <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
          <h3 className="text-2xl font-heading mb-4">Google Ads Management</h3>
          <p>
            Our Google Ads management services drive targeted traffic to your
            website and increase sales.
          </p>
          <Link
            to="/google-ads-management"
            className="text-primary dark:text-accent mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Services
