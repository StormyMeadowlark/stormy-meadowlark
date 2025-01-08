import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Replace these image imports with your own assets or placeholders
import HeroImage from '../assets/images/1.png?react'
import PainPointImage from '../assets/images/PainPoint.png?react'
import CultureImage from '../assets/images/CoreValues.png?react'
import TestimonialImage from '../assets/images/GrowingTrust.png?react'
import ViewBefore from '../assets/images/ViewsBefore.png?react'
import HEMautoBrand from '../assets/images/HEMautoBrand.png?react'
import ProcessImage from '../assets/images/Bentley.png?react'
import TimelineImage from '../assets/images/Desk.png?react'
import PlaceholderVideo from '../assets/images/DigitalCar.png?react'
import BeforeAfterImage from '../assets/images/Headlights.png?react'


// SAMPLE data for "You Might Be Interested In" section


const AllInOneSolutionsLanding = () => {
  return (
    <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
      {/*
        SECTION 1: HERO 
        - A strong introduction to the unique service
      */}
      <motion.section
        className="relative py-40 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 tracking-wide text-shadow text-accent">
            Comprehensive Shop Growth Solutions
          </h1>
          <div className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            <p className="mb-4">
              Running a successful shop or dealership takes more than just great
              service—it requires seamless coordination between your marketing,
              operations, and internal culture. At Stormy Meadowlark, we go
              beyond marketing to provide fully integrated solutions that
              connect every aspect of your business.
            </p>
            <p className="mb-4">
              From building a stunning, mobile-first website to refining your
              operations and showcasing your shop’s unique culture, we ensure
              every element works together to drive growth, boost efficiency,
              and attract loyal customers.
            </p>
            <p className="mb-4 font-gothic-bold">
              Focus on delivering top-tier service while we handle the rest.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-accent text-light-text dark:text-dark-text px-8 py-4 text-xl font-bold rounded-full hover:bg-light-hover dark:hover:bg-cta-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </motion.section>

      {/*
        SECTION 2: THE PAIN POINTS
      */}
      <div className=" bg-light-primary dark:bg-dark-secondary">
        <motion.section
          className="container max-w-7xl mx-auto py-24 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div whileHover={{ scale: 1.02 }}>
              <img
                src={PainPointImage}
                alt="Common Pain Points"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="text-left md:text-left">
              <h2 className="text-4xl font-extrabold mb-6 text-accent">
                Sound Familiar?
              </h2>
              <ul className="list-disc list-inside text-xl leading-relaxed space-y-4 pl-4 mb-8">
                <li>
                  You have <b>no time</b> to update your website, respond to
                  reviews, or manage your online presence.
                </li>
                <li>
                  You’ve <b>hired multiple freelancers</b>—one for web design,
                  one for ads, and another for social media—but your branding
                  feels disconnected and inconsistent.
                </li>
                <li>
                  Your <b>shop’s personality and culture</b> are missing online,
                  leaving potential customers unaware of what makes you special.
                </li>
                <li>
                  You’re ready for <b>more leads and foot traffic</b>, but
                  you’re stuck between outdated strategies and a digital-first
                  future.
                </li>
              </ul>
              <p className="text-xl leading-relaxed">
                If any of this sounds like your situation, you’re not alone—and
                we’re here to help. Stormy Meadowlark’s all-in-one approach
                ensures every aspect of your shop’s digital presence and
                operations aligns seamlessly for maximum impact.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
      {/*
        SECTION 3: THE SOLUTION (All-In-One Approach)
      */}
      <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
        <motion.section
          className="container max-w-4xl mx-auto py-24 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-accent">
            Integrated Growth Solutions for Shops and Dealerships
          </h2>
          <div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-4">
              What if you could partner with someone who handles every part of
              your shop’s growth—online and beyond? With Stormy Meadowlark,
              you’ll get:
            </p>
            <ul className="list-disc list-inside text-xl leading-relaxed space-y-4 pl-4 mb-8 text-left">
              <li>
                A stunning, mobile-first website that turns visitors into loyal
                customers.
              </li>
              <li>Laser-focused ad campaigns that drive measurable leads.</li>
              <li>
                In-depth branding and operational support, including coaching to
                showcase your shop’s unique culture.
              </li>
            </ul>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-12">
              We connect all the dots, so you don’t have to, ensuring your
              marketing, branding, and operations work together seamlessly. This
              frees up your team to focus on what matters most: delivering
              exceptional service and delighting customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src={ViewBefore}
                alt="Brand Story"
                className="rounded-lg shadow-lg mb-8"
              />
              <div className="text-xl leading-relaxed">
                <p className="font-bold mb-4">Before</p>
                <p className="mb-4 text-left">
                  Disjointed marketing efforts and operational headaches.
                </p>
              </div>
            </div>
            <div>
              <img
                src={HEMautoBrand}
                alt="Brand Positioning"
                className="rounded-lg shadow-lg mb-8"
              />
              <div className="text-xl leading-relaxed">
                <p className="font-bold mb-4">After</p>
                <p className="mb-4 text-left">
                  Unified, professional brand that brings in loyal, repeat
                  customers—and keeps your team aligned.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      {/*
        SECTION 4: CULTURE & IDENTITY
      */}
      <div className=" bg-light-primary dark:bg-dark-primary">
        <motion.section
          className="container max-w-4xl mx-auto py-24 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-extrabold mb-6 text-accent">
                Stand Out with Your Shop’s Authentic Identity
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Anyone can create ads, but truly successful shops go beyond the
                basics—they showcase their unique culture and identity. Your
                shop’s story, values, and leadership style are what set you
                apart from the competition, and we help you amplify that
                message.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                At Stormy Meadowlark, we’ll work with you to:
              </p>
              <ul className="list-disc list-inside text-xl leading-relaxed space-y-4 pl-4 mb-4 text-left">
                <li>Define your core values and leadership style.</li>
                <li>
                  Craft a brand identity that reflects your shop’s authenticity.
                </li>
                <li>
                  Integrate your culture into every ad, social post, and
                  customer interaction.
                </li>
              </ul>
              <p className="text-xl leading-relaxed mb-4">
                When customers <b>feel</b> your genuine passion and positivity,
                they’re more likely to trust you, recommend your services, and
                return time after time.
              </p>
              <p className="text-xl leading-relaxed font-semibold">
                Stand out not just with what you do, but with who you are.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img
                src={CultureImage}
                alt="Culture & Identity"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
      {/*
        SECTION 5: TESTIMONIALS
      */}
      <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
        <motion.section
          className="container max-w-4xl mx-auto py-24 px-6 text-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-accent">
            Aim to Be Trusted by Auto Pros Everywhere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div whileHover={{ scale: 1.03 }}>
              <img
                src={TestimonialImage}
                alt="Client Testimonial"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <div className="text-left">
              <p className="text-xl leading-relaxed mb-8">
                Your shop’s reputation matters, and so does ours. At Stormy
                Meadowlark, we’re dedicated to helping shops like yours grow
                through consistent branding, seamless operations, and measurable
                results.
              </p>
              <p className="text-lg">
                Want to share your experience with us?{' '}
                <b>
                  Ask about how you can get your first month of service free by
                  leaving a testimonial!
                </b>
              </p>
            </div>
          </div>
        </motion.section>
      </div>
      {/*
        SECTION 6: OUR PROCESS
      */}
      <div className="bg-light-primary dark:bg-dark-primary">
        <motion.section
          className="container max-w-4xl mx-auto py-24 text-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-accent">
            How the Partnership Works
          </h2>
          <p className="text-xl font-bold leading-relaxed max-w-4xl mx-auto mb-8">
            Your Shop’s Growth in 4 Simple Steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy Development',
                text: 'We start with a deep-dive discovery session to uncover your shop’s goals, challenges, and unique identity.Together, we craft a comprehensive plan tailored to your needs, including website updates, ad strategies, content planning, and culture coaching.',
              },
              {
                step: '02',
                title: 'Execution & Launch',
                text: 'Our team gets to work, implementing your plan with precision—from building a mobile-first website to launching targeted ad campaigns. We ensure every piece aligns with your shop’s values and vision.',
              },
              {
                step: '03',
                title: 'Ongoing Optimization',
                text: 'Every month, we analyze performance data, refine strategies, and share progress updates with you. Your feedback helps us continually improve and adapt to changing needs.',
              },
              {
                step: '04',
                title: 'Leadership & Team Support (Optional)',
                text: 'We offer leadership and staff training to ensure the online strategies we implement translate into exceptional in-person customer experiences.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-dark-secondary text-dark-primary dark:text-light rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
        SECTION 8: PACKAGES
      */}
      <div className="bg-light-primary dark:bg-dark-primary">
        <motion.section
          className="container mx-auto py-24 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <h2 className="text-5xl font-extrabold mb-8 text-accent">
            Your Growth Strategy, Fully Managed
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
            Our fully managed growth packages let you focus on running your shop
            while we handle marketing, content, reputation, and strategy.
            Tailored to your goals, these packages deliver more leads, stronger
            customer loyalty, and a professional brand presence—all with
            measurable results. Let us take the wheel and drive your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {/* PACKAGE 1 */}
            <motion.div
              className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                Starter Strategy
              </h3>
              <p className="text-3xl font-extrabold mb-4 text-accent">
                $500/mo
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Single campaign (Google or Meta) with basic targeting.</li>
                <li>4 branded social posts per month.</li>
                <li>Maintenance of one existing page for lead generation.</li>
                <li>
                  Local SEO updates and Google Business Profile management.
                </li>
                <li>Monitor and respond to up to 5 reviews per month.</li>
                <li>Monthly check-in to refine your approach.</li>
                <li>Mini brand audit and messaging refinement.</li>
              </ul>
              <p className="text-md italic text-gray-500">
                A foundational package to establish your shop’s presence and
                drive steady growth.
              </p>
            </motion.div>

            {/* PACKAGE 2 */}
            <motion.div
              className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                Growth Accelerator
              </h3>
              <p className="text-3xl font-extrabold mb-4 text-accent">
                $1,500/mo
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  {' '}
                  Up to 2 campaigns (Google and Meta) with A/B testing and
                  retargeting.
                </li>
                <li>8 social posts and 2 blog or email per month.</li>
                <li> Optimization of 2 pages for lead generation.</li>
                <li>Enhanced SEO and 3 directory listings.</li>
                <li>
                  Respond to up to 10 reviews/month with automated feedback
                  requests.
                </li>
                <li>Biweekly strategy calls.</li>
                <li>Messaging templates for social media and emails.</li>
              </ul>
              <p className="text-md italic text-gray-500">
                A balanced approach to build momentum and expand your audience.
              </p>
            </motion.div>

            {/* PACKAGE 3 */}
            <motion.div
              className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                Market Builder
              </h3>
              <p className="text-3xl font-extrabold mb-4 text-accent">
                $3,000/mo
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  Up to 3 campaigns (Google, Meta, YouTube) with advanced
                  targeting.
                </li>
                <li>
                  12 social posts (including videos), 2 blogs, and 2 email
                  campaigns per month.
                </li>
                <li>Creation or optimization of 3 pages.</li>
                <li>Advanced SEO and 5 directory listings.</li>
                <li>Comprehensive review monitoring and response.</li>
                <li>Monthly performance reviews and adjustments.</li>
                <li>Enhanced brand style guide and messaging refinement.</li>
                <li>
                  Monthly strategy sessions to align shop leadership values and
                  branding with customer-facing efforts.
                </li>
              </ul>
              <p className="text-md italic text-gray-500">
                A comprehensive solution to grow your customer base and solidify
                your brand.
              </p>
            </motion.div>

            {/* PACKAGE 4 */}
            <motion.div
              className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                High-Performance Strategy
              </h3>
              <p className="text-3xl font-extrabold mb-4 text-accent">
                $6,000/mo
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  Multi-platform campaigns (Google, Meta, YouTube, TikTok).
                </li>
                <li>12 social posts, 3 blogs, and 6 videos monthly</li>
                <li>Management of up to 4 pages optimized for conversions.</li>
                <li>Advanced SEO and competitor geotagging.</li>
                <li>Unlimited review responses and proactive alerts.</li>
                <li>Weekly calls for performance reviews.</li>
                <li>Custom assets and branded marketing materials.</li>
                <li>
                  Biweekly strategy calls and actionable steps to align team
                  culture with branding and customer experience.
                </li>
              </ul>
              <p className="text-md italic text-gray-500">
                A powerful package for shops ready to dominate their local
                market.
              </p>
            </motion.div>

            {/* PACKAGE 5 */}
            <motion.div
              className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                Elite Growth Package
              </h3>
              <p className="text-3xl font-extrabold mb-4 text-accent">
                $8,000/mo
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  Full-funnel ad campaigns across Google, Meta, YouTube, and
                  TikTok.
                </li>
                <li>
                  20 social posts, 4 blogs, 4 email campaigns, and 8 tailored
                  videos.
                </li>
                <li>Management of unlimited pages to support campaigns.</li>
                <li>Comprehensive SEO and niche directory listings.</li>
                <li>Advanced review systems and automated feedback loops.</li>
                <li>
                  High-touch weekly calls and detailed performance reviews
                </li>
                <li>Full brand audit and messaging overhaul.</li>
                <li>
                  Weekly strategy sessions and monthly team workshops to ensure
                  cohesive branding and customer loyalty.
                </li>
              </ul>
              <p className="text-md italic text-gray-500">
                A premium package for high-volume shops ready to lead their
                market.
              </p>
            </motion.div>

            {/* PACKAGE 6 */}
            <motion.div
              className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                Revolution Package
              </h3>
              <p className="text-3xl font-extrabold mb-4 text-accent">
                Starting at $10,000/mo
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  Custom campaigns on all platforms with unlimited adjustments.
                </li>
                <li>
                  Unlimited branded social posts, blogs, videos, and email
                  campaigns
                </li>
                <li> Full management of pages for maximum lead generation.</li>
                <li>Fully managed SEO, geotagging, and directory updates.</li>
                <li>
                  Unlimited monitoring and proactive reputation management.
                </li>
                <li>Weekly one-on-one sessions and real-time updates</li>
                <li>Comprehensive brand management and rollout.</li>
                <li>
                  Weekly or on-demand leadership strategy sessions, custom team
                  workshops, and quarterly cultural audits.
                </li>
              </ul>
              <p className="text-md italic text-gray-500">
                A fully tailored package to meet all your shop’s growth
                needs—book a consultation today!
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/*
        SECTION 10: YOU MIGHT BE INTERESTED IN
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
              <h4 className="text-3xl font-gothic-bold mb-2">
                {related.title}
              </h4>
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
          Ready to take the next step? Contact us today to discuss your needs
          and find the perfect bundle to start your journey towards digital
          success.
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
}

const relatedServices = [
  {
    title: 'Website Design & Development',
    description:
      '',
    link: '/services/web-design',
  },
  {
    title: 'Digital Marketing & Reputation Management',
    description:
      '',
    link: '/services/digital-marketing',
  },
  {
    title: 'Strategic Consulting & Brand Development',
    description:
      '',
    link: '/services/strategy-consulting',
  },
]

export default AllInOneSolutionsLanding
