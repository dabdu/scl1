import React from "react";
import ImageSlider from "../Image-slider/ImageSlider";
import { SliderData } from "../Image-slider/SliderData";
import GalleryContainer from "./GalleryContainer";
const Home = () => {
  return (
    <div>
      <div className="home" style={{ height: "150px", width: "100%" }}>
        <p className="font-bold text-5xl text-white z-10 text-center py-16">
          Our Gallery
        </p>
      </div>
      <div style={{}} className="mx-40">
        {/* <GalleryContainer /> */}
        <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
};

export default Home;
