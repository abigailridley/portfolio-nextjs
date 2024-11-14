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

      <SectionWindow
        title="Summary"
        className="relative"
        modalTitle="Bonus Info"
        modalType="about"
      >
        <div className="font-sans p-4 space-y-4 leading-7 text-justify">
          <p>
            I’m a <span className="font-bold">detail-oriented developer</span>{" "}
            with an enthusiasm for creating{" "}
            <span className="font-bold">
              functional, accessible, and visually engaging applications
            </span>
            . My journey began in{" "}
            <span className="font-bold">front-end development with React</span>{" "}
            and soon expanded to full-stack work, including an{" "}
            <span className="font-bold">intensive Python course</span> that
            refined my <span className="font-bold">back-end skills</span> and
            gave me hands-on experience as a{" "}
            <span className="font-bold">Scrum master</span>. Earning a
            distinction there was a proud moment, marking my transition into
            more advanced projects.
          </p>
          <p>
            After taking time to travel across the Americas, I&apos;m now
            refreshed and ready to launch tech my career. I&apos;ve broadened my
            skill set with <span className="font-bold">Next.js</span>,{" "}
            <span className="font-bold">cloud computing</span>,{" "}
            <span className="font-bold">DevOps</span>, and a deepened focus on{" "}
            <span className="font-bold">web design and accessibility</span>.
            I&apos;m excited to contribute to a team where I can build on these
            skills, delivering high-impact, user-friendly solutions for a
            diverse audience.
          </p>
        </div>
      </SectionWindow>
    </motion.section>
  );
}
