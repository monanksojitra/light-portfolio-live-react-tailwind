import Heading from "../utils/Heading";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";

const Priceplans = () => {
  const serviceList = [
    "UI Design",
    "web development",
    "logo design",
    "seo optimization",
    "wordPress integration",
    "5 Websites",
    "unlimited user",
    "20 gB bandwith",
  ];
  return (
    <div className="flex flex-col my-16 items-center justify-center">
      <Heading
        subtitle={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        }
        title={"Price plans"}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8 mt-12">
        <div className="bg-light-400 flex flex-col text-dark-100 items-center capitalize pt-14">
          <h2 className="text-2xl font-semibold ">silver</h2>
          <div className="flex gap-x-3 pt-5 items-baseline">
            <h3 className="text-3xl font-bold">$0.00</h3>
            <p className="text-base font-normal">/Hour</p>
          </div>
          <p className="text-dark-500 text-base px-6 text-center pt-3">
            For most businesses that want to optimize web queries
          </p>
          <ul className="w-full px-9 pt-4 flex flex-col gap-y-4">
            {serviceList.map((item, i) => (
              <li key={item} className="text-base flex gap-x-3">
                {i < 2 ? (
                  <IconCircleCheck color="#FFB400" />
                ) : (
                  <IconCircleX color="#767676" />
                )}
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="h-9 cursor-pointer shadow-xl flex items-center justify-center rounded-full px-8 my-8 text-sm font-semibold">
            <p>ORDER NOW</p>
          </div>
        </div>
        <div className="bg-light-400 flex flex-col text-dark-100 items-center capitalize shadow-lg">
          <div className="flex items-center justify-center h-8 bg-primary mb-6 w-full">
            <p className="text-base text-dark-100 font-medium">most popular</p>
          </div>
          <h2 className="text-2xl font-semibold ">gold</h2>
          <div className="flex gap-x-3 pt-5 items-baseline">
            <h3 className="text-3xl font-bold">$50.00</h3>
            <p className="text-base font-normal">/Hour</p>
          </div>
          <p className="text-dark-500 text-base px-6 text-center pt-3">
            For most businesses that want to optimize web queries
          </p>
          <ul className="w-full px-9 pt-4 flex flex-col gap-y-4">
            {serviceList.map((item, i) => (
              <li key={item} className="text-base flex gap-x-3">
                {i < 4 ? (
                  <IconCircleCheck color="#FFB400" />
                ) : (
                  <IconCircleX color="#767676" />
                )}
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="h-9 shadow-xl rounded-full flex items-center justify-center bg-primary px-8 my-8 text-sm font-semibold cursor-pointer">
            <p>ORDER NOW</p>
          </div>
        </div>
        <div className="bg-light-400 flex flex-col text-dark-100 items-center capitalize pt-14">
          <h2 className="text-2xl font-semibold ">dimond</h2>
          <div className="flex gap-x-3 pt-5 items-baseline">
            <h3 className="text-3xl font-bold">$80.00</h3>
            <p className="text-base font-normal">/Hour</p>
          </div>
          <p className="text-dark-500 text-base px-6 text-center pt-3">
            For most businesses that want to optimize web queries
          </p>
          <ul className="w-full px-9 pt-4 flex flex-col gap-y-4">
            {serviceList.map((item) => (
              <li key={item} className="text-base flex gap-x-3">
                <IconCircleCheck color="#FFB400" />

                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="h-9 cursor-pointer flex items-center justify-center shadow-xl rounded-full px-8 my-8 text-sm font-semibold">
            <p>ORDER NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceplans;
