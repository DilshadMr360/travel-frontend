import React, { Fragment, useState } from "react";
import { TOURS } from "../tourData/data.js";
import { defaultColor1 } from "../config/colors.js";
import { FaSearch } from "react-icons/fa";
import HomeImage1 from "../assets/negombo.jpg";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [color, setColor] = useState("#ffffff");

  const navigate = useNavigate();

  const colorChage = () => {
    setColor((prevColor) => (prevColor === "#ffffff" ? "red" : "#ffffff"));
  };

  const dashboardPage = () => {
    navigate("/dashboard");
  };

  const bookNow = () => {
    navigate("/booking");
  };
  return (
    <Fragment>
      <div className="p-4 container_mx md:p-0">
        <div className="flex flex-col items-center justify-between mt-2 space-y-4 font-bold border border-red-500 md:flex-row md:space-y-0">
          <h1 className="text-center md:text-left">Welcome To Tour Booking</h1>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search Tour"
              className="w-full py-2 pl-4 pr-10 border rounded"
              name=""
              id=""
            />
            <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-3" />
          </div>
          <button
            onClick={dashboardPage}
            className="w-full h-10 font-bold text-white rounded-lg md:w-40"
            style={{ backgroundColor: defaultColor1 }}
          >
            Your Bookings
          </button>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-4 border border-green-500 md:grid-cols-3 md:mt-6">
          {/* tour box */}
          <div className="border border-red-500">
            <div className="relative">
              <img
                src={HomeImage1}
                alt="image1"
                className="w-full rounded-lg"
              />
              <FaHeart
                onClick={colorChage}
                style={{ color: color }}
                className="absolute text-xl text-white top-2 right-2"
              />
            </div>
            <h1> Sri Lanka Sightseeing Day Trip From Negombo</h1>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              <FaStarHalfAlt className="text-yellow-500" />
            </div>
            <h1>6 Hours</h1>
            <div className="flex items-end justify-between ">
              <h1>$350</h1>
              <button
                onClick={bookNow}
                className="w-32 h-10 text-white"
                style={{ backgroundColor: defaultColor1 }}
              >
                Book Now
              </button>
            </div>
          </div>
          {/* tour box end */}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
