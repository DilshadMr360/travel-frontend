import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { defaultColor1 } from '../config/colors';

const Booking = () => {
  const { tourid } = useParams(); // Use useParams to get tourid from route params
  const [tour, setTour] = useState(null); // State to hold tour details
  const [isLoading, setIsLoading] = useState(true); // Loading indicator

  useEffect(() => {
    const fetchTourDetails = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await api.get(`/tours/${tourid}`); // Fetch tour details from API
        setTour(response.data); // Set fetched tour details to state
        setIsLoading(false); // Finish loading
      } catch (error) {
        console.error('Error fetching tour details:', error);
        setIsLoading(false); // Finish loading on error
        // Handle error state if needed
      }
    };

    fetchTourDetails(); // Call the fetch function
  }, [tourid]); // Dependency on tourid to refetch when it changes


  const baseURL = "http://localhost:8000/";

  return (
    <Fragment>
      <div className='container flex flex-col items-center justify-center p-4 mx-auto '>
        <h1>Booking Page for Tour ID: {tourid}</h1>
        {isLoading ? (
          <p>Loading tour details...</p>
        ) : tour ? (
          <div className='flex flex-col items-center justify-center p-5 mt-2 border rounded-lg'>
                <img src={`${baseURL}${tour.image}`} alt="Tour" className="rounded-lg md:w-8/12 h-72" />

            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p>Price: {tour.price}</p>
            <button
                  className="w-full h-10 text-white"
                  style={{ backgroundColor: defaultColor1 }}
                >
                  Book Now
                </button>
          </div>
        ) : (
          <p>No tour details found for ID: {tourid}</p>
        )}
      </div>
    </Fragment>
  );
};

export default Booking;
