import { useInView } from "framer-motion";
import React, { useRef } from "react";

function Experience() {
  const expData = [
    {
      companyname: "Company Name 3",
      date: "2020 - Present",
      location: "Makati City",
      position: "Software Engineer",
      techs: [
        "React",
        "NodeJS",
        "MongoDB",
        "Github",
        "Socket IO",
        "Typescript",
        "Redux",
        "Zustand",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      companyname: "Company Name 2",
      date: "2018 - 2020",
      location: "Taguig City",
      position: "Software Engineer",
      techs: ["React", "NodeJS", "MongoDB", "Github", "Socket IO"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      companyname: "Company Name 1",
      date: "2017 - 2018",
      location: "Quezon City",
      position: "Software Engineer",
      techs: ["React", "NodeJS", "MongoDB"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="Experience"
      className="min-h-screen bg-main-black flex flex-row justify-center pt-20 pb-10"
    >
      <div
        ref={ref}
        className={`${
          isInView ? "translate-x-0" : "-translate-x-[100%]"
        } transition-transform duration-1000 max-w-7xl w-full flex flex-col gap-8`}
      >
        <div className="flex flex-row items-center gap-4 md:gap-10 lg:gap-10 px-2 md:px-4 xl:px-0">
          <span className="text-6xl font-bold text-main-white">Experience</span>
          <div className="w-full h-0.5 bg-main-blue"></div>
        </div>
        <div className="flex flex-col gap-4">
          {expData.map(
            ({ companyname, date, location, position, techs, desc }) => (
              <div
                key={companyname}
                className="flex flex-col gap-3 px-8 xl:px-6 border-b border-main-blue pb-4 pt-2"
              >
                <div className="flex flex-row items-center justify-between">
                  <span className="text-main-white text-xl font-bold">
                    {companyname ?? "-"}
                  </span>
                  <span className="text-main-white text-lg font-normal">
                    {date ?? "-"}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="text-main-white text-lg font-medium">
                    {location ?? "-"}
                  </span>
                  <span className="block md:hidden lg:hidden text-main-blue text-lg font-bold">
                    {position ?? "-"}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="hidden md:block lg:block text-main-blue text-lg font-bold">
                    {position ?? "-"}
                  </span>
                  <div className="flex flex-row flex-wrap gap-2">
                    {techs.map((items) => (
                      <div
                        key={items}
                        className="bg-main-blue rounded-lg py-1.5 px-3"
                      >
                        <span className="text-sm font-medium">{items}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-main-white/80 text-lg font-normal text-justify">
                  {desc ?? "-"}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
