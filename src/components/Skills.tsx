import React from 'react'
import { motion } from "motion/react"

// type SkillCategory = {
//   category: string
//   list: string[]
// }

// interface SkillsProps {
//   skills: SkillCategory[]
// }

const Skills: React.FC = () => {

   const skillsData = [
    { category: 'Front-End Development', list: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'UI/UX & Design', list: ['Figma', 'Adobe XD', 'Responsive Design', 'Framer Motion'] },
    { category: 'Tools & Workflow', list: ['Git & GitHub', 'VS Code', 'API Integration'] }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6'
    >
      {skillsData.map((skillCategory, index) => (
        <div key={index} className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl shadow-gray-100 dark:shadow-white/10'>
          <h3 className='font-semibold mb-4'>{skillCategory.category}</h3>
          <ul className='flex flex-wrap gap-2'>
            {skillCategory.list.map((skill, idx) => (
              <li
                key={idx}
                className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm'
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )
}

export default Skills
