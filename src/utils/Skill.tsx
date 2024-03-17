import React from "react";

interface items {
  id: number;
  name: string;
  pr: string;
}
const Skill = ({ skillList }) => {
  return (
    <>
      {skillList.map((item: items) => (
        <li className="space-y-1 w-full" key={item.id}>
          <div className="flex items-center justify-between text-dark-500 text-base">
            <h4>{item.name}</h4>
            <p>{item.pr}</p>
          </div>
          <div className="border flex items-center px-[2px] border-primary h-2 w-full rounded-md">
            <section className="bg-primary h-1 " style={{ width: item.pr }} />
          </div>
        </li>
      ))}
    </>
  );
};

export default Skill;
