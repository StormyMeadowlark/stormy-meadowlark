import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PaidAdsImage from '../assets/images/PaidAdCampaign.png?react';
import WebDevImage from '../assets/images/WebDevelopment.png?react';
import DigitalMarketingImage from '../assets/images/DigitalMarketingReputationManagement.png?react';
import StrategyConsultingImage from '../assets/images/StrategyConsultationBranding.png?react';
import APIIntegrationImage from '../assets/images/APIIntegrations.png?react';
import ContactImage from '../assets/images/StormyMeadowlarkRoad.png?react';

const Services = () => {
  const services = [
    {
      title: 'Paid Advertisement & Content Production',
      description:
        'Capture your ideal audience with highly targeted ad campaigns and premium content. From Google Ads to engaging social media posts, we ensure your message reaches the right people at the right time.',
      image: PaidAdsImage,
      link: '/services/paid-ads',
    },
    {
      title: 'Web Design & Development',
      description:
        'Your website is your digital showroom. We create mobile-friendly, high-performance websites tailored for automotive businesses, focusing on functionality, speed, and brand alignment.',
      image: WebDevImage,
      link: '/services/web-development',
    },
    {
      title: 'Digital Marketing & Reputation Management',
      description:
        'Dominate the digital space with tailored strategies that enhance your online visibility. From SEO to managing your reviews, we help you attract and retain loyal customers.',
      image: DigitalMarketingImage,
      link: '/services/digital-marketing',
    },
    {
      title: 'Strategic Consulting & Brand Development',
      description:
        'Empower your business with actionable strategies and a compelling brand identity. We work with you to refine your approach, capture your story, and stand out in the automotive market.',
      image: StrategyConsultingImage,
      link: '/services/strategy-consulting',
    },
    {
      title: 'All-In-One Marketing & Consulting Hub',
      description:
        "Explore comprehensive solutions, designed to align every facet of your digital and operational strategy. Whether it’s building a cutting-edge website, launching high-performing ad campaigns, or infusing your brand’s culture into every customer touchpoint, our services are tailored to maximize your impact and help your automotive business soar.",
      image: APIIntegrationImage,
      link: '/services/marketing-consulting-hub',
    },
    {
      title: 'Contact Us',
      description:
        'Have questions or ready to take the next step? Let’s connect and discuss how Stormy Meadowlark can help your automotive business thrive. We’re here to help.',
      image: ContactImage,
      link: '/contact',
    },
  ];

  return (
    <div className="main-wrapper min-h-screen bg-gradient-to-br from-[#f7faff] to-[#d1d7e0] dark:bg-gradient-to-b dark:from-[#332940] dark:to-[#0f0c29] text-dark-primary dark:text-light-text font-gothic">
      <section className="py-40 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-8 tracking-wide text-light-text dark:text-dark-text"
        >
          Explore Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xl max-w-4xl mx-auto mb-16 tracking-wide text-light-text dark:text-dark-text"
        >
          We provide tailored digital marketing, web development, and technical
          solutions designed to help automotive businesses thrive.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative bg-dark-primary bg-opacity-70 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-6"
              />
              <h3 className="text-4xl font-bold mb-4 tracking-wide text-dark-text">
                {service.title}
              </h3>
              <p className="text-lg tracking-wide mb-6 text-dark-text">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="text-accent dark:text-dark-accent underline text-lg tracking-wide"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-light-secondary dark:bg-dark-secondary">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6">What Our Clients Say</h2>
          <p className="text-lg max-w-4xl mx-auto">Here’s how we’ve helped businesses like yours succeed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Add testimonials dynamically here */}
          <div className="p-6 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
            <p className="text-lg font-bold  mb-4">We’re Gathering Your Feedback!</p>
            <p>Your experience fuels our innovation. Ask us how you can get your<span className='font-extrabold'> first month of service free </span> by sharing your honest review. </p>
            <br></br>
            <p>Whether it’s about our solutions, your growth, or how we’ve partnered with your business, your voice helps us deliver even more customized, impactful results.</p>
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
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0c29] to-[#332940] text-dark-text">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg max-w-4xl mx-auto">Have questions? We’ve got answers.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2"></h3>
            <p className="text-lg"></p>
          </div>
          {/* Add more FAQs dynamically */}
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-20 bg-light-primary dark:bg-dark-primary">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6">Our Portfolio</h2>
          <p className="text-lg max-w-4xl mx-auto">See our recent work and how we’ve helped clients achieve their goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Add portfolio items dynamically */}
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
            <img
              src="/path/to/image.jpg"
              alt="Project Title"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="text-lg">Brief description of the project and results.</p>
          </div>
          {/* Add more portfolio items */}
        </div>
      </section>
      {/* Blog Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-[#f093fb] to-[#feb47b] text-dark-text">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6">From Our Blog</h2>
          <p className="text-lg max-w-4xl mx-auto">Stay updated with insights and tips to grow your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Add blog posts dynamically */}
          <div className="p-6 bg-white dark:bg-dark-primary rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Top 10 Marketing Strategies for Auto Shops in 2024</h3>
            <p className="text-lg mb-4">Learn actionable tips to enhance your shop’s visibility.</p>
            <Link to="/blog/post-title" className="text-accent underline">Read More</Link>
          </div>
          {/* Add more blog posts */}
        </div>
      </section>
      {/* Final Call-to-Action Section */}
      <section className="py-20 bg-dark-primary text-light-text text-center">
        <h2 className="text-5xl font-extrabold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-lg mb-8">Contact us today to start your journey with Stormy Meadowlark.</p>
        <Link
          to="/contact"
          className="bg-accent text-dark-primary font-bold py-4 px-8 text-xl rounded-full hover:bg-light-hover"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Services;