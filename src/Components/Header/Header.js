import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Header.css';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollDirection(currentScrollPos > 50 ? 'up' : 'down');
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
        <img className="logo-img" src="..\assets\unkai-logo.png" alt="Unkai Pods Logo" />
        <h1>Unkai Pods</h1>
      </div>
      <FontAwesomeIcon className="share-icon" icon={faShare} onClick={shareLink} />
      <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
    </div>
  );
};

export default Header;
