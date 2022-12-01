import React from "react";
import { Link } from "react-router-dom";

export const RegButton = () => {
  return (
    <div className="w-full flex items-center justify-center mt-8">
      <Link to={"/form"}>
        <p className=" bg-green-500 font-medium text-white py-2 px-5 rounded-sm shadow-lg">
          Register as Field Agent
        </p>
      </Link>
    </div>
  );
};
