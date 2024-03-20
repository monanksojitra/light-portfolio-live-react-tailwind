import React from "react";

const Heading = ({ titel, subtitel }) => {
  return (
    <div className="w-[80%] lg:w-[40%] text-center text-dark-100 font-bold text-4xl flex flex-col gap-y-7">
      <h1 className="capitalize">{titel}</h1>
      <p className="text-base font-normal text-dark-500">{subtitel}</p>
    </div>
  );
};

export default Heading;
