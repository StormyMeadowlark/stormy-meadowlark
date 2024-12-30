import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Replace these with your own image imports
import ReputationMonitorImage from '../assets/images/Desk.png?react';
import ReputationImpactImage from '../assets/images/Before.png?react';
import ReputationSuccessImage from '../assets/images/Bentley.png?react';
import SocialProofImage from '../assets/images/Headlights.png?react';
import LocalSEOImage from '../assets/images/AboutImage.jpg?react';
import VideoPlaceholder from '../assets/images/SolarAthletricsRebrand.png?react';

const DigitalMarketing = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* 
      Main Header 
    */}
    <motion.div
      className="relative mx-auto py-40 text-center rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 bg-pattern-dots dark:bg-pattern-grid opacity-20 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-center text-5xl max-w-4xl mx-auto font-extrabold mb-12 tracking-wide text-shadow text-accent">
          Digital Marketing & Reputation Management
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          At Stormy Meadowlark, we take a holistic approach to digital marketing
          that’s rooted in <span className="italic">local SEO</span>,{' '}
          <span className="italic">social media</span>,{' '}
          <span className="italic">reputation management</span>, and{' '}
          <span className="italic">industry-specific directory listings</span>.
          Whether you need an active social presence, consistent 5-star reviews,
          or optimized listings that drive local traffic, our customizable
          packages ensure you get the perfect fit for your automotive business.
          And if content creation is your priority, we can handle that,
          too—turning your brand story into posts, visuals, and reviews that
          convert.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
        >
          Get Started
        </Link>
      </div>
    </motion.div>

    {/* 
      Why Local SEO & Reputation Matter 
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg shadow-lg">
      <motion.section
        className="max-w-4xl mx-auto py-24 text-center relative "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide text-accent">
            The Power of Local SEO & Strategic Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl leading-relaxed mb-8">
                Your online presence isn’t just about being visible—it’s about
                showing up in the <span className="italic">right</span> places
                and <span className="italic">looking great</span> when you do.
                That means:
              </p>
              <ul className="text-xl leading-relaxed list-disc list-inside mb-8 text-left">
                <li>
                  <b>Optimized Google Business Profile & Yelp Listings:</b> We
                  keep your info up-to-date, respond to reviews, and add fresh
                  content to stand out in local search.
                </li>
                <li>
                  <b>Industry-Specific Directories:</b> If you’re a European
                  auto repair shop, we place you on the right European import
                  sites. Domestic shops? We’ll prioritize the directories your
                  ideal customers actually use.
                </li>
                <li>
                  <b>Image Metadata & SEO:</b> Every photo you upload—from
                  headlight restorations to dealership inventory—gets optimized
                  with metadata that boosts your search rankings.
                </li>
              </ul>
              <p className="text-xl leading-relaxed">
                When you combine local SEO with consistent reputation
                management, you’re not just found—you’re chosen.
              </p>
            </div>
            <div>
              <img
                src={ReputationMonitorImage}
                alt="Local SEO & Reputation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>

    {/* 
      Real Results: Impact 
    */}
    <div className="bg-light-primary dark:bg-dark-primary">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide text-accent">
          Real Results: From Reviews to Revenue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={ReputationImpactImage}
              alt="Reputation Impact"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-xl leading-relaxed mb-8">
              Our clients don’t just hear about results—they see them. HEM
              Automotive is a prime example of how a focused local SEO and
              reputation management strategy can create tangible growth. Over
              the past year, HEM has experienced remarkable improvements:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside text-left">
              <li>
                <b>
                  A 102.7% increase in calls from their Google Business Profile
                </b>{' '}
                in October 2024 compared to October 2023, connecting them to
                more customers than ever.
              </li>
              <li>
                <b>Climbing local search rankings,</b>improving from an average
                position of 29 to 26 in just the past month, with occasional
                first-page appearances for competitive keywords like ‘auto shop
                near me’ and ‘mechanic shop near me.’
              </li>
              <li>
                Enhanced visibility and trust, as their profile now drives
                consistent engagement from both foot traffic and online
                inquiries.
              </li>
            </ul>
            <p className="text-xl leading-relaxed mt-8 text-left">
              While there’s still work to be done to solidify first-page
              rankings, these gains are a direct result of optimized profiles,
              steady review generation, and active social media engagement. The
              combination of improved rankings and an authentic online
              reputation gives HEM a competitive edge in their market.
            </p>
            <p className="text-xl leading-relaxed mt-8">
              At Stormy Meadowlark, we’re not just managing HEM’s digital
              presence—we’re partnering with them to drive growth and elevate
              their brand.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
    {/* 
      Our Process 
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          How We Elevate Your Local Visibility & Brand Credibility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Profile Audit',
              text: 'We analyze your Google Business, Yelp, and relevant automotive directories—spotting gaps, outdated info, or missed SEO opportunities like image metadata.',
            },
            {
              step: '02',
              title: 'Optimization & Setup',
              text: 'We update your NAP (Name, Address, Phone), handle specialty directory listings, optimize your photos, and craft custom descriptions that resonate with local customers.',
            },
            {
              step: '03',
              title: 'Review Generation & Response',
              text: 'From automated requests to real-time monitoring, we help you earn more 5-stars and handle negative feedback promptly—keeping your reputation rock-solid.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white dark:bg-dark-primary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-5xl font-extrabold text-accent mb-4">
                {item.step}
              </h3>
              <h4 className="text-2xl font-gothic-bold mb-2">{item.title}</h4>
              <p className="leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
    {/* 
      Social + Local SEO Synergy 
    */}
    <motion.section
      className="container max-w-4xl mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8 text-accent">
        Combine Social Media & Local Search for Maximum Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={ReputationSuccessImage}
            alt="Success Boost"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-xl leading-relaxed mb-6">
            While being prominent in local search is crucial, building trust
            through social channels—Facebook, Instagram, TikTok—propels your
            brand even further. By creating share-worthy content, engaging
            customers where they’re active, and showcasing positive reviews
            publicly, you become the go-to option for your service in your local
            market.
          </p>
          <p className="text-xl leading-relaxed">
            It’s the perfect loop: local search brings them in, and your strong
            social presence + stellar reputation keep them coming back (and
            telling their friends).
          </p>
        </div>
      </div>
    </motion.section>

    {/* 
      Tools & Tech 
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          Tools & Techniques We Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl leading-relaxed mb-6">
              We tap into a variety of platforms and best practices to help you
              rank higher, look better, and engage more effectively:
            </p>
            <ul className="list-disc list-inside text-left text-xl mb-6">
              <li>Google Business & Yelp optimization</li>
              <li>Industry-specific automotive directories</li>
              <li>Image metadata & local SEO tagging</li>
              <li>Social media scheduling & content creation</li>
              <li>Review management dashboards</li>
            </ul>
            <p className="text-xl leading-relaxed">
              By uniting tech, strategy, and constant monitoring, we ensure your
              brand identity stays consistent across every channel.
            </p>
          </div>
          <div>
            <img
              src={SocialProofImage}
              alt="Social Proof"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>
    </div>
    {/* 
      Video Placeholder 
    */}
    <motion.section
      className="container max-w-4xl mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8 text-accent">
        A Glimpse into Our Day-to-Day Workflow
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src={VideoPlaceholder}
          alt="Video Placeholder"
          className="rounded-lg shadow-lg max-w-md"
        />
      </div>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto">
        Curious about how we keep your listings accurate, track reviews, and
        post engaging content? Watch this short overview to see how everything
        ties together into a seamless digital strategy.
      </p>
    </motion.section>

    {/* 
      6 Packages: 3 Without Content & 3 With Content 
    */}
    <div>
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-accent">
          Drive Your Business Growth with Tailored Digital Marketing Packages
        </h2>
        <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Choose from expertly crafted packages designed to enhance your local
          visibility, manage your online reputation, and create engaging
          content. Whether you're starting out or ready to dominate your market,
          we’ve got a solution tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* 1. Basic (No Content) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Starter</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">$500/mo</p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Google Business & Yelp Setup/Optimization</li>
              <li>Comprehensive General Directory Listing</li>
              <li>Industry-Specific Directory Listing (up to 3)</li>
              <li>Review Monitoring & Quick Response (up to 10 reviews/mo)</li>
              <li>Monthly Local SEO Check & Basic Image Metadata</li>
            </ul>
            <p className="italic text-gray-500">
              A foundational package to ignite your local visibility and
              reputation.
            </p>
          </div>

          {/* 2. Basic + Content */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Cruise Control
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">$750/mo</p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Everything in Starter</li>
              <li>2–3 Social Media Posts/Week (Photo/Graphic + Copy)</li>
              <li>Monthly Content Calendar</li>
              <li>Enhanced Image Metadata for Shared Content</li>
            </ul>
            <p className="italic text-gray-500">
              Add social media content to keep your business running smoothly
              online.
            </p>
          </div>

          {/* 3. Growth (No Content) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Turbo Boost</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $1,000/mo
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Comprehensive General Directory Listing</li>
              <li>Advanced Local SEO & Directory Listings (up to 6)</li>
              <li>Review Monitoring & Response (up to 25 reviews/mo)</li>
              <li>Monthly Strategy Calls & Detailed Reporting</li>
              <li>In-Depth Image Metadata & Geotagging</li>
              <li>Automated Review Requests + Reputation Alerts</li>
            </ul>
            <p className="italic text-gray-500">
              Accelerate your online presence with advanced SEO and reputation
              management.
            </p>
          </div>

          {/* 4. Growth + Content */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Performance Package
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $1,500/mo
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Everything in Turbo Boost</li>
              <li>
                4–5 Social Media Posts/Week (Photo, Short-Form Video, Graphics)
              </li>
              <li>Dedicated Content Calendar & Hashtag Strategy</li>
            </ul>
            <p className="italic text-gray-500">
              Combine powerful SEO with consistent, branded content to
              outperform the competition.
            </p>
          </div>

          {/* 5. Premium (No Content) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Full Throttle
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $2,500/mo
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Comprehensive General Directory Listing</li>
              <li>Extensive Local SEO with Niche Directories (10+)</li>
              <li>Full-Service Reputation Monitoring (unlimited reviews)</li>
              <li>Advanced Analytics & Competitive Tracking</li>
              <li>Monthly One-on-One Strategy Sessions</li>
            </ul>
            <p className="italic text-gray-500">
              Maximize your business impact with comprehensive SEO and
              reputation tools.
            </p>
          </div>

          {/* 6. Premium + Content */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              The Ultimate Drive
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $3,500/mo
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Everything in Full Throttle</li>
              <li>
                Daily Social Posting Across Multiple Platforms (Facebook,
                Instagram, TikTok, LinkedIn, Snapchat, Industry Specific Forums
                ect.)
              </li>
              <li>
                Professional-Grade Photo/Video Production (on-site if
                applicable)
              </li>
              <li>Custom Campaigns & Weekly Strategy Updates</li>
            </ul>
            <p className="italic text-gray-500">
              Go all-in with professional-grade content, daily engagement, and
              top-tier SEO.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
    {/* 
      Local SEO Focus Section 
    */}

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
            className="p-6 bg-light-accent dark:bg-dark-accent text-dark-text dark:text-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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

    {/*
      Call to Action
      - Simple, direct CTA at the bottom.
    */}
    <motion.div
      className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent text-light-text dark:text-dark-text py-20 text-center"
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
      <Link
        to="/contact"
        className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-light-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
      >
        Start Your Journey Now
      </Link>
    </motion.div>
  </div>
)

// Sample related services (adjust links & text as you wish)
const relatedServices = [
  {
    title: 'Paid Advertisement & Content Production',
    description:
      '',
    link: '/services/paid-ads',
  },
  {
    title: 'Digital Marketing & Reputation Management',
    description:
      '',
    link: '/services/digital-marketing',
  },

  {
    title: 'All-In-One Marketing & Consulting Hub',
    description:
      '',
    link: '/services/marketing-consulting-hub',
  },
];

export default DigitalMarketing;