import React from 'react';
import '../styles/Footer.css'; // Ajoute des styles
import logo from '../assets/img/logo/logo principal.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Bassin Conciergerie" />
        <p>Conciergerie - Cap Ferret & Bassin d'Arcachon</p>
      </div>
      <div className="footer-contact">
        <p>07 68 27 84 46</p>
        <p>ecorceoceane@contact.fr</p>
      </div>
      <div className="footer-links">
      <a href="/pdf/Mentions Légales.pdf" target="_blank" rel="noopener noreferrer">Mentions Légales</a>
        <a href="/pdf/CGS.pdf" target="_blank" rel="noopener noreferrer">CGS</a>
        </div>
    </footer>
  );
};

export default Footer;
