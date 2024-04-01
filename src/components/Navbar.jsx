import React, { useState } from 'react';
import logo from '../images/gymlogo-removebg-preview.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '../index.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false); // State to track if search icon is clicked

  const changeBackground = () => {
    if (window.scrollY >= 50)
      setNav(true);
    else
      setNav(false);
  }

  const handleSearchClick = () => {
    setSearchClicked(!searchClicked); // Toggle searchClicked state
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <Link to='#' className='logo'>
        <img src={logo} alt="logo" />
      </Link>
      <ul className='menu'>
        <li><Link to='Home'>Home</Link></li>
        <li><Link to='Store'>Store</Link></li>
        <li><Link to='Blog'>Blog</Link></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon 
          icon={faSearch} 
          className={`search-icon ${searchClicked ? 'clicked' : ''}`} 
          onClick={handleSearchClick} 
        />
      </div>
    </nav>
  );
}

export default Navbar;
