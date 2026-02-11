import React from 'react';
import { motion } from 'motion/react';
import assets from '../assets/assets';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 py-24 px-6 sm:px-12 lg:px-24 xl:px-40 w-full text-gray-700 dark:text-white"
    >
      {/* ===== Radiant Spread Dots Background ===== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              circle at 0% 100%, 
              rgba(13,42,148,0.6) 0%, 
              rgba(59,130,246,0.4) 30%, 
              rgba(59,130,246,0.2) 60%, 
              transparent 100%
            )
          `,
        }}
      />

      {/* ===== Left Section ===== */}
      <motion.div
        className="flex-1 flex flex-col gap-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Rosmy Roy</span>
        </h3>

        <p className="text-md sm:text-lg text-gray-600 dark:text-white/75 leading-relaxed max-w-xl">
          I craft immersive digital experiences as a Front-End Developer,
          transforming creative ideas into responsive, high-performance
          interfaces that feel intuitive and engaging.
        </p>

        <p className="text-md sm:text-lg text-gray-600 dark:text-white/75 leading-relaxed max-w-xl">
          By blending thoughtful design with optimized performance, I build
          elegant solutions that elevate user experiences and bring digital
          products to life.
        </p>
      </motion.div>

      {/* ===== Right Section ===== */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src={assets.profile_pic}
          alt="Profile"
          className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl dark:shadow-white/10"
        />
      </motion.div>
    </div>
  );
};

export default About;
