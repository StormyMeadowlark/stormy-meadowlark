import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example images – adjust to your actual file paths
import WebDesignImage from '../assets/images/ResponsiveWebDevelopment.png?react';
import TemplateSite from '../assets/images/TemplateSite.png?react';
import MobileFirstImage from '../assets/images/ResponsiveWebDesign.png?react';
import CustomSite from '../assets/images/CustomSite.png?react';
import SEODiagramImage from '../assets/images/SEOImage.png?react';
import Integrations from '../assets/images/Integrations.png?react';
import TrueCustomImage from '../assets/images/DigitalCar.png?react';
import TemplateComparisonImage from '../assets/images/Headlights.png?react';
import VideoPlaceholder from '../assets/images/ProcessWebsite.jpg?react';

const ApiAccess = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic p-3">
    {/* 
      Main Header 
      - Straightforward introduction to your services.
    */}
    <motion.div
      className="relative mx-auto py-40 text-center rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 bg-pattern-dots dark:bg-pattern-grid opacity-20 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-center text-4xl md:text-3xl lg:text-5xl max-w-4xl mx-auto font-extrabold mb-12 tracking-wide text-shadow text-accent ">
          Web Design & Development Tailored for Your Success
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          At Stormy Meadowlark, we create web solutions that are as unique as
          your business. From visually stunning, mobile-first websites to
          custom-built applications, we empower your brand with tools designed
          for growth. Our designs ensure seamless experiences across mobile
          phones and larger screens, combining functionality with style. Whether
          you're a local shop or an established enterprise, our custom-built
          solutions and thoughtful strategies help your business stand out in
          today’s digital world.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
        >
          Start Your Dream Site Today
        </Link>
      </div>
    </motion.div>

    {/*
      Why Choose Us Section
      - Explains your value proposition briefly.
      - "Brevity vs. Detail": Enough to entice, not so much as to overwhelm.
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent relative rounded-lg shadow-lg">
      <motion.section
        className="py-24 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide text-accent">
            Why Stormy Meadowlark?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xl leading-relaxed mb-8">
                We recognize that every business is unique, and your website
                should be too. That’s why we focus on delivering:
              </p>
              <ul className="text-xl leading-relaxed list-disc list-inside">
                <li>
                  <b>Mobile-first designs</b> that look stunning and function
                  seamlessly on any device.
                </li>
                <li>
                  <b>Custom-built solutions</b> tailored to your specific goals
                  and audience.
                </li>
                <li>
                  <b>SEO-driven strategies</b> to enhance visibility and search
                  rankings.
                </li>
                <li>
                  <b>Scalable applications</b> for businesses needing advanced
                  features or integrations.
                </li>
              </ul>
              <div className="text-xl leading-relaxed my-8">
                We don’t just build websites—we create tools for growth that
                evolve with your business.
              </div>
            </div>
            <div>
              <img
                src={WebDesignImage}
                alt="Success"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>

    {/*
      Impact Case Study
      - Best practice: Show real-world proof. 
      - This also helps reassure prospects about your timelines and results.
    */}
    <div className="bg-light-primary dark:bg-dark-primary">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide text-accent">
          Real Results: HEM Automotive Case Study
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={MobileFirstImage}
              alt="Impact"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-xl leading-relaxed mb-8 text-left">
              When HEM Automotive partnered with Stormy Meadowlark, they needed
              a professional online presence to showcase their 11 core services
              and build visibility. We delivered:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside text-left">
              <li>
                A sleek, mobile-first website tailored to highlight their
                services effectively..
              </li>
              <li>
                A future-ready platform designed to integrate tools like
                appointment booking, customer education, and a sales system.
              </li>
              <li>
                SEO strategies to create a solid foundation for online growth.
              </li>
            </ul>
            <p className="text-xl leading-relaxed mt-8 text-left">
              Today, HEM Automotive has a modern, professional site, laying the
              groundwork for increased customer engagement and advanced features
              in the future.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
    {/*
      True Custom vs. Template
      - Explains your uniqueness. 
      - Another best practice: clarity on how you differ from competitors.
    */}
    <div className="  bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
      <motion.section
        className="max-w-4xl mx-auto py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          Custom Websites vs. Template-Based Solutions: Finding the Right Fit
        </h2>
        <div className="text-xl leading-relaxed mb-8">
          When it comes to building your shop’s online presence, both custom
          websites and template-based solutions have their place. Here’s how
          they differ:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={CustomSite}
              alt="True Custom"
              className="rounded-lg shadow-lg mb-8"
            />
            <p className="text-xl leading-relaxed text-left">
              <b>Truly Custom Websites</b>
              <ul className="list-disc list-inside">
                <li>
                  Built from scratch to match your brand, audience, and specific
                  needs.
                </li>
                <li>
                  Fully scalable, offering integrations like appointment booking
                  and customer portals.
                </li>
                <li>A long-term investment that evolves with your business.</li>
              </ul>
            </p>
          </div>
          <div>
            <img
              src={TemplateSite}
              alt="Template Comparison"
              className="rounded-lg shadow-lg mb-8"
            />
            <p className="text-xl leading-relaxed text-left">
              <b>Template-Based Websites</b>
              <ul className="list-disc list-inside">
                <li>Faster to launch and budget-friendly.</li>
                <li>
                  Pre-designed layouts offer a starting point for smaller shops
                  or those new to digital marketing.
                </li>
                <li>Limited flexibility for scaling or advanced features.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="text-xl mt-8">
          At Stormy Meadowlark, we help you decide what’s best for your
          shop—whether starting with a template or investing in a fully custom
          build. The choice depends on where you are now and where you want to
          go.
        </div>
      </motion.section>
    </div>

    {/*
      Video Placeholder
      - Could embed a real video or process walkthrough.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8 text-accent">
        A Glimpse at Our Process
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src={VideoPlaceholder}
          alt="Video Placeholder"
          className="rounded-lg shadow-lg w-[75%]"
        />
      </div>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto">
        At Stormy Meadowlark, we believe building a website is a collaboration,
        not just a project. From brainstorming ideas to the final launch, we’re
        with you every step of the way. Together, we’ll create a site that
        captures your shop’s personality, engages your customers, and sets you
        up for growth. Whether it’s planning, designing, or testing, every
        decision is made with your goals in mind to deliver a website that works
        as hard as you do.
      </p>
    </motion.section>

    {/*
      NEW SECTION: Technologies & Timeline
      - Integrates best practices via inline comments explaining:
        (1) "Brevity vs. detail": Enough but not too much
        (2) "Visual Aids": Could use logos or timeline graphics if you have them
        (3) "Reassurance": Timelines can vary
        (4) "Case Studies Mention": Reference real clients if you want more credibility
    */}
    <div className="bg-light-primary dark:bg-dark-primary">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          Our Technology Stack & Typical Timeline
        </h2>

        {/* 
        Technologies 
        - "Brevity vs. Detail": List only the core or most relevant. 
        - Mention you can expand or reference a blog for deeper technical detail.
      */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">Technologies We Use</h3>
            <p className="text-xl leading-relaxed mb-4">
              we use tools built for busy shop owners who need reliability and
              performance.
            </p>
            <ul className="list-disc list-inside text-left mb-4 text-xl">
              <li>
                React & Firebase: Fast-loading, responsive websites that work
                perfectly across devices.
              </li>
              <li>
                Node.js & Express: Ensuring smooth and powerful back-end
                functionality.
              </li>
              <li>MongoDB: Keeping your data organized and accessible.</li>
              <li>
                Tailwind CSS: Delivering designs that look sharp and modern.
              </li>
              <li>
                Docker & Kubernetes: (Coming Soon) Optimizing speed and
                scalability for your site’s future growth.
              </li>
            </ul>
            <p className="text-md italic">
              We choose these tools to create solutions that are as hardworking
              as your business.
            </p>
          </div>

          {/*
          Timeline 
          - "Reassurance": Timelines can shift based on scope changes
          - Show approximate durations by phase, which builds trust.
        */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Timeline for a Custom Website
            </h3>
            <p className="text-xl leading-relaxed mb-4">
              A truly custom website, built from the ground up, requires time
              and care to reflect your shop’s unique identity and goals. Here’s
              a realistic timeline for our most expensive package:
            </p>
            <ul className="list-disc list-inside text-left mb-4 text-xl">
              <li>
                <b>Discovery & Strategy (4–6 weeks):</b> Defining goals,
                researching your audience, and setting the project’s foundation.
              </li>
              <li>
                <b>Design Phase (6–8 weeks):</b> Creating wireframes, mockups,
                and visuals tailored to your brand.
              </li>
              <li>
                <b>
                  Content Creation (6–8 weeks): Developing custom images,
                  videos, and SEO-driven text.
                </b>
              </li>
              <li>
                <b>Development (10–12 weeks):</b> Building, testing, and
                refining your site for seamless functionality.
              </li>
              <li>
                <b>Content Integration (2-3 weeks):</b> Optimize the site with
                text, images, and videos.
              </li>
              <li>
                <b>Pre-Launch Testing (2–3 weeks):</b>Compatibility testing, SEO
                metadata and site maps, debugging and revisions
              </li>
              <li>
                <b>Launch (3–4 weeks):</b> Final reviews, deployment, training
                sessions, final tweaks
              </li>
              <li>
                <b>Post-Launch Optimization (4–6 weeks, optional)</b>Review
                analytics to track user engagment, implement updates, provide
                ongoing support and maintenance.
              </li>
            </ul>
            <p className="text-md italic">
              Timelines can vary based on complexity or new feature requests.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
    {/*
      What is SEO Section
      - Another good place to weave in real-world examples or data 
        if you want more detail.
    */}
    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          What is SEO and How Does It Work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl leading-relaxed mb-8">
              SEO, or Search Engine Optimization, is the process of improving
              your website’s visibility on search engines like Google. It
              involves:
            </p>
            <ul className="list-disc list-inside text-left text-xl">
              <li>Optimizing keywords that match customer searches.</li>
              <li>Ensuring your website loads quickly and performs well.</li>
              <li>
                Improving the structure of your website for easy navigation.
              </li>
              <li>Creating engaging and relevant content for your audience.</li>
            </ul>
            <Link
              to="/blog/what-is-seo"
              className="underline text-accent hover:text-accent-hover mt-8 inline-block"
            >
              Read More in Our Blog
            </Link>
          </div>
          <div>
            <img
              src={SEODiagramImage}
              alt="SEO Diagram"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>
    </div>
    {/*
      Advanced Integrations
      - Another chance to highlight which technologies handle these integrations
      - "Visual Aids": FullStackImage used for demonstration
    */}
    <div className="bg-light-primary dark:bg-dark-primary ">
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-accent">
          Taking Your Website Further with Integrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl leading-relaxed mb-6">
              We’re building toward powerful integrations, including:
            </p>
            <ul className="list-disc list-inside text-left text-xl mb-6">
              <li>CRMs for streamlined customer data management.</li>
              <li>Analytics tools to track performance and ROI.</li>
              <li>
                Phone and SMS services for immediate client communication.
              </li>
              <li>Payment gateways and e-commerce solutions.</li>
            </ul>
            <p className="text-xl leading-relaxed">
              These tools are part of our vision to take your website to the
              next level, tailored for businesses ready to scale.
            </p>
          </div>
          <div>
            <img
              src={Integrations}
              alt="Advanced Integrations"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>
    </div>
    {/*
      Packages Section
      - If package cost <= $1000, show one-time cost + monthly maintenance.
      - If package cost > $1000, show monthly financing cost + mention after-2yr maintenance.
    */}
    <div>
      <motion.section
        className="container max-w-4xl mx-auto py-24 text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-accent">
          Website Solutions Tailored to Your Shop’s Growth
        </h2>
        <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          From simple landing pages for lead generation to fully custom digital
          platforms, Stormy Meadowlark delivers solutions tailored to your
          shop’s growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Package 1: Launch Pad (<= $1000) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Launch Pad</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">$300</p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>A single-page design for lead generation or advertising.</li>
              <li>Mobile-friendly layout, optimized for quick engagement</li>
              <li>Basic SEO setup to increase visibility.</li>
            </ul>
            <p className="text-md font-semibold mb-2">
              Maintenance: $25/month <br />
              <span className="text-sm italic">
                Security updates and small content tweaks.
              </span>
            </p>
            <p className="italic text-gray-500 dark:text-dark-text">
              Perfect for creating an immediate online presence that drives
              action.
            </p>
          </div>

          {/* Package 2: Growth Starter (<= $1000) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Starter Package
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">$750</p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Up to 3 pages with custom mobile-first design</li>
              <li>
                SEO setup and local listings for better search visibility.
              </li>
            </ul>
            <p className="text-md font-semibold mb-2">
              Maintenance: $30/month
              <br />
              <span className="text-sm italic">
                Regular updates, monitoring, and security.
              </span>
            </p>
            <p className="italic text-gray-500 dark:text-dark-text">
              Ideal for small shops starting to establish their digital
              presence.
            </p>
          </div>

          {/* Package 3: Professional (> $1000) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Professional
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $63/mo over 24 months
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Up to 5 pages with responsive design and brand alignment.</li>
              <li>
                On-page SEO and basic analytics setup to track performance.
              </li>
            </ul>
            <p className="text-md font-semibold mb-2">
              <span className="underline">After 2 years:</span> $50/month
              maintenance <br />
              <span className="text-sm italic">
                Comprehensive updates and support.
              </span>
            </p>
            <p className="italic text-gray-500 dark:text-dark-text">
              Designed for growing businesses looking to stand out.
            </p>
          </div>

          {/* Package 4: Premium (> $1000) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Premium</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $104/mo over 24 months
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Up to 10 pages, tailored for your shop’s needs.</li>
              <li>Initial integrations like CRM or analytics tools.</li>
              <li>Speed and performance optimization.</li>
            </ul>
            <p className="text-md font-semibold mb-2">
              <span className="underline">After 2 years:</span> $75/month
              maintenance <br />
              <span className="text-sm italic">
                Advanced security, updates, and patches.
              </span>
            </p>
            <p className="italic text-gray-500 dark:text-dark-text">
              Great for businesses expanding their online capabilities.
            </p>
          </div>

          {/* Package 5: Enterprise (> $1000) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Enterprise</h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $208/mo over 24 months
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>
                10+ pages with advanced integrations (e.g., CRM, analytics,
                phone).
              </li>
              <li>
                Comprehensive SEO, ongoing optimization, and security
                enhancements.
              </li>
            </ul>
            <p className="text-md font-semibold mb-2">
              <span className="underline">After 2 years:</span> $100/month
              maintenance <br />
              <span className="text-sm italic">
                Priority support, advanced analytics, site expansions
              </span>
            </p>
            <p className="italic text-gray-500 dark:text-dark-text">
              For businesses ready for a scalable, feature-rich solution.
            </p>
          </div>

          {/* Package 6: Custom Full-Stack (> $1000) */}
          <div className="p-8 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Custom Full-Stack Development
            </h3>
            <p className="text-3xl font-extrabold mb-4 text-accent">
              $417/mo over 24 months
            </p>

            <ul className="list-disc list-inside text-left mb-4">
              <li>Fully bespoke front-end & back-end</li>
              <li>API integrations with and complex features</li>
            </ul>
            <p className="text-md font-semibold mb-2">
              <span className="underline">After 2 years:</span> $150/month
              maintenance <br />
              <span className="text-sm italic">
                Comprehensive “Site IT” for your full-stack solution
              </span>
            </p>
            <p className="italic text-gray-500 dark:text-dark-text">
              Built for businesses ready to invest in a fully customized digital
              ecosystem.
            </p>
          </div>
        </div>

        <p className="text-sm mt-8 mx-auto max-w-3xl">
          <strong>Maintenance plans</strong> are optional but highly recommended
          to keep your site updated, secure, and running smoothly. Cancel
          anytime.
        </p>
      </motion.section>
    </div>
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

const relatedServices = [
    {
    title: 'Strategic Consulting & Brand Development',
    description:
      '',
    link: '/services/strategy-consulting',
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
]

export default ApiAccess;
