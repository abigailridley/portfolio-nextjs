"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Intro() {
  return (
    <section>
        <div className='flex items-center sm:pl-10 sm:justify-left'>
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
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
            </motion.div>
        </div>
    </section>
  )
}
