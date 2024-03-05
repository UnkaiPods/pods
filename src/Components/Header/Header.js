import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Header.css';

const Header = () => {
    const [scrollDirection, setScrollDirection] = useState('down');

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setScrollDirection(currentScrollPos > 70 ? 'up' : 'down');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        transition: 'transform 0.6s ease',
        transform: scrollDirection === 'up' ? 'translateY(-40px)' : 'translateY(0)',
    };

    const shareLink = async () => {
        try {
            await navigator.share({
                title: document.title,
                text: 'Check out this amazing site!',
                url: window.location.href,
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <div className="header-container" style={headerStyle}>
            <div className="logo-container">
                <div className='title-unkai'>
                <img className="logo-img" src="assets\unkai-logo.png" alt="Unkai Pods Logo" />
                <h1>Unkai Pods</h1>
                </div>
                <div className='icons'>
                    <FontAwesomeIcon className="share-icon" icon={faShare} onClick={shareLink} />
                    <a href="https://www.instagram.com/unkaiclouds/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Header;
