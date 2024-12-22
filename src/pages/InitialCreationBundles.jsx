import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RightPersonImage from '../assets/images/Desk.png?react'
import RightMessageImage from '../assets/images/Headlights.png?react'
import RightPlaceImage from '../assets/images/Jeep_Flexin.png?react'
import RightTimeImage from '../assets/images/Sunset_Cheer_Comp_1.png?react'

const InitialCreationBundles = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Main Header */}
    <motion.div
      className="relative mx-auto py-40 text-center  rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 bg-pattern-dots dark:bg-pattern-grid opacity-20 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-center text-5xl max-w-4xl mx-auto font-extrabold mb-12 tracking-wide text-shadow">
          Drive More Leads & Build Your Brand with Strategic Ads & Engaging
          Content
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          At Stormy Meadowlark, we know marketing is about more than just being
          seen. It’s about connecting with the{' '}
          <span className="italic">right people</span> in the{' '}
          <span className="italic">right place</span> at the{' '}
          <span className="italic">right time</span> with the{' '}
          <span className="italic">right message</span>. That’s why we developed
          our signature R⁴ Method for Ads Success—a straightforward,
          results-driven process that blends ad campaign management with
          scroll-stopping content created to grab attention and spark action.
          Every piece we produce is rooted in the R⁴ Method for Ad Success,
          ensuring it feels authentic, connects meaningfully, and delivers
          results where it matters most.
        </p>
        <div className="bg-gradient-to-r from-light-accent to-light-primary dark:from-dark-secondary dark:to-dark-primary">
          <p className="text-center text-3xl max-w-4xl mx-auto mb-16 leading-relaxed font-extrabold">
            Ready to Spark Results?
          </p>
          <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
            Take the guesswork out of your marketing. With the R⁴ Method for Ad
            Success, we’ll help you stand out, connect authentically, and drive
            meaningful growth. Let’s get started today.{' '}
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
          >
            Book Your Consultation Now
          </Link>
        </div>
      </div>
    </motion.div>

    {/* Why Paid Ads Matter for Automotive Shops */}
    <motion.section
      className="mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent relative rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
          Why Paid Ads Matter for Your Shop
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          As an automotive shop or dealership, you rely on attracting the right
          customers to grow your business. Paid ads let you target local drivers
          searching for services, showcase your unique offerings, and drive
          consistent foot traffic to your shop or showroom.
        </p>
        <p className="text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
          With the right strategy, you can appear at the top of search results
          when customers look for "auto repair near me" or "used cars for sale."
          We'll help you capture that attention and convert it into loyal
          customers.
        </p>
      </div>
    </motion.section>

    {/* The R⁴ Method Sections */}
    {[
      {
        title: 'Right Person',
        description:
          'Understand your ideal customers. Are they busy professionals needing quick service? Families seeking reliable vehicles? We identify your key audiences to ensure your ads speak directly to their needs.',
        image: RightPersonImage,
      },
      {
        title: 'Right Place',
        description:
          'Meet your customers where they are. Whether it’s Google Ads, Facebook, or Instagram, we focus on the platforms where your audience spends their time.',
        image: RightPlaceImage,
      },
      {
        title: 'Right Time',
        description:
          'Timing is everything. We ensure your ads are shown during peak times when your audience is most likely to engage, like during commutes or downtime.',
        image: RightTimeImage,
      },
      {
        title: 'Right Message',
        description:
          'Create content that matters. From ads showcasing your services to engaging social posts that build trust, we craft messages that resonate and inspire action.',
        image: RightMessageImage,
      },
    ].map((section, index) => (
      <motion.section
        key={index}
        className={`mx-auto py-24 text-center flex flex-col-reverse md:flex-row items-center relative ${
          index % 2 === 0
            ? 'bg-pattern-dots'
            : 'bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary'
        } rounded-lg shadow-lg`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 + index * 0.2 }}
      >
        <motion.div
          className="md:w-1/2 p-8 relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide">
            {section.title}
          </h2>
          <p className="text-xl leading-relaxed">{section.description}</p>
        </motion.div>
        <div className="md:w-1/2 relative">
          <img
            src={section.image}
            alt={section.title}
            className="w-full rounded-lg shadow-lg transform transition-transform hover:scale-110"
          />
        </div>
      </motion.section>
    ))}

    {/* Final Call to Action */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary bg-pattern-grid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-3xl font-extrabold mb-8 tracking-wide">
        Let’s Take Your Shop to the Next Level
      </h2>
      <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        The R⁴ Method is designed to help automotive businesses grow with
        confidence. Let’s create ads and content that drive measurable results
        for your shop or dealership.
      </p>
      <Link
        to="/contact"
        className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
      >
        Start Your Journey Now
      </Link>
    </motion.section>

    {/* Services Section */}
    <motion.section
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      {/* Starter Creation Bundle */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-3xl font-gothic-bold mb-4">
          Initial Creation Bundle
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">
          Starting at $6,000
        </p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>
            <b>Custom Website Development:</b> Multi-page website (up to 10
            pages) with a responsive design optimized for both desktop and
            mobile, tailored to the client’s brand and business needs.
          </li>
          <li>
            <b>Mobile and Desktop Optimization:</b> Ensuring the website is
            fully optimized for both desktop and mobile devices.
          </li>
          <li>
            <b>Basic SEO Setup:</b> Foundational SEO elements, including meta
            tags, alt text, and keyword integration to improve search engine
            visibility.
          </li>
          <li>
            <b>Initial Brand Guide & Voice Guide:</b> Simplified brand guide
            including color palette, typography, logo usage, and basic guidance
            on defining the brand’s tone and messaging.
          </li>
          <li>
            <b>Social Media Setup:</b> Setting up or optimizing profiles on
            Google My Business, Facebook, and Instagram to align with the brand.
          </li>
          <li>
            <b>Basic Social Media Strategy Session:</b> One-hour consultation to
            help the client effectively use social media platforms.
          </li>
          <li>
            <b>1 Month of Content Creation:</b> Includes 8 branded social media
            posts, utilizing stock images or basic photography.
          </li>
          <li>
            <b>Basic API Integration:</b> Simple API integration to connect the
            website with essential services (like email sign-ups, contact forms,
            or social media feeds).
          </li>
          <li>
            <b>Post-Launch Support:</b> One-month of post-launch support for
            updates, maintenance, and a follow-up consultation.
          </li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Perfect for new businesses looking to establish a strong digital
          presence with foundational tools and strategies.
        </p>
      </motion.div>
      {/* Growth Creation Bundle */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-3xl font-gothic-bold mb-4">
          Growth Creation Bundle
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">
          Starting at $12,500
        </p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>
            <b>Custom Web Application Development:</b> Development of a
            customized web application (e.g., customer portal, booking system,
            or e-commerce platform) with essential features tailored to the
            client's needs.
          </li>
          <li>
            <b>Responsive Design and Cross-Platform Compatibility:</b> Ensuring
            smooth performance across all devices and browsers.
          </li>
          <li>
            <b>Enhanced SEO Strategy:</b> Comprehensive SEO audit and strategy,
            including keyword research, competitor analysis, and content
            optimization to drive traffic.
          </li>
          <li>
            <b>Brand Identity Package:</b> Logo design, brand style guide, and
            voice and messaging guide to establish and maintain a strong brand
            presence.
          </li>
          <li>
            <b>Basic API Development and Integration:</b> API portal development
            for essential integrations (e.g., payment gateways, CRM tools).
          </li>
          <li>
            <b>Initial Digital Marketing Campaign Setup:</b> Setup for Google
            Ads and Meta Ads, including a campaign consultation session.
          </li>
          <li>
            <b>Social Media Content Creation:</b> 3 months of content creation,
            including 12 posts per month and basic social media management.
          </li>
          <li>
            <b>Post-Launch Consulting:</b> 3 months of consulting (up to 8 hours
            per month) for ongoing support and strategy optimization.
          </li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Ideal for growing businesses ready to expand their digital reach and
          improve their brand presence through strategic marketing.
        </p>
      </motion.div>

      {/* Premium Creation Bundle */}
      <motion.div
        className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary rounded-full opacity-20 transform rotate-12"></div>

        <h2 className="text-3xl font-gothic-bold mb-4">
          Premium Creation Bundle
        </h2>
        <p className="text-4xl font-extrabold mb-4 text-accent">
          Starting at $15,000
        </p>
        <ul className="text-left list-disc list-inside mb-4 space-y-2">
          <li>
            <b>Comprehensive Website and Web Application Development:</b> Custom
            multi-page website and web application with essential features like
            user authentication, interactive forms, and dynamic content.
          </li>
          <li>
            <b>Enhanced User Experience (UX) Design:</b> Ensuring responsive
            design and cross-platform compatibility for a seamless user
            experience.
          </li>
          <li>
            <b>Advanced SEO Implementation:</b> Advanced SEO strategy, including
            a focused audit, on-page optimization, and local SEO setup.
          </li>
          <li>
            <b>Full-Scale Branding and Strategy Package:</b> Complete brand
            identity and content creation, including social media graphics and
            1-2 blog posts.
          </li>
          <li>
            <b>Basic API Development and Integration:</b> Essential API
            integrations and simplified API portal setup.
          </li>
          <li>
            <b>Multi-Channel Digital Marketing Campaign Setup:</b> Setup for
            Google Ads, Meta Ads, LinkedIn, and strategy consultation for
            YouTube and TikTok.
          </li>
          <li>
            <b>3 Months of Social Media Management and Analytics:</b> Content
            scheduling, posting, and monthly performance reporting, with up to 6
            consultation hours per month.
          </li>
        </ul>
        <p className="italic text-gray-500 mt-4">
          Designed for businesses looking for an all-inclusive package to
          dominate their digital landscape with comprehensive tools and ongoing
          support.
        </p>
      </motion.div>
    </motion.section>

    {/* Related Services and Call to Action */}
    <motion.div
      className="container mx-auto py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
    >
      <h3 className="text-5xl font-gothic-bold text-center mb-8 text-shadow">
        You May Also Be Interested In
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedServices.map((related) => (
          <motion.div
            key={related.title}
            className="p-6 bg-light-accent dark:bg-dark-accent text-dark-primary dark:text-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-3xl font-gothic-bold mb-2">{related.title}</h4>
            <p>{related.description}</p>
            <a href={related.link} className="underline hover:text-primary">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Call to Action */}
    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-light py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-6xl font-gothic-bold mb-4 text-shadow">
        Let's Build Your Future
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Ready to take the next step? Contact us today to discuss your needs and
        find the perfect bundle to start your journey towards digital success.
      </p>
      <a
        href="/contact"
        className="bg-light-secondary text-dark-primary py-4 px-8 rounded-full font-gothic-bold text-2xl hover:bg-dark-secondary hover:text-light transition duration-300 transform hover:scale-105"
      >
        Get Started
      </a>
    </motion.div>
  </div>
)

// Related Services Data
const relatedServices = [
  {
    title: 'Custom Solutions',
    description:
      'Explore our range of custom digital solutions tailored to your specific needs.',
    link: '/services/custom-solutions',
  },
  {
    title: 'Ongoing Digital Marketing Packages',
    description:
      'Maintain and grow your digital presence with continuous support and strategy.',
    link: '/services/digital-marketing-campaigns',
  },
  {
    title: 'Digital Marketing',
    description:
      'Elevate your brand with dynamic digital marketing strategies that truly connect with your audience',
    link: '/services/digital-marketing-campaigns',
  },
]

export default InitialCreationBundles
