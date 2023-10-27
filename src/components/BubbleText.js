import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";

const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");
    const spans2 = document.querySelectorAll(".hover-text2 span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(199, 210, 254)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(199, 210, 254)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "100";
        this.style.color = "#0077C0";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "#0077C0";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "#0077C0";
        }
      });
    });

    spans2.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(199, 210, 254)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(199, 210, 254)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "600";
        this.style.color = "#C7EEFF";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "600";
          leftNeighbor.style.color = "#C7EEFF";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "600";
          rightNeighbor.style.color = "#C7EEFF";
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col gap-5">
        <h2 className="hover-text text-start text-7xl font-thin text-secondary-blue">
          <Text>Hey, I'm Daniel</Text>
        </h2>
        <div className="flex flex-row items-center gap-2">
          <h2 className="hover-text text-start text-2xl font-thin text-secondary-blue">
            <Text>I'm a</Text>
          </h2>
          <span className="hover-text2 text-start text-2xl font-bold text-main-blue">
            <Text>Full stack Developer</Text>
          </span>
        </div>
        <span className="max-w-lg text-secondary-blue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
        <button className="bg-main-blue w-fit text-main-white py-3 px-5 rounded-lg hover:bg-main-blue/90">
          Contact me
        </button>
        <div className={`flex flex-row items-center gap-4`}>
          <a
            className="text-white hover:text-blue-600"
            href="https://www.linkedin.com/in/daniel-jolo-ab88aa191/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <a
            className="grayscale hover:text-black"
            href="https://github.com/danieljolo11"
          >
            <AiOutlineGithub className="text-3xl" />
          </a>
          <a
            className="grayscale hover:grayscale-0"
            href="https://gitlab.com/danieljolo4899"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 25 24"
              height="24"
              width="25"
              class="tanuki-logo"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#E24329"
                d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                class="tanuki-shape tanuki"
              ></path>
              <path
                fill="#FC6D26"
                d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                class="tanuki-shape right-cheek"
              ></path>
              <path
                fill="#FCA326"
                d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                class="tanuki-shape chin"
              ></path>
              <path
                fill="#FC6D26"
                d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                class="tanuki-shape left-cheek"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
