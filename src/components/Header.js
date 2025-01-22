import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/img/logo/logo principal.png";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Dunes & Océan logo" />
      </div>
      <button className="toggle-button" onClick={toggleMenu}>
        {isMenuOpen ? "×" : "☰"}
      </button>
      <nav className="nav-menu">
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#apropos">À Propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="contact-info">
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://tiktok.com"><FaTiktok /></a>
        </div>
      </div>

    </header>
  );
};

export default Header;
