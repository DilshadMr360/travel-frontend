import React, { Fragment, useEffect, useState } from "react";
import { defaultColor1 } from "../config/colors.js";
import { FaSearch } from "react-icons/fa";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [color, setColor] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotFound, setShowNotFound] = useState(false);
  
  const navigate = useNavigate();


  const fetchTours = (search = '') => {
    setIsLoading(true); // Turn on the switch
    api.get('/tours', { params: { search } })
      .then((response) => {
        setTours(response.data); // We got the tours
        console.log('Fetched tours:', response.data);
        setIsLoading(false); // Turn off the switch
        setShowNotFound(response.data.length === 0); // Set "Not found" message visibility
      })
      .catch((error) => {
        console.error("Error Fetching Tours: ", error);
        setIsLoading(false); // Turn off the switch even if there's an error
        setShowNotFound(true); // Show "Not found" message on error
      });
  };
  
  useEffect(() => {
    fetchTours();
  }, []);

  const colorChage = (tourid) => {
    setColor((prevLikedTours) => ({
      ...prevLikedTours,
      [tourid]: !prevLikedTours[tourid],
    }));
  };

  const dashboardPage = () => {
    navigate("/dashboard");
  };

  const bookNow = () => {
    navigate("/booking");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    fetchTours(e.target.value);
  };

  const baseURL = "http://localhost:8000/";
  return (
    <Fragment>
      <div className=" container_mx border-hidden">
        <div className="flex flex-col items-center justify-between mt-2 space-y-4 font-bold md:flex-row md:space-y-0">
          <h1 className="text-center md:text-left">Welcome To Tour Booking</h1>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search Tour"
              className="w-full py-2 pl-4 pr-10 border rounded"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-3" />
          </div>
          <button
            onClick={dashboardPage}
            className="w-10/12 h-10 font-bold text-white rounded-lg md:w-40 md:mt-6 "
            style={{ backgroundColor: defaultColor1 }}
          >
            Your Bookings
          </button>
        </div>
        <div className="grid grid-cols-1 gap-10 mx-2 mt-4 md:grid-cols-3 md:mt-6 md:mx-0">
        {isLoading ? (
          <p>Loading tours...</p>
          ) : showNotFound ? (
            <p>No tours found</p>
        ) : (
          tours.map((tour, index) => (
            <div key={index} className="mb-2 ">
              <div className="relative">
                <img src={`${baseURL}${tour.image}`} alt="Tour" className="w-full rounded-lg h-72" />
                <FaHeart
                    onClick={() => colorChage(tour.id)}
                    style={{ color: color[tour.id] ? "red" : "#ffffff" }}
                    className="absolute text-xl text-white top-2 right-2"
                  />
              </div>
              <h1> {tour.title}</h1>
              <h1> {tour.description}</h1>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                <FaStarHalfAlt className="text-yellow-500" />
              </div>
              <h1>6 Hours</h1>
              <div className="flex items-end justify-between ">
                <h1>{tour.price}</h1>
                <button
                  onClick={bookNow}
                  className="w-32 h-10 text-white"
                  style={{ backgroundColor: defaultColor1 }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
