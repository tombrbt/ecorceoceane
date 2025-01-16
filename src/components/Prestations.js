import React, { useEffect } from 'react';
import "../styles/Prestations.css"; // Ajoutez des styles spécifiques à la page
import tarifsImg from '../assets/img/TARIFS PRESTATIONS.jpg'; // Image de présentation
import tarifsGImg from '../assets/img/TARIFS GARDIENNAGE.jpg'; // Image de présentation


const RendezVous = () => {
  useEffect(() => {
    // Ajoute dynamiquement le script Calendly lors du montage du composant
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoie le script lorsque le composant est démonté
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="prestationsid" className="prestations">
        <h2 className="prestations-title">Nos tarifs</h2>
    <div className="prestations-img-container">
    <img src={tarifsImg} alt="Présentation de l'entreprise" />
    <img src={tarifsGImg} alt="Présentation de l'entreprise" /> 

    </div>
    </section>
  );
};

export default RendezVous;

