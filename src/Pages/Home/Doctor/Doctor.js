import React from 'react';
import Doctors from '../Doctors/Doctors';
import './Doctor.css';
const Doctor = () => {
    return (
        <div className="container my-5">
            <div className="all-doctor">
                <h1><i className="fas fa-user-md text-danger"></i> All Doctor List <i className="fas fa-user-md text-danger"></i></h1>
            </div>
            <Doctors></Doctors>
        </div>
    );
};

export default Doctor;