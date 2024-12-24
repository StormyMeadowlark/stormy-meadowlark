import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example images – adjust to your actual file paths
import WebDesignImage from '../assets/images/Desk.png?react';
import FullStackImage from '../assets/images/1.png?react';
import MobileFirstImage from '../assets/images/2.png?react';
import SEODiagramImage from '../assets/images/AboutImage.jpg?react';
import ImpactImage from '../assets/images/Before.png?react';
import SuccessImage from '../assets/images/Bentley.png?react';
import TrueCustomImage from '../assets/images/DigitalCar.png?react';
import TemplateComparisonImage from '../assets/images/Headlights.png?react';
import VideoPlaceholder from '../assets/images/SolarAthletricsRebrand.png?react';

const ApiAccess = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
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
        <h1 className="text-center text-5xl max-w-4xl mx-auto font-extrabold mb-12 tracking-wide text-shadow">
          Web Design & Development Tailored for Your Success
        </h1>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          At Stormy Meadowlark, we create web solutions that are as unique as your business. From visually stunning, mobile-first websites to full-stack applications, we empower your brand with tools designed for growth. Whether you're a local shop or an established enterprise, our custom-built designs and strategies ensure you stand out in today’s digital landscape.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
        >
          Start Your Project Today
        </Link>
      </div>
    </motion.div>

    {/*
      Why Choose Us Section
      - Explains your value proposition briefly.
      - "Brevity vs. Detail": Enough to entice, not so much as to overwhelm.
    */}
    <motion.section
      className="mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent relative rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dots opacity-10 z-0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
          Why Stormy Meadowlark?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xl leading-relaxed mb-8">
              We understand the challenges businesses face in standing out online. That’s why we prioritize:
            </p>
            <ul className="text-xl leading-relaxed list-disc list-inside">
              <li><b>Mobile-first designs</b> that look amazing on any device.</li>
              <li><b>Custom solutions</b> tailored to your goals and audience.</li>
              <li><b>Comprehensive SEO strategies</b> to improve visibility and rankings.</li>
              <li><b>Full-stack applications</b> for businesses requiring advanced features.</li>
            </ul>
          </div>
          <div>
            <img src={SuccessImage} alt="Success" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </motion.section>

    {/*
      Impact Case Study
      - Best practice: Show real-world proof. 
      - This also helps reassure prospects about your timelines and results.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <h2 className="text-5xl font-extrabold mb-8 tracking-wide">
        Real Results: HEM Automotive Case Study
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={ImpactImage}
            alt="Impact"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-xl leading-relaxed mb-8">
            When HEM Automotive partnered with us, they needed a complete overhaul of their online presence. We delivered:
          </p>
          <ul className="text-xl leading-relaxed list-disc list-inside">
            <li>A sleek, mobile-first website that doubled their online engagement.</li>
            <li>SEO strategies that boosted their Google rankings by 35%.</li>
            <li>Custom appointment booking features that increased conversions by 20%.</li>
          </ul>
          <p className="text-xl leading-relaxed mt-8">
            Today, HEM Automotive enjoys higher visibility, more customer inquiries, and a strong digital foundation to support future growth.
          </p>
        </div>
      </div>
    </motion.section>

    {/*
      True Custom vs. Template
      - Explains your uniqueness. 
      - Another best practice: clarity on how you differ from competitors.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
        True Custom Design vs. “Custom” Templates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={TrueCustomImage}
            alt="True Custom"
            className="rounded-lg shadow-lg mb-8"
          />
          <p className="text-xl leading-relaxed">
            A truly custom website is built from the ground up—every element is tailored to your brand, your audience, and your specific goals. This means complete control over functionality, integrations, and user experience.
          </p>
        </div>
        <div>
          <img
            src={TemplateComparisonImage}
            alt="Template Comparison"
            className="rounded-lg shadow-lg mb-8"
          />
          <p className="text-xl leading-relaxed">
            Many agencies offer “custom” solutions but rely heavily on templates or themes with minimal tweaks. While this can be faster initially, it often limits your growth and flexibility. At Stormy Meadowlark, we believe in building a foundation you can scale.
          </p>
        </div>
      </div>
    </motion.section>

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
      <h2 className="text-4xl font-extrabold mb-8">
        A Glimpse at Our Process
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src={VideoPlaceholder}
          alt="Video Placeholder"
          className="rounded-lg shadow-lg max-w-md"
        />
      </div>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto">
        Discover how our team collaborates with you every step of the way—from planning and design to development and testing. We ensure your site is visually stunning, fully functional, and optimized for search engines.
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
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
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
            We build sites and applications using modern, reliable technologies for speed, scalability, and security:
          </p>
          <ul className="list-disc list-inside text-left mb-4 text-xl">
            <li>React & Next.js for front-end development</li>
            <li>Node.js & Express for back-end services</li>
            <li>Tailwind CSS for fast, modern styling</li>
            <li>Databases like MongoDB or PostgreSQL</li>
            <li>AWS or DigitalOcean for hosting & cloud solutions</li>
          </ul>
          <p className="text-md italic">
            This ensures peak performance across all devices.
          </p>
        </div>

        {/*
          Timeline 
          - "Reassurance": Timelines can shift based on scope changes
          - Show approximate durations by phase, which builds trust.
        */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Typical Timeline</h3>
          <p className="text-xl leading-relaxed mb-4">
            Every project is unique, but here’s a standard 8–12 week roadmap:
          </p>
          <ul className="list-disc list-inside text-left mb-4 text-xl">
            <li><b>Planning & Strategy (1–2 weeks):</b> Scope, user flows, objectives</li>
            <li><b>Design Phase (2–3 weeks):</b> Wireframes, mockups, branding</li>
            <li><b>Development (3–6 weeks):</b> Front-end, back-end, integrations</li>
            <li><b>Review & Launch (1–2 weeks):</b> Final checks, training, go-live</li>
          </ul>
          <p className="text-md italic">
            Timelines can vary based on complexity or new feature requests.
          </p>
        </div>
      </div>
    </motion.section>

    {/*
      What is SEO Section
      - Another good place to weave in real-world examples or data 
        if you want more detail.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-accent rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
        What is SEO and How Does It Work?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-xl leading-relaxed mb-8">
            SEO, or Search Engine Optimization, is the process of improving your website’s visibility on search engines like Google. It involves:
          </p>
          <ul className="list-disc list-inside text-left">
            <li>Optimizing keywords that match customer searches.</li>
            <li>Ensuring your website loads quickly and performs well.</li>
            <li>Improving the structure of your website for easy navigation.</li>
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
          <img src={SEODiagramImage} alt="SEO Diagram" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </motion.section>

    {/*
      Advanced Integrations
      - Another chance to highlight which technologies handle these integrations
      - "Visual Aids": FullStackImage used for demonstration
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-light-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-extrabold mb-8">
        Taking Your Website Further with Integrations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xl leading-relaxed mb-6">
            Want to supercharge your online presence? We offer integrations with:
          </p>
          <ul className="list-disc list-inside text-left text-xl mb-6">
            <li>CRMs for streamlined customer data management.</li>
            <li>Analytics tools to track performance and ROI.</li>
            <li>Phone and SMS services for immediate client communication.</li>
            <li>Payment gateways and e-commerce solutions.</li>
          </ul>
          <p className="text-xl leading-relaxed">
            These integrations are perfect for businesses ready to take their website to the next level—often included in our higher-tier packages.
          </p>
        </div>
        <div>
          <img
            src={FullStackImage}
            alt="Advanced Integrations"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.section>

    {/*
      Packages Section
      - If package cost <= $1000, show one-time cost + monthly maintenance.
      - If package cost > $1000, show monthly financing cost + mention after-2yr maintenance.
    */}
    <motion.section
      className="container mx-auto py-24 text-center bg-gradient-to-r from-primary to-secondary text-light rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-5xl font-extrabold mb-8">
        6 Packages to Fit Your Goals
      </h2>
      <p className="text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
        From a simple launch pad to a fully integrated digital ecosystem, we have a solution for every stage of your business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* Package 1: Launch Pad (<= $1000) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Launch Pad</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$300</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Single-page design</li>
            <li>Mobile-friendly layout</li>
            <li>Basic SEO setup</li>
          </ul>
          <p className="text-md font-semibold mb-2">
            Maintenance: $25/month <br />
            <span className="text-sm italic">Ongoing support, security, small content updates</span>
          </p>
          <p className="italic text-gray-500">Perfect for a quick online presence.</p>
        </div>

        {/* Package 2: Growth Starter (<= $1000) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Growth Starter</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">$750</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Up to 3 pages</li>
            <li>Custom mobile-first design</li>
            <li>Basic SEO & local listings</li>
          </ul>
          <p className="text-md font-semibold mb-2">
            Maintenance: $30/month <br />
            <span className="text-sm italic">Ongoing support, security, updates</span>
          </p>
          <p className="italic text-gray-500">Great for small businesses seeking an edge.</p>
        </div>

        {/* Package 3: Professional (> $1000) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Professional</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Or ~$63/mo over 24 months*
          </p>
          <p className="text-sm mb-4">(Total: $1,500 financed)</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Up to 5 pages</li>
            <li>Advanced mobile-responsive design</li>
            <li>On-page SEO & analytics</li>
            <li>Custom brand elements</li>
          </ul>
          <p className="text-md font-semibold mb-2">
            <span className="underline">After 2 years:</span> $50/month maintenance <br />
            <span className="text-sm italic">Ongoing support, security, content updates</span>
          </p>
          <p className="italic text-gray-500">Ideal for growing businesses.</p>
        </div>

        {/* Package 4: Premium (> $1000) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Premium</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Or ~$104/mo over 24 months*
          </p>
          <p className="text-sm mb-4">(Total: $2,500 financed)</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Up to 10 pages</li>
            <li>Custom integrations (CRM or analytics)</li>
            <li>Optimized site speed & performance</li>
            <li>Tailored content strategy</li>
          </ul>
          <p className="text-md font-semibold mb-2">
            <span className="underline">After 2 years:</span> $75/month maintenance <br />
            <span className="text-sm italic">Upgrades, security patches, advanced support</span>
          </p>
          <p className="italic text-gray-500">For businesses wanting specialized features.</p>
        </div>

        {/* Package 5: Enterprise (> $1000) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Enterprise</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Or ~$208/mo over 24 months*
          </p>
          <p className="text-sm mb-4">(Total: $5,000 financed)</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>10+ pages</li>
            <li>Multiple advanced integrations (CRM, phone, analytics)</li>
            <li>Comprehensive SEO & ongoing optimization</li>
            <li>Advanced security & maintenance</li>
          </ul>
          <p className="text-md font-semibold mb-2">
            <span className="underline">After 2 years:</span> $100/month maintenance <br />
            <span className="text-sm italic">Priority support, advanced analytics, site expansions</span>
          </p>
          <p className="italic text-gray-500">For companies needing robust, scalable solutions.</p>
        </div>

        {/* Package 6: Custom Full-Stack (> $1000) */}
        <div className="p-8 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-accent mb-4">Custom Full-Stack</h3>
          <p className="text-3xl font-extrabold mb-4 text-accent">
            Or ~$333/mo over 24 months*
          </p>
          <p className="text-sm mb-4">(Total: $8,000 financed)</p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Fully bespoke front-end & back-end</li>
            <li>API integrations with 3rd-party services</li>
            <li>Complex e-commerce or SaaS functionality</li>
            <li>Ongoing support & dedicated account manager</li>
          </ul>
          <p className="text-md font-semibold mb-2">
            <span className="underline">After 2 years:</span> $150/month maintenance <br />
            <span className="text-sm italic">Comprehensive “Site IT” for your full-stack solution</span>
          </p>
          <p className="italic text-gray-500">When you need a fully customized digital ecosystem.</p>
        </div>
      </div>

      <p className="text-sm mt-8 mx-auto max-w-3xl">
        *Monthly pricing is based on 24-month financing of the initial website build. 
        Exact monthly amounts may vary based on final project scope, interest rates, or additional requests.
        <br />
        <strong>Maintenance plans</strong> are optional but highly recommended to keep your site updated, 
        secure, and running smoothly. Cancel anytime.
      </p>
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

    {/*
      Call to Action
      - Simple, direct CTA at the bottom.
    */}
    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-light py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-6xl font-extrabold mb-4 text-shadow">
        Ready to Build Your Future?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Contact us today to discuss your goals, and let’s create something exceptional together.
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

export default ApiAccess;
