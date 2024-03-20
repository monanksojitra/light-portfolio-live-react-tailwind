import { IconArrowRight } from "@tabler/icons-react";

import Heading from "../utils/Heading";

const Myservices = () => {
  return (
    <div className="flex flex-col gap-y-12 items-center justify-center mt-20 lg:mt-36">
      <Heading
        title="My Services"
        subtitle=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full px-7 gap-5">
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center h-56 w-full">
          <img src="/assets/coding.svg" className="" alt="" />
          <h3 className="text-lg font-medium text-dark-100 capitalize">
            web development
          </h3>
          <p className="text-dark-500 text-base font-normal">
            blog, e-commerce
          </p>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center h-56 w-full">
          <img src="/assets/illustration.svg" className="" alt="" />
          <h3 className="text-lg font-medium text-dark-100 capitalize">
            uI/uX design
          </h3>
          <p className="text-dark-500 text-base font-normal">
            Mobile app, website design
          </p>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center h-56 w-full">
          <img src="/assets/Microphone.svg" className="" alt="" />
          <h3 className="text-lg font-medium text-dark-100 capitalize">
            sound design
          </h3>
          <p className="text-dark-500 text-base font-normal">
            Voice Over, Beat Making
          </p>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center h-56 w-full">
          <img src="/assets/Ad-pop-up.svg" className="" alt="" />
          <h3 className="text-lg font-medium text-dark-100 capitalize">
            game design
          </h3>
          <p className="text-dark-500 text-base font-normal">
            Character Design, Props & Objects
          </p>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center h-56 w-full">
          <img src="/assets/Group.svg" className="" alt="" />
          <h3 className="text-lg font-medium text-dark-100 capitalize">
            photography
          </h3>
          <p className="text-dark-500 text-base font-normal">
            portrait, product photography
          </p>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center h-56 w-full">
          <h3 className="text-lg font-medium text-dark-100 capitalize">
            advertising
          </h3>
          <p className="text-dark-500 text-base font-normal px-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
          <div className="flex text-xs gap-x-2 cursor-pointer text-primary items-center justify-center">
            <p>ORDER NOW</p>

            <IconArrowRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myservices;
