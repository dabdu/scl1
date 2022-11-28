import React from "react";
import ProductItem from "./ProductItem";
import {
  GiGrainBundle,
  GiChestnutLeaf,
  GiGoat,
  GiCow,
  GiFarmer,
} from "react-icons/gi";
import { MdOutlineAgriculture, MdOutlineVerified } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { FaLeaf, FaBookOpen, FaTractor, FaForumbee } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { colors } from "../../constants/theme";
const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const data = [
    {
      id: 1,
      title: "Food Processing",
      desc: "Our food production line is configured to produce commercial quantity of quality oil from Soy beans, Extruded Soya meal and animal feed.",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/food-processing.png",
      Icon: GiGrainBundle,
    },
    {
      id: 2,
      title: "Horiculture",
      desc: "With over 150 species of plants in its nursery, SCL farms has been able set up an enviable stock of plants to sustain the farm and for commercial purposes.",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/horticulture-1.png",
      Icon: FaLeaf,
    },
    {
      id: 3,
      title: "Vegetable Production",
      desc: "Tonnes of cherry tomatoes, cucumbers, peppers and tomatoes are churned out of the 1-hectare ultra-modern greenhouse all year round and shipped",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/vegetable_fruits.png",
      Icon: GiChestnutLeaf,
    },
    {
      id: 4,
      title: "Honey Production",
      desc: "The SCL honey farming takes advantage of the over a hundred tree species.",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/apiary_honey_prod_scl.png",
      Icon: FaForumbee,
    },
    {
      id: 5,
      title: "Regenerative Agriculture",
      desc: "Our thirty-hectare agroforestry project is most probably the first of its kind in sub-Saharan Africa on such scale. It follows the Vetri and Brazilian models",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/regenerative_agric.png",
      Icon: MdOutlineAgriculture,
    },
    {
      id: 6,
      title: "SCL Academy",
      desc: "Our fully equipped training school boasts of accommodation for more than twenty students at a time, modern classroom, dining and kitchen facilities with 24/7 water and electricity.",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/livestock_scl-1.png",
      Icon: FaBookOpen,
    },
    {
      id: 7,
      title: "Livestock",
      desc: "Livestock plays a very crucial role in the overall agroforestry systems. With only five cows, SCL was able utilize the dung and urine to turn more than 30 hectares of sandy soil",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/livestock_scl-1.png",
      Icon: GiGoat,
    },
    {
      id: 8,
      title: "Community Impact Project",
      desc: "We embark on several community impact projects carried out to give back to society..",
      imgLink:
        "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/apiary_honey_prod_scl.png",
      Icon: GiCow,
    },
  ];
  const counts_data = [
    { Icon: FaTractor, numbers: 1021, desc: "Agriculture Products" },
    { Icon: AiOutlineProject, numbers: 1560, desc: "Project Completed" },
    { Icon: MdOutlineVerified, numbers: 268, desc: "Satisfied Clients" },
    { Icon: GiFarmer, numbers: 15, desc: "Expert Farmers" },
  ];
  return (
    <div>
      <div className="home" style={{ height: "150px", width: "100%" }}>
        <p className="font-bold text-4xl text-white z-10 text-center py-16">
          Our Products
        </p>
      </div>
      <div className="container mx-auto my-20">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mx-6 md:mx-20">
          {data.map((item, index) => (
            <ProductItem
              key={index}
              imgLink={item.imgLink}
              title={item.title}
              desc={item.desc}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container mx-auto my-20">
          <div className="sm:flex grid grid-cols-2 items-center justify-center text-center md:space-x-14">
            {counts_data.map((item, index) => (
              <div
                key={index}
                // style={{ height: "200px", width: "100px" }}
                className="rounded-md shadow-xl flex-col items-center justify-center px-6 py-10 mx-2"
              >
                <center>
                  <item.Icon size={100} color={colors.primary} />
                  <p
                    className="md:text-6xl text-3xl font-bold my-6"
                    style={{ color: colors.gray }}
                  >
                    {/* {item.text} */}
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={item.numbers}
                        duration={5}
                        delay={2}
                      />
                    )}
                  </p>
                  <p style={{}} className=" font-semibold text-md">
                    {item.desc}
                  </p>
                </center>
              </div>
            ))}
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Home;
