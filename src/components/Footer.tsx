import React from 'react'
import { motion } from "motion/react"
import { SiLinkedin, SiGithub } from "react-icons/si"

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 pb-10 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
      {/* Top section */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-sm text-gray-700 dark:text-gray-400 text-center lg:text-left space-y-4 max-w-md'
        >
          <p>
            Crafting interactive and high-performance digital experiences that bring ideas to life.
          </p>
          <ul className='flex justify-center lg:justify-start gap-6'>
            <li><a className='hover:text-primary transition-colors' href='#about'>About</a></li>
            <li><a className='hover:text-primary transition-colors' href='#projects'>Projects</a></li>
            <li><a className='hover:text-primary transition-colors' href='#skills'>Skills</a></li>
            <li><a className='hover:text-primary transition-colors' href='#contact'>Contact</a></li>
          </ul>
        </motion.div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex gap-4 text-2xl text-gray-700 dark:text-gray-300'
        >
          <a href='https://www.linkedin.com/in/rosmy-roy' target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 transition-colors'>
            <SiLinkedin style={{ color: '#0A66C2' }}/>
          </a>
          <a href='https://github.com/roy-rosmy' target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-white transition-colors'>
            <SiGithub className='text-black dark:text-white text-2xl'/>
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-sm text-gray-500 dark:text-gray-400 text-center pb-6'
        >
        <p>© 2026 Rosmy Roy – All Rights Reserved.</p>
        </motion.div>
      </div>

    </motion.footer>
  )
}

export default Footer
