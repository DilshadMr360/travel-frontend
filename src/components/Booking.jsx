import React, { Fragment, useState } from "react";
import { defaultColor1 } from "../config/colors";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import HomeImage1 from "../assets/negombo.jpg";
import { useNavigate } from "react-router-dom";


const Booking = () => {

  const navigate = useNavigate();

  const goDashboard = () => {
    navigate('/dashboard');
  }
  
  return (
    <Fragment>
      <div className="p-10 mx-auto md:w-6/12 ">
        {/* tour box */}
        <div>
          <img src={HomeImage1} alt="image1" className="w-full rounded-lg" />

          <h1> Sri Lanka Sightseeing Day Trip From Negombo</h1>
          <div className="flex items-center mt-2">
            {[1, 2, 3, 4].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
            <FaStarHalfAlt className="text-yellow-500" />
          </div>
          <h1>6 Hours</h1>
          <h1>$350</h1>
          <button
          onClick={goDashboard}
            className="w-full h-10 mb-2 text-white "
            style={{ backgroundColor: defaultColor1 }}
          >
            Book Now
          </button>
        </div>
        {/* tour box end */}
      </div>
    </Fragment>
  );
};

export default Booking;
