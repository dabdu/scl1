import React from "react";
import { IoIosPeople } from "react-icons/io";
import { GiGrain, GiGoat, GiIsland } from "react-icons/gi";
import { colors } from "../constants/theme";

const data = [
  { id: 1, text: "People", Icon: IoIosPeople },
  { id: 1, text: "Crops", Icon: GiGrain },
  { id: 1, text: "Livestock", Icon: GiGoat },
  { id: 1, text: "Environment", Icon: GiIsland },
];
const AboutIcon = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:flex grid grid-cols-2 items-center text-center space-x-14">
        {data.map((item, index) => (
          <div
            style={{ height: "70px", width: "70px" }}
            className="rounded-full shadow-xl py-3 flex-col items-center justify-center "
          >
            <center>
              <item.Icon size={50} color={colors.primary} />
              <p className="primary-font" style={{ color: colors.gray }}>
                {item.text}
              </p>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutIcon;
