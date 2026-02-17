import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"
import { Download } from 'lucide-react';

type NavbarProps = {
  theme: 'light' | 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Disable body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto'
  }, [sidebarOpen])

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >

      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo_light}
        className="h-13 w-40 sm:w-52 object-contain"
        alt="Logo"
      />

      {/* Sidebar Navigation */}
      <div
        className={`flex sm:items-center gap-5 transition-all text-gray-700 dark:text-white sm:text-sm
        max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0
        max-sm:min-h-screen max-sm:h-full max-sm:flex-col
        max-sm:bg-primary max-sm:text-white max-sm:pt-20
        ${sidebarOpen
          ? 'max-sm:w-60 max-sm:pl-10'
          : 'max-sm:w-0 max-sm:overflow-hidden'
        }`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute right-4 top-4 sm:hidden"
        >
          <img
            src={assets.close_icon}
            alt="Close Sidebar"
            className="w-5 cursor-pointer"
          />
        </button>

        <a onClick={() => setSidebarOpen(false)} href="#">About</a>
        <a onClick={() => setSidebarOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setSidebarOpen(false)} href="#skills">Skills</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact">Contact</a>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className='sm:hidden'
        >
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt="Menu Icon"
            className='w-8'
          />
        </button>

        {/* Download CV Button */}
        <a
            href="/CV.pdf"   
            download="RosmyRoy_CV.pdf" // sets filename when downloaded
            className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
          >
            CV <Download size={18} /> {/* optional icon from lucide-react */}
        </a>


      </div>
    </motion.div>
  )
}

export default Navbar
