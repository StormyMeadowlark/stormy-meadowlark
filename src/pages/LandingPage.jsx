import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import ThemeToggle from '../components/ThemeToggle'

const LandingPage = () => (
  <div>
    <ThemeToggle />
    <Home />
    <About />
    <section className="bg-gradient-to-r from-primary to-secondary text-white dark:from-dark-primary dark:to-black dark:text-dark-text py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-heading mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-dark-primary text-dark dark:text-dark-text p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Web Development</h3>
            <p>We create responsive, visually stunning websites.</p>
          </div>
          <div className="bg-white dark:bg-dark-primary text-dark dark:text-dark-text p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">API Development</h3>
            <p>Seamless API integrations for your systems.</p>
          </div>
          <div className="bg-white dark:bg-dark-primary text-dark dark:text-dark-text p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">
              Consulting & Strategy
            </h3>
            <p>Expert advice for digital project success.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-r from-light to-light text-dark dark:from-black dark:to-dark-primary dark:text-dark-text py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-heading mb-8">What Our Clients Say</h2>
        <div className="space-y-8">
          <div>
            <p className="italic">
              "Working with Stormy Meadowlark was a game-changer."
            </p>
            <cite className="block mt-2">
              - Alex B., CEO of BrightPath Ventures
            </cite>
          </div>
          <div>
            <p className="italic">
              "The API they developed is incredibly reliable."
            </p>
            <cite className="block mt-2">
              - Sarah L., CTO of InnovateX Solutions
            </cite>
          </div>
          <div>
            <p className="italic">
              "Our website is now more engaging and user-friendly."
            </p>
            <cite className="block mt-2">
              - Mark D., Founder of Peak Performance Gear
            </cite>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-r from-fbc2eb to-a6c1ee dark:from-dark-accent dark:to-black text-dark dark:text-dark-text py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-heading mb-8">Ready to Work with Us?</h2>
        <p className="mb-6">Let’s create something extraordinary together.</p>
        <button className="bg-accent hover:bg-cta-hover dark:bg-dark-accent dark:hover:bg-black text-white dark:text-dark-text font-bold py-2 px-4 rounded-full transition-colors">
          Contact Us
        </button>
      </div>
    </section>
    <Contact />
    <footer className="bg-dark dark:bg-black text-light dark:text-dark-text py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Stormy Meadowlark. All rights reserved.</p>
        <p>Follow us on social media for the latest updates.</p>
      </div>
    </footer>
  </div>
)

export default LandingPage
