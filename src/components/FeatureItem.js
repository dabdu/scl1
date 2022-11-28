import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { colors } from "../constants/theme";

const FeatureItem = ({ imgLink, title, title2 }) => {
  return (
    <div
      className="bg-white rounded-sm relative md:my-10 my-4 w-[204px] h-[285px]"
      // style={{ height: "285px", width: "" }}
    >
      <div className="my-6 mb-2" style={{}}>
        <h3
          className="font-bold primary-font text-center"
          style={{ lineHeight: "25px", color: "#756E6E", fontWeight: 600 }}
        >
          {title}
        </h3>
        <p className="text-center font-light" style={{ color: "#756E6E" }}>
          {title2}
        </p>
      </div>

      <img
        src={imgLink}
        className={"absolute bottom-0"}
        style={{ height: "202px", width: "100%" }}
      />
    </div>
  );
};

export default FeatureItem;
