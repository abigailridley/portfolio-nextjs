"use client";
import { links } from "@/lib/data";
import clsx from 'clsx';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home")
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[6rem] w-full border border-[#FBEAEB] border-opacity-40 bg-[#FBEAEB] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-xl"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      >
      </motion.div>
      
      <nav className="flex fixed top-[0.15rem] left-1/2 h-4 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center pb-5  text-[0.9rem] font-medium text-[#0303fc] sm:w-[initial] sm:flex-nowrap sm:gap-5">
         
        <motion.li
            className="flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0 })}
              className="h-[40px] w-[40px] focus-visible:outline-none focus-visible:ring rounded-full focus-visible:ring-offset-2 mr-5 mt-5 sm:m-0"
            >
              <Image 
                src="/favicon.ico"
                alt="logo"
                width="35"
                height="35"
                className="h-full w-full m-2 sm:m-0"
              />
            </Link>
          </motion.li>

        
          {links.map((link) => (
            <motion.li
              className=" relative h-3/4 flex items-center justify-center "
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition focus:outline-none focus-visible:ring focu-visible:ring-offset-2 rounded-lg",
                  {
                    "text-gray-950": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {
                  link.name === activeSection && ( <motion.span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-950"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>)
                }
               
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}