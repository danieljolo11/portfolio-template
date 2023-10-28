import React, { useRef } from "react";
import { FaNetworkWired } from "react-icons/fa6";
import { useInView } from "framer-motion";

function About() {
  const techs = [
    "React",
    "React Native",
    "Typescript",
    "HTML",
    "CSS",
    "NodeJS",
    "Express",
    "MongoDB",
    "Redux",
    "Zustand",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="About"
      className="min-h-screen bg-main-black flex flex-row justify-center pt-20"
    >
      <div
        ref={ref}
        className={`${
          isInView ? "translate-x-0" : "-translate-x-[100%]"
        } transition-transform duration-1000 max-w-7xl w-full flex flex-col gap-8`}
      >
        <div className="flex flex-row items-center gap-10">
          <span className="text-6xl font-bold text-main-white">About</span>
          <div className="w-full h-0.5 bg-main-blue"></div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="basis-[65%] flex flex-col gap-4">
            <span className="text-lg font-light text-main-white/80 first-letter:bg-main-blue first-letter:p-3.5 first-letter:rounded-md first-letter:float-left first-letter:mr-2 first-letter:font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <span className="text-lg font-light text-main-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <span className="text-lg font-light text-main-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div className="basis-[35%] flex flex-col gap-3">
            <div className="flex flex-row items-center gap-3">
              <div className="bg-main-blue p-1.5 rounded-md w-fit">
                <FaNetworkWired className=" text-main-black" />
              </div>
              <div>
                <span className="text-xl font-bold text-main-white">Tech</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {techs.map((items) => (
                <div key={items} className="bg-secondary-blue py-1 px-2 rounded-lg w-fit">
                  <span
                    key={items}
                    className="text-main-black font-medium text-base"
                  >
                    {items}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
