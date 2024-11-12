"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";
import SectionWindow from "./section-window";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="mt-10 scroll-mt-8 sm:scroll-mt-28"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-wrap justify-center gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className=" w-[280px] h-[280px] sm:h-[400px] sm:w-[400px]"
          >
            <SectionWindow
              title={project.title}
              className="relative group w-full h-full"
            >
              <div className="flex flex-col items-center w-full h-full">
                <div className="relative hidden sm:block w-[280px] h-[180px] my-3">
                  <div className="absolute hidden sm:block inset-0 rounded-lg bg-gradient-to-r from-[#f870467d] to-[#9bbcffc6] opacity-0 blur-lg transition-all duration-300 ease-out group-hover:opacity-50 group-hover:scale-110 dark:from-[#7f3a25e9] dark:to-[#4474d5cd]"></div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={280}
                    height={180}
                    quality={95}
                    className="relative hidden sm:block rounded-lg borderBlack transition-all duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 mx-7 mb-2 sm:mt-5 sm:mx-5 text-sm text-justify">
                  {project.description}
                </p>
                <div className="flex my-4 text-sm text-center  flex-col space-y-2 sm:space-y-0 sm:space-x-5 sm:flex-row items-center justify-items-center">
                  <a
                    className="bg-pink hover:bg-[#f9afdd] shadow-md border-[0.1rem] border-black/50 px-2 py-3  rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer dark:bg-primary-blue/50 dark:hover:bg-primary-blue/80"
                    href="/"
                  >
                    View on Github
                  </a>
                  <a
                    className="bg-orange hover:bg-[#f38665] shadow-md border-[0.1rem] border-black/60 px-2 py-3 rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
                    href="/"
                  >
                    View Live Site
                  </a>
                </div>
              </div>
            </SectionWindow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
