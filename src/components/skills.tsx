"use client";

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) =>({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView("skills");
  return (
    <section 
    id='skills'
    ref={ref}
    className='font-sans max-w-[42rem] mb-20 sm:m-0 scroll-mt-28 text-clip'>
        <SectionHeading>Skills</SectionHeading> 
        <ul className='flex flex-wrap justify-center gap-2 mt-5 text-md text-[gray-800]'>
            {skillsData.map((skill, index) => (
                    <motion.li  className="bg-[#9BBDFF] border border-black rounded-lg px-5 py-3 shadow-md"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))}
        </ul>
    </section>
  )
}
