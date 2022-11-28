import React from "react";

const SubHeader = ({ title }) => {
  return (
    <div
      style={{ width: "300px" }}
      className="border-b border-zinc-500 my-4 py-2"
    >
      <h1 className="text-xl font-bold text-black">{title}</h1>
    </div>
  );
};

export default SubHeader;
