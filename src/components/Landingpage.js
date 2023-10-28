import About from "./About";
import BubbleText from "./BubbleText";
import Contact from "./Contact";
import Experience from "./Experience";
import FloatingPhone from "./FloatingPhone";
import Navigation from "./Navbar";
import Projects from "./Projects";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();
  const lastHash = useRef("");

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
        <button className="fixed bottom-10 right-10 bg-main-blue rounded-lg p-2 z-40">
          <FaChevronUp className="text-main-white" />
        </button>
      </Link>
      <Navigation />
      <div id="landingpage" className="min-h-screen bg-main-black">
        <section className="h-screen flex flex-row items-center">
          <div className="basis-1/2 text-white px-4 flex flex-col gap-2">
            <BubbleText />
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <FloatingPhone />
          </div>
        </section>
      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default LandingPage;
