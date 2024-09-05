import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaEnvelope, FaBlog, FaUser, FaEllipsisH } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import GoldStormyMeadowlark from '../assets/images/GoldStormyMeadowlark.png?react'
import ThemeToggle from './ThemeToggle'
import { AuthContext } from '../context/AuthContext' // Import AuthContext

const Header = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext) // Use logout function from context
  const [isMoreOpen, setIsMoreOpen] = useState(false) // Define state for more menu

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
          {/* Conditionally Render Profile or Account */}
          {isLoggedIn ? (
            <Link
              to={
                user.role === 'SuperAdmin'
                  ? '/superadmin/profile'
                  : '/user/profile'
              }
              className="flex flex-col items-center text-xs"
            >
              <FaUser className="text-2xl" />
              <span>Profile</span>
            </Link>
          ) : (
            <Link to="/account" className="flex flex-col items-center text-xs">
              <FaUser className="text-2xl" />
              <span>Account</span>
            </Link>
          )}
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
              {/* Additional Links Here */}
              <li>
                {isLoggedIn && (
                  <button
                    onClick={logout}
                    className="text-dark dark:text-light hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    Logout
                  </button>
                )}
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center bg-light dark:bg-dark-secondary text-light-text dark:text-light py-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={GoldStormyMeadowlark}
              alt="Stormy Meadowlark Logo"
              className="h-16"
            />
            <span className="ml-4 text-2xl font-bold text-light-text dark:text-light">
              Stormy Meadowlark
            </span>
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
            {isLoggedIn ? (
              <Link
                to={
                  user.role === 'SuperAdmin'
                    ? '/superadmin/profile'
                    : '/user/profile'
                }
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/account"
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              >
                Account
              </Link>
            )}
            {isLoggedIn && (
              <button
                onClick={logout}
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
              >
                Logout
              </button>
            )}
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  )
}

export default Header
