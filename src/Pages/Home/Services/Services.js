import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../../Hooks/useService';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const { service } = useService();
    console.log(service);
    return (
        <div className="container service-holder my-3">
            <h1 className="text-center text-danger"><i className="fas fa-stethoscope all-doctor"></i> My services <i className="fas fa-stethoscope all-doctor"></i></h1>
            <Row xs={1} md={3} className="g-4 my-2">
                {
                    service.map(serve => <SingleService
                    key = {serve.id}
                    services = {serve}
                    ></SingleService>)
                }
            </Row>
            
        </div>
    );
};

export default Services;