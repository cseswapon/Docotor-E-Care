import React from 'react';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Doctor></Doctor>
            <Services></Services>
        </div>
    );
};

export default Home;