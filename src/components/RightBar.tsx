import {
  IconBriefcase,
  IconCode,
  IconHome,
  IconMessage,
  IconMoonStars,
  IconRoute,
  IconSun,
  IconUserScan,
} from "@tabler/icons-react";
import { useState } from "react";

const RightBar = () => {
  const [mode, setMode] = useState(false);
  const [index, setIndex] = useState(1);
  const listOfTab = [
    { id: 1, Icon: IconHome, route: "" },
    { id: 2, Icon: IconCode, route: "" },
    { id: 3, Icon: IconUserScan, route: "" },
    { id: 4, Icon: IconBriefcase, route: "" },
    { id: 5, Icon: IconRoute, route: "" },
    { id: 6, Icon: IconMessage, route: "" },
  ];
  return (
    <div className="bg-light-400 py-10 flex flex-col items-center gap-y-20 ">
      <div className="flex items-center justify-center my-2">
        <div onClick={() => setMode(!mode)} className="cursor-pointer">
          {mode ? <IconMoonStars size={36} /> : <IconSun size={36} />}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-8">
        {listOfTab.map((item) => (
          <div
            onClick={() => setIndex(item.id)}
            key={item.id}
            className={`${
              index != item.id
                ? "bg-light-200/70"
                : "bg-primary duration-200 transition-all"
            } rounded-full h-10 flex items-center justify-center aspect-square cursor-pointer`}
          >
            <item.Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
