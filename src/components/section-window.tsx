import React from "react";
import LearnMoreBtn from "./learn-more-btn";

interface SectionWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  tags: string[];
  modalTitle?: string;
}

const SectionWindow: React.FC<SectionWindowProps> = ({
  title,
  children,
  className,
  tags,
  modalTitle,
}) => {
  return (
    <section>
      <div
        className={`relative border-[0.1rem] border-black rounded-lg mt-3 sm:mt-5  bg-white max-h-xl sm:max-h-2xl max-w-sm sm:max-w-md shadow-md ${className} dark:bg-gray-600`}
      >
        <div className="border-b border-black p-1 flex bg-primary-blue text-white rounded-t-md dark:bg-slate-800">
          <div className="text-md sm:text-md font-bold ml-4">{title}</div>

          <LearnMoreBtn tags={tags} modalTitle={modalTitle} />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default SectionWindow;
