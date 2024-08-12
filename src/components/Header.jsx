import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import GoldStormyMeadowlark from '../assets/images/GoldStormyMeadowlark.png?react'

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const servicesRef = useRef(null)
  const contactRef = useRef(null)
  const timerRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnterServices = () => {
    clearTimeout(timerRef.current)
    setIsServicesOpen(true)
    setIsContactOpen(false)
  }

  const handleMouseLeaveServices = () => {
    timerRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 200)
  }

  const handleMouseEnterContact = () => {
    clearTimeout(timerRef.current)
    setIsContactOpen(true)
    setIsServicesOpen(false)
  }

  const handleMouseLeaveContact = () => {
    timerRef.current = setTimeout(() => {
      setIsContactOpen(false)
    }, 200)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false)
        setIsContactOpen(false)
      }
    }

    const handleScroll = () => {
      setIsServicesOpen(false)
      setIsContactOpen(false)
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('scroll', handleScroll)

    handleResize() // Initialize on load

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="bg-light dark:bg-dark-secondary text-light-text dark:text-light py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={GoldStormyMeadowlark}
              alt="Stormy Meadowlark Logo"
              className="h-16"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-light-text dark:text-light focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 items-center`}
        >
          <div className="relative">
            <Link
              to="/about"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 px-3 py-2"
            >
              About
            </Link>
          </div>
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => !isMobile && handleMouseEnterServices()}
            onMouseLeave={() => !isMobile && handleMouseLeaveServices()}
          >
            <Link
              to="/services"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 px-3 py-2"
            >
              Services
            </Link>
            {(isServicesOpen || isMobile) && (
              <div className="absolute mt-2 bg-light dark:bg-dark-secondary shadow-lg rounded-lg py-2">
                <Link
                  to="/services/web-development"
                  className="block px-4 py-2 hover:bg-light-accent hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  to="/services/content-creation"
                  className="block px-4 py-2 hover:bg-light-accent  hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Content Creation
                </Link>
                <Link
                  to="/services/social-media-management"
                  className="block px-4 py-2 hover:bg-light-accent  hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Social Media Management
                </Link>
                <Link
                  to="/services/api-development"
                  className="block px-4 py-2 hover:bg-light-accent hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsServicesOpen(false)}
                >
                  API Development
                </Link>
                <Link
                  to="/services/consulting-strategy"
                  className="block px-4 py-2 hover:bg-light-accent hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Consulting & Strategy
                </Link>
                <Link
                  to="/services/google-ads-management"
                  className="block px-4 py-2 hover:bg-light-accent hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Google Ads Management
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            ref={contactRef}
            onMouseEnter={() => !isMobile && handleMouseEnterContact()}
            onMouseLeave={() => !isMobile && handleMouseLeaveContact()}
          >
            <Link
              to="/contact"
              className="hover:text-light-accent  dark:hover:text-dark-accent transition-colors duration-300 px-3 py-2"
            >
              Contact
            </Link>
            {(isContactOpen || isMobile) && (
              <div className="absolute mt-2 bg-light dark:bg-dark-secondary shadow-lg rounded-lg py-2">
                <Link
                  to="/portfolio"
                  className="block px-4 py-2 hover:bg-light-accent  hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsContactOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 hover:bg-light-accent  hover:text-dark-text dark:hover:bg-dark-accent"
                  onClick={() => setIsContactOpen(false)}
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/tech&tranquility"
            className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 px-3 py-2"
          >
            Blog
          </Link>

          <Link
            to="/account"
            className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 px-3 py-2"
          >
            Account
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light-primary dark:bg-dark-primary text-light-text dark:text-light p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="absolute mt-2 bg-light-primary dark:bg-dark-secondary shadow-lg rounded-lg py-2">
                  <Link
                    to="/service1"
                    className="block px-4 py-2 hover:bg-light-accent dark:hover:bg-dark-accent"
                    onClick={toggleMenu}
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="block px-4 py-2 hover:bg-light-accent dark:hover:bg-dark-accent"
                    onClick={toggleMenu}
                  >
                    Service 2
                  </Link>
                  <Link
                    to="/service3"
                    className="block px-4 py-2 hover:bg-light-accent dark:hover:bg-dark-accent"
                    onClick={toggleMenu}
                  >
                    Service 3
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleContact}
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              >
                Contact
              </button>
              {isContactOpen && (
                <div className="absolute mt-2 bg-light-primary dark:bg-dark-secondary shadow-lg rounded-lg py-2">
                  <Link
                    to="/portfolio"
                    className="block px-4 py-2 hover:bg-light-accent dark:hover:bg-dark-accent"
                    onClick={toggleMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/resume-portal"
                    className="block px-4 py-2 hover:bg-light-accent dark:hover:bg-dark-accent"
                    onClick={toggleMenu}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/tech&tranquility"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/account"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
