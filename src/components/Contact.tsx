import React from 'react'
import Title from './Title'
// import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from "motion/react"

const Contact: React.FC = () => {

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement; // TypeScript: event.target is generic
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='contact'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            {/* <img src={assets.person_icon} alt='Person Icon' /> */}
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Email Id</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            {/* <img src={assets.email_icon} alt='Email Icon' /> */}
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea
            rows={8}
            name='message'
            placeholder='Enter your message'
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300'
            required
          />
        </div>

        <button
          type='submit'
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
          Submit 
          {/* <img src={assets.arrow_icon} alt='Arrow Icon' className='w-4' /> */}
        </button>

      </motion.form>
    </motion.div>
  )
}

export default Contact
