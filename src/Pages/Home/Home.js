import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="banner" >
            <div className='banner'>
                <span className='banner-title'>Make Your Wedding A Wonderfull Story</span>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;