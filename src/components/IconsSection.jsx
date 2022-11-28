import React from "react";
import { GiGrainBundle, GiChestnutLeaf, GiGoat } from "react-icons/gi";
import { MdOutlineAgriculture, MdOutlineSchool } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import IconItem from "./IconItem";
const data = [
  { text: "Food Processing", Icon: GiGrainBundle },
  { text: "Vegetable Production", Icon: GiChestnutLeaf },
  { text: "Regenerative Agriculture", Icon: MdOutlineAgriculture },
  { text: "Training School", Icon: MdOutlineSchool },
  { text: "Horticulture", Icon: FaLeaf },
  { text: "Livestock", Icon: GiGoat },
];
const IconsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-around my-5 mx-10  md:mx-48 border-b pb-8 md:pb-20 border-black">
      {data.map((item, index) => (
        <IconItem key={index} text={item.text} Icon={item.Icon} index={index} />
      ))}
    </div>
  );
};

export default IconsSection;
