import React from 'react'
import Title from './Title'
import toast from 'react-hot-toast'
import { motion } from "motion/react"

const Contact: React.FC = () => {

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "2b225419-a60b-4f10-9011-e048664f62e8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!')
        form.reset();
      } else {
        toast.error(data.message)
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    }
  }

  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 py-14 w-full text-gray-700 dark:text-white'
    >
      {/* ===== Section Title ===== */}
      <Title
        title='Get in Touch'
        desc='Looking for a passionate Front-End Developer? I’m open to exciting opportunities—drop me a message and let’s collaborate!'
      />

      {/* ===== Contact Form ===== */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='grid sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-3xl'
      >
        {/* Name */}
        <div className='flex flex-col'>
          <label className='mb-2 text-sm font-medium'>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            className='p-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 transition'
            required
          />
        </div>

        {/* Email */}
        <div className='flex flex-col'>
          <label className='mb-2 text-sm font-medium'>Email Id</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            className='p-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 transition'
            required
          />
        </div>

        {/* Message */}
        <div className='sm:col-span-2 flex flex-col'>
          <label className='mb-2 text-sm font-medium'>Message</label>
          <textarea
            name='message'
            rows={6}
            placeholder='Write your message here...'
            className='p-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 transition resize-none'
            required
          />
        </div>

        {/* Submit Button */}
        <div className='sm:col-span-2 flex justify-center'>
          <button
            type='submit'
            className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg'
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </motion.section>
  )
}

export default Contact
