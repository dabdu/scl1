import React from "react";
import { colors } from "../constants/theme";

const Button = ({ text }) => {
  return (
    <button
      className=" font-semibold rounded-lg py-2 justify-center w-full flex items-center primary-btn"
      // style={{ backgroundColor: colors.primary }}
    >
      {text}
    </button>
  );
};

export default Button;
