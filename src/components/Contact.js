import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function Contact() {
  return (
    <div id="Contact" className="h-[45rem] bg-main-black flex flex-row justify-center py-10">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-7xl font-bold text-main-white">Contact</span>
          <span className="text-3xl font-semibold text-main-white">
            Get in touch
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <HiOutlineMail className="text-main-blue text-xl" />
            <span className="text-xl font-semibold text-main-white">
              Email:{" "}
              <span className="text-lg font-normal text-main-white text-justify">
                sampleemail@gmail.com
              </span>
            </span>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <HiOutlinePhone className="text-main-blue text-xl" />
            <span className="text-xl font-semibold text-main-white">
              Contact:{" "}
              <span className="text-lg font-normal text-main-white text-justify">
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
