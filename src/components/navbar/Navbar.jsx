import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const names = ["Flutter Developer", "Software Engineer"];
    return (
        <div className='header' id='navbar'>
            <div className='container'>
                <nav>
                    <h1 className='logo'>Abdullah.</h1>
                    <ul className="nav-links">
                        <li><a href="#navbar">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p><ReactTyped strings={names} typeSpeed={100} backSpeed={100} loop /></p>
                    <h1>Hi, I'm <span className='dev-name'>Abdullah</span></h1>
                    <div className="professional-links">
                        <a className='professional-social-icon' href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='professional-social-icon' href=""> <FontAwesomeIcon icon={faGithub} /></a>
                        <a className='professional-social-icon' href=""> <FontAwesomeIcon icon={faStackOverflow} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
