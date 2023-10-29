import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export const ModalContact = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-main-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="text-center text-xl md:text-2xl lg:text-2xl font-bold">
              Contacts
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex flex-col md:flex-row lg:flex-row justify-start items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <HiOutlineMail className="text-main-white text-lg md:text-xl lg:text-xl" />
                  <span className="text-lg md:text-xl lg:text-xl font-semibold text-main-white">
                    Email:
                  </span>
                </div>
                <span className="text-base md:text-lg lg:text-lg font-normal text-main-white text-justify">
                  sampleemail@gmail.com
                </span>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row justify-start items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <HiOutlinePhone className="text-main-white text-lg md:text-xl lg:text-xl" />
                  <span className="text-lg md:text-xl lg:text-xl font-semibold text-main-white">
                    Contact:
                  </span>
                </div>
                <span className="text-base md:text-lg lg:text-lg font-normal text-main-white text-justify">
                  +639123123123
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
