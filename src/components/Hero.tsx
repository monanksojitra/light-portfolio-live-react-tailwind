import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
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

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="grid lg:grid-cols-3 mx-7 max-lg:mt-5  bg-light-400 lg:pt-7 px-3 lg:px-7">
        <div className="lg:order-2">
          <img src="/assets/person.png" alt="" className="" />
        </div>
        <div className="p-4 lg:p-8  lg:col-span-2 lg:order-1">
          <p className="text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            I’m Monank Sojitra <span className="text-primary">Front-end </span>
            Developer{" "}
          </p>
          <p className="text-base text-dark-500 py-5 lg:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <div className="flex items-center gap-x-3 bg-primary rounded-md w-fit h-10 lg:h-14 px-4 lg:px-7 lg:mt-4">
            <p className="text-dark-100 text-sm lg:text-base uppercase font-semibold">
              hire me
            </p>
            <IconArrowRight />
          </div>
        </div>
      </div>
      {/* <Myservices />
      <Priceplans />
      <Recommendations />
      <Education />
      <WorkHistory />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Hero;
