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
      description: 'A dynamic platform connecting viewers to inspirational content worldwide, delivering seamless media experiences and user engagement.',
      image: assets.shalom_world,
      link : "shalomworld.org"
    },
    {
      title: 'BI Suite',
      description: 'An intuitive dashboard system that transforms complex business data into actionable insights with a clean, interactive interface.',
      image: assets.bi_suite,
      link: "www.mygoal.biz"
    },
    {
      title: 'Digital Agency',
      description: 'Showcasing creative solutions and modern web experiences, designed to elevate brands and engage audiences effectively.',
      image: assets.digital_agency,
      link: "agencydigital-three.vercel.app/"
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='projects'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Featured Projects'
        desc='Showcasing a selection of projects where creativity meets functionality—crafting interactive, high-performance digital experiences that engage users and drive results'
      />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='className="group transform transition duration-300 hover:-translate-y-2"'>
            <a  href={project.link}>  
              <div className="p-5 bg-blue-50 dark:bg-gray-500 rounded-2xl 
                shadow-md hover:shadow-xl transition-all duration-300 
                border border-gray-100 dark:border-gray-800">
                <img 
                  src={project.image} 
                  className="w-full h-48 object-cover rounded-xl transition duration-500 group-hover:scale-105"
                  alt={project.title}
                />
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{project.title}</h3>
                <p className='text-sm leading-relaxed'>{project.description}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
