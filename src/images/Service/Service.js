import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    const navigateToCheckOut = id => {
        navigate(`/services/${id}`)
    }
    return (
                <div className='service-container col-md-12 '>
                    <img className='service-img' src={img} alt="" />
                    <h4>{name}</h4>
                    <h5>Price: ${price} /hrs</h5>
                    <p>{description}</p>
                    <button onClick={() => navigateToCheckOut(id)} className='service-btn'> Check Out</button>

                </div>
    );
};

export default Service;