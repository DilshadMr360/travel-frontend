import React from 'react';
import {TOURS} from '../tourData/data.js'
const Home = () => {
    return (
        <div>
            <h2>Welcome to Tour Booking</h2>
            {TOURS.map(tour => (
                <div key={tour.id}>
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                    <p>Price: ${tour.price}</p>
                    <button onClick={() => alert(`Viewing details for ${tour.title}`)}>View Details</button>
                    <button onClick={() => alert(`Booking ${tour.title}`)}>Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default Home;
