
import { Link } from 'react-router-dom'

const GoogleAdsManagement = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        Google Ads Management
      </h1>

      {/* Service Description */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Google Ads is one of the most effective ways to drive targeted traffic
          to your website and increase sales. At Stormy Meadowlark, we offer
          comprehensive Google Ads management services that include campaign
          setup, keyword research, ad creation, and ongoing optimization. Our
          goal is to maximize your return on investment (ROI) by creating
          high-converting ads that reach the right audience at the right time.
        </p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Basic Campaign</h3>
            <p className="text-lg">$500/month</p>
            <p className="mt-4">
              Includes campaign setup and management for one Google Ads
              campaign.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Advanced Campaign</h3>
            <p className="text-lg">$1,000/month</p>
            <p className="mt-4">
              Includes multiple campaigns, advanced targeting, and detailed
              reporting.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Custom Campaigns</h3>
            <p className="text-lg">Contact for pricing</p>
            <p className="mt-4">
              Tailored to your specific needs, with custom targeting, ads, and
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Our Process</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our Google Ads management process starts with understanding your
          business goals and target audience. We conduct thorough keyword
          research to identify the best opportunities for your campaigns and
          create compelling ads that capture attention. Our team continuously
          monitors and optimizes your campaigns to ensure maximum performance,
          providing detailed reports and insights along the way. Our goal is to
          help you achieve the highest ROI possible.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">
          Ready to Boost Your Business with Google Ads?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Contact us today to discuss your Google Ads management needs and start
          driving more traffic to your website.
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

export default GoogleAdsManagement
