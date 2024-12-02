import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PaidAdsImage from '../assets/images/PaidAdCampaign.png?react'
import WebDevImage from '../assets/images/WebDevelopment.png?react'
import DigitalMarketingImage from '../assets/images/DigitalMarketingReputationManagement.png?react'
import StrategyConsultingImage from '../assets/images/StrategyConsultationBranding.png?react'
import APIIntegrationImage from '../assets/images/APIIntegrations.png?react'
import ContactImage from '../assets/images/StormyMeadowlarkRoad.png?react'

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
      title: 'Custom Full Stack Development',
      description:
        'Elevate your auto business with custom digital solutions. From backend infrastructure to seamless frontend design, we deliver API integrations, dynamic web apps, and scalable platforms for exceptional customer experiences',
      image: APIIntegrationImage,
      link: '/services/full-stack-development',
    },
    {
      title: 'Contact Us',
      description:
        'Have questions or ready to take the next step? Let’s connect and discuss how Stormy Meadowlark can help your automotive business thrive. We’re here to help.',
      image: ContactImage,
      link: '/contact',
    },
  ]

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
      {/* Proven Process Section */}
      <section className="bg-gradient-to-br from-[#460696] to-[#ff5e62] text-center text-dark-text">
        <div className="py-24 bg-dark-secondary bg-opacity-50">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-8 tracking-wide"
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl max-w-4xl mx-auto mb-12 tracking-wide"
          >
            At Stormy Meadowlark, we don’t just provide services—we follow a
            proven process that ensures results. From initial strategy to
            ongoing support, we’re committed to helping your business soar.
          </motion.p>
          <Link
            to="/proven-process"
            className="bg-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-bold py-4 px-8 text-xl rounded-full hover:bg-light-hover dark:hover:bg-cta-hover"
          >
            Learn About Our Process
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
