import React, { useState } from 'react'
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >

      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo_light}
        className="h-13 w-40 sm:w-52 object-contain"
        alt="Logo"
      />

      {/* Navigation */}
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
        <img
          src={assets.close_icon}
          alt="Close Sidebar"
          onClick={() => setSidebarOpen(false)}
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
        />

        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">About</a>
        <a onClick={() => setSidebarOpen(false)} href="#projects" className="sm:hover:border-b">Projects</a>
        <a onClick={() => setSidebarOpen(false)} href="#skills" className="sm:hover:border-b">Skills</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact" className="sm:hover:border-b">Contact</a>
      </div>

      {/* Desktop CTA */}
      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu Icon"
          onClick={() => setSidebarOpen(true)}
          className='w-8 sm:hidden'
        />

        <a
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          CV 
          <Download size={18} />
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar
