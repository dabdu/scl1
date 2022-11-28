import React from "react";
import { colors } from "../../constants/theme";
import { GrUserWorker } from "react-icons/gr";
import GalleryContainer from "../Gallery/GalleryContainer";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between my-10">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto md:space-x-20 mx-10 md:mx-28">
        {/* Description */}
        <div className="">
          <center className="mb-8">
            <GrUserWorker size={100} color={colors.primary} />
          </center>
          <p className="text-justify primary-font">
            Regenerative agricultural practice is a knowledge-based operation
            requiring a knowledgeable worker. Experience has taught us that the
            best way to acquire knowledge is “learning by doing”. So, our
            Farm-Farmer School, located in the heart of the over 100-hectare
            farm affords us the environment to keep trainees in situ while they
            learn and practice the principles of regenerative agriculture for
            effective extension service delivery and hand-holding of our
            regenerative-agriculture-adopting communities. Our Farm-Farmer
            School is equipped with boarding facilities, a central refectory,
            demo plots and recreation facilities all sustainably solar powered.
            We offer trainings for farmers, institutions, policy makers,
            trainers and extension agents.
          </p>
        </div>
        {/* Gallery */}
        <div>
          <GalleryContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
