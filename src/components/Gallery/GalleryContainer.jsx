import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GalleryContainer = () => {
  const images = [
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/09/scl-nigeria-abuja.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Veg_6.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/scl_farm_main.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Apiary_2.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Veg_4.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/vegetable_scl.png",
  ];
  return (
    <>
      <div className="container mx-auto  my-20">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
                className="rounded-lg shadow-md"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default GalleryContainer;
