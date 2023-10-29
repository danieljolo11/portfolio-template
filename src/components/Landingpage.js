import About from "./About";
import BubbleText from "./BubbleText";
// import Contact from "./Contact";
import Experience from "./Experience";
import FloatingPhone from "./FloatingPhone";
import Navigation from "./Navbar";
import Projects from "./Projects";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ModalContact } from "./ModalContact";

const LandingPage = () => {
  const location = useLocation();
  const lastHash = useRef("");

  const [isOpen, setIsOpen] = useState(false);
  const [showChevUp, setShowChevUp] = useState(false);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-main-black">
      <Link to="/#landingpage">
        <button
          className={`${
            showChevUp ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 fixed bottom-10 right-10 bg-main-blue rounded-lg p-2 z-40`}
        >
          <FaChevronUp className="text-main-white" />
        </button>
      </Link>
      <Navigation setShowChevUp={setShowChevUp} />
      <div
        id="landingpage"
        className="min-h-screen bg-main-black pt-8 pb-16 md:py-8 lg:py-8"
      >
        <section className="h-screen flex flex-col md:flex-row lg:flex-row items-center gap-10 md:gap-0 lg:gap-0">
          <div className="basis-1/2 text-white px-4 flex flex-col gap-2">
            <BubbleText />
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <FloatingPhone isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </section>
      </div>
      <About />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <ModalContact isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default LandingPage;
