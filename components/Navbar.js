import React , {useEffect, useState} from "react";
import Link from "next/link";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const navitems = [
      { label: "About Us", url: "#" , Number: '01 ' },
      { label: "Sponsor Us", url: "#" , Number: '02 ' },
      { label: "Meetups", url: "#" , Number: '03 ' },
      { label: "Hackathons", url: "#" , Number: '04 ' },
      { label: "Team", url: "#" , Number: '05 ' },
    ];
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    return (

          
      
        <nav className='flex flex-wrap justify-between items-center p-4 md:p-8 text-lg'>
             <div className="flex items-center">
        <a href="/" className="mr-4">
          Partner
        </a>
        <MdOutlineKeyboardArrowRight />
      </div>
      <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
        <ul className="md:flex items-center space-x-8 uppercase font-sans tracking-widest">
          {navitems.map((navitem) => (
            <li key={navitem.label}>
              <Link href={navitem.url} passHref>
                  <span className="aria-hidden: font-bold">{navitem.Number}</span>
                  {navitem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="outline-none focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
        </nav>

    )
};

export default Navbar;