
import { Link } from 'react-router-dom'

const About = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">
        About Stormy Meadowlark
      </h1>

      {/* Introduction Section */}
      <section className="mb-16">
        <p className="text-lg max-w-2xl mx-auto text-center">
          At Stormy Meadowlark, we understand the unique challenges of running a
          business in today's fast-paced digital world. Our mission is to bring
          tranquility among the storm by providing digital solutions that
          alleviate stress and empower you to focus on what you do best. From
          web development to social media management, we are here to help you
          navigate the digital landscape with ease.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4 text-center">Our Story</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Stormy Meadowlark was born out of a passion for combining creativity
          with technology. Founded in 2023, we started as a small team with a
          big vision: to help small business owners navigate the complexities of
          the digital world with ease and confidence. Our name, inspired by
          vibrant, colorful skies and dramatic cloudscapes, reflects our
          commitment to creating beautiful, impactful digital experiences that
          stand out in the stormy world of business.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-xl font-heading mb-2">Innovation</h3>
            <p>
              We are constantly exploring new technologies and creative
              approaches to bring the best solutions to our clients.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-xl font-heading mb-2">Integrity</h3>
            <p>
              We believe in transparency, honesty, and building long-term
              relationships based on trust.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-xl font-heading mb-2">Customer Focus</h3>
            <p>
              Your success is our success. We are dedicated to understanding
              your needs and delivering solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <img
              src="/path-to-team-member-photo1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-heading">Alex Johnson</h3>
            <p className="text-sm">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="/path-to-team-member-photo2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-heading">Taylor Smith</h3>
            <p className="text-sm">Lead Developer</p>
          </div>
          <div className="text-center">
            <img
              src="/path-to-team-member-photo3.jpg"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-heading">Jordan Brown</h3>
            <p className="text-sm">Creative Director</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading mb-4 text-center">
          What Our Clients Say
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-light dark:bg-dark-secondary p-6 rounded-lg shadow-md">
            <p className="italic">
              "Stormy Meadowlark transformed our online presence with their
              creative and technical expertise. We couldn't be happier with the
              results!"
            </p>
            <cite className="block mt-4 text-right">
              - Alex B., CEO of BrightPath Ventures
            </cite>
          </div>
          <div className="bg-light dark:bg-dark-secondary p-6 rounded-lg shadow-md">
            <p className="italic">
              "Their API development services have been invaluable to our
              business, providing reliability and ease of use."
            </p>
            <cite className="block mt-4 text-right">
              - Sarah L., CTO of InnovateX Solutions
            </cite>
          </div>
          <div className="bg-light dark:bg-dark-secondary p-6 rounded-lg shadow-md">
            <p className="italic">
              "Working with Stormy Meadowlark was a game-changer for our digital
              strategy. They truly understand our needs."
            </p>
            <cite className="block mt-4 text-right">
              - Mark D., Founder of Peak Performance Gear
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-heading mb-4">
          Ready to Join the Stormy Meadowlark Family?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you're looking to create a stunning website, develop a
          powerful API, or enhance your social media presence, we're here to
          help. Let's work together to create something amazing.
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

export default About
