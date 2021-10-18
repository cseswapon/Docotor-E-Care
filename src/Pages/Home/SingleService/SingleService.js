import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleService = (props) => {
    const {id,name, image,details } = props.services;
    // console.log(props);
    const history = useHistory();
    const handelDetails = () => {
        history.push(`/home/${id}`)
    }
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
                <Button onClick={handelDetails} variant="primary">Details</Button>
            </Card>
        </Col>
    );
};

export default SingleService;