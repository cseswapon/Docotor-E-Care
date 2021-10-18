import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../images/patient/p-1.jpg'
import img2 from '../../../images/patient/p-2.jpg'
import img3 from '../../../images/patient/p-3.jpeg'
import img4 from '../../../images/patient/p-2.png'
import img5 from '../../../images/patient/p-5.jpeg'

const Client = () => {
    return (
        <div className="container my-3 mb-5">
            <h1 className="text-danger text-center mb-4"><i className="fas fa-procedures text-primary"></i> Our Patient <i className="fas fa-procedures text-primary"></i></h1>
            <OwlCarousel
            className='owl-theme'
            items="5"
            autoplay
            nav
            dots
            loop
            >
                <div className='item'>
                    <img src={img1} alt="not found" style={{height:"100px"}} />
                </div>
                <div className='item'>
                    <img src={img2} alt="not found" style={{height:"100px"}} />
                </div>
                <div className='item'>
                    <img src={img3} alt="not found" style={{height:"100px"}} />
                </div>
                <div className='item'>
                    <img src={img4} alt="not found" style={{height:"100px"}} />
                </div>
                <div className='item'>
                    <img src={img5} alt="not found" style={{height:"100px"}} />
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Client;