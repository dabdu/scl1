import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { colors } from "../constants/theme";
import { menu_items } from "../constants/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  const word = "text-5xl font-bold";
  return (
    <div className="w-screen h-[80px] z-10 bg-white drop-shadow-lg px-6 md:px-20">
      <div className=" flex justify-between items-center w-full h-full">
        <img
          src="https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/09/cropped-logo-scl-food-system.png"
          style={{
            height: "60px",
          }}
        />
        <div className="hidden md:flex pr-4">
          <ul className="hidden md:flex">
            {menu_items.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.link}
                  smooth={true}
                  duration={500}
                  className="text-black"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={!nav ? "hidden" : "absolute bg-white w-full px-6 "}
        style={{ zIndex: 1000 }}
      >
        {menu_items.map((menu, index) => (
          <li key={index} className="border-b border-zinc-300 w-full font-bold">
            <Link to={menu.link} smooth={true} duration={500}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
