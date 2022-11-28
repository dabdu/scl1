import React from "react";
import { colors } from "../constants/theme";

const ValuesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-56 md:mx-32 mx-10 md:space-x-20 my-10">
      <div
        style={{ color: colors.primary }}
        className={
          "md:border-r md:border-r-yellow-500 md:block flex items-center  pb-5 pt-2"
        }
      >
        <h1 className="md:text-5xl text-xl font-bold">Our Company</h1>
        <p className="md:text-2xl  text-lg  font-light md:mt-1 mt-1 mx-1">
          Features
        </p>
      </div>
      <div>
        <p className="primary-font text-justify">
          Our major strength is our highly trained technical staff base, led by
          a board and management team with over 150 years cumulative corporate
          management experience.
        </p>
      </div>
    </div>
  );
};

export default ValuesSection;
