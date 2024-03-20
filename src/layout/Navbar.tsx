import { IconCategory } from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 flex w-full items-center justify-between px-10 bg-light-400">
      <div className="h-10 aspect-square rounded-full border-2 border-primary">
        <img src="/assets/logo.jpg" alt="" className="rounded-full" />
      </div>
      <div>
        <p className="uppercase text-sm font-bold text-dark-100">
          Monank Sojitra
        </p>
      </div>
      <div>
        <IconCategory size={26} />
      </div>
    </div>
  );
};

export default Navbar;
