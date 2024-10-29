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
      <h1 className='font-chango'>Hi, I&apos;m Abigail 
      <p className='font-plexmono italic text-xl sm:text-3xl'>Software Developer</p>
      </h1>
      </div>

      <div className='text-md sm:text-xl !leading-5 pb-10'>
      <p>I build sites & apps.</p><p>My focus is {" "}<span className='font-bold'>React & Next.js</span> with a side of <span className='font-bold'>Python.</span> </p>
      </div>
      </motion.div>

    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity:1, y: 0 }}
      transition={{
        delay:0.1,
      }}
      >
          <Link href="#contact" className='group bg-[#F87046] text-black px-7 py-3 flex items-center gap-2 rounded-lg  focus:scale-110 hover:scale-110  focus:outline-none focus:ring focus:ring-offset-2 hover:bg-[#f47b56] active:scale-105 transition'>
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1.5 transition'/>
          </Link>
          <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:outline-none focus:ring focus:ring-offset-2 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10"
          href="/CV.pdf" download
        >Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-lg focus:outline-none focus:ring focus:ring-offset-2 focus:scale-110 hover:scale-[1.15]  hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border-black/10'
          href="https://linkedin.com/in/ar-ridley" target="_blank">
            <BsLinkedin />
          </a>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-lg text-[1.35rem] focus:outline-none focus:ring focus:ring-offset-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10'
          href="https://github.com/abigailridley" target='_blank'>
            <FaGithubSquare />
          </a>
    </motion.div>

    </section>
  );
}