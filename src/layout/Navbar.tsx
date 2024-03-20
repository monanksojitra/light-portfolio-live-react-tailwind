import { IconCategory } from "@tabler/icons-react";

interface propType {
  showMenu: (value: boolean) => void;
  showProfile: (value: boolean) => void;
}
const Navbar = ({ showProfile, showMenu }: propType) => {
  return (
    <div className="h-16 flex sm:hidden w-full  items-center justify-between px-10 bg-light-400">
      <div
        className="h-10 aspect-square rounded-full border-2 border-primary cursor-pointer"
        onClick={() => showProfile(true)}
      >
        <img
          src="https://raw.githubusercontent.com/monanksojitra/light-portfolio-live-react-tailwind/main/public/assets/logo.jpg"
          alt=""
          className="rounded-full"
        />
      </div>
      <div>
        <p className="uppercase text-sm font-bold text-dark-100">
          Monank Sojitra
        </p>
      </div>
      <div onClick={() => showMenu(true)} className="cursor-pointer">
        <IconCategory size={26} />
      </div>
    </div>
  );
};

export default Navbar;
