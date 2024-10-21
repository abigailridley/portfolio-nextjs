"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Intro() {
  return (
    <section>
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
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
            </motion.div>
            
            <div className=" relative border-[0.1rem] border-black rounded-md justify-end items-end mt-10 sm:mt-0 sm:ml-10 bg-white">
                <div className='border-b border-black p-1 flex bg-[#0304FC] text-white'>
                    <p>Summary</p>
                    <button className="absolute top-0.5 right-2 text-black border border-black bg-[#FBEAEB] rounded-md w-6 h-4.5 w-4.5 flex items-left justify-center hover:bg-white hover:text-black transition duration-300">
                        ?
                        </button>
                </div>
                
                <div className='font-sans m-4'>
                <p>Hi, I'm Abigail </p>
                </div>

        </div>
        </div>
       
    </section>
  )
}
