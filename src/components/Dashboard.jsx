import React, { Fragment } from "react";
import { defaultColor1 } from "../config/colors";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();
    
  const goHome = () => {
    navigate('/home')
  } 
  return (
    <Fragment>
      <div className="mt-2 container_mx border-hidden">
        <h1> There are no bookings </h1>
        <button onClick={goHome}
          className="w-32 h-10 text-white"
          style={{ backgroundColor: defaultColor1 }}
        >
          Book Now
        </button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
