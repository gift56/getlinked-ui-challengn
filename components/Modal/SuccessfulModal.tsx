import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CustomizeButton } from "..";

interface ModalProps {
  show: boolean;
  setShow: (e: any) => void;
}

const SuccessfulModal = ({ show, setShow }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const variants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-[#150e28ed] z-40 place-items-center flex justify-center transition-all duration-500 overflow-auto ${
        show ? "flex" : "hidden"
      }`}
    >
      <motion.div
        ref={modalRef}
        animate={show ? "open" : "closed"}
        variants={variants}
        className="tab:w-[660px] w-[90%] bg-[#ffffff03] rounded-[5px] border border-primary flex flex-col items-center justify-center gap-3 transition-all duration-300 tab:h-[580px] overflow-y-auto"
      >
        <img
          src="/img/sucessImg.png"
          alt="successfully"
          className="tab:w-[400px] object-cover"
        />
        <h2 className="text-base text-center font-semibold md:text-xl tab:text-2xl">
          Congratulations <br className="hidden tab:block" /> you have
          successfully Registered!
        </h2>
        <p className="text-sm text-center font-semibold">
          <span>Yes, it was easy and you did it!</span>
          <span className="flex items-center gap-1">
            check your mail box for next step
            <img src="/icon/emoji.png" alt="emoji" className="inline" />
          </span>
        </p>
        <CustomizeButton
          text="Back"
          onClick={() => setShow(false)}
          className="bg-btnlinear border-none rounded !px-10 !py-3 w-[70%] my-4"
          type="button"
        />
      </motion.div>
    </div>
  );
};

export default SuccessfulModal;
