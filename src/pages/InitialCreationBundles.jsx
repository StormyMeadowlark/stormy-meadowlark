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
<motion.section>
<div className=" bg-gradient-to-r from-light-accent to-light-primary dark:from-dark-secondary dark:to-dark-primary">
          <p className="text-center text-3xl max-w-4xl mx-auto mb-16 leading-relaxed font-extrabold">
            Ready to Spark Results?
          </p>
          <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
            Take the guesswork out of your marketing. With the R⁴ Method for Ad
            Success, we’ll help you stand out, connect authentically, and drive
            meaningful growth. Let’s get started today.{' '}
          </p>
          <div className="flex flex-1 justify-center">
          <Link
            to="/contact"
            className=" px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
          >
            Book Your Consultation Now
          </Link>
          </div>
        </div>
</motion.section>


   {/* R⁴ Method Section */}
   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto py-24 max-w-5xl">
   <div className="mb-12">
    <h2 className="text-4xl font-extrabold text-accent mb-4">
      The R⁴ Method for Ad Success
    </h2>
    <p className="text-xl max-w-4xl mx-auto leading-relaxed">
      Discover our proven approach to marketing success by focusing on the right person, in the right place, at the right time, with the right message. The R⁴ Method ensures every campaign connects and delivers impactful results.
    </p>
  </div>
      {[
        {
          title: 'Right Person',
          description:
            'Understand your ideal customers. Are they busy professionals needing quick service? Families seeking reliable vehicles? We identify your key audiences to ensure your ads speak directly to their needs.',
          image: RightPersonImage,
          icon: '🎯',
        },
        {
          title: 'Right Place',
          description:
            'Meet your customers where they are. Whether it’s Google Ads, Facebook, or Instagram, we focus on the platforms where your audience spends their time.',
          image: RightPlaceImage,
          icon: '📍',
        },
        {
          title: 'Right Time',
          description:
            'Timing is everything. We ensure your ads are shown during peak times when your audience is most likely to engage, like during commutes or downtime.',
          image: RightTimeImage,
          icon: '⏰',
        },
        {
          title: 'Right Message',
          description:
            'Create content that matters. From ads showcasing your services to engaging social posts that build trust, we craft messages that resonate and inspire action.',
          image: RightMessageImage,
          icon: '💬',
        },
      ].map((section, index) => (
        <div
          key={index}
          className="relative p-6 rounded-lg shadow-lg text-center text-light-text dark:text-dark-text"
          style={{ backgroundImage: `url(${section.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-dark-primary bg-opacity-60 p-4 rounded-lg">
            <span className="text-6xl mb-4 block">{section.icon}</span>
            <h3 className="text-3xl font-extrabold text-accent mb-4">
              {section.title}
            </h3>
            <p className="text-xl leading-relaxed px-4">
              {section.description}
            </p>
          </div>
        </div>
      ))}
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
    </section>


    {/* Final Call to Action */}
    <section className="bg-light-secondary dark:bg-dark-secondary py-24 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-accent mb-8">
          Proven Results
        </h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-12">
          Our campaigns deliver measurable outcomes that matter to your business. From increasing call rates to boosting website traffic, we focus on strategies that drive real growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-accent mb-4">9% Call Rate</h3>
            <p className="text-lg">Achieved call rates as high as 9% on select ad campaigns.</p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-accent mb-4">200% Traffic Increase</h3>
            <p className="text-lg">Doubled website traffic within three months for key clients.</p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-accent mb-4">3x ROI</h3>
            <p className="text-lg">Generated three times the return on investment through targeted campaigns.</p>
          </div>
        </div>
      </div>
    </section>

    <motion.section
  className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.4 }}
>
  {/* Ads Packages */}
  <motion.div
    className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>
    <h2 className="text-3xl font-gothic-bold mb-4">Basic Ads Package</h2>
    <p className="text-4xl font-extrabold mb-4 text-accent">Starting at $3,000</p>
    <ul className="text-left list-disc list-inside mb-4 space-y-2">
      <li><b>Google Ads Setup:</b> Keyword research and campaign creation.</li>
      <li><b>Meta Ads Setup:</b> Audience targeting and ad design.</li>
      <li><b>1 Month Optimization:</b> Basic performance tracking and adjustments.</li>
    </ul>
    <p className="italic text-gray-500 mt-4">Perfect for businesses new to paid ads.</p>
  </motion.div>

  <motion.div
    className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-20 transform rotate-12"></div>
    <h2 className="text-3xl font-gothic-bold mb-4">Growth Ads Package</h2>
    <p className="text-4xl font-extrabold mb-4 text-accent">Starting at $6,000</p>
    <ul className="text-left list-disc list-inside mb-4 space-y-2">
      <li><b>Google & Meta Ads:</b> Advanced targeting and ad variations.</li>
      <li><b>Retargeting Campaigns:</b> Focused on conversions.</li>
      <li><b>Performance Analytics:</b> Monthly reporting and strategy updates.</li>
    </ul>
    <p className="italic text-gray-500 mt-4">For scaling businesses ready to grow.</p>
  </motion.div>

  <motion.div
    className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary rounded-full opacity-20 transform rotate-12"></div>
    <h2 className="text-3xl font-gothic-bold mb-4">Premium Ads Package</h2>
    <p className="text-4xl font-extrabold mb-4 text-accent">Starting at $12,000</p>
    <ul className="text-left list-disc list-inside mb-4 space-y-2">
      <li><b>Multi-Channel Campaigns:</b> Google, Meta, YouTube, and TikTok.</li>
      <li><b>Custom Ad Creatives:</b> High-quality visuals and video ads.</li>
      <li><b>Detailed Analytics:</b> Insights and advanced optimization.</li>
    </ul>
    <p className="italic text-gray-500 mt-4">Comprehensive solution for high ROI.</p>
  </motion.div>

  {/* Content Packages */}
  <motion.div
    className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 transform rotate-12"></div>
    <h2 className="text-3xl font-gothic-bold mb-4">Basic Content Package</h2>
    <p className="text-4xl font-extrabold mb-4 text-accent">Starting at $2,000</p>
    <ul className="text-left list-disc list-inside mb-4 space-y-2">
      <li><b>Photography Session:</b> 20 professional photos.</li>
      <li><b>Stock Video Clips:</b> 5 branded stock video edits.</li>
      <li><b>Basic Graphics:</b> 5 social media visuals.</li>
    </ul>
    <p className="italic text-gray-500 mt-4">Best for small businesses needing foundational visuals.</p>
  </motion.div>

  <motion.div
    className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-20 transform rotate-12"></div>
    <h2 className="text-3xl font-gothic-bold mb-4">Growth Content Package</h2>
    <p className="text-4xl font-extrabold mb-4 text-accent">Starting at $5,000</p>
    <ul className="text-left list-disc list-inside mb-4 space-y-2">
      <li><b>Full Photography Session:</b> 50 professional photos.</li>
      <li><b>Custom Video Edits:</b> 10 branded video clips.</li>
      <li><b>Branded Graphics:</b> 10 custom designs for ads or social media.</li>
    </ul>
    <p className="italic text-gray-500 mt-4">Ideal for businesses looking to enhance their visual identity.</p>
  </motion.div>

  <motion.div
    className="p-8 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary rounded-full opacity-20 transform rotate-12"></div>
    <h2 className="text-3xl font-gothic-bold mb-4">Premium Content Package</h2>
    <p className="text-4xl font-extrabold mb-4 text-accent">Starting at $10,000</p>
    <ul className="text-left list-disc list-inside mb-4 space-y-2">
      <li><b>Comprehensive Photography:</b> 100 professional photos.</li>
      <li><b>High-End Video Production:</b> 20 branded video clips with professional editing.</li>
      <li><b>Custom Content Strategy:</b> Includes graphic design, animations, and tailored assets.</li>
    </ul>
    <p className="italic text-gray-500 mt-4">For businesses seeking premium visual content solutions.</p>
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
