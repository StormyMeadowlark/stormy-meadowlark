import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Replace these image imports with your own assets or placeholders
import HeroImage from '../assets/images/1.png?react'
import PainPointImage from '../assets/images/2.png?react'
import CultureImage from '../assets/images/APIIntegrations.png?react'
import TestimonialImage from '../assets/images/Before.png?react'
import ProcessImage from '../assets/images/Bentley.png?react'
import TimelineImage from '../assets/images/Desk.png?react'
import PlaceholderVideo from '../assets/images/DigitalCar.png?react'
import BeforeAfterImage from '../assets/images/Headlights.png?react'


// SAMPLE data for "You Might Be Interested In" section
const relatedServices = [
  {
    title: 'Digital Marketing & Ads',
    description:
      'Target local drivers and boost revenue with laser-focused ad campaigns on Google, Meta, YouTube, and vehicle platforms.',
    link: '/services/digital-marketing-campaigns',
  },
  {
    title: 'Full-Stack Web Solutions',
    description:
      'Build a modern, mobile-friendly website that integrates seamlessly with CRMs, inventory systems, or any advanced back-end tools.',
    link: '/services/web-design-development',
  },
  {
    title: 'Reputation & Culture Consulting',
    description:
      'Cultivate a team environment that draws top talent and fosters customer loyalty, backed by strategic branding and leadership training.',
    link: '/services/reputation-culture-consulting',
  },
]

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
        {/* Background image */}
        <img
          src={HeroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-8 tracking-wide text-shadow">
            Your All-In-One Marketing & Consulting Hub
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Stop juggling multiple vendors. Let Stormy Meadowlark handle your
            website, ads, social media, reputation management, and even internal
            culture—so you can focus on delivering top-tier service at your shop
            or dealership.
          </p>
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
      <motion.section
        className="container mx-auto py-24 px-6 text-center bg-light-primary dark:bg-dark-secondary"
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
            <h2 className="text-4xl font-extrabold mb-6">Sound Familiar?</h2>
            <ul className="list-disc list-inside text-xl leading-relaxed space-y-4 pl-4 mb-8">
              <li>
                You have **barely any time** to update your website or reply to
                online reviews.
              </li>
              <li>
                You’ve **tried** multiple freelancers—one for web design, one
                for ads, another for social media—and **nothing is consistent**.
              </li>
              <li>
                Your **shop culture** isn’t showcased online. Potential
                customers don’t see why you’re special.
              </li>
              <li>
                You want **more leads and foot traffic** but keep hearing
                “traditional marketing is dead” and “digital is the future.”
              </li>
            </ul>
            <p className="text-xl leading-relaxed">
              If any of this strikes a chord, you’re in the right place. Our
              all-in-one approach aligns every piece of your digital presence,
              from ads to branding to culture, for maximum impact.
            </p>
          </div>
        </div>
      </motion.section>

      {/*
        SECTION 3: THE SOLUTION (All-In-One Approach)
      */}
      <motion.section
        className="container mx-auto py-24 px-6 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8">
          Our Comprehensive, Streamlined Solution
        </h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-12">
          Imagine having a single partner that handles every aspect of your
          shop’s online and operational growth. From a stunning, mobile-first
          website to laser-focused ad campaigns and from in-depth branding to
          internal culture coaching—Stormy Meadowlark becomes your go-to
          resource. We orchestrate all moving parts so your team can stay
          focused on servicing vehicles and satisfying customers.
        </p>
        <motion.div
          className="mb-8"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={BeforeAfterImage}
            alt="Before and After Example"
            className="rounded-lg shadow-2xl mx-auto"
          />
        </motion.div>
        <p className="text-md italic max-w-3xl mx-auto">
          <b>Before & After:</b> Disconnected marketing efforts vs. a unified
          brand presence that turns online visitors into loyal, returning
          customers.
        </p>
      </motion.section>

      {/*
        SECTION 4: CULTURE & IDENTITY
      */}
      <motion.section
        className="container mx-auto py-24 px-6 bg-light-primary dark:bg-dark-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold mb-6">
              Infuse Your Culture into Every Customer Touchpoint
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Anybody can churn out ads. But thriving shops showcase their
              culture—what sets them apart from competitors. We help define your
              core values, leadership style, and brand identity, then weave it
              into your ads, social content, and customer interactions. When
              customers **feel** your shop’s genuine passion and positivity,
              they trust you more and come back for future services.
            </p>
            <p className="text-xl leading-relaxed font-semibold">
              Stand out not just with your services, but with who you are.
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

      {/*
        SECTION 5: TESTIMONIALS
      */}
      <motion.section
        className="container mx-auto py-24 px-6 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-4xl font-extrabold mb-8">
          Trusted by Busy Auto Pros Everywhere
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
              “We were juggling four different providers for web, ads,
              reputation, and design. Stormy Meadowlark brought it all under one
              roof. Our monthly calls are a breeze and our revenue has jumped
              35% since we started. We finally feel like we have a consistent
              brand message—customers notice it, and so do our employees.”
            </p>
            <p className="font-bold text-lg">
              — Samantha, Multi-Bay Shop Owner
            </p>
          </div>
        </div>
      </motion.section>

      {/*
        SECTION 6: OUR PROCESS
      */}
      <motion.section
        className="container mx-auto py-24 px-6 text-center bg-light-primary dark:bg-dark-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-4xl font-extrabold mb-8">
          How the Partnership Works
        </h2>
        <div className="flex justify-center mb-8">
          <motion.img
            src={ProcessImage}
            alt="Our 4-Step Process"
            className="rounded-lg shadow-lg max-w-md"
            whileHover={{ scale: 1.02 }}
          />
        </div>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          We begin with a thorough discovery session to map out your shop’s
          goals and biggest challenges. From there, our team crafts a unified
          plan—covering website modernization, ad channels, content strategy,
          and culture coaching. Every month, we assess performance data, adjust
          strategies, and keep you fully in the loop.
        </p>
        <p className="italic text-md">
          <b>Pro Tip:</b> We also offer ongoing leadership and staff training to
          ensure the changes we implement online match the amazing experience
          customers receive in person.
        </p>
      </motion.section>

      {/*
        SECTION 7: TIMELINE
      */}
      <motion.section
        className="container mx-auto py-24 px-6 bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-4xl font-extrabold mb-8">
          Typical Timeline to Launch
        </h2>
        <motion.div whileHover={{ scale: 1.02 }}>
          <img
            src={TimelineImage}
            alt="Implementation Timeline"
            className="rounded-lg shadow-2xl mx-auto mb-8 max-w-xl"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">Week 1</h3>
            <p>Discovery call, audits, finalize scope & strategy.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Weeks 2–3</h3>
            <p>Website refresh/build initiated; ad structures planned.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Weeks 4–6</h3>
            <p>
              Ads go live, social content published, culture sessions begin.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Ongoing</h3>
            <p>Monthly optimization, reporting, expansions, and new ideas.</p>
          </div>
        </div>
      </motion.section>

      {/*
        SECTION 8: PACKAGES
      */}
      <motion.section
        className="container mx-auto py-24 px-6 text-center bg-light-primary dark:bg-dark-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-5xl font-extrabold mb-8">
          Our 6 Comprehensive Packages
        </h2>
        <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Each package bundles everything you need—website, ads, content,
          reputation, and culture guidance.
          <b> None of our services are free or trial-based.</b>
          Your investment covers professional deliverables you can track and
          measure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* PACKAGE 1 */}
          <motion.div
            className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Essentials</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $1,500/mo
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Single-Page or Basic Website Refresh</li>
              <li>Light Google/Meta Ads Setup & Optimization</li>
              <li>Monthly Consults on Operations & Culture</li>
              <li>2 Social Posts/Month + Basic Reputation Monitoring</li>
            </ul>
            <p className="text-md italic text-gray-500">
              Ideal for smaller shops or new dealerships needing a professional
              start.
            </p>
          </motion.div>

          {/* PACKAGE 2 */}
          <motion.div
            className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Momentum</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $2,500/mo
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Expanded Website (up to 5 pages)</li>
              <li>Google & Meta Ads + Basic Retargeting</li>
              <li>Monthly Content Updates (Blogs, Promos)</li>
              <li>4 Social Posts/Month + Reputation & Branding Advice</li>
            </ul>
            <p className="text-md italic text-gray-500">
              Perfect for achieving steady growth and building brand
              consistency.
            </p>
          </motion.div>

          {/* PACKAGE 3 */}
          <motion.div
            className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Accelerator</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $4,000/mo
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Full Website Build / Advanced Refresh</li>
              <li>Google, Meta, & YouTube Ads with Ongoing Optimization</li>
              <li>Bi-Weekly Blog/Newsletter + 2 Social Posts/Week</li>
              <li>Comprehensive Reputation & Review Strategy</li>
              <li>Culture/Team Workshops for Alignment</li>
            </ul>
            <p className="text-md italic text-gray-500">
              Great for shops scaling up quickly in competitive markets.
            </p>
          </motion.div>

          {/* PACKAGE 4 */}
          <motion.div
            className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Enterprise</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $6,000/mo
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                Custom Website w/ Backend Integrations (e.g. Inventory, CRM)
              </li>
              <li>
                Omnichannel Ads (Google, Meta, YouTube, Vehicle Platforms)
              </li>
              <li>
                Weekly Content (Blogs, Email, Flyers), 3 Social Posts/Week
              </li>
              <li>Advanced Reputation Monitoring & Review Response</li>
              <li>Leadership & Cultural Consulting</li>
            </ul>
            <p className="text-md italic text-gray-500">
              Tailored for multi-location shops or larger dealerships looking
              for wide-reaching impact.
            </p>
          </motion.div>

          {/* PACKAGE 5 */}
          <motion.div
            className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Elite</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $8,500/mo
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Advanced Website + Custom Backend (CRM, APIs)</li>
              <li>Vehicle-Specific Ad Campaigns w/ Marketplace Integrations</li>
              <li>Weekly Blogs, Email Campaigns, Monthly Whitepapers</li>
              <li>Daily Social Posting Across Multiple Platforms</li>
              <li>Automated Review Systems & Deep Culture Training</li>
            </ul>
            <p className="text-md italic text-gray-500">
              For high-volume shops and dealerships craving state-of-the-art
              tech and brand presence.
            </p>
          </motion.div>

          {/* PACKAGE 6 */}
          <motion.div
            className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg text-left relative"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">
              Custom Full-Stack
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              Starting at $12,000/mo
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Complete Digital Ecosystem (Website + Advanced Backend)</li>
              <li>Full Multi-Channel Advertising & Integrations</li>
              <li>In-Depth Video, Print, & Digital Content Creation</li>
              <li>Dedicated Social & Reputation Manager</li>
              <li>Executive-Level Culture, Branding, & Growth Consulting</li>
            </ul>
            <p className="text-md italic text-gray-500">
              The ultimate package for total digital and cultural
              transformation.
            </p>
          </motion.div>
        </div>
        <p className="text-sm mt-8 mx-auto max-w-3xl text-left">
          <strong>Note:</strong> Final prices depend on your project scope.
          <b> We do not offer free trials or unpaid work.</b>
          If you prefer a custom selection (e.g., ads-only or culture
          consulting), ask about our à la carte options.
        </p>
      </motion.section>

      {/*
        SECTION 9: FAQ
      */}
      <motion.section
        className="container mx-auto py-24 px-6 bg-gradient-to-r from-primary to-secondary text-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-2xl font-bold mb-2">
              How quickly will I see results?
            </h3>
            <p className="text-xl leading-relaxed">
              You’ll likely notice initial boosts in engagement and leads within
              a few weeks. More substantial outcomes—like a consistent increase
              in monthly revenue—often appear after 2–3 months of strategic
              refinement and data-driven adjustments.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-2xl font-bold mb-2">
              Can I switch packages later?
            </h3>
            <p className="text-xl leading-relaxed">
              Absolutely. As your business grows, we can scale or adapt your
              plan. Many clients start with “Momentum” and later upgrade to
              “Accelerator” or “Enterprise” as they expand.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-2xl font-bold mb-2">
              Do I need to provide my own content?
            </h3>
            <p className="text-xl leading-relaxed">
              Our team is equipped to create content from scratch—blogs, videos,
              social images, etc. If you have existing content or brand assets,
              we’ll gladly integrate them into the strategy.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/*
        SECTION 10: YOU MIGHT BE INTERESTED IN
      */}
      <motion.section
        className="container mx-auto py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h3 className="text-5xl font-gothic-bold text-center mb-8 text-shadow">
          You Might Be Interested In
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((related) => (
            <motion.div
              key={related.title}
              className="p-6 bg-light-accent dark:bg-dark-accent text-dark-primary dark:text-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl font-gothic-bold mb-2">
                {related.title}
              </h4>
              <p className="leading-relaxed mb-4">{related.description}</p>
              <Link to={related.link} className="underline hover:text-primary">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/*
        FINAL CTA
      */}
      <motion.section
        className="bg-light-primary dark:bg-dark-primary text-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-5xl font-extrabold mb-4">
          Ready to Drive Real Growth?
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Don’t let scattered marketing and half-baked branding hold your
          automotive business back. Stormy Meadowlark’s all-in-one solutions
          ensure every aspect of your digital presence works in harmony—while
          you focus on the shop floor or sales lot.
        </p>
        <Link
          to="/contact"
          className="bg-accent text-light-text dark:text-dark-text px-10 py-4 text-2xl font-bold rounded-full hover:bg-light-hover dark:hover:bg-cta-hover transition-colors"
        >
          Book a Free Discovery Call
        </Link>
      </motion.section>
    </div>
  )
}

export default AllInOneSolutionsLanding
