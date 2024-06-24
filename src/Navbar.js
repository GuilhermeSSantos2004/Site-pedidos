// src/Navbar.js

import React from 'react';
import './Navbar.css'; // para estilização

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">GuitFoods</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Votação</a></li>
        <li><a href="#services">Elogios</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
