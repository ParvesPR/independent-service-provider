import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service-container'>
            <img className='service-img' src={img} alt="" />
            <h4>Service: {name}</h4>
            <h5>Price: ${price} /hrs</h5>
            <p>{description}</p>
            <button className='service-btn'> Check Out</button>

        </div>
    );
};

export default Service;