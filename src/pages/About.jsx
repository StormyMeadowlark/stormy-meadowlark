import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AboutImage from '../assets/images/AboutImage.jpg?react'
import OurStoryImage from '../assets/images/OurStoryImage.jpg?react'
import InnovationImage from '../assets/images/InnovationImage.jpg?react'
import IntegrityImage from '../assets/images/IntegrityImage.jpg?react'
import ClientCentricImage from '../assets/images/ClientCentricImage.jpg?react'
import HeadshotImage from '../assets/images/Ashlee-Headshot.png?react'



const About = () => (
  <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-light min-h-screen font-gothic">
    {/* Introduction Section */}
    <motion.section
      className="w-full py-40 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h1 className="text-6xl md:text-8xl font-gothic-bold text-center mb-8">
            About Stormy Meadowlark
          </h1>
          <p className="text-lg max-w-lg mx-auto">
            Stormy Meadowlark exists to empower independent auto repair shops
            and dealerships with digital solutions that truly reflect who they
            are. We believe that your business deserves more than cookie-cutter
            templates or one-size-fits-all platforms. That’s why we specialize
            in creating custom websites, innovative marketing strategies, and
            tailored tools designed to help you connect with your customers and
            stand out in a competitive market.<br></br>
            <br></br>
            Our mission is simple: to make sure your digital presence works as
            hard as you do. We combine industry knowledge, cutting-edge
            technology, and a commitment to quality to deliver solutions that
            help your business thrive—not just today, but for the long haul. At
            Stormy Meadowlark, every project is personal because we know that
            your success is what matters most.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={AboutImage}
            alt="About Stormy Meadowlark"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </motion.section>

    {/* Our Story Section */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4 order-last md:order-first">
          <img
            src={OurStoryImage}
            alt="Our Story"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-gothic-bold mb-4">Our Story</h2>
          <p className="text-lg max-w-lg mx-auto">
            Stormy Meadowlark was inspired by the resilience and optimism of the
            meadowlark. After a storm, this bird is one of the first to start
            singing, a symbol of hope and strength. That message is at the heart
            of what we do: no matter the challenges, you can weather the storm
            and come out stronger—and we’re here to help you do it.
            <br></br>
            <br></br>
            The idea for Stormy Meadowlark came from seeing how often
            independent auto repair shops and dealerships were overlooked in the
            digital world. These businesses, built on hard work and trust,
            deserve tools and strategies that reflect their dedication—not
            cookie-cutter solutions that don’t fit their needs. I wanted to
            create an agency that not only delivers results but also stands by
            businesses as a true partner through every challenge.
            <br></br>
            <br></br>
            At Stormy Meadowlark, we specialize in custom digital solutions
            tailored to your shop’s unique identity. From websites built from
            scratch to creative marketing strategies, everything we do is
            designed to help you stand out and thrive in a competitive market.
            We believe that with the right tools and support, you can face any
            challenge and come out singing on the other side.
            <br></br>
            <br></br>
            This agency isn’t just about solving problems—it’s about building
            something meaningful. Stormy Meadowlark is here to help your
            business not just survive but grow, with a focus on innovation,
            trust, and long-term success.
            <br></br>
            <br></br>
            Let’s weather the storm together.
          </p>
        </div>
      </div>
    </motion.section>

    {/* Core Values Section */}
    <motion.section
      className="w-full py-24 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={InnovationImage}
              alt="Innovation"
              className="mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-gothic-bold mb-2">
              Driven to Overcome
            </h3>
            <p>
              Just like your business doesn’t quit when faced with a tough job,
              neither do we. We embrace challenges head-on, knowing that growth
              comes from persistence and hard work. At Stormy Meadowlark, we’re
              here to help your business weather the storm and come out stronger
              on the other side.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={IntegrityImage}
              alt="Integrity"
              className="mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-gothic-bold mb-2">
              Built Like It Matters
            </h3>
            <p>
              In your shop, every repair is done with care and precision—because
              the details matter. We bring that same craftsmanship to everything
              we create, delivering solutions that are customized, practical,
              and built to last.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-light-tertiary dark:bg-dark-primary rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={ClientCentricImage}
              alt="Client-Centric"
              className="mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-gothic-bold mb-2">
              Your Business, Your Voice
            </h3>
            <p>
              Just like every car has its own story, so does your business.
              We’re here to help you stand out by finding the tools and
              strategies that work best for you, giving you the confidence to
              connect with your customers and grow your business on your terms.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Meet the Team Section */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-8">Meet the Founder</h2>
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <img
            src={HeadshotImage}
            alt="Ashlee"
            className="w-40 h-40 rounded-full mb-4"
          />
          <h3 className="text-2xl font-gothic-bold">Ashlee</h3>
          <p className="text-lg mb-4">Founder & CEO</p>
          <p className="text-md max-w-xl mx-auto">
            Hi, I’m Ashlee, the founder & CEO of Stormy Meadowlark. This agency
            is more than a business—it’s a reflection of my journey, my values,
            and my determination to make a difference. 
            <br></br><br></br>
            My path here hasn’t been
            traditional. From nearly completing a PhD in microbiology to diving
            headfirst into the world of digital marketing and web development,
            I’ve always sought to combine creativity with problem-solving. My
            experience working hands-on with HEM Automotive opened my eyes to
            the challenges small businesses face—especially in industries like
            automotive, where hard work and dedication often go unnoticed in the
            digital space. 
            <br></br><br></br>
            Stormy Meadowlark was born out of a desire to change
            that. I saw an opportunity to build something meaningful: a partner
            for independent auto shops and small dealerships that not only
            understands their struggles but also delivers tailored, impactful
            solutions that truly reflect who they are. 
            <br></br><br>
            </br>
            For me, this isn’t just
            about websites or marketing campaigns—it’s about empowering
            businesses to grow, thrive, and connect with their customers in ways
            they never thought possible. Inspired by the resilience of the
            meadowlark, I believe in facing challenges head-on and finding a way
            to rise stronger, no matter the storm. 
            <br></br><br></br>
            Whether it’s crafting custom
            solutions or helping you navigate the complexities of the digital
            world, I’m here to ensure your success—because your story, your
            business, and your growth matter. 
            <br></br><br></br>
            Let’s build something incredible
            together.
            <br></br><br></br>
            Ashlee
            <br></br>
            Founder & CEO, Stormy Meadowlark
            <br></br>
            "Innovation in Every Shift, Customization in Every Solution"
          </p>
        </div>
      </div>
    </motion.section>

    {/* Testimonials Section */}
    <motion.section
      className="w-full py-24 bg-light-secondary dark:bg-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-8">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto"></div>
      </div>
    </motion.section>

    {/* Call to Action */}
    <motion.section
      className="w-full py-24 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.4 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-gothic-bold mb-8">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you&apos;re looking to build a cutting-edge website, create
          compelling content, or develop a robust digital marketing strategy,
          Stormy Meadowlark is here to help you succeed. Let&apos;s collaborate
          to create something extraordinary.
        </p>
        <Link
          to="/contact"
          className="bg-light-accent dark:bg-dark-accent text-white dark:text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark"
        >
          Get in Touch
        </Link>
      </div>
    </motion.section>
  </div>
)

export default About
