import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const navitems = [
  { label: "ABOUT Us", url: "#", Number: "01 " },
  { label: "Sponsor Us", url: "#", Number: "02 " },
  { label: "Meetups", url: "#", Number: "03 " },
  { label: "Hackathons", url: "#", Number: "04 " },
  { label: "Team", url: "#", Number: "05 " },
];

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-start fixed inset-0  space-x-8 font-sans font-extrabold uppercase tracking-widest bg-white/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden "
      }
    >
      <AiOutlineClose onClick={showMenu} className="cursor-pointer" />
      {navitems.map((navitem) => (
        <li key={navitem.label}>
          <Link href={navitem.url} passHref>
            <span className="aria-hidden: font-bold">{navitem.Number}</span>
            {navitem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
