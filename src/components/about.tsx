"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import SectionWindow from "./section-window";

export default function About() {
  const { ref } = useSectionInView("about");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="scroll-mt-8 sm:scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About</SectionHeading>
      <SectionWindow title="Summary" className="relative">
        <div className="font-sans p-4 space-y-4 leading-7 text-justify">
          <p>
            To be a <span className="font-bold">full-stack developer</span> is
            my ultimate goal, which drives me to explore a vast array of
            programming languages and tools. Courses in{" "}
            <span className="font-bold">Front-end development and React</span>{" "}
            led me to enroll in an{" "}
            <span className="font-bold">intensive Python course</span>,
            immersing myself in{" "}
            <span className="font-bold">back-end development</span> and testing
            out my <span className="font-bold">Scrum master</span> skills.
            Earning a distinction was a moment of pride that fueled me even
            more.
          </p>
          <p>
            During a break to travel the Americas, I built personal projects for
            friends and family. Now with{" "}
            <span className="font-bold">Next.js</span> catching my attention,
            I&apos;m broadening my knowledge further with personal study in{" "}
            <span className="font-bold">DevOps & Cloud computing</span>, as well
            as <span className="font-bold">web design & accessibility.</span>
          </p>
        </div>
      </SectionWindow>
    </motion.section>
  );
}
