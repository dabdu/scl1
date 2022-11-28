import React from "react";
import { colors } from "../constants/theme";
import { FaHands, FaForumbee } from "react-icons/fa";
import { GiFallingRocks } from "react-icons/gi";
import { TiLeaf } from "react-icons/ti";

const VideoSection = () => {
  const data = [
    { name: "Organic Vegetables", Icon: FaHands },
    { name: "Pure Soil Making", Icon: GiFallingRocks },
    { name: "Organic Crops", Icon: TiLeaf },
    { name: "Qaulity Honey", Icon: FaForumbee },
  ];
  return (
    <div className="grid md:grid-cols-3 w-full my-20">
      {/* Video */}
      <div style={{ marginTop: "100px" }}>
        <img
          src="https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/reg_2.png"
          style={{ height: "500px", width: "100%" }}
        />
      </div>
      {/* Text Container */}
      <div
        style={{
          backgroundColor: colors.primary,
        }}
        className="col-span-2 px-28 py-28 text-white"
      >
        <h1 className="text-5xl font-bold">
          High Quality Growing Organic Foods
        </h1>
        <p className="text-justify text-lg font-medium my-10">
          Agriculture was a family business not too long ago. Now a days,
          automation, scientific advances and better transportation have allowed
          for industrialization.
        </p>
        <div className="flex justify-between items-center text-center">
          {data.map((item, index) => (
            <div key={index} style={{}} className>
              <item.Icon size={100} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
