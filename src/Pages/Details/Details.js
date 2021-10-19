import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';
const Details = () => {
    const [dtl,setDtl] = useState([]);
    const [findings, setFindings] = useState([]);
    const params = useParams();
    const { homeId } = params;
    // console.log(homeId);
    /* const filtering = service.find(services => services.id = homeId);
    console.log(filtering); */
    // console.log(service);
    useEffect(() => {
        fetch('/servicesDetails.json')
            .then(res => res.json())
            .then(data=>setDtl(data.allInfo))
    }, [])
    // console.log(dtl);
    useEffect(() => {
        const finding = dtl.find(services => services.id == homeId)
        // console.log(finding);
        setFindings(finding);
    },[dtl])
    return (
        <div className="card mb-3 mx-auto my-5 mb-5" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={findings?.image} className="img-fluid rounded-start" alt="not found" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                        <h5 className="card-title text-danger">{findings?.name}</h5>
                        <p className="card-text">{findings?.details}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Details;