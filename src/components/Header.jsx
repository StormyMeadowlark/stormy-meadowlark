import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaEnvelope, FaBlog, FaUser, FaEllipsisH } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import GoldStormyMeadowlark from '../assets/images/GoldStormyMeadowlark.png?react'
import ThemeToggle from './ThemeToggle'
const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const toggleMoreMenu = () => {
    setIsMoreOpen(!isMoreOpen)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed bottom-0 left-0 right-0 z-50 bg-light dark:bg-dark-secondary shadow-lg md:hidden">
        <nav className="flex justify-between items-center p-4">
          <Link to="/" className="flex flex-col items-center text-xs">
            <FaHome className="text-2xl" />
            <span>Home</span>
          </Link>
          <Link to="/services" className="flex flex-col items-center text-xs">
            <AiFillSetting className="text-2xl" />
            <span>Services</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-xs">
            <FaEnvelope className="text-2xl" />
            <span>Contact</span>
          </Link>
          <Link
            to="/tech&tranquility"
            className="flex flex-col items-center text-xs"
          >
            <FaBlog className="text-2xl" />
            <span>Blog</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center text-xs">
            <FaUser className="text-2xl" />
            <span>Account</span>
          </Link>
          <button
            onClick={toggleMoreMenu}
            className="flex flex-col items-center text-xs"
          >
            <FaEllipsisH className="text-2xl" />
            <span>More</span>
          </button>
        </nav>
      </header>

      {/* More Menu Popup */}
      {isMoreOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-light dark:bg-dark-secondary p-8 rounded-lg shadow-lg">
            <button
              onClick={toggleMoreMenu}
              className="absolute top-4 right-4 text-xl font-bold text-light-text dark:text-light"
            >
              &times;
            </button>
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  to="/portfolio"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/resume-portal"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services/content-creation"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  Content Creation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/social-media-management"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/api-development"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  API Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consulting-strategy"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  Consulting & Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/services/google-ads-management"
                  className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  onClick={toggleMoreMenu}
                >
                  Google Ads Management
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Header (remains at the top for larger screens) */}
      <header className="hidden md:flex justify-between items-center bg-light dark:bg-dark-secondary text-light-text dark:text-light py-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={GoldStormyMeadowlark}
              alt="Stormy Meadowlark Logo"
              className="h-16"
            />
          </Link>
          <nav className="md:flex md:space-x-8 items-center">
            <Link
              to="/about"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/tech&tranquility"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/account"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              Account
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  )
}

export default Header
