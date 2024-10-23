"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section className='text-center max-w-[50rem] '>
      <div className='flex flex-col items-center justify-center sm:flex-row'>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.1
          }}
        >
          <Image  
            src="/favicon.ico"
            alt="logo"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
          />
        </motion.div>

       
      </div>
      <motion.div
      initial={{ opacity:0, y:100}}
      animate={{ opacity:1, y:0 }}
      >
      <div className='mb-5 mt-4 px-4 text-2xl leading-4 text-center sm:text-4xl'>
      <h1 className='font-chango'>Hi, I'm Abigail</h1> 
      <h2 className='font-plexmono italic text-xl sm:text-3xl'>Software Developer</h2>
      </div>

      <div className='text-md sm:text-xl !leading-5 pb-10'>
      <p>I build sites & apps.</p><p>My focus is {" "}<span className='font-bold'>React & Next.js</span> </p>
      </div>
      </motion.div>
    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity:1, y:0 }}
      >
          <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-lg'>
          Contact me here <BsArrowRight/>
          </Link>
          <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-lg'>Download CV <HiDownload /></a>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-lg'>
            <BsLinkedin />
          </a>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-lg text-[1.35rem]'>
            <FaGithubSquare />
          </a>
    </motion.div>

    </section>
  );
}