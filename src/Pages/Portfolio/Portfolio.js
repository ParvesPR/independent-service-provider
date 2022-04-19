import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <h2 className='text-primary fw-bold text-center mt-5'>What they say about me.</h2>
            <div className='client-review'>
                <div className='reviews'>
                    <h5>Emma & Charter</h5>
                    <p className='text-white-50'>Wedding Couple</p>
                    <p> An excellent photography service! The whole team are extremely professional, reliable and pleasure to work with</p>
                </div>
                <div className='reviews'>
                    <h5>John & George</h5>
                    <p className='text-white-50'>Wedding Couple</p>
                    <p>Many thanks for the photos, he is brilliant and better than I imagined.</p>
                </div>
                <div className='reviews'>
                    <h5>Emma & Charter</h5>
                    <p className='text-white-50'>Wedding Couple</p>
                    <p>So glad I found Photography Firm! This is my 3rd time using his service and his work is INCREDIBLE</p>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;