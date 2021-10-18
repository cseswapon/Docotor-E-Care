import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = (props) => {
    const {name, image,details } = props.services;
    console.log(props);
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} style={{height:"250px"}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details.slice(0,50)}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;