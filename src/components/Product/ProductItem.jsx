import React from "react";
import { colors } from "../../constants/theme";

const ProductItem = ({ title, desc, imgLink, Icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl relative">
      <div className="p-8" style={{ marginBottom: "235px" }}>
        {/* <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white " /> */}
        <h3 className="primary-header my-3 text-center">{title}</h3>
        <p className="primary-font text-center ">{desc}</p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 30,
          zIndex: 10,
          height: "120px",
          width: "120px",
          borderWidth: 3,
          borderColor: colors.primary,
        }}
        className="bg-white flex items-center justify-center rounded-full shadow-xl"
      >
        <Icon size={70} color={colors.primary} />
      </div>
      <img
        src={imgLink}
        className={"absolute bottom-0"}
        style={{
          height: "220px",
          width: "100%",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          borderTopWidth: 2,
          borderTopColor: colors.primary,
        }}
      />
    </div>
  );
};

export default ProductItem;
