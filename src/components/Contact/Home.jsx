import { FaMapMarkerAlt } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import React from "react";
import { colors } from "../../constants/theme";
import Button from "../Button";
const Home = () => {
  return (
    <div>
      <div className="home" style={{ height: "150px", width: "100%" }}>
        <p className="font-bold text-4xl text-white z-10 text-center py-16">
          Contact Us
        </p>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center md:space-x-20 mx-10 md:mx-28 my-10">
          {/* Description with Icon */}
          <div>
            <p
              className="primary-header my-6"
              // className="primary-header mx-10 md:mx-28 my-10 text-left"
            >
              If you have any inquiry or complaint, get in touch with us and we
              will get back to you as soon as possible.
            </p>
            <div className="flex space-x-10 items-center">
              {/* Icon*/}
              <div>
                <FaMapMarkerAlt color={colors.primary} size={50} />
              </div>
              {/* Decription */}
              <div>
                <h1 className="text-2xl my-3" style={{ color: colors.primary }}>
                  Address
                </h1>
                <p style={{ fontSize: "18px" }} className="font-medium">
                  SCL Farms, Dama-kusa Village, Kwali Area Council, Abuja.
                </p>
              </div>
            </div>
            <div className="flex space-x-10 items-center">
              {/* Icon*/}
              <div>
                <BiPhoneCall color={colors.primary} size={50} />
              </div>
              {/* Decription */}
              <div>
                <h1 className="text-2xl my-3" style={{ color: colors.primary }}>
                  Phone
                </h1>
                <div>
                  <p style={{ fontSize: "18px" }} className="font-medium">
                    (234) 0818 779 4810
                  </p>
                  <p style={{ fontSize: "18px" }} className="font-medium">
                    (234) 0905 180 5643
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-10 items-center">
              {/* Icon*/}
              <div>
                <MdEmail color={colors.primary} size={50} />
              </div>
              {/* Decription */}
              <div>
                <h1 className="text-2xl my-3" style={{ color: colors.primary }}>
                  Email
                </h1>
                <div>
                  <p style={{ fontSize: "18px" }} className="font-medium">
                    info@sclng.com
                  </p>
                  <p style={{ fontSize: "18px" }} className="font-medium">
                    sales@sclng.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="my-3">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Name:
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </label>
            </div>
            <div className="my-3">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Your Email:
                </span>
                <input
                  type="text"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="Email Address"
                />
              </label>
            </div>
            <div className="my-3">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Subject
                </span>
                <input
                  type="text"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="Subject"
                />
              </label>
            </div>
            <div className="my-3">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Your Message
                </span>
                <textarea
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="Your Message"
                  // cols="30"
                  rows="4"
                ></textarea>
              </label>
            </div>
            <Button text={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
