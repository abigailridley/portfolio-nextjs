"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { theme } = useTheme();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const logoSrc = theme === "dark" ? "/favicon-dark.ico" : "/favicon.ico";

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[6rem] w-full border border-blush/75 border-opacity-40 bg-blush/75  shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-xl dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-4 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center pb-5 text-[0.9rem] font-medium text-primary-blue sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-white">
          <motion.li
            className="flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setTimeOfLastClick(Date.now());
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection(null);
                window.history.replaceState(null, "", "/");
              }}
              className="h-[40px] w-[40px] focus-visible:outline-none focus-visible:ring rounded-full focus-visible:ring-offset-2 mr-5 mt-5 sm:m-0"
            >
              <Image
                src={logoSrc}
                alt="logo"
                width="35"
                height="35"
                className="h-full w-full mx-3 my-2 sm:m-0 "
              />
            </Link>
          </motion.li>

          {links.map((link) => (
            <motion.li
              className="relative h-3/4 flex items-center justify-center ml-4 sm:m-0"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center p-1 m-1 sm:m-0 sm:p-3  hover:text-primary-blue transition focus:outline-none focus-visible:ring focus-visible:ring-offset-2 rounded-lg dark:text-blush sm:dark:text-gray-300 sm:dark:hover:text-gray-50",
                  activeSection === link.name
                    ? "text-primary-blue border-2 rounded-lg p-1 border-primary-blue dark:border-blush sm:border-none  sm:dark:text-gray-900 dark:text-blush "
                    : "hover:text-primary-blue sm:dark:hover:text-gray-50 "
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#fbc6e582] rounded-full absolute inset-0 -z-10 dark:bg-gray-400"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
