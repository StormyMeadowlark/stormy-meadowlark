import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example images – adjust to your actual file paths
import StrategyImage from '../assets/images/HEMBranding.png?react';
import BrandStoryImage from '../assets/images/BrandStory.png?react';
import PositioningImage from '../assets/images/BrandPosition.png?react';
import CaseStudyBeforeImage from '../assets/images/Before.png?react';
import CaseStudyAfterImage from '../assets/images/Bentley.png?react';
import VideoPlaceholder from '../assets/images/DidYouKnow.png?react';
import BeforeOne from '../assets/images/Facebook2023HEM.png?react';
import Google2024HEM from '../assets/images/Google2024HEM.png?react'
import AfterOne from '../assets/images/Facebook2024HEM.png?react'
import Brand from '../assets/images/HEMBrand.png?react'


const OngoingPackages = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic p-2">
    {/*
      1. Main Header 
      - Big, bold introduction to your strategic consulting & brand development service.
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
          Strategic Consulting for Automotive Business Growth
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Transform your automotive business vision into a powerful,
          results-driven brand. At Stormy Meadowlark, we specialize in
          uncovering what makes your shop or dealership unique, crafting
          strategies that enhance visibility, customer loyalty, and growth. From
          strategic planning to branding that resonates with your customers, we
          ensure every touchpoint works to drive your success in a competitive
          market.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
        >
          Start Your Brand Journey
        </Link>
      </div>
    </motion.div>

    {/*
      2. Why Strategic Consulting & Brand Development Section
      - Explains the core value proposition: clarity, differentiation, business growth.
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent relative rounded-lg shadow-lg">
      <motion.section
        className="max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide text-accent">
            Why Invest in Strategic Consulting & Brand Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl leading-relaxed mb-8">
                Building a standout automotive brand goes far beyond a logo or
                tagline. It’s about:
              </p>
              <ul className="text-xl leading-relaxed list-disc list-inside mb-8 text-left">
                <li>
                  <b>Defining your shop’s or dealership’s core mission</b> to
                  guide every decision and build trust with your customers.
                </li>
                <li>
                  <b>Crafting messaging that connects with vehicle owners</b>{' '}
                  who value quality, reliability, and expertise.
                </li>
                <li>
                  <b>Developing a cohesive, professional identity</b> that makes
                  your business memorable online and in your community.
                </li>
                <li>
                  <b>Maintaining a strategic edge</b> through ongoing consulting
                  to adapt, grow, and stay ahead in a competitive market.
                </li>
              </ul>
              <p className="text-xl leading-relaxed">
                Whether you’re launching a new shop, revitalizing your
                dealership, or blending the two, we specialize in helping
                automotive businesses like yours clarify their brand’s essence.
                Our strategies are designed to resonate with the customers you
                want most, turning first-time visitors into loyal advocates.
              </p>
            </div>
            <div>
              <img
                src={StrategyImage}
                alt="Strategic Focus"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
    {/*
      3. Case Study Section
      - Show real-world results from a brand development perspective.
    */}
    <div className="bg-light-primary dark:bg-dark-primary">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide text-accent">
          How HEM Automotive Grew Traffic and Launched Vehicle Sales
        </h2>
        <p className="text-xl leading-relaxed mb-8">
          HEM Automotive, an independent auto repair shop, wanted to step up
          their game. They needed a professional brand identity and a stronger
          online presence to match their plans to expand into vehicle sales.
          Their goals were clear: bring in more customers, create a consistent
          brand, and grow their business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={BeforeOne}
              alt="Before Rebrand"
              className="rounded-lg shadow-lg mb-8"
            />
            <img
              src={Google2024HEM}
              alt="After Rebrand"
              className="rounded-lg shadow-lg"
            />
            <img
              src={AfterOne}
              alt="Before Rebrand"
              className="rounded-lg shadow-lg mb-8"
            />
            <img
              src={Brand}
              alt="After Rebrand"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-left text-2xl mb-8">
              <b>The Challenge</b>
            </p>
            <p className="text-left text-xl mb-4">
              Before we stepped in, HEM Automotive’s online presence wasn’t
              attracting enough attention. They needed help to:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside text-left">
              <li>Increase their visibility online.</li>
              <li>
                Engage more customers for both auto repair and vehicle sales.
              </li>
              <li>Build a recognizable, professional brand.</li>
            </ul>
            <p className="text-left text-2xl my-8">
              <b>The Solution</b>
            </p>
            <p className="text-left text-xl mb-4">
              We partnered with HEM Automotive to create a strategy tailored to
              their goals. Here's what we did:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside text-left">
              <li>
                <b>Created a Cohesive Brand:</b> Designed a professional logo
                and developed a style guide so every material represented their
                business consistently.
              </li>
              <li>
                <b>Built a Strong Online Presence:</b> Launched a user-friendly,
                SEO-optimized website and optimized their Google My Business
                profile to bring in more local traffic.
              </li>
              <li>
                <b>Ran Targeted Ad Campaigns:</b> Focused on attracting
                customers for both repair services and vehicle sales with
                strategic advertising.
              </li>
              <li>
                <b>Offered Expert Guidance:</b> Provided consulting to ensure
                their online efforts aligned with their overall business goals.
              </li>
            </ul>
            <p className="text-left text-2xl my-8">
              <b> Results </b>
            </p>
            <p className="text-left text-xl mb-4">
              From September to December, HEM Automotive saw incredible results:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside text-left">
              <li>
                <b>Increased Website Traffic:</b>
                <ul className="text-xl leading-relaxed list-disc list-inside text-left ml-8">
                  <li>408 new visitors in September</li>
                  <li>1,700 new visitors in December</li>
                </ul>
              </li>
              <li>
                <b>Boosted Organic Search Visibility:</b>
                <ul className="text-xl leading-relaxed list-disc list-inside text-left ml-8">
                  <li>61 visitors from organic search in September</li>
                  <li>1,675 visitors from organic search in December</li>
                </ul>
              </li>
              <li>
                <b>Higher Customer Engagement:</b>
                <ul className="text-xl leading-relaxed list-disc list-inside text-left ml-8">
                  <li>
                    Phone calls from ads grew from 1 to 4 per month. With 3 phone call leads from the first week of January, 2025. 
                  </li>
                  <li>Organic website clicks grew from 41 to 88 by December.</li>
                </ul>
              </li>
              <li>
                <b>Business Growth:</b>
                <ul className="text-xl leading-relaxed list-disc list-inside text-left ml-8">
                  <li>Successfully launched vehicle sales as a new service.</li>
                  <li>
                    Increased ad spending in December, bringing in more
                    customers and conversions.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-left text-2xl my-8">
              <b>What's Next</b>
            </p>
            <p className="text-left text-xl mb-4">
              We’re now working to keep HEM Automotive on their growth path
              with:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside text-left">
              <li>
                Refining ad campaigns to target vehicle buyers more effectively.
              </li>
              <li>Using analytics to uncover more opportunities for growth.</li>
              <li>Ensuring consistent branding across all new services.</li>
              <li>Implementing customer retention strategies.</li>
            </ul>
          </div>
        </div>
        <p className="text-2xl my-8">
          <b>The Outcome</b>
        </p>
        <p className="text-xl mb-4">
          Thanks to their revamped brand and online presence, HEM Automotive is
          now becoming a trusted name in both auto repair and vehicle sales in their market. They’ve seen
          measurable growth in website traffic, customer engagement, and
          business opportunities.
        </p>
        <p className="text-2xl my-8">
          <b>What This Means for You</b>
        </p>
        <p className="text-xl mb-4">
          If you’ve been thinking about growing your shop’s brand, improving
          your online presence, or expanding your services, we can help. Just
          like we did for HEM Automotive, we’ll create a strategy that works for
          your business and helps you achieve your goals.
        </p>
      </motion.section>
    </div>
    {/*
      4. Brand Foundations Section
      - Differentiating yourself from template-based solutions, similar to "true custom" vs. "template" 
        in the example pages.
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          Foundational Elements: Building Your Brand Beyond Just a Logo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={BrandStoryImage}
              alt="Brand Story"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="text-xl leading-relaxed">
              <p className="font-bold mb-4">
                Your Brand Story: The Heart of Your Business
              </p>
              <p className="mb-4 text-left">
                Every great brand has a story that inspires trust and
                connection. We work with you to uncover the “why” behind your
                shop or dealership—what motivates you, what sets you apart, and
                how you want to impact your community and customers. When your
                mission and culture are clearly defined, it’s easier to create
                consistent, authentic messaging that resonates with customers at
                every touchpoint.
              </p>
              <p className="mb-4 text-center">
                <b>Why it matters:</b> Customers connect with stories, not just
                services. Your story becomes the foundation for building loyalty
                and trust.
              </p>
            </div>
          </div>
          <div>
            <img
              src={PositioningImage}
              alt="Brand Positioning"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="text-xl leading-relaxed">
              <p className="font-bold mb-4">
                Your Brand Positioning: Stand Out, Stay Memorable
              </p>
              <p className="mb-4 text-left">
                Your positioning defines where your shop stands in the market
                and in the minds of your customers. We fine-tune your messaging,
                identify your unique value, and ensure you’re not just another
                option but <b>the option </b>for vehicle owners who value
                quality, reliability, and expertise. From understanding your
                competition to shaping a brand voice that feels authentic and
                professional, we make sure you’re positioned for success.
              </p>
              <p className="mb-4 text-center">
                <b>Why it matters:</b> Clear positioning helps you attract your
                ideal customers, whether you’re offering auto repairs, vehicle
                sales, or both.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
    {/*
      5. Video Placeholder
      - Similar to how you show a process or brand story video in other examples.
    */}
    <div className="bg-light-primary dark:bg-dark-primary">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          Our Consulting Process in Action
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src={VideoPlaceholder}
            alt="Video Placeholder"
            className="rounded-lg shadow-lg w-[75%]"
          />
        </div>
        <div className="text-xl leading-relaxed max-w-4xl mx-auto">
          <p>
            Wondering how we help shops like yours stand out and grow? Watch
            this short overview of our hands-on process. From getting to know
            your business and understanding your competition to crafting your
            unique story and rolling out your brand, we make sure you’re
            involved every step of the way.
          </p>
          <p>
            We’re here to uncover what makes your shop special and turn that
            into a powerful brand that connects with your customers and drives
            results.
          </p>
        </div>
      </motion.section>
    </div>
    {/*
      6. Strategies & Timelines
      - Summarize the typical timeline, referencing your consulting phases (like "Discovery," "Analysis," etc.)
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          What to Expect: Our Proven Process for Success
        </h2>
        <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
          When you partner with Stormy Meadowlark, we follow a flexible but
          structured process to ensure your brand and strategy deliver results:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery & Strategy Development',
              text: 'We start by learning about your shop—what makes you unique, your goals, and the challenges you face. Together, we define a clear vision and actionable objectives for your brand.',
            },
            {
              step: '02',
              title: 'Building the Foundation',
              text: 'From uncovering your brand story to crafting a style guide, we develop the tools that ensure your business stands out and stays consistent.',
            },
            {
              step: '03',
              title: 'Implementation & Optimization',
              text: 'Whether it’s launching a website, running ad campaigns, or enhancing your online presence, we execute the strategy and track its performance.',
            },
            {
              step: '04',
              title: 'Ongoing Support & Growth',
              text: 'Branding and strategy are ongoing efforts. We provide continued consulting to adapt to market trends, refine campaigns, and seize new opportunities.',
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
      7. Packages or Engagement Models
      - Like in the examples, show different pricing tiers or ways clients can engage with you.
    */}
    <motion.section
      className="container max-w-4xl mx-auto py-24 text-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-5xl font-extrabold mb-8 text-accent">
        Branding and Strategy Options Built for You
      </h2>
      <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        From a quick brand audit to a full-scale rebrand, our consulting options
        scale with your needs. All packages include discovery, strategy, and
        brand direction, with the option to add ongoing support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* Package 1: Brand Audit */}
        <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Brand Essentials
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$500</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>
              Comprehensive brand audit: visual identity, messaging, and
              consistency.
            </li>
            <li>Competitor and audience analysis tailored to your market.</li>
            <li>Mini brand style guide: colors, fonts, and logo usage.</li>
            <li>Core messaging framework: value proposition and tagline.</li>
            <li>
              30-minute strategy session to review findings and plan next steps.
            </li>
          </ul>
          <p className="italic text-gray-500">
            <b>Who It’s For:</b> Shops seeking a clear, actionable starting
            point for branding improvements.
          </p>
        </div>

        {/* Package 2: Brand Refresh */}
        <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Local Brand Optimization
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$1,000</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in the Brand Essentials Package.</li>
            <li>
              Google Business Profile and directory optimization strategy.
            </li>
            <li>Localized messaging tailored to your community.</li>
            <li>10 branded social media templates for local promotions.</li>
            <li>
              1-hour strategy session to finalize your local branding plan.
            </li>
          </ul>
          <p className="italic text-gray-500">
            <b>Who It’s For:</b> Shops that want to stand out in their local
            market and attract loyal customers.
          </p>
        </div>

        {/* Package 3: Full Rebrand & Strategy */}
        <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Brand Refresh Package
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$2,000</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in the Local Brand Optimization Package.</li>
            <li>
              Updated logo or simple redesign (1 concept with 2 revisions).
            </li>
            <li>
              Refined messaging guide: tone, tagline, and mission statement.
            </li>
            <li>
              Full brand style guide: logo, typography, color palette, and usage
              rules.
            </li>
            <li>Rollout recommendations for your website and social media.</li>
          </ul>
          <p className="italic text-gray-500">
            <b>Who It’s For:</b> Established shops ready to modernize and align
            their brand with growth goals.
          </p>
        </div>

        {/* Package 4: Full Rebrand & Strategy */}
        <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Strategic Brand Alignment
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$3,500</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in the Brand Refresh Package.</li>
            <li>
              Comprehensive audience and competitor analysis for market
              positioning.
            </li>
            <li>Mission, vision, and values workshop with documentation.</li>
            <li>
              Custom rollout strategy for implementing branding across all
              touchpoints.
            </li>
            <li>
              15 branded templates (e.g., business card, flyer, or social media
              graphic).
            </li>
            <li>Two 1-hour strategy sessions post-rollout for refinement.</li>
          </ul>
          <p className="italic text-gray-500">
            <b>Who It’s For:</b> Shops making significant changes or introducing
            new services like vehicle sales.
          </p>
        </div>

        {/* Package 5: Full Rebrand & Strategy */}
        <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Comprehensive Rebrand
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$5,000</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Everything in the Strategic Brand Alignment Package.</li>
            <li>
              Advanced brand guidelines: detailed rules for digital, print, and
              in-shop branding.
            </li>
            <li>
              Marketing strategy for initial brand launch: campaigns, content
              ideas, and timelines.
            </li>
            <li>
              Custom launch materials: up to 25 pieces (e.g., banners,
              brochures, or email templates).
            </li>
            <li>
              Three 1-hour strategy sessions to ensure successful
              implementation.
            </li>
          </ul>
          <p className="italic text-gray-500">
            <b>Who It’s For:</b> Shops expanding services or repositioning their
            brand in a competitive market.
          </p>
        </div>

        {/* Package 6: Full Rebrand & Strategy */}
        <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Long-Term Brand Partnership
          </h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            $1,000/month (6-month minimum)
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>
              Monthly strategy sessions to adapt branding to business changes.
            </li>
            <li>Regular updates to brand messaging and visual identity.</li>
            <li>Annual brand audit with competitor and audience reanalysis.</li>
            <li>Quarterly rollout of new branded templates or assets.</li>
            <li>
              Priority access for custom campaigns or marketing initiatives.
            </li>
          </ul>
          <p className="italic text-gray-500">
            <b>Who It’s For:</b> Shops committed to maintaining and growing a
            strong brand presence with a trusted partner.
          </p>
        </div>
      </div>
      <p className="text-sm mt-8 mx-auto max-w-3xl">
        <strong>Ongoing consulting options</strong> are available for each
        package. We tailor additional services—like competitor pivots, advanced
        marketing plans, and more—based on your unique needs.
      </p>
    </motion.section>

    {/*
      8. Related Services & CTA
      - Similar final CTA as in the examples.
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

// Adjust these to align with your actual route paths and relevant topics
const relatedServices = [
  {
    title: 'Website Design & Development',
    description: '',
    link: '/services/web-development',
  },
  {
    title: 'Digital Marketing & Reputation Management',
    description: '',
    link: '/services/digital-marketing',
  },

  {
    title: 'All-In-One Marketing & Consulting Hub',
    description: '',
    link: '/services/marketing-consulting-hub',
  },
]

export default OngoingPackages;