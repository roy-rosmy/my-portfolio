import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

type WorkItem = {
  title: string
  description: string
  image: string
  link: string
}

const Projects: React.FC = () => {
  const projectData: WorkItem[] = [
    {
      title: 'Shalom World',
      description:
        'A dynamic platform connecting viewers to inspirational content worldwide, delivering seamless media experiences and user engagement.',
      image: assets.shalom_world,
      link: "https://shalomworld.org"
    },
    {
      title: 'BI Suite',
      description:
        'An intuitive dashboard system that transforms complex business data into actionable insights with a clean, interactive interface.',
      image: assets.bi_suite,
      link: "https://www.mygoal.biz"
    },
    {
      title: 'Digital Agency',
      description:
        'Showcasing creative solutions and modern web experiences, designed to elevate brands and engage audiences effectively.',
      image: assets.digital_agency,
      link: "https://agencydigital-three.vercel.app/"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='projects'
      className='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'
    >
      <Title
        title='Featured Projects'
        desc='Showcasing a selection of projects where creativity meets functionality—crafting interactive, high-performance digital experiences that engage users and drive results.'
      />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden 
              bg-blue-50 dark:bg-gray-900
              border border-gray-100 dark:border-gray-800
              shadow-md hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-3 p-4"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/0 
                  group-hover:bg-black/20
                  transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className='text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                  {project.description}
                </p>

                <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition duration-300">
                  View Project →
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
