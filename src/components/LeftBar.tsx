import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCopy,
  IconDownload,
  icons,
} from "@tabler/icons-react";
import React from "react";
import Skill from "../utils/Skill";

const LeftBar = () => {
  const socialLink = [
    { id: 1, src: "", Icon: IconBrandFacebook },
    { id: 2, src: "", Icon: IconBrandInstagram },
    { id: 3, src: "", Icon: IconBrandTwitter },
    { id: 4, src: "", Icon: IconBrandLinkedin },
    { id: 5, src: "", Icon: IconBrandYoutube },
    { id: 6, src: "", Icon: IconBrandGithub },
  ];
  const language = [
    { id: 1, name: "Gujrati", pr: "100%" },
    { id: 2, name: "English", pr: "60%" },
    { id: 3, name: "Hindi", pr: "80%" },
  ];
  const skills = [
    { id: 1, name: "Html", pr: "80%" },
    { id: 2, name: "Css", pr: "70%" },
    { id: 3, name: "Js", pr: "80%" },
    { id: 3, name: "React Js", pr: "80%" },
    { id: 3, name: "React Native", pr: "70%" },
    { id: 3, name: "Tailwind", pr: "70%" },
  ];
  return (
    <div className="py-11 px-8 bg-light-400">
      <div className="flex flex-col items-center justify-center border-b-2 border-b-dark-500/50 pb-6">
        <div className="flex relative items-center justify-center rounded-full">
          <img
            src="/assets/logo.jpg"
            alt=""
            className="rounded-full h-40 aspect-square"
          />
          <div className="absolute h-4 right-24 bottom-2 aspect-square rounded-full bg-green-500"></div>
        </div>
        <div className="pt-6 text-center space-y-2.5">
          <h3 className="text-lg font-semibold text-dark-100">
            Monank Sojitra
          </h3>
          <h4 className="text-base font-normal text-dark-500">
            Font-end Developer
          </h4>
        </div>
        <div className="pt-4 flex gap-x-4">
          {socialLink.map((item) => (
            <div
              key={item.id}
              className="bg-primary h-6 flex items-center justify-center aspect-square rounded-full"
            >
              <item.Icon color="black" size={16} />
            </div>
          ))}
        </div>
      </div>
      <div className="py-5 px-2  border-b-2 border-b-dark-500/50">
        <ul className="flex flex-col gap-3">
          <li className="text-base text-dark-100 flex  justify-between items-center ">
            <div className="bg-primary px-1">
              <h4>Age:</h4>
            </div>
            <p>24</p>
          </li>
          <li className="text-base text-dark-100 flex  justify-between items-center ">
            <div className="bg-primary px-1">
              <h4>Residence:</h4>
            </div>
            <p>Ind</p>
          </li>{" "}
          <li className="text-base text-dark-100 flex  justify-between items-center ">
            <div className="bg-primary px-1">
              <h4>Freelance:</h4>
            </div>
            <p className="text-[#7EB942]">Available</p>
          </li>
          <li className="text-base text-dark-100 flex  justify-between items-center ">
            <div className="bg-primary px-1">
              <h4>Address:</h4>
            </div>
            <p>Ahmedabad,Gujrat</p>
          </li>
        </ul>
      </div>
      <div className="pt-5 px-2">
        <h3 className="text-lg text-dark-100">Languages</h3>
        <ul className="pt-4 space-y-1">
          <Skill skillList={language} />
        </ul>
      </div>
      <div className="pt-7 px-2 border-b-2 border-b-dark-500/50 pb-6">
        <h3 className="text-lg text-dark-100">Skills</h3>
        <ul className="pt-4 space-y-1">
          <Skill skillList={skills} />
        </ul>
      </div>
      <div className="pt-5 px-2 border-b-2 border-b-dark-500/50 pb-6">
        <h3 className="text-lg text-dark-100">Extra Skills</h3>
        <ul className="pt-4 space-y-1">
          <li className="flex gap-3 items-center">
            <IconCopy size={20} color="#FFB400" />
            <p className="text-base text-dark-100">Video Editing</p>
          </li>
          <li className="flex gap-3 items-center">
            <IconCopy size={20} color="#FFB400" />
            <p className="text-base text-dark-100">Photo Editing</p>
          </li>
          <li className="flex gap-3 items-center">
            <IconCopy size={20} color="#FFB400" />
            <p className="text-base text-dark-100">Social media influencer</p>
          </li>
        </ul>
      </div>

      <div className="flex gap-3 items-center bg-primary justify-center h-10 my-6">
        <p className="text-sm font-semibold text-dark-100 uppercase">
          Download cv
        </p>
        <IconDownload size={20} />
      </div>
    </div>
  );
};

export default LeftBar;
