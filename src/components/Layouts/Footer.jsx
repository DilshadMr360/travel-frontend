import React from 'react';
import { defaultColor1 } from '../../config/colors';

const Footer = () => {
    return (
        <footer className="p-4 mt-auto text-white" style={{ backgroundColor: defaultColor1 }}>
            <div className="container mx-auto text-center border-hidden">
                <p>&copy; 2024 Tour Booking. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
