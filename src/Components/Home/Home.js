import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
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

  const homeStyle = {
    transition: 'transform 0.6s ease',
    transform: scrollDirection === 'up' ? 'translateY(-172px)' : 'translateY(-112px)',
  };


  return (
    <div className='home' style={homeStyle}>
      <div className='home-text-container'>
        <div className='delivery-text'>
          <p>Entregas para todo o Brasil</p>
        </div>
        <div className='delivery-text'>
          <div className='dot'></div>
          <p>Frete grátis acima de 150 reais</p>
        </div>
      </div>
      <ul>
        <li
          className='most-purchased'
        >
          <Link
            to='ignite'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            ignoreCancelEvents={true}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-award'
            >
              <circle cx='12' cy='8' r='7'></circle>
              <polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'></polyline>
            </svg>
            Ignite
                    </Link>
                </li>
                <li
                
                >
                    <Link to='oxbar' spy={true} smooth={true} offset={-100}ration={500}>
                        Oxbar
                    </Link>
                </li>
                <li
                >
                    <Link to='lost' spy={true} smooth={true} offset={-100}ration={500}>
                        Lost
                    </Link>
                </li>
                <li                   
                
                >
                    <Link to='elfbar' spy={true} smooth={true} offset={-100}ration={500}>
                        Elfbar
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
