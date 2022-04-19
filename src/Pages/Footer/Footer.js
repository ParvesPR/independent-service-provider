import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <p className='py-4 mt-3 text-center'>Copyright &copy; {new Date().getFullYear()} amerta photography</p>
        </div>
    );
};

export default Footer;