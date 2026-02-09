import React from 'react';
import { motion } from 'motion/react';
import assets from '../assets/assets';
const About: React.FC = () => {
  return (
    <div
      id="#"
      className="flex flex-col lg:flex-row items-center justify-between gap-10 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full text-gray-700 dark:text-white"
    >
      {/* Left: Text Section */}
      <motion.div
        className="flex-1 flex flex-col gap-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl sm:text-5xl font-bold">Hi, I'm <span className='text-blue-500'>Rosmy Roy</span></h3>
      
        <p className="text-md sm:text-lg text-gray-500 dark:text-white/75 leading-relaxed">
          I craft immersive digital experiences as a Front-End Developer, turning creative ideas into responsive, high-performance websites. 
          Every line of code I write focuses on seamless interactions and visually appealing designs that delight users.
        </p>

        <p className="text-md sm:text-lg text-gray-500 dark:text-white/75 leading-relaxed">
          From transforming complex ideas into intuitive interfaces to optimizing performance and interactivity, I create polished, user-friendly solutions 
          that engage visitors and elevate digital experiences.
        </p>


      </motion.div>

      {/* Right: Profile Image */}
      <motion.img
        src={assets.profile_pic}
        alt="Profile"
        className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl dark:shadow-white/10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default About;
