import { aboutData } from "@/lib/data";
import React from "react";
import Modal from "./modal";

interface LearnMoreBtnProps {
  tags: string[];
  modalTitle?: string;
  type: string;
}

const LearnMoreBtn: React.FC<LearnMoreBtnProps> = ({
  tags,
  modalTitle,
  type,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const modalContent =
    type === "about" ? { details: aboutData } : { tags: tags };

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="group">
      <button
        onClick={toggleModal}
        aria-label="Learn more"
        className="absolute top-1 right-2 text-black border border-black bg-pink rounded-md w-6 h-4.5 flex items-left justify-center hover:bg-white hover:text-black transition duration-300 focus:outline-none focus-visible:ring focus:ring-offset-2 dark:bg-primary-blue dark:text-white dark:hover:bg-primary-blue/80"
      >
        <span>?</span>
      </button>
      <span className="absolute mb-2 bottom-full right-3 transform translate-x-1/2 p-1 text-xs text-white bg-black dark:text-gray-900 dark:bg-gray-100 rounded-md opacity-0 duration-300 group-hover:opacity-100 cursor-default">
        Learn more
      </span>
      {isModalOpen && (
        <Modal
          content={modalContent}
          onClose={closeModal}
          modalTitle={modalTitle}
          type={type}
        />
      )}
    </div>
  );
};

export default LearnMoreBtn;
