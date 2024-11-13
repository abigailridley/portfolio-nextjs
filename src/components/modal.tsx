interface ModalProps {
  onClose: () => void;

  content: {
    tags?: string[];

    details?: string[];
  };

  modalTitle?: string;

  type?: string;
}

const Modal: React.FC<ModalProps> = ({
  content,
  onClose,
  modalTitle,
  type,
}) => {
  return (
    <div className="w-72 z-50 inset-0 flex absolute mb-2 bottom-auto -left-36 sm:-left-24 sm:bottom-auto sm:right-3 transform translate-x-1/2 text-center items-center  justify-center text-gray-950 shadow-2xl">
      <div className=" p-4 rounded-lg relative border-[0.09rem] border-black bg-light-blue dark:bg-gray-600">
        <button
          onClick={onClose}
          className="absolute right-0.5 top-0.5 px-1.5 border border-black  rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer bg-pink text-gray-950 hover:bg-white hover:text-gray-900  dark:bg-gray-800 dark:text-white dark:border-gray-800
         dark:hover:text-gray-800 dark:hover:bg-white"
        >
          x
        </button>
        <h2 className="mb-3 font-bold text-lg">{modalTitle}</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {type === "project" &&
            content.tags?.map((tag, index) => (
              <li
                className="bg-white/90 text-gray-950 borderBlack rounded-lg px-3 py-1 shadow-md dark:bg-primary-blue/80 dark:text-gray-50"
                key={index}
              >
                {tag}
              </li>
            ))}
          {type === "about" &&
            content.details?.map((detail, index) => (
              <li
                className="bg-white/90 text-gray-950 borderBlack rounded-lg px-3 py-1 shadow-md dark:bg-primary-blue/60 dark:text-gray-50"
                key={index}
              >
                {detail}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Modal;
