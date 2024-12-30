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
        <h1 className="text-center text-5xl max-w-4xl mx-auto font-extrabold mb-12 tracking-wide text-shadow">
          Digital Marketing & Reputation Management
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          At Stormy Meadowlark, we take a holistic approach to digital marketing
          that’s rooted in <span className='italic'>local SEO</span>, <span className='italic'>social media</span>, <span className='italic'>reputation
          management</span>, and <span className='italic'>industry-specific directory listings</span>. Whether
          you need an active social presence, consistent 5-star reviews, or
          optimized listings that drive local traffic, our customizable packages
          ensure you get the perfect fit for your automotive business. And if
          content creation is your priority, we can handle that, too—turning
          your brand story into posts, visuals, and reviews that convert.
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
    <div className='bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg shadow-lg'>
    <motion.section
      className="max-w-4xl mx-auto py-24 text-center relative "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
          The Power of Local SEO & Strategic Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xl leading-relaxed mb-8">
              Your online presence isn’t just about being visible—it’s about
              showing up in the <span className='italic'>right</span> places and <span className='italic'>looking great</span> when you
              do. That means:
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
              When you combine local SEO with consistent reputation management,
              you’re not just found—you’re chosen.
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
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-5xl font-extrabold mb-8 tracking-wide">
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
            Our clients have seen firsthand how a multi-pronged approach to
            local SEO and reputation management can boost both foot traffic and
            online conversions. When we tie consistent review generation and
            social posting into a well-optimized business profile, the results
            are clear:
          </p>
          <ul className="text-xl leading-relaxed list-disc list-inside">
            <li>
              Higher <b>local search rankings</b> for industry-specific keywords.
            </li>
            <li>
              A <b>30% jump</b> in phone calls and direction requests from Google
              Business alone.
            </li>
            <li>
              Review scores that push casual browsers into confident leads—
              especially when they see new, genuine feedback.
            </li>
          </ul>
          <p className="text-xl leading-relaxed mt-8">
            Nothing beats the trust factor of a great online reputation paired
            with top-tier local visibility.
          </p>
        </div>
      </div>
    </motion.section>

    {/* 
      Our Process 
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
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

    {/* 
      Social + Local SEO Synergy 
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
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
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
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

    {/* 
      Video Placeholder 
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
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
        Curious about how we keep your listings accurate, track reviews, and post
        engaging content? Watch this short overview to see how everything ties
        together into a seamless digital strategy.
      </p>
    </motion.section>

    {/* 
      6 Packages: 3 Without Content & 3 With Content 
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-r from-primary to-secondary text-light rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-5xl font-extrabold mb-8">Our 6 Packages</h2>
      <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        Choose between versions that include done-for-you content creation or go
        without if you already have a library of images and copy. Either way,
        you’ll get expert local SEO, directory listing, and reputation
        management at each tier.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* 1. Basic (No Content) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Basic</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Starting at $1,000/mo
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Google Business & Yelp Setup/Optimization</li>
            <li>Industry-Specific Directory Listing (up to 3)</li>
            <li>Review Monitoring & Quick Response (up to 10 reviews/mo)</li>
            <li>Monthly Local SEO Check & Basic Image Metadata</li>
          </ul>
          <p className="italic text-gray-500">
            Ideal for shops or dealers who already have content but need help
            getting found locally and maintaining a positive reputation.
          </p>
        </div>

        {/* 2. Basic + Content */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Basic + Content</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Starting at $1,500/mo
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in Basic</li>
            <li>2–3 Social Media Posts/Week (Photo/Graphic + Copy)</li>
            <li>Monthly Content Calendar</li>
            <li>Enhanced Image Metadata for Shared Content</li>
          </ul>
          <p className="italic text-gray-500">
            A step up if you need consistent, branded content to keep your
            social feeds fresh alongside local SEO and reputation basics.
          </p>
        </div>

        {/* 3. Growth (No Content) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Growth</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Starting at $2,000/mo
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Advanced Local SEO & Directory Listings (up to 6)</li>
            <li>Review Monitoring & Response (up to 25 reviews/mo)</li>
            <li>Monthly Strategy Calls & Detailed Reporting</li>
            <li>In-Depth Image Metadata & Geotagging</li>
          </ul>
          <p className="italic text-gray-500">
            For businesses looking to scale visibility and reputation but have
            their own content strategy in place.
          </p>
        </div>

        {/* 4. Growth + Content */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Growth + Content
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Starting at $2,750/mo
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in Growth</li>
            <li>4–5 Social Media Posts/Week (Photo, Short-Form Video, Graphics)</li>
            <li>Dedicated Content Calendar & Hashtag Strategy</li>
            <li>Automated Review Requests + Reputation Alerts</li>
          </ul>
          <p className="italic text-gray-500">
            Ideal for shops or dealerships needing robust local SEO, directory
            optimization, AND consistent, professional social content.
          </p>
        </div>

        {/* 5. Premium (No Content) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Premium</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Starting at $4,000/mo
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Extensive Local SEO with Niche Directories (10+)</li>
            <li>Full-Service Reputation Monitoring (unlimited reviews)</li>
            <li>Advanced Analytics & Competitive Tracking</li>
            <li>Monthly One-on-One Strategy Sessions</li>
          </ul>
          <p className="italic text-gray-500">
            A comprehensive package for businesses wanting top-tier local search
            placement and ironclad reputation management, but supply their own
            content.
          </p>
        </div>

        {/* 6. Premium + Content */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Premium + Content
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Starting at $5,500/mo
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in Premium</li>
            <li>Daily Social Posting Across Multiple Platforms</li>
            <li>Professional-Grade Photo/Video Production (on-site if applicable)</li>
            <li>Custom Campaigns & Frequent Strategy Updates</li>
          </ul>
          <p className="italic text-gray-500">
            The ultimate solution for businesses seeking maximum reach, daily
            engagement, and fully-managed online reputation and content.
          </p>
        </div>
      </div>
    </motion.section>

    {/* 
      Local SEO Focus Section 
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">Local SEO That Makes Sense</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={LocalSEOImage}
            alt="Local SEO"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-xl leading-relaxed mb-6">
            We don’t just add you to every directory under the sun—there’s a
            method to our approach. Whether you’re a domestic shop specializing
            in Ford and Chevy or a European-focused garage working on BMW and
            Mercedes, we list you where your **ideal customers** actually look:
            specialized directories, enthusiast forums, and local business
            listings that matter. This ensures quality leads, not just random
            traffic.
          </p>
          <p className="text-xl leading-relaxed">
            And with our emphasis on image metadata, geotagging, and
            keyword-focused content, you’ll see real improvement in how and
            where you show up in local searches.
          </p>
        </div>
      </div>
    </motion.section>

    {/* 
      Related Services and CTA 
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
            className="p-6 bg-light-accent dark:bg-dark-accent text-dark-primary dark:text-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-3xl font-gothic-bold mb-2">{related.title}</h4>
            <p>{related.description}</p>
            <Link to={related.link} className="underline hover:text-primary">
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* 
      Final CTA 
    */}
    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-light py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-6xl font-extrabold mb-4 text-shadow">
        Ready to Transform Your Online Presence?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Whether you opt for a content-inclusive package or bring your own assets,
        we’ll help you rank higher, look better, and make your competitors
        wonder how you did it. Reach out now to find the perfect digital
        marketing and reputation management solution for your automotive
        business.
      </p>
      <Link
        to="/contact"
        className="bg-light-secondary text-dark-primary py-4 px-8 rounded-full font-bold text-2xl hover:bg-dark-secondary hover:text-light transition duration-300 transform hover:scale-105"
      >
        Contact Us
      </Link>
    </motion.div>
  </div>
);

// Sample related services (adjust links & text as you wish)
const relatedServices = [
  {
    title: 'Web Design & Development',
    description:
      'Craft a mobile-first, custom website that pairs perfectly with your local SEO and reputation strategies.',
    link: '/services/web-design-development',
  },
  {
    title: 'API Integrations & Automation',
    description:
      'Streamline data across CRMs, analytics, and more, so you can focus on running your business, not your tech.',
    link: '/services/custom-solutions',
  },
  {
    title: 'Full-Stack Digital Solutions',
    description:
      'Need more than just local SEO? Explore our end-to-end solutions covering e-commerce, complex apps, and custom features.',
    link: '/services/digital-marketing-campaigns',
  },
];

export default DigitalMarketing;