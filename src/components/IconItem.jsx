import React from "react";
import { colors } from "../constants/theme";

const IconItem = ({ Icon, text, index }) => {
  return (
    <div
      // style={{ width: "180px" }}
      className={`flex-col py-5 justify-center items-center ${
        index === 0 ? "" : "md:border-l border-yellow-500"
      }`}
    >
      <div>
        <Icon size={80} className="mx-auto text-black" />
        <p className=" primary-font text-center">{text}</p>
      </div>
    </div>
  );
};

export default IconItem;
