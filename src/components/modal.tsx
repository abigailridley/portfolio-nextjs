interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return (
    <div className="w-full z-50 inset-0 flex absolute mb-2 bottom-full -left-32 sm:bottom-full sm:right-3 transform translate-x-1/2 text-center items-center  justify-center text-gray-950">
      <div className="bg-white p-4 rounded-lg relative border border-black">
        <button
          onClick={onClose}
          className="absolute right-0.5 top-1 px-1 border border-black  rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer
            hover:bg-primary-blue   hover:text-white dark:hover:bg-gray-800 dark:hover:text-white"
        >
          x
        </button>
        <h2>Learn More</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Modal;
