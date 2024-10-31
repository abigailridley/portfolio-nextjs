"use client"

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function Contact() {
    const { ref } = useSectionInView("contact");
  return (
    <motion.section 
    ref={ref}
    id='contact' className='mb-20 sm:mb-28 
    w-[min(100%,38rem)] text-center'>

<SectionHeading>Contact</SectionHeading>

<p className='text-gray-700'>Please contact me directly at <a className='underline' href='mailto:abigailridley95@gmail.com'>abigailridley95@gmail.com</a></p>
<p>or use the form below:</p>

<form className='mt-10 flex flex-col '>
    <label htmlFor='email'>
        Email
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          id="email"
          required
          maxLength={500}
          placeholder="example@gmail.com"
        />
    </label>
    <label htmlFor='message'>
        Message
        <textarea
          className=""
          id="message"
      name="message"
   
          placeholder="Write your message..."
          
          required
          maxLength={5000}
        />
    </label>
    {/* <SubmitBtn/> */}
</form>
    </motion.section>
  )
}


