import React from "react";

const Bigcard = ({
  title,
  role,
  date,
  certificate,
  description,
  border = true,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-5 max-lg:space-y-2  border-dark-100/50 ${
        border && "border-b"
      } py-5`}
    >
      <div className="col-span-2 ">
        <h3 className="text-lg font-medium text-dark-100">{title}</h3>
        <div className="flex gap-x-2 items-center mt-2 lg:mt-5">
          <h4 className="text-base text-dark-100 ">{role}</h4>
          <div className="bg-primary w-fit flex items-center justify-center px-2">
            <p className="text-light-400 text-xs">{date}</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 space-y-2 lg:space-y-5">
        <h3 className="text-lg font-medium text-dark-100">{certificate}</h3>
        <p className="text-base text-dark-100">{description}</p>
      </div>
    </div>
  );
};

export default Bigcard;
