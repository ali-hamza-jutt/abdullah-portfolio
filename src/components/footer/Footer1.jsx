import React, { useState, useEffect } from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const copyrightIcon=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:'20px',width:'20px',fill:'#ff004f'}}><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>

    return(
    <div className="footer">
         <p className='footer-logo'>Abdullah.</p>
         {copyrightIcon }
         <p className='footer-year'>2024</p>
    </div>
    );
}

export default Footer;