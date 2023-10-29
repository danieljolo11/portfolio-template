import { useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

function Experience() {
  const expData = useMemo(
    () => [
      {
        companyname: "Company Name 5",
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
        companyname: "Company Name 4",
        date: "2019 - 2020",
        location: "BGC",
        position: "Software Engineer",
        techs: ["React", "NodeJS", "MongoDB", "Redux", "Zustand"],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        companyname: "Company Name 3",
        date: "2018 - 2019",
        location: "Makati City",
        position: "Software Engineer",
        techs: [
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
    ],
    []
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 3;

    setCurrentItems(expData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(expData.length / 3));
  }, [itemOffset, expData]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % expData.length;

    setItemOffset(newOffset);
  };

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
          <span className="text-4xl md:text-6xl xl:text-6xl font-bold text-main-white">
            Experience
          </span>
          <div className="w-full h-0.5 bg-main-blue"></div>
        </div>
        <div className="flex flex-col gap-4">
          {currentItems?.map(
            ({ companyname, date, location, position, techs, desc }) => (
              <div
                key={companyname}
                className="flex flex-col gap-4 md:gap-3 lg:gap-3 px-4 xl:px-6 border-b border-main-blue pb-4 pt-2"
              >
                <div className="flex flex-row items-center justify-between">
                  <span className="text-main-white text-base md:text-xl lg:text-xltext-xl font-bold">
                    {companyname ?? "-"}
                  </span>
                  <span className="text-main-white text-sm md:text-lg lg:text-lg font-normal">
                    {date ?? "-"}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="text-main-white text-sm md:text-lg lg:text-lg font-medium">
                    {location ?? "-"}
                  </span>
                  <span className="block md:block lg:hidden text-main-blue text-sm md:text-lg lg:text-lg font-bold">
                    {position ?? "-"}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="hidden md:hidden lg:block text-main-blue text-sm md:text-lg lg:text-lg font-bold">
                    {position ?? "-"}
                  </span>
                  <div className="flex flex-row flex-wrap gap-2">
                    {techs.map((items) => (
                      <div
                        key={items}
                        className="bg-main-blue rounded-lg py-0.5 md:py-1.5 lg:py-1.5 px-1.5 md:px-3 lg:px-3"
                      >
                        <span className="text-xs md:text-sm lg:text-sm font-medium">
                          {items}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-main-white/80 text-sm md:text-lg lg:text-lg font-normal text-justify">
                  {desc ?? "-"}
                </span>
              </div>
            )
          )}
          <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel=""
            nextLabel=""
            className="flex justify-center mt-4 gap-4 text-main-white"
            activeLinkClassName="bg-main-blue rounded-full px-3 py-1"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
