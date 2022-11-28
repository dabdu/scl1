import React from "react";
import { FaAward, FaRegThumbsUp } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { colors } from "../../constants/theme";
import Button from "../Button";

const Home = () => {
  const data = [
    { name: "Quality Design", Icon: FaAward },
    { name: "Best Honey", Icon: GiTrophyCup },
    { name: "Best Organic", Icon: BsFillPatchCheckFill },
    { name: "Top Class", Icon: FaRegThumbsUp },
  ];
  return (
    <div>
      <div className="home" style={{ height: "150px", width: "100%" }}>
        <p className="font-bold text-4xl text-white z-10 text-center py-16">
          About Us
        </p>
      </div>
      <div className="container mx-auto flex flex-col justify-between my-10 py-10">
        <div className="grid md:grid-cols-3 max-w-[1240px] mx-10 md:space-x-10   md:mx-28">
          {/* Image and Icons */}
          <div className="">
            <h1
              className="font-bold text-2xl mb-10 md:mb-0"
              style={{ color: colors.primary }}
            >
              Sa'I'Anwara'I Ju'Mai Consultaire Limited (SCL)
            </h1>
          </div>
          <div className="col-span-2" style={{}}>
            <p className="text-justify font-medium text-md">
              A fully indigenous limited liability Agro-Allied company
              registered in 2010 with RC. No 874307. The company was
              incorporated to carry out variety of Agro-Allied businesses and
              services including crop and livestock production, agricultural
              produce processing, poultry feed production, raw material supply,
              agro input supply, agribusiness development, consultancy etc. as
              provided by its registered Memorandum and Articles of Association.
              Our agribusinesses are driven by our core philosophy of building
              sustainable and profitable crop, livestock and agro-allied
              businesses and entrepreneurs based on the understanding of the
              interconnection between the environment, livestock and people.
            </p>
            <p className="text-justify py-6 font-medium text-md">
              We also have a team of dedicated professionals who provide
              coaching and mentoring in agri-businesses for young entrepreneurs
              and new generation of farmers.
            </p>
            <Button text="Get In Touch" />
          </div>
          {/* Description */}
          <div></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-10 md:space-x-20 md:mx-28">
        {/* Image and Icons */}
        <div className="mb-10 md:mb-0">
          <h1 className="primary-header py-2">Collaborative Approach</h1>
          <p className="primary-font text-justify">
            With investment and developmental focus on “people, crops, livestock
            and environment”, SCL prides itself in its ability to proffer
            practical, effective and efficient solutions and strategies for
            sustainable and profitable organizational growth, societal
            development and livelihood improvements that lead sustainable
            poverty reduction through a harmonious and effective utilization of
            nature’s endowments and technology to drive social change. In
            addition to commercial farming and agro-produce processing
          </p>
        </div>
        <div>
          <h1 className="primary-header py-2">Responding to Change</h1>
          <p className="primary-font text-justify">
            SCL also train youths and women on entrepreneurship in general and
            livestock based vocational enterprise development specifically,
            thereby building local capacities in sustainable and profitable
            fish, poultry and livestock farming ventures as well as in crop
            production, processing and marketing of agro-produce.
          </p>
        </div>
      </div>
      <h1
        className="text-3xl font-semibold text-center mt-20 mb-16"
        style={{ color: colors.primary }}
      >
        Our Agricultural Footprints
      </h1>
      <div className="grid md:grid-cols-3 w-full mb-20 m-auto md:space-x-28 px-10 md:px-28">
        {/* Video */}
        <div style={{}} className="md:block hidden">
          <img
            src="https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/09/scl-green-house-tomato.png"
            style={{ height: "300px", width: "400px" }}
            className="my-auto"
          />
        </div>
        {/* Text Container */}
        <div className="col-span-2">
          <h1 className="primary-header">Our Achievements</h1>
          <p className="text-justify primary-font my-4">
            The company is run on the most modern business strategy, where each
            unit is operated as a profit centre and appraised on monthly and
            quarterly basis for productivity assessment and profit performance
            for various geolocations across the country and beyond.
          </p>
          <div
            className="md:flex grid grid-cols-2 space-y-5 justify-between items-center text-center"
            style={{ color: colors.primary }}
          >
            {data.map((item, index) => (
              <div key={index} style={{ height: "140px", width: "200px" }}>
                <item.Icon
                  size={100}
                  className={`${index === 0 ? "mb-6" : "mb-3"} mx-auto`}
                />
                <p className="primary-font text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
