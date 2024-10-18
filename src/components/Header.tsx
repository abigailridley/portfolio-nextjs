"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-xl"
        initial={{x: "-50%", y: -100, opacity: 0 }} 
        animate={{  x: "-50%" , y: 0, opacity: 1}}
      >
        <Link href="/">
          <img
            src="/favicon.ico"
            alt="logo"
            className="h-[35px] w-[35px] fixed top-4 left-2 sm:top-2"
            width="50"
            height="50"
          />
        </Link>
      </motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      

      </nav>
    </header>
  );
}




// // import SiteNav from "./site-nav"

// export default function Header() {
//     return (
//         <header className="flex justify-between items-center
//         py-4 px-7 border-b">
//             <Link href="/">
//             <img
//                 src="/favicon.ico"
//                 alt='logo'
//                 className="h-[35px] w-[35px]"
//                 width='50'
//                 height='50'
//                 />
//             </Link>
//         </header>
//     )
// }