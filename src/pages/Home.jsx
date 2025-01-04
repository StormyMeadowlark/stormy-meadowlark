import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LogoImage from '../assets/images/StormyMeadowlarkLogoWords.png?react'
import AdCampaign from '../assets/images/PaidAdCampaign.png?react'
import HeroBackground from '../assets/images/HomePageHero.png?react'
import WebDevelopment from '../assets/images/WebDevelopment.png?react'
import DigitalMarketingReputationManagement from '../assets/images/DigitalMarketingReputationManagement.png?react'
import StrategyConsultationBranding from '../assets/images/StrategyConsultationBranding.png?react'
import APIIntegrations from '../assets/images/HEM1.png?react'
import HEMautomotiveMarketingWebsite from '../assets/images/HEMautomotiveMarketingWebsite.png?react'
import SolarAthleticsRebrand from '../assets/images/Before.png?react'
import InventoryManagement from '../assets/images/InventoryManagment.png?react'




const Home = () => {
  const reasons = [
    {
      title: 'Industry Expertise',
      description:
        'The automotive world is unique, and we get it. From managing customer retention to enhancing online visibility, we focus on the strategies that matter most to your success.',
    },
    {
      title: 'Tailored Solutions',
      description:
        'No templates here. We take the time to understand your brand and create marketing, web development, and tech solutions that truly reflect who you are.',
    },
    {
      title: 'For Todays Customers',
      description:
        'Your customers are searching, booking, and browsing on their phones. We prioritize mobile-friendly designs and strategies to ensure you’re meeting them where they are.',
    },
    {
      title: 'Data-Driven Results',
      description:
        'Everything we do is backed by analytics and performance tracking. You’ll know exactly how your investment is working for you, with real results that make a difference.',
    },
    {
      title: 'Long-Term Partnerships',
      description:
        'We’re not just a one-and-done service. We aim to build lasting relationships, growing alongside your business and supporting your evolution.',
    },
    {
      title: 'Innovation To Set You Apart',
      description:
        'Staying ahead in the automotive world means embracing new ideas. We bring fresh perspectives and creative solutions to help your shop stand out in a crowded market.',
    },
  ]
  return (
    <div className="main-wrapper bg-gradient-to-br  from-[#d1d7e0] to-[#f7faff] dark:bg-gradient-to-b dark:from-[#332940] dark:to-[#0f0c29] text-dark-primary dark:text-light-text relative overflow-hidden font-gothic">
      {/* Hero Section with Cinematic Reveal */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-light-primary via-light-accent to-light-secondary dark:from-dark-secondary dark:to-dark-primary text-center ">
        <motion.img
          src={LogoImage}
          alt="Stormy Meadowlark Logo"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-52 mx-auto my-12 relative z-20"
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
          className="leading-relaxed lg:text-5xl md:text-3xl text-xl font-extrabold text-dark-text dark:text-white tracking-wide z-20 max-w-7xl"
        >
          Drive Your Auto Business Forward with Custom Web Design, Marketing, &
          Development.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="leading-relaxed lg:text-2xl md:text-xl text-base mt-6 max-w-7xl mx-auto relative z-20 text-dark-text tracking-wide"
        >
          Stormy Meadowlark helps auto shops and dealerships get more customers
          and keep them coming back. From custom web design to SEO, digital ads
          and more, we’ve got you covered.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 z-20"
        >
          <Link
            to="/contact"
            className=" text-base md:text-lg lg:text-xl px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold rounded-full dark:hover:bg-cta-hover hover:bg-light-hover transition-all duration-300"
          >
            Start Growing Your Business
          </Link>
        </motion.div>

        {/* Cinematic Background Reveal */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${HeroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60 z-10"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 8 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Scroll-Based Service Reveals */}
      <section className="py-24 text-dark-primary dark:text-white text-center relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-16 tracking-wide leading-relaxed max-w-7xl mx-auto px-4"
        >
          Results Driven Digital Marketing & Web Solutions for Auto Shops &
          Dealerships
        </motion.h2>

        <div className="flex flex-wrap">
          {/* Left Text with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center p-8"
            style={{ transform: 'translateY(30px)' }}
          >
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4 tracking-wide">
                Paid Advertisement & Content Production{' '}
              </h3>
              <p className="text-base md:text-lg lg:text-xl max-w-4xl tracking-wide mb-6 text-dark-primary dark:text-dark-text">
                Reach your ideal customers with targeted ads and high-quality
                content crafted to drive automotive success. Our campaigns
                deliver real-time results you can measure, from new leads to
                enhanced brand visibility.
              </p>
              <Link
                to="/services/paid-ads"
                className="text-accent dark:text-dark-accent underline tracking-wide"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Image with 3D Hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative overflow-hidden"
          >
            <motion.img
              src={AdCampaign}
              alt="Custom Development"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Reverse Layout */}
        <div className="flex flex-wrap mt-16">
          {/* Left Image with Parallax Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative overflow-hidden"
          >
            <motion.img
              src={WebDevelopment}
              alt="Digital Marketing"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>

          {/* Right Text Block with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center p-8"
            style={{ transform: 'translateY(30px)' }}
          >
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4">
                Web Design & Development
              </h3>
              <p className="text-base md:text-lg lg:text-xl max-w-4xl tracking-wide mb-6 text-dark-primary dark:text-dark-text">
                Make a powerful first impression with a custom-built,
                mobile-friendly website tailored for automotive businesses and
                service shops. Unlike template sites, our custom website
                development uses a high-performance tech stack to keep your site
                fast, reliable, and fully customizable—helping customers find
                services, book appointments, and learn what sets your shop
                apart. Designed with your brand's unique characteristics in
                mind, our responsive websites convert visitors into loyal
                customers and are built to grow with your business.
              </p>
              <Link
                to="/services/web-development"
                className="text-accent dark:text-dark-accent underline"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap">
          {/* Left Text with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center p-8"
            style={{ transform: 'translateY(30px)' }}
          >
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4 tracking-wide">
                Digital Marketing & Reputation Management{' '}
              </h3>
              <p className="text-base md:text-lg lg:text-xl max-w-4xl tracking-wide mb-6 text-dark-primary dark:text-dark-text">
                Elevate your shops visibility and trust with tailored digital
                marketing strategies and proactive reputation management. From
                targeted ad campaigns to Google reviews, we help you attract,
                engage, and retain loyal customers, ensuring your shop stands
                out in the automotive industry.
              </p>
              <Link
                to="/services/digital-marketing"
                className="text-accent dark:text-dark-accent underline tracking-wide"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Image with 3D Hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative overflow-hidden"
          >
            <motion.img
              src={DigitalMarketingReputationManagement}
              alt="Custom Development"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Reverse Layout */}
        <div className="flex flex-wrap mt-16">
          {/* Left Image with Parallax Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative overflow-hidden"
          >
            <motion.img
              src={StrategyConsultationBranding}
              alt="Digital Marketing"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>

          {/* Right Text Block with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center p-8"
            style={{ transform: 'translateY(30px)' }}
          >
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4">
                Strategic Consulting & Brand Development
              </h3>
              <p className="text-base md:text-lg lg:text-xl max-w-4xl tracking-wide mb-6 text-dark-primary dark:text-dark-text">
                At Stormy Meadowlark, we help automotive businesses accelerate
                growth by combining strategic consulting with expert brand
                development. Our consulting services focus on identifying
                marketing opportunities, refining customer acquisition
                strategies, and creating actionable plans to achieve measurable
                results. At the same time, we develop a strong brand identity
                that captures your unique story, values, and vision—building
                trust and making your business stand out in a competitive
                marketplace. Together, these services empower your shop or
                dealership to attract, engage, and retain loyal customers while
                driving long-term success.
              </p>
              <Link
                to="/services/strategy-consulting"
                className="text-accent dark:text-dark-accent underline"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive API Integration Section */}
      <section className="relative h-screen bg-gradient-to-br from-light-primary via-light-accent to-light-secondary dark:from-dark-secondary dark:to-dark-primary text-white dark:text-dark-text text-center flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.img
            src={APIIntegrations}
            alt="API Integration"
            className="w-full h-full object-cover opacity-70 dark:opacity-50 blur"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-base md:text-lg lg:text-xl font-extrabold mb-8 tracking-wide">
            Your All-In-One Marketing & Consulting Hub
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-6 tracking-wide">
            Stormy Meadowlark is your all-in-one partner for automotive business
            growth. From modern, mobile-first websites to laser-focused ad
            campaigns, reputation management, and culture consulting, we
            streamline your digital presence so you can focus on delivering
            top-tier service. Experience consistent branding, effortless
            management, and real results—crafted to reflect your unique values
            and drive long-term success.
          </p>
          <Link
            to="/services/marketing-consulting-hub"
            className="text-accent hover:text-light-hover  dark:text-dark-accent dark:hover:text-cta-hover"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      <section className="relative py-24 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-12 tracking-wide text-light-text dark:text-dark-text">
            Why Auto Shops & Dealerships Choose Stormy Meadowlark
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl mb-12 tracking-wide text-light-text dark:text-dark-text">
            We don’t just market your business—we help your shop soar.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 bg-dark-primary bg-opacity-70 rounded-lg hover:scale-105 transform transition-transform duration-300"
              >
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4 tracking-wide text-dark-text">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg tracking-wide text-dark-text">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio with Cinematic Reveal */}
      <section className="bg-gradient-to-br from-[#460696] to-[#ff5e62] text-center ">
        <div className="py-24 bg-dark-secondary bg-opacity-50">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white dark:text-dark-text mb-16 tracking-wide">
            Our Craftsmanship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={HEMautomotiveMarketingWebsite}
                alt="Project 1"
                className="w-full h-64 object-cover transform transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg lg:text-xl font-bold">
                HEM Automotive Branding, Web Development & Marketing
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative overflow-hidden"
            >
              <img
                src={InventoryManagement}
                alt="Project 2"
                className="w-full h-64 object-cover transform transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg lg:text-xl font-bold">
                Full Stack Inventory Management System
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={SolarAthleticsRebrand}
                alt="Project 3"
                className="w-full h-64 object-cover transform transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-base md:text-lg lg:text-xl font-bold">
                Solar Athletics Rebrand
              </div>
            </motion.div>
          </div>
          <Link
            to="/portfolio"
            className="mt-12 px-10 py-4 bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold text-base md:text-lg lg:text-xl rounded-full dark:hover:bg-cta-hover hover:bg-light-hover inline-block"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </section>
      <section className="py-20 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto">
            Here’s how we’ve helped businesses like yours succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Add testimonials dynamically here */}
          <div className="p-6 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
            <p className="text-lg font-bold  mb-4">
              We’re Gathering Your Feedback!
            </p>
            <p>
              Your experience fuels our innovation. Ask us how you can get your
              <span className="font-extrabold">
                {' '}
                first month of service free{' '}
              </span>{' '}
              by sharing your honest review.{' '}
            </p>
            <br></br>
            <p>
              Whether it’s about our solutions, your growth, or how we’ve
              partnered with your business, your voice helps us deliver even
              more customized, impactful results.
            </p>
            <br></br>
            <p className="font-bold pb-8">Let’s talk—your story matters.</p>
            <div>
              <Link
                to="/contact"
                className="bg-accent text-dark-primary font-bold py-4 px-8 text-xl rounded-full hover:bg-light-hover"
              >
                Contact Us Now!
              </Link>
            </div>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>
      {/* Invitation with Elegance */}
      <section className="py-24 text-center text-light-text dark:text-dark-text">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-8">
          Shift Gears with Custom Solutions
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12">
          Let’s elevate your business with innovative, tailored strategies
          designed for those ready to stand out and soar.
        </p>
        <Link
          to="/contact"
          className="bg-accent dark:bg-dark-accent hover:bg-light-hover dark:hover:bg-cta-hover text-light-text dark:text-dark-text font-bold py-4 px-8 text-base md:text-lg lg:text-xl rounded-full hover:bg-accent-hover dark:hover:bg-dark-accent-hover"
        >
          Let's Get Started
        </Link>
      </section>
    </div>
  )
}

export default Home
