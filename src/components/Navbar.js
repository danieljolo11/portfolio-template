import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = ({setShowChevUp}) => {
  const tabs = ["About", "Projects", "Experience"];

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [selected, setSelected] = useState([]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 125) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    switch (true) {
      case latest >= 150 && latest < 1000:
        setSelected("About");
        setShowChevUp(true)
        break;
      case latest >= 1001 && latest < 1704:
        setSelected("Projects");
        setShowChevUp(true)
        break;
      case latest >= 1705:
        setSelected("Experience");
        setShowChevUp(true)
        break;
      default:
        setSelected([]);
        setShowChevUp(false)
    }
  });

  const ScreenBigDisplay = (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className="hidden md:flex lg:flex fixed top-0 w-full items-center justify-between bg-main-black/70 backdrop-blur-sm z-50 py-4 px-8"
    >
      <div className="flex flex-row items-center gap-16">
        <span className="text-4xl font-bold text-main-white">
          D<span className="text-main-blue">.</span>
        </span>
        <div className="flex flex-row items-center gap-6">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
      </div>
      <div>
        <button className="bg-transparent hover:bg-main-blue transition-colors duration-300 border-main-blue border py-2 px-6 rounded-lg text-main-white">
          My resume
        </button>
      </div>
    </motion.nav>
  );

  const ScreenPhoneDisplay = (
    <motion.nav
      variants={{
        visible: { y: 24 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className={`${
        !showNavbar ? "flex" : "hidden"
      } flex md:hidden lg:hidden fixed top-auto right-10 z-40`}
    >
      <HiOutlineBars3
        onClick={() => setShowNavbar(!showNavbar)}
        className="text-main-white text-2xl cursor-pointer"
      />
    </motion.nav>
  );

  const PhoneNavbar = (
    <div
      className={`${
        showNavbar ? "h-80 " : "h-0"
      } fixed top-0 w-full transition-all duration-500 origin-top bg-main-blue z-50 overflow-hidden`}
    >
      <div
        className={`${
          showNavbar ? "flex" : "hidden"
        } fixed top-6 right-10 z-50`}
      >
        <AiOutlineClose
          onClick={() => setShowNavbar(!showNavbar)}
          className="text-main-white text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-end h-[65%]">
        <div className=" flex flex-col gap-3 px-6 w-full">
          {tabs.map((tab) => (
            <Link to={`/#${tab}`} key={tab}>
              <button
                onClick={() => setSelected(tab)}
                className={`${
                  selected === tab ? "bg-main-white" : "bg-transparent"
                } w-full rounded-full text-xl text-main-black`}
              >
                {tab}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 px-6">
        <button className="bg-transparent hover:bg-secondary-blue hover:text-main-black transition-colors duration-300 w-fit border-secondary-blue border py-2 px-6 rounded-lg text-main-white">
          My resume
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {ScreenBigDisplay}
      {ScreenPhoneDisplay}
      {PhoneNavbar}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <Link to={`/#${text}`} key={text}>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-secondary-blue"
            : "text-main-white hover:text-secondary-blue/80 hover:bg-slate-700"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span className="navbartext border-b-2 border-transparent">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 navbartext border-b-2 border-main-blue"
          ></motion.span>
        )}
      </button>
    </Link>
  );
};

export default Navigation;
