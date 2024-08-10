
import { Link } from 'react-router-dom'
const ContentCreation = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        Content Creation
      </h1>

      {/* Service Description */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Content is king, and at Stormy Meadowlark, we create content that
          resonates with your audience and drives engagement. Whether you need
          blog posts, video scripts, or social media content, we craft
          compelling narratives that tell your brand's story and connect with
          your customers. Our content creation services are tailored to your
          specific needs, ensuring that every piece of content aligns with your
          brand voice and marketing goals.
        </p>
      </section>

      {/* Pricing Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Blog Post Writing</h3>
            <p className="text-lg">$150 per post</p>
            <p className="mt-4">
              Includes research, writing, and basic SEO optimization.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Video Script Writing</h3>
            <p className="text-lg">$300 per script</p>
            <p className="mt-4">
              Engaging video scripts tailored to your brand's message and
              audience.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">
              Custom Content Packages
            </h3>
            <p className="text-lg">Contact for pricing</p>
            <p className="mt-4">
              Packages tailored to your content needs, including a mix of
              different content types.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4">Our Process</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our content creation process starts with understanding your brand and
          audience. We work closely with you to develop content ideas that align
          with your goals, and then bring those ideas to life through meticulous
          research, writing, and editing. Each piece of content is crafted to
          engage your audience and drive results, whether it's boosting your
          SEO, increasing social media engagement, or telling your brand's
          story.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">Let's Create Together</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Ready to elevate your content? Contact us today to discuss your
          content creation needs and get started.
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

export default ContentCreation
