import React, { useEffect } from 'react';
import "../styles/RendezVous.css"; // Ajoutez des styles spécifiques à la page

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
    <div className="rendezvous-container">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/tombirembaut/appel-de-presentation-questions"
        style={{ minWidth: '600px', height: '700px' }}
      ></div>
    </div>
  );
};

export default RendezVous;

