import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo/bp-logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="mini-navicaiton">
                <p><i class="fas fa-envelope"></i> abc@abcsupport.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Dhaka,Bangladesh</p>
                <p><i class="fas fa-phone-alt"></i> +88 012 345 789</p>
            </div>
            {/* <div>
                <img src={logo} alt="logo not found" />
            </div> */}
        </div>
    );
};

export default Navbar;