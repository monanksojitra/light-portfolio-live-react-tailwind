import { IconArrowRight } from "@tabler/icons-react";

import Myservices from "./Myservices";
import Priceplans from "./Priceplans";
import Recommendations from "./Recommendations";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import { useState } from "react";

const Hero = () => {
  const [profile, showProfile] = useState(false);
  const [menu, showMenu] = useState(false);
  const handeloff = () => {
    showMenu(false);
    showProfile(false);
  };
  return (
    <div className="flex relative flex-col items-center justify-center">
      {profile && (
        <div className="absolute top-0 left-0 ">
          <LeftBar />
        </div>
      )}
      {menu && (
        <div className="absolute top-0 right-0 w-[20%]">
          <RightBar />
        </div>
      )}

      <Navbar showProfile={showProfile} showMenu={showMenu} />
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 mx-7 max-lg:mt-5  bg-light-400 lg:pt-7 px-3 lg:px-7"
        onMouseDown={handeloff}
      >
        <div className="lg:order-2">
          <img
            src="https://github.com/monanksojitra/light-portfolio-live-react-tailwind/assets/person.png"
            alt=""
            className=""
          />
        </div>
        <div className="p-4 md:py-12 lg:p-8  lg:col-span-2 lg:order-1">
          <p className="text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            I’m Monank Sojitra <span className="text-primary">Front-end </span>
            Developer{" "}
          </p>
          <p className="text-base text-dark-500 py-5 lg:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <div className="flex items-center gap-x-3 bg-primary rounded-md w-fit h-10 lg:h-14 px-4 lg:px-7 lg:mt-4 cursor-pointer">
            <p className="text-dark-100 text-sm lg:text-base uppercase font-semibold">
              hire me
            </p>
            <IconArrowRight />
          </div>
        </div>
      </div>
      <Myservices />
      <Priceplans />
      <Recommendations />
      <Education />
      <WorkHistory />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
