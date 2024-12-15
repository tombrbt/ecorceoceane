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
        <a href="#plan-du-site">Plan du site</a>
        <a href="#mentions-legales">Mentions Légales</a>
      </div>
    </footer>
  );
};

export default Footer;
