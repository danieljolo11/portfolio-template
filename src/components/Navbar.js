import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navigation = () => {
  const { scrollY } = useScroll();
  const tabs = ["About", "Projects", "Experience", "Contact"];

  const [hidden, setHidden] = useState(false);
  const [selected, setSelected] = useState(tabs[0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 125) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className="fixed top-0 flex w-full items-center justify-between bg-main-black/70 backdrop-blur-sm z-50 py-4 px-8"
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
};

const Chip = ({ text, selected, setSelected }) => {
  return (
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
  );
};

export default Navigation;
