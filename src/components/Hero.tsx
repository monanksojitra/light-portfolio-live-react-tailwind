import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import Myservices from "./Myservices";
import Priceplans from "./Priceplans";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-3 mx-7  bg-light-400 pt-7 px-7">
        <div className="p-8  col-span-2">
          <p className="text-5xl font-bold text-dark-100 leading-tight">
            I’m Monank Sojitra <span className="text-primary">Front-end </span>
            Developer{" "}
          </p>
          <p className="text-base text-dark-500 py-5 w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <div className="flex items-center gap-x-3 bg-primary rounded-md w-fit h-14 px-7 mt-4">
            <p className="text-dark-100 text-base uppercase font-semibold">
              hire me
            </p>
            <IconArrowRight />
          </div>
        </div>
        <div className="">
          <img src="/assets/person.png" alt="" className="" />
        </div>
      </div>
      <Myservices />
      <Priceplans />
    </>
  );
};

export default Hero;
