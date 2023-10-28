import React, { useRef } from "react";
import sampleproject from "../assets/sampleproject-1.jpg";
import sampleproject2 from "../assets/sampleproject-2.jpg";
import sampleproject3 from "../assets/sampleproject-3.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useInView } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      title: "Sample Website",
      techs: ["React", "Tailwind"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit",
      img: sampleproject,
      link: "https://google.com",
    },
    {
      title: "Sample Website 2",
      techs: ["React", "Tailwind", "NodeJS"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit",
      img: sampleproject2,
      link: "https://google.com",
    },
    {
      title: "Sample Website 3",
      techs: ["React", "Tailwind", "NodeJS", "Typescript", "MongoDB"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit",
      img: sampleproject3,
      link: "https://google.com",
    },
    {
      title: "Sample Website 4",
      techs: ["React", "Tailwind"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit",
      img: sampleproject,
      link: "https://google.com",
    },
    {
      title: "Sample Website 5",
      techs: ["React", "Tailwind", "NodeJS"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit",
      img: sampleproject2,
      link: "https://google.com",
    },
    {
      title: "Sample Website 6",
      techs: ["React", "Tailwind", "NodeJS", "Typescript", "MongoDB"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit",
      img: sampleproject3,
      link: "https://google.com",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="Projects"
      className="min-h-screen bg-main-black flex flex-row justify-center pb-10"
    >
      <div
        ref={ref}
        className={`${
          isInView ? "translate-x-0" : "-translate-x-[100%]"
        } transition-transform duration-1000 max-w-7xl w-full flex flex-col gap-8`}
      >
        <div className="flex flex-row items-center gap-4 md:gap-10 xl:gap-10 px-2 md:px-4 xl:px-0">
          <span className="text-6xl font-bold text-main-white">Projects</span>
          <div className="w-full h-0.5 bg-main-blue"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center md:place-items-center xl:place-items-start gap-3 md:gap-2 xl:gap-6">
          {projectsData.map(({ title, techs, desc, img, link }) => {
            const seperatetechs = techs?.join(", ");
            return (
              <div
                className="group flex flex-col h-72 w-auto max-w-sm"
                key={title}
              >
                <div className="basis-1/2 p-4 flex flex-col gap-2 bg-main-white">
                  <span className="text-base font-semibold text-main-black">
                    {title ?? ""}
                  </span>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-base font-semibold text-main-black">
                      Tech:
                    </span>
                    <span className="text-sm font-medium text-main-black truncate w-80">
                      {seperatetechs}
                    </span>
                  </div>
                  <span className="text-sm font-normal line-clamp-2 text-main-black">
                    {desc}
                  </span>
                </div>
                <div className="flex flex-row basis-1/2">
                  <div className="basis-1/2 bg-cover">
                    <img
                      className="transition-transform origin-bottom-left scale-y-[1.91] scale-x-[2] group-hover:scale-100 duration-300 object-fill object-center h-full w-full"
                      src={img}
                      alt="sampleproject"
                    />
                  </div>
                  <a
                    href={link}
                    className="basis-1/2 flex justify-center items-center flex-row gap-1 bg-main-blue"
                  >
                    <span className="text-sm font-medium text-main-white">
                      Go to website
                    </span>
                    <IoArrowForwardOutline className="text-sm font-medium text-main-white" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
