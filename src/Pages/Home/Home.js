import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
                <div id="banner" className='banner-container col-sm-12'>
                    <div className='banner col-sm-12 img-fluid'>
                        <span className='banner-title col-md-12'>Make Your Wedding A Wonderfull Story</span>
                    </div>
                    <Services></Services>
                    <Footer></Footer>
                </div>
    );
};

export default Home;