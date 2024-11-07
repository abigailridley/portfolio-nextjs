"use client"
import { motion } from "framer-motion"


export default function SectionDivider() {
  return (
    <motion.div className='bg-[#bbb2bbb3] my-20 w-96 h-0.5 rounded-full hidden sm:block dark:bg-gray-600'
    initial={{ opacity:0, y:100 }}
    animate={{ opacity:1, y:0 }}
    transition={{ delay: 0.125 }}></motion.div>
  )
}
