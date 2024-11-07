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
    <section ref={ref} id="projects" className="mt-10 scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-wrap justify-center gap-x-5">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 w-[400px] h-[500px]" // Set fixed dimensions here
          >
            <SectionWindow title={project.title} className="relative group w-full h-full">
              <div className="flex flex-col items-center w-full h-full">
                <div className="relative w-[280px] h-[180px] my-3"> 
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#f870467d] to-[#9bbcffc6] opacity-0 blur-lg transition-all duration-300 ease-out group-hover:opacity-50 group-hover:scale-110"></div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={280} 
                    height={180}
                    quality={95}
                    className="relative rounded-lg borderBlack transition-all duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 mx-2 text-center text-sm">{project.description}</p>
                <div className="flex my-4 space-x-2">
                  <a
                    className="bg-pink hover:bg-[#f9afdd] shadow-md border-[0.1rem] border-black px-5 py-3 flex items-center gap-2 rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer"
                    href="/"
                  >
                    View on Github
                  </a>
                  <a
                    className="bg-orange hover:bg-[#f38665] shadow-md border-[0.1rem] border-black px-5 py-3 flex items-center gap-2 rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer"
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