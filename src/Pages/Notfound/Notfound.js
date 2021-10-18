import React from 'react';
import notfound from '../../images/404.jpg'
const Notfound = () => {
    return (
        <div className="text-center mb-3">
            <img className="img-fluid" src={notfound} alt="not found" />
        </div>
    );
};

export default Notfound;