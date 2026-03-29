import React from 'react';
import artisanLogo from '../assets/logo1.png'; // Update with your image path

const ArtisanLogo = ({ className = "w-32 h-32" }) => {
    return (
        <div className={`aspect-square ${className}`}>
            <img src={artisanLogo} alt="Handmade in Morocco Logo" className="w-full h-full object-contain" />
        </div>
    );
};

export default ArtisanLogo;