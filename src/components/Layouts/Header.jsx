import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { defaultColor1 } from '../../config/colors';
import { FiMenu } from 'react-icons/fi';
import { useUser } from '../../context/UserContext';

const Header = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirect to the login page
    };

      // Log user object to console
      console.log('User object:', user);

    return (
        <header className="p-4 text-white" style={{ backgroundColor: defaultColor1 }}>
            <div className="container flex items-center justify-between mx-auto border-hidden">
                {/* Tour Booking title */}
                <div className="hidden text-2xl font-bold md:block"> {/* Hide on mobile */}
                    <Link to="/">Tour Booking</Link>
                </div>
                {/* Toggle icon visible on mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <FiMenu />
                    </button>
                </div>
                {/* Navigation links */}
                <nav className={`md:flex md:items-center md:space-x-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <Link to="/home" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Home</Link>
                    <Link to="/dashboard" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Dashboard</Link>
                    <Link to="/booking" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Booking</Link>
                    {user && <h1>Hi  {user.name}</h1>}
                    <button onClick={handleLogout} className="block px-3 py-2 mt-2 text-white bg-red-500 rounded-lg md:inline-block hover:bg-red-700">Logout</button>
              
              
                </nav>
            </div>
        </header>
    );
};

export default Header;
