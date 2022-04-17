import React from 'react';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;