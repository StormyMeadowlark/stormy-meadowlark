import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <img
              src="/path-to-your-logo.png"
              alt="Stormy Meadowlark Logo"
              className="h-12"
            />
            <span className="ml-4 font-cursive text-3xl">
              Stormy Meadowlark
            </span>
          </div>
          <span className="mt-1 text-sm font-body italic">
            Tranquility Among the Storm
          </span>{' '}
          {/* Tagline */}
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <Link to="/" className="hover:text-primary dark:hover:text-accent">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary dark:hover:text-accent"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-primary dark:hover:text-accent"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-primary dark:hover:text-accent"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="hover:text-primary dark:hover:text-accent"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary dark:hover:text-accent"
          >
            Contact
          </Link>
          <Link
            to="/account"
            className="hover:text-primary dark:hover:text-accent"
          >
            Account
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
