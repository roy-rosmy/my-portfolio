import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"
import type { Service } from './ServiceCard' // Import the Service type from ServiceCard

const Services: React.FC = () => {
  const servicesData: Service[] = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon
    },
    {
      title: 'Brand Strategy',
      description: 'We craft clear brand identities that communicate your values and set you apart...',
      icon: assets.marketing_icon
    },
    {
      title: 'Web Development',
      description: 'We build fast, scalable, and secure websites tailored to your business needs...',
      icon: assets.content_icon
    },
    {
      title: 'Social Media Management',
      description: 'We grow and manage your social platforms to build meaningful audience connections...',
      icon: assets.social_icon
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='services'
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <img 
      // src={assets.bgImage2} 
      alt='Background Decoration' className='absolute -top-110 -left-70 -z-1 dark:hidden' />
      
      <Title
        title='How can we help?'
        desc='From solutions that move your business forward.'
      />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services
