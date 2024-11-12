"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-0 w-[min(100%,38rem)] text-center scroll-mt-8 sm:scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>

      <div className="text-gray-700 font-sans mt-5 dark:text-gray-50">
        <p>
          Please contact me directly at{" "}
          <span className="block sm:inline">
            <a
              className="underline focus:outline-none focus-visible:ring rounded-lg"
              href="mailto:abigail-ridley@outlook.com"
            >
              abigail-ridley@outlook.com
            </a>{" "}
          </span>
        </p>
        <p>or use the form below:</p>
      </div>

      <form
        className="mt-10 flex flex-col text-start"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          className="font-sans mb-5 h-14 px-4 rounded-lg borderBlack focus:outline-gray-500
          dark:focus:outline-primary-blue "
          name="senderEmail"
          type="email"
          id="email"
          required
          maxLength={500}
          placeholder="example@gmail.com"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="font-sans mb-5 rounded-lg borderBlack h-40 px-4 py-2 focus:outline-gray-500 dark:focus:outline-primary-blue"
          name="message"
          id="message"
          placeholder="Type a message here..."
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
