// Navbar.js

import React, { useState } from 'react';
import './style.scss'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
    
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li className="dropdown" onClick={toggleDropdown}>
          <a href="/services">Services</a>
          {showDropdown && (
            <div className="dropdown-content">
              <a href="/service1">Service 1</a>
              <a href="/service2">Service 2</a>
              <a href="/service3">Service 3</a>
            </div>
          )}
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
