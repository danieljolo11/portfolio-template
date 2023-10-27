import About from "./About";
import BubbleText from "./BubbleText";
import FloatingPhone from "./FloatingPhone";
import Navigation from "./Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-main-black">
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
    </div>
  );
};

export default LandingPage;
