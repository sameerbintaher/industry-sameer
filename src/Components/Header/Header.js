import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="bg-dark text-white p-3 bg">
            <h1>SamPro Film And Music Industry</h1>
            <h2>Pick your favourite person and make awesome wishlist</h2>
            <h1>Total Revenue: <span className="text-primary">$20000</span></h1>
        </div>
    );
};

export default Header;