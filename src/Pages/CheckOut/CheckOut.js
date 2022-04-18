import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center py-3'>Welcome to my photograph service</h2>
            <h4>CheckOut: {serviceId}</h4>
        </div>
    );
};

export default CheckOut;