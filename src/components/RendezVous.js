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
    <section id="rdvid" className="rdv">
        <h2 className="rdv-title">Vous souhaitez prendre rendez-vous ?</h2>
    <div className="rendezvous-container">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ecorce-oceane/appel-de-presentation"
        style={{ minWidth: '600px', height: '700px' }}
      ></div>
    </div>
    </section>
  );
};

export default RendezVous;

