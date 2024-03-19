import { IconMail, IconMap, IconPlugConnected } from "@tabler/icons-react";
import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-5 mx-6 gap-x-5">
      <div className="col-span-3">
        <h3 className="text-3xl font-bold text-dark-100">Leave us your info</h3>
        <form className="bg-[#fff] px-7 py-5 flex flex-col gap-y-6 mt-10">
          <div className="flex flex-col gap-y-2">
            <label className="text-dark-500 text-lg font-medium" htmlFor="">
              Your Full Name ( Required)
            </label>
            <input type="text" className="bg-light-100 text-dark-100 h-11" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-dark-500 text-lg font-medium" htmlFor="">
              Your Email ( Required)
            </label>
            <input type="email" className="bg-light-100 text-dark-100 h-11" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-dark-500 text-lg font-medium" htmlFor="">
              Subject
            </label>
            <input type="text" className="bg-light-100 text-dark-100 h-12" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-dark-500 text-lg font-medium">
              Your Message
            </label>
            <textarea
              name=""
              id=""
              className="bg-light-100 text-dark-100"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="bg-primary flex items-center justify-center h-10">
            <p className="text-sm font-semibold uppercase">Send message</p>
          </div>
        </form>
      </div>
      <div className="col-span-2">
        <h3 className="text-3xl font-bold text-dark-100">
          Contact information
        </h3>
        <div className="mt-10 space-y-9">
          <div className="flex flex-col items-center p-7 justify-between h-52 bg-[#fff]">
            <div className="bg-primary rounded-full h-10 aspect-square flex items-center justify-center">
              <IconMap />
            </div>
            <ul className="flex flex-col w-full gap-y-3 text-dark-500">
              <li className="flex items-center justify-between">
                <p>Country:</p>
                <p>Bangladesh</p>
              </li>
              <li className="flex items-center justify-between">
                <p>City:</p>
                <p>Dhaka</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Streat:</p>
                <p>Bangla35 vhatara, Baddadesh</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-7 justify-between h-52 bg-[#fff]">
            <div className="bg-primary rounded-full h-10 aspect-square flex items-center justify-center">
              <IconMail />
            </div>
            <ul className="flex flex-col w-full gap-y-3 text-dark-500">
              <li className="flex items-center justify-between">
                <p>Email:</p>
                <p>youremail@gmail.com</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Skype:</p>
                <p>@yourusername</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Telegram:</p>
                <p>@yourusername</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-7 justify-between h-52 bg-[#fff]">
            <div className="bg-primary rounded-full h-10 aspect-square flex items-center justify-center">
              <IconPlugConnected />
            </div>
            <ul className="flex flex-col w-full gap-y-3 text-dark-500">
              <li className="flex items-center justify-between">
                <p>Support services:</p>
                <p>15369</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Office:</p>
                <p>+58 (021)356 587 235</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Personal:</p>
                <p>+58 (021)356 587 235</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
