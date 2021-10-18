import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider-images/sl-1.jpg'
import slider2 from '../../../images/slider-images/sl-2.jpg'
import slider3 from '../../../images/slider-images/sl-3.jpg'
const Slider = () => {
    return (
    <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>ECG Label is done</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Cliping Path</h3>
                <p>This is a good machine with medical sector</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>This is a row tools</h3>
                <p>Medical section this is a good parformance</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Slider;