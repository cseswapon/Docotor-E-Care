import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className="mini-navicaiton">
                <p><i className="fas fa-envelope"></i> abc@abcsupport.com</p>
                <p><i className="fas fa-map-marker-alt"></i> Dhaka,Bangladesh</p>
                <p><i className="fas fa-phone-alt"></i> +88 012 345 789</p>
            </div>
            <NavMenu></NavMenu>
        </div>
    );
};

export default Navbar;