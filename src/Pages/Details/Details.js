import React from 'react';
import { useParams } from 'react-router';
import './Details.css';
import useService from '../../Hooks/useService';
const Details = () => {
    const params = useParams();
    const { homeId } = params;
    // console.log(homeId);
    const { service } = useService();
    const filtering = service.find(services => services.id = homeId);
    // console.log(filtering);
    return (
        <div className="card mb-3 mx-auto my-5 mb-5" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={filtering?.image} className="img-fluid rounded-start" alt="not found" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                        <h5 className="card-title text-danger">{filtering?.name}</h5>
                        <p className="card-text">{ filtering?.details}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Details;