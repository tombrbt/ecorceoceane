import React from 'react';
import '../styles/Header.css'; // N'oublie pas de styliser
import logo from '../assets/img/logov3.png';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Dunes & Océan logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#a-propos">À Propos</a></li>
          <li><a href="#contact">Contact</a></li>
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
