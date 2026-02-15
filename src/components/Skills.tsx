import React from "react"
import { motion } from "motion/react"

import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiAdobexd,
  SiFramer,
  SiGit,
  SiGithub,
  SiJira,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"
import { HiOutlineCode } from "react-icons/hi"


const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Front-End Development",
      list: [
        {
          name: "React",
          icon: (
            <SiReact className="text-[#61DAFB] text-xl animate-[spin_8s_linear_infinite]" />
          ),
        },
        {
          name: "Angular",
          icon: <SiAngular className="text-[#DD0031] text-xl" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6] text-xl" />,
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#E34F26] text-xl" />,
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="text-[#1572B6] text-xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#38BDF8] text-xl" />,
        },
      ],
    },
    {
      category: "UI/UX & Design",
      list: [
        {
          name: "Figma",
          icon: <SiFigma className="text-[#F24E1E] text-xl" />,
        },
        {
          name: "Adobe XD",
          icon: <SiAdobexd className="text-[#FF61F6] text-xl" />,
        },
        {
          name: "Framer Motion",
          icon: <SiFramer className="text-black dark:text-white text-xl" />,
        },
        {
          name: "Responsive Design",
          icon: <HiOutlineCode className="text-gray-600 dark:text-gray-300 text-xl" />,
        },
      ],
    },
    {
      category: "Tools & Workflow",
      list: [
        {
          name: "Git",
          icon: <SiGit className="text-[#F05032] text-xl" />,
        },
        {
          name: "GitHub",
          icon: <SiGithub className="text-black dark:text-white text-xl" />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-[#007ACC] text-xl" />,
        },
        {
          name: "Jira",
          icon: <SiJira className="text-[#0052CC] text-xl" />,
        },
        {
          name: "API Integration",
          icon: <HiOutlineCode className="text-green-500 text-xl" />,
        },
      ],
    },
  ]

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-900
              p-8 rounded-2xl shadow-lg
              border border-gray-100 dark:border-gray-800
              transition-all duration-500"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              {skillCategory.category}
            </h3>

            <ul className="flex flex-wrap justify-center gap-4">
              {skillCategory.list.map((skill, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-gray-100 dark:bg-gray-800
                    shadow-sm hover:shadow-md
                    transition duration-300"
                >
                  {skill.icon}
                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
