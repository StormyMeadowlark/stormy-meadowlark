import { useState, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaEnvelope, FaInfoCircle, FaAngleDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'
import GoldStormyMeadowlark from '../assets/images/StormyMeadowlarkStroke.png?react'

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true) // State to handle scroll direction
  const profileRef = useRef(null)
  const moreMenuRef = useRef(null)
  const prevScrollY = useRef(0) // To store previous scroll position

  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen)
  const toggleMoreMenu = () => setIsMoreMenuOpen(!isMoreMenuOpen)

  // Handle scrolling direction for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > prevScrollY.current) {
        setIsScrollingUp(false) // Scrolling down
      } else {
        setIsScrollingUp(true) // Scrolling up
      }
      prevScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-light-secondary dark:bg-dark-primary text-light-text dark:text-dark-text py-4 shadow-lg hidden md:flex"
        initial={{ opacity: 1, y: 0 }}
        animate={isScrollingUp ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-4xl mx-auto flex justify-between items-center px-4">
          {/* Left Navigation */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-accent transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-accent transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-accent transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-accent transition-colors duration-300"
            >
              Portfolio
            </Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="flex items-center justify-center">
            <motion.img
              src={GoldStormyMeadowlark}
              alt="Stormy Meadowlark Logo"
              className="h-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <Link
              to="/contact"
              className="hover:text-accent transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/tech&tranquility"
              className="hover:text-accent transition-colors duration-300"
            >
              Tech & Tranquility
            </Link>

            {/* Profile Dropdown */}
            {isLoggedIn && (
              <div className="relative" ref={profileRef}>
                <button
                  className="flex items-center hover:text-accent transition-colors duration-300"
                  onClick={toggleProfileMenu}
                >
                  Profile <FaAngleDown className="ml-1" />
                </button>
                {isProfileOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-full right-0 mt-2 bg-light-secondary dark:bg-dark-primary shadow-md rounded-lg w-40"
                  >
                    <li className="py-2 px-4 hover:bg-accent transition-colors duration-300 cursor-pointer">
                      <Link to={'/user/profile'}>View Profile</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-accent transition-colors duration-300 cursor-pointer">
                      <button onClick={logout}>Logout</button>
                    </li>
                  </motion.ul>
                )}
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      {/* Mobile Header at Bottom with Full Menu */}
      <header className="fixed bottom-0 left-0 right-0 z-50 bg-light-secondary dark:bg-dark-primary text-light-text dark:text-dark-text shadow-lg md:hidden">
        <nav className="flex justify-between items-center p-4">
          {/* Home */}
          <Link to="/" className="flex flex-col items-center text-xs">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <FaHome className="text-2xl" />
            </motion.div>
            <span>Home</span>
          </Link>

          {/* Services */}
          <Link to="/services" className="flex flex-col items-center text-xs">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <FaInfoCircle className="text-2xl" />
            </motion.div>
            <span>Services</span>
          </Link>

          {/* Centered Logo */}
          <Link to="/" className="flex flex-col items-center">
            <motion.img
              src={GoldStormyMeadowlark}
              alt="Stormy Meadowlark Logo"
              className="h-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Contact */}
          <Link to="/contact" className="flex flex-col items-center text-xs">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <FaEnvelope className="text-2xl" />
            </motion.div>
            <span>Contact</span>
          </Link>

          {/* More Dropdown */}
          <div className="relative flex flex-col items-center">
            <button onClick={toggleMoreMenu} className="focus:outline-none">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaAngleDown className="text-2xl" />
              </motion.div>
              <span>More</span>
            </button>
            {isMoreMenuOpen && (
              <>
                {/* Dimmed background */}
                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={() => setIsMoreMenuOpen(false)} // Click outside to close
                ></div>

                {/* More Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="fixed inset-0 z-50 flex items-center justify-center"
                >
                  <div
                    ref={moreMenuRef}
                    className="bg-light-secondary dark:bg-dark-primary p-4 rounded-lg shadow-lg w-64"
                  >
                    <ul className="text-center">
                      <li className="py-2 px-4 hover:bg-accent transition-colors duration-300">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-accent transition-colors duration-300">
                        <Link to="/portfolio">Portfolio</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-accent transition-colors duration-300">
                        <Link to="/tech&tranquility">Tech & Tranquility</Link>
                      </li>
                      {isLoggedIn ? (
                        <li className="py-2 px-4 hover:bg-accent transition-colors duration-300">
                          <Link to={'/user/profile'}>Profile</Link>
                        </li>
                      ) : (
                        <li className="py-2 px-4 hover:bg-accent transition-colors duration-300">
                          <Link to="/account">Account</Link>
                        </li>
                      )}
                      <li>
                        <ThemeToggle />
                      </li>
                      <li className="py-2 px-4 hover:bg-accent transition-colors duration-300">
                        <button onClick={toggleMoreMenu}>Close</button>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
