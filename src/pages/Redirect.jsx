import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LogoImage from '../assets/images/StormyMeadowlarkLogoWords.png?react'
import HeroBackground from '../assets/images/HomePageHero.png?react'

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#d1d7e0] to-[#f7faff] dark:from-[#332940] dark:to-[#0f0c29] text-dark-primary dark:text-light-text relative overflow-hidden font-gothic">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      <motion.img
        src={LogoImage}
        alt="Stormy Meadowlark Logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-48 md:w-60 relative z-20 mb-8"
      />

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white z-20"
      >
        404 – Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl text-center max-w-2xl mt-6 mb-10 text-dark-text z-20"
      >
        Looks like you took a wrong turn. This page doesn’t exist, but don’t
        worry—we’ve got plenty of other ways to shift gears and get you back on
        track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="z-20 grid gap-4 text-center"
      >
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-accent dark:bg-dark-accent text-light-text font-bold hover:bg-light-hover dark:hover:bg-cta-hover transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound404
