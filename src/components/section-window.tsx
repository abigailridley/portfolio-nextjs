import React from "react";

interface SectionWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWindow: React.FC<SectionWindowProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <section>
      <div
        className={`relative border-[0.1rem] border-black rounded-lg mt-3 sm:mt-5  bg-white max-h-xl sm:max-h-2xl max-w-sm sm:max-w-md shadow-md ${className} dark:bg-gray-600`}
      >
        <div className="border-b border-black p-1 flex bg-primary-blue text-white rounded-t-md dark:bg-slate-800">
          <div className="text-md sm:text-md font-bold ml-4">{title}</div>

          <div className="group">
            <button
              aria-label="Learn more"
              className="absolute top-1 right-2 text-black border border-black bg-pink rounded-md w-6 h-4.5 flex items-left justify-center hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring focus:ring-offset-2 dark:bg-primary-blue/50 dark:text-white dark:hover:bg-primary-blue/80"
            >
              <span>?</span>
            </button>
            <span className="absolute mb-2 bottom-full right-3 transform translate-x-1/2 p-1 text-xs text-white bg-black dark:text-gray-900 dark:bg-gray-100 rounded-md opacity-0 duration-300 group-hover:opacity-100 cursor-default">
              Learn more
            </span>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default SectionWindow;
