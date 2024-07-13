import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { defaultColor1 } from '../../config/colors';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="p-4 text-white" style={{ backgroundColor: defaultColor1 }}>
            <div className="container flex items-center justify-between mx-auto">
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
                    <Link to="/dashboard" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Dashboard</Link>
                    <Link to="/booking" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Booking</Link>
                    <Link to="/login" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Login</Link>
                    <Link to="/register" className="block px-3 py-2 text-white rounded-lg md:inline-block hover:bg-gray-700">Register</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
