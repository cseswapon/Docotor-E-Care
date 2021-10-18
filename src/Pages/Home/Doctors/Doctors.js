import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import dr1 from '../../../images/doctor/dr-1.jpg';
import dr2 from '../../../images/doctor/dr-2.jpg';
import dr3 from '../../../images/doctor/dr-3.jpg';
import dr4 from '../../../images/doctor/dr-4.jpg';
import dr5 from '../../../images/doctor/dr-5.jpg';
import dr6 from '../../../images/doctor/dr-6.jpg';
import './Doctors.css'
const Doctors = () => {
    return (
        <div className="my-5">
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="first-dr">
                        <Card.Img variant="top" src={dr1} />
                        <div className="social-media">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <p>Hi ! I am doctor Farhana</p>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="sec-dr">
                        <Card.Img variant="top" src={dr2} />
                        <div className="social-media2">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <p>Hi ! I am doctor Firoz</p>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="the-dr">
                        <Card.Img variant="top" src={dr3} />
                        <div className="social-media3">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <p>Hi ! I am doctor Kabila</p>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="fou-dr">
                        <Card.Img variant="top" src={dr4} />
                        <div className="social-media4">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <p>Hi ! I am doctor Sahanaj</p>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="fiv-dr">
                        <Card.Img variant="top" src={dr5} />
                        <div className="social-media5">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <p>Hi ! I am doctor Rofiz</p>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="six-dr">
                        <Card.Img variant="top" src={dr6} />
                        <div className="social-media6">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <p>Hi ! I am doctor Alom</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Doctors;