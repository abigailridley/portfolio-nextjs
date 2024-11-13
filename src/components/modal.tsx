interface ModalProps {
  onClose: () => void;
  content: {
    tags: string[];
  };
  modalTitle?: string;
}

const Modal: React.FC<ModalProps> = ({ content, onClose, modalTitle }) => {
  return (
    <div className="w-80 z-50 inset-0 flex absolute mb-2 bottom-full -left-32 sm:bottom-full sm:right-3 transform translate-x-1/2 text-center items-center  justify-center text-gray-950">
      <div className="bg-white p-4 rounded-lg relative border border-black">
        <button
          onClick={onClose}
          className="absolute right-0.5 top-0.5 px-1.5 border border-black  rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer
            hover:bg-primary-blue   hover:text-white dark:hover:bg-gray-800 dark:hover:text-white"
        >
          x
        </button>
        <h2 className="mb-3">{modalTitle}</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {content.tags.map((tag, index) => (
            <li
              className="bg-light-blue borderBlack rounded-lg px-3 py-1 shadow-md dark:bg-primary-blue dark:text-blush"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Modal;
