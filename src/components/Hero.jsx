import React from "react";
import videoBg from "../assets/sclbgvideo.mp4";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full home"
      style={{ height: "100vh", width: "100%" }}
    >
      {/* <div className="home-overlay"></div> */}
      <div className="home-content md:pr-20 pr-1">
        {/* <p className="font-bold text-5xl text-white z-10 pt-30">
          SCL: SAI ANWARAI JUMAI CONSULTAIRE LIMITED
        </p> */}
        {/* <p className="font-medium text-2xl  text-white z-10">
          . Crops. <br />
          Livestock. Environment.
        </p> */}
        <ul>
          <li className="text-white py-2 px-10 my-4 mx-20 bg-yellow-400 text-center md:text-xl text-sm">
            People
          </li>
          <li className="text-white py-2 px-10 my-4 mx-16 bg-green-400 text-center md:text-xl text-sm">
            Crops
          </li>
          <li className="text-white py-2 px-10 my-4 mx-12  bg-yellow-400 text-center md:text-xl text-sm">
            Livestock
          </li>
          <li className="text-white py-2 px-10 my-4 mx-6 bg-green-400 text-center md:text-xl text-sm">
            Environment
          </li>
        </ul>
      </div>
      {/* <p className="font-bold text-2xl text-white z-10 py-40">
            SCL: SAI ANWARAI JUMAI CONSULTAIRE LIMITED
          </p> */}
      {/* <p className="font-bold text-5xl text-white z-10">
            People. Crops. Livestock. Environment
          </p> */}
    </div>
  );
};

export default Hero;
