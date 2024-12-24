import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example images – adjust to your actual file paths
import StrategyImage from '../assets/images/1.png?react';
import BrandStoryImage from '../assets/images/2.png?react';
import PositioningImage from '../assets/images/Desk.png?react';
import CaseStudyBeforeImage from '../assets/images/Before.png?react';
import CaseStudyAfterImage from '../assets/images/Bentley.png?react';
import VideoPlaceholder from '../assets/images/AboutImage.jpg?react';

const OngoingPackages = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
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
        <h1 className="text-center text-5xl max-w-4xl mx-auto font-extrabold mb-12 tracking-wide text-shadow">
          Strategic Consulting & Brand Development
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Transform your business vision into a compelling, cohesive brand. At Stormy Meadowlark, 
          we dig deep to uncover what makes your organization unique, then align every touchpoint—from 
          strategic planning to visual identity—to help you stand out and thrive.
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
    <motion.section
      className="mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent relative rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
          Why Invest in Strategic Consulting & Brand Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl leading-relaxed mb-8">
              Building a recognizable, resonant brand goes far beyond a catchy logo or tagline. It’s:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside mb-8">
              <li><b>Defining your core mission</b> so every internal decision aligns with your vision.</li>
              <li><b>Crafting brand messaging</b> that speaks to your ideal audience and sets you apart.</li>
              <li><b>Establishing a cohesive visual identity</b> that resonates across all platforms.</li>
              <li><b>Maintaining strategic focus</b> through ongoing consulting to adapt and grow.</li>
            </ul>
            <p className="text-xl leading-relaxed">
              Whether you’re starting from scratch or looking to refresh, we help crystallize your brand’s essence, 
              ensuring it resonates with the audiences you most want to reach.
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

    {/*
      3. Case Study Section
      - Show real-world results from a brand development perspective.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-5xl font-extrabold mb-8 tracking-wide">
        Real Results: Rebranding Success Story
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={CaseStudyBeforeImage}
            alt="Before Rebrand"
            className="rounded-lg shadow-lg mb-8"
          />
          <img
            src={CaseStudyAfterImage}
            alt="After Rebrand"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-xl leading-relaxed mb-8">
            One of our clients was struggling with a fragmented brand identity and unclear messaging. 
            After a thorough consultative process, we provided:
          </p>
          <ul className="text-xl leading-relaxed list-disc list-inside">
            <li>A complete brand style guide, including logo redesign and color palette</li>
            <li>Clear, mission-focused messaging that resonated with their audience</li>
            <li>Consistent social media and marketing templates that boosted brand recognition</li>
          </ul>
          <p className="text-xl leading-relaxed mt-8">
            The result? A 40% increase in brand awareness surveys and a renewed sense of purpose across the entire organization.
          </p>
        </div>
      </div>
    </motion.section>

    {/*
      4. Brand Foundations Section
      - Differentiating yourself from template-based solutions, similar to "true custom" vs. "template" 
        in the example pages.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
        Foundational Elements: Beyond Just a Logo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={BrandStoryImage}
            alt="Brand Story"
            className="rounded-lg shadow-lg mb-8"
          />
          <p className="text-xl leading-relaxed">
            Great branding starts with a great story. We delve into the “why” 
            behind your business—what motivates you, what unique value you bring, 
            and how you want to impact the market. When your mission and culture 
            are clearly defined, every touchpoint feels cohesive and authentic.
          </p>
        </div>
        <div>
          <img
            src={PositioningImage}
            alt="Brand Positioning"
            className="rounded-lg shadow-lg mb-8"
          />
          <p className="text-xl leading-relaxed">
            Positioning sets you apart. We refine how you speak to your target 
            market, ensuring that your brand is recognized as not just an option, 
            but <b>the</b> option. From competitive analysis to crafting your 
            brand voice, we make sure you occupy a distinctive space in the minds 
            of your audience.
          </p>
        </div>
      </div>
    </motion.section>

    {/*
      5. Video Placeholder
      - Similar to how you show a process or brand story video in other examples.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
        Our Consulting Process in Action
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src={VideoPlaceholder}
          alt="Video Placeholder"
          className="rounded-lg shadow-lg max-w-md"
        />
      </div>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto">
        Curious how we collaborate to uncover your brand essence? Watch this quick 
        overview of our step-by-step approach. From discovery and competitive 
        research to storytelling and final brand rollout, we keep you involved 
        at every phase.
      </p>
    </motion.section>

    {/*
      6. Strategies & Timelines
      - Summarize the typical timeline, referencing your consulting phases (like "Discovery," "Analysis," etc.)
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
        Consulting Strategies & Typical Timeline
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-4">Discovery & Analysis (1-2 weeks)</h3>
          <p className="text-xl leading-relaxed mb-4">
            We run workshops or interviews to understand your current brand state,
            culture, and market positioning. We also analyze competitors, audience segments, 
            and industry trends to establish a clear baseline.
          </p>
          <h3 className="text-2xl font-bold mb-4">Strategic Alignment (2-3 weeks)</h3>
          <p className="text-xl leading-relaxed">
            Here’s where we refine your mission, vision, core values, and brand messaging. 
            We create strategic roadmaps for marketing, culture, and even expansion, 
            ensuring alignment across the organization.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Brand Identity & Rollout (3-6 weeks)</h3>
          <p className="text-xl leading-relaxed mb-4">
            We develop or refine your visual identity, including logos, color palettes, 
            typography, and brand guidelines. This stage also involves content strategies, 
            brand voice guidelines, and marketing collateral. 
          </p>
          <h3 className="text-2xl font-bold mb-4">Ongoing Consulting (optional)</h3>
          <p className="text-xl leading-relaxed">
            After launch, we stay on board as needed—providing strategic check-ins, 
            growth consulting, and adjustments to keep your brand relevant as the market evolves.
          </p>
        </div>
      </div>
    </motion.section>

    {/*
      7. Packages or Engagement Models
      - Like in the examples, show different pricing tiers or ways clients can engage with you.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-r from-primary to-secondary text-light rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-5xl font-extrabold mb-8">
        Engagement Models to Fit Your Goals
      </h2>
      <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        From a quick brand audit to a full-scale rebrand, our consulting options 
        scale with your needs. All packages include discovery, strategy, and 
        brand direction, with the option to add ongoing support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* Package 1: Brand Audit */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Brand Audit</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$1,500</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Deep-dive review of current brand & positioning</li>
            <li>Competition & audience analysis</li>
            <li>Preliminary recommendations</li>
          </ul>
          <p className="italic text-gray-500">For companies wanting a quick strategic assessment.</p>
        </div>

        {/* Package 2: Brand Refresh */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Brand Refresh</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$5,000</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Comprehensive audit + updated visual identity</li>
            <li>Refined brand messaging and guidelines</li>
            <li>Basic rollout assets (social media, stationery)</li>
          </ul>
          <p className="italic text-gray-500">Great for evolving brands looking to level up.</p>
        </div>

        {/* Package 3: Full Rebrand & Strategy */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Full Rebrand & Strategy</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$12,000+</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>All “Refresh” features + deep strategic consulting</li>
            <li>Mission, vision, values alignment & internal culture doc</li>
            <li>Detailed brand guidelines, marketing launch plan, ongoing support</li>
          </ul>
          <p className="italic text-gray-500">A complete end-to-end solution.</p>
        </div>
      </div>
      <p className="text-sm mt-8 mx-auto max-w-3xl">
        <strong>Ongoing consulting options</strong> are available for each package. 
        We tailor additional services—like competitor pivots, advanced marketing plans, 
        and more—based on your unique needs.
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

    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-light py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-6xl font-extrabold mb-4 text-shadow">
        Ready to Elevate Your Brand?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Contact us today to discuss your consulting needs and explore how we can 
        help shape a bold, authentic brand identity that drives growth and 
        long-term success.
      </p>
      <Link
        to="/contact"
        className="bg-light-secondary text-dark-primary py-4 px-8 rounded-full font-bold text-2xl hover:bg-dark-secondary hover:text-light transition duration-300 transform hover:scale-105"
      >
        Get Started
      </Link>
    </motion.div>
  </div>
);

// Adjust these to align with your actual route paths and relevant topics
const relatedServices = [
  {
    title: 'Web Design & Development',
    description:
      'Transform your fresh brand identity into a stunning, responsive website.',
    link: '/services/web-design-development',
  },
  {
    title: 'Digital Marketing & Campaigns',
    description:
      'Grow your presence with targeted online advertising, SEO, and content strategies.',
    link: '/services/digital-marketing-campaigns',
  },
  {
    title: 'Full-Stack Solutions',
    description:
      'Need a complete ecosystem, from branding to custom applications? We have you covered.',
    link: '/services/custom-solutions',
  },
];

export default OngoingPackages;