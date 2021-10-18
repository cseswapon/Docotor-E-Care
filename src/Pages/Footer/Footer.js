import React from 'react';
import map from '../../images/ordercomplete.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="custom-color">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col text-light">
                        <div className="p-3">
                            <h1>Our Services</h1>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Anxiety</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Depression</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Relationship Issue</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Stress Management</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Phobias</p>
                        </div>
                    </div>
                    <div className="col text-light">
                        <div className="p-3">
                            <h1>Locaitons</h1>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Birkdale</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Bulimba</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Camp Hill</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Cannon Hill</p>
                            <p> <i className="far fa-arrow-alt-circle-right"></i> Phobias</p>
                        </div>
                    </div>
                    <div className="col text-light">
                        <div className="p-3">
                            <h2>Weekly Tips & Updates</h2>
                            <p>Subscrive to our weekly tips and guidance for what to do ?</p>
                            <input type="email" name="email" id="email" placeholder="Enter your email" /><br /><br />
                            <button className="btn btn-warning">subscribe now</button>
                        </div>
                    </div>
                    <div className="col text-light">
                        <div className="p-3">
                            <h1>Google Map</h1>
                            <img className="img-fluid" src={map} alt="map not found"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 bg-custom">
                    <div className="col text-center text-light">
                        <div className="p-1 ">
                            <p>&copy; Copyright by 2021-2022 Doctor-e-care</p>
                        </div>
                    </div>
                </div>
                    
                </div>
        </div>
    );
};

export default Footer;