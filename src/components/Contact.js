import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function Contact() {
  return (
    <div id="Contact" className="h-[45rem] bg-main-black flex flex-row justify-center py-10">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-5xl md:text-6xl xl:text-6xl font-bold text-main-white">Contact</span>
          <span className="text-xl md:text-3xl lg:text-3xl font-semibold text-main-white">
            Get in touch
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <HiOutlineMail className="text-main-blue text-lg md:text-xl lg:text-xl" />
            <span className="text-lg md:text-xl lg:text-xl font-semibold text-main-white">
              Email:{" "}
              <span className="text-base md:text-lg lg:text-lg font-normal text-main-white text-justify">
                sampleemail@gmail.com
              </span>
            </span>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <HiOutlinePhone className="text-main-blue text-lg md:text-xl lg:text-xl" />
            <span className="text-lg md:text-xl lg:text-xl font-semibold text-main-white">
              Contact:{" "}
              <span className="text-base md:text-lg lg:text-lg font-normal text-main-white text-justify">
                +639123123123
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
