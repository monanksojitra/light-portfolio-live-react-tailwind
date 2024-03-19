import React from "react";
import Heading from "../utils/Heading";
import { IconStar } from "@tabler/icons-react";

const Recommendations = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading
        subtitel={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        }
        titel={"recommendations"}
      />
      <div className="grid grid-cols-3 gap-x-6 mx-8 mt-12">
        <div className="bg-light-400 flex flex-col items-start gap-y-3 p-5 justify-center">
          <div className="flex gap-x-3">
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
          </div>
          <h3 className="text-lg font-medium text-dark-100">Great Quality!</h3>
          <p className="text-dark-500 font-medium text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </p>
          <div className="flex gap-x-3 items-center">
            <div className="h-20 aspect-square rounded-full">
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=female"
                alt=""
                className="h-20 aspect-square rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-dark-100">James Gouse</h3>
              <h5 className="text-dark-500  font-medium text-base">
                Graphic Designer
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-light-400 flex flex-col items-start gap-y-3 p-5 justify-center">
          <div className="flex gap-x-3">
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
          </div>
          <h3 className="text-lg font-medium text-dark-100">Amazing work!</h3>
          <p className="text-dark-500 font-medium text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </p>
          <div className="flex gap-x-3 items-center">
            <div className="h-20 aspect-square rounded-full">
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt=""
                className="h-20 aspect-square rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-dark-100">
                Tiana Philips
              </h3>
              <h5 className="text-dark-500  font-medium text-base">
                Photographer
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-light-400 flex flex-col items-start gap-y-3 p-5 justify-center">
          <div className="flex gap-x-3">
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
            <IconStar color="#FFB400" fill="#FFB400" size={18} />
          </div>
          <h3 className="text-lg font-medium text-dark-100">Great Quality!</h3>
          <p className="text-dark-500 font-medium text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </p>
          <div className="flex gap-x-3 items-center">
            <div className="h-20 aspect-square rounded-full">
              <img
                src="https://api.multiavatar.com/zoe.svg"
                alt=""
                className="h-20 aspect-square rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-dark-100">
                Talan Westervelt
              </h3>
              <h5 className="text-dark-500  font-medium text-base">
                Business man
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
