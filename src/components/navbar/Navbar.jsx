import React, { useState } from 'react';
import './Navbar.css';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsActive(false); // Close the menu when a link is clicked
    };

    const barIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#fff', width: "25px", height: '25px' }} onClick={toggleActive}>
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
    );

    const xmarkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ fill: '#fff', width: "25px", height: '25px' }} onClick={toggleActive}>
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" style={{ strokeWidth: "40", stroke: '#fff' }} />
        </svg>
    );

    const names = ["Flutter Developer", "Software Engineer"];

    return (
        <div className={`header ${isActive ? 'active' : ''}`} id='navbar'>
            <div className='container'>
                <nav>
                    <h1 className='logo'>Abdullah.</h1>
                    <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                        <li className={`xmark-icon ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                            {xmarkIcon}
                        </li>
                        <li className={`${activeLink === 'Home' ? 'active' : ''}`}>
                            <a href="#navbar" onClick={() => handleLinkClick('Home')}>Home</a>
                        </li>
                        <li className={`${activeLink === 'About' ? 'active' : ''}`}>
                            <a href="#about" onClick={() => handleLinkClick('About')}>About</a>
                        </li>
                        <li className={`${activeLink === 'Services' ? 'active' : ''}`}>
                            <a href="#services" onClick={() => handleLinkClick('Services')}>Services</a>
                        </li>
                        <li className={`${activeLink === 'Portfolio' ? 'active' : ''}`}>
                            <a href="#portfolio" onClick={() => handleLinkClick('Portfolio')}>Portfolio</a>
                        </li>
                        <li className={`${activeLink === 'Contact' ? 'active' : ''}`}>
                            <a href="#contact" onClick={() => handleLinkClick('Contact')}>Contact</a>
                        </li>
                    </ul>
                    <div className='bar-icon'>
                        {barIcon}
                    </div>
                </nav>
                <div className="header-text">
                    <h1>Hi, I'm <span className='dev-name'>Abdullah</span></h1>
                    <p><ReactTyped strings={names} typeSpeed={100} backSpeed={100} loop /></p>
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
