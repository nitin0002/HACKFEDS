import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  const navitems = [
    { label: "About Us", url: "#", Number: "01 " },
    { label: "Sponsor Us", url: "#", Number: "02 " },
    { label: "Meetups", url: "#", Number: "03 " },
    { label: "Hackathons", url: "#", Number: "04 " },
    { label: "Team", url: "#", Number: "05 " },
  ];

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          {" "}
          <span className="block text-4xl backdrop-filter backdrop-blur-sm bg-white/20 rounded-md p-4 ">HACKFED</span>
        </h1>
      </div>

      <nav
       style={{
        zIndex: "1",
       }}>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <CiMenuBurger
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 p-7 uppercase bg-white/20 rounded-md  space-x-4 font-sans font-medium tracking-widest backdrop-filter backdrop-blur-sm">
          {navitems.map((navitem) => (
            <li key={navitem.label}>
              <Link href={navitem.url} passHref>
                <span className="aria-hidden: font-bold tracking-widest">
                  {navitem.Number}
                </span>
                {navitem.label}
              </Link>
            </li>
          ))}
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Header;
