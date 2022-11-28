import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { colors } from "../constants/theme";

const info = "flex items-center";
const text = "text-black";

const Header = () => {
  return (
    <div className="hidden bg-zinc-50 md:flex items-center justify-between py-2 px-20">
      {/* Contact Info */}
      <div className="space-y-2">
        <div className={`${info} flex items-center space-x-5`}>
          {/* Icon */}
          <div className="flex items-center">
            <MdEmail color={colors.primary} />
            <p style={{ fontSize: "14px" }} className={text}>
              info@sclng.com
            </p>
          </div>
          <div className="flex items-center">
            <BiPhoneCall color={colors.primary} />
            <p style={{ fontSize: "14px" }} className={text}>
              (234) 0818 779 4810
            </p>
          </div>
        </div>
        <div className={info}>
          {/* Icon */}
          <FaMapMarkerAlt color={"red"} />
          <p style={{ fontSize: "14px" }} className={text}>
            SCL Farms, Dama-kusa Village, Kwali Area Council, Abuja.
          </p>
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-2">
        <BsFacebook size={30} color={colors.primary} />
        <AiFillTwitterCircle size={30} color={colors.primary} />
        <AiFillInstagram size={30} color={colors.primary} />
        <AiFillLinkedin size={30} color={colors.primary} />
        <AiFillYoutube size={30} color={colors.primary} />
      </div>
    </div>
  );
};

export default Header;
