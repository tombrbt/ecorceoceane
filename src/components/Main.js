import React from 'react';
import '../styles/Main.css'; // Ajoute des styles
import bgImage from '../assets/img/bgCab.jpg'; // Image de fond
import entrepriseImage from '../assets/img/maisonPres2.jpg'; // Image de présentation
import intMaison from '../assets/img/forfaittoutinclus.jpeg'; // Image de présentation
import intMaison2 from '../assets/img/forfaitpersonalise.jpeg'; // Image de présentation
import intMaison3 from '../assets/img/forfaitsurmesure.jpeg'; // Image de présentation
import founderImage from '../assets/img/tictac.jpg'; // Image des fondatrices

const Main = () => {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-text">
          <h1>ÉCORCE OCÉANE</h1>
          <h2>CONCIERGERIE SUR LE BASSIN D’ARCACHON</h2>
        </div>
        <button>Prendre rendez-vous</button>
      </section>
      
      <section className="about-company">
        <img src={entrepriseImage} alt="Présentation de l'entreprise" />
        <div className="about-text">
          <h2>Présentation de l'entreprise</h2>
          <p className="aboutP">
          <i><strong>Écorce Océane</strong></i> supervise vos locations de vacances et séjours de courte durée au Cap Ferret et Bassin d’Arcachon.
            Notre conciergerie haut de gamme vous propose un service complet pour rentabiliser votre bien et assurer un séjour exceptionnel à vos voyageurs.<br/><br/>

            <strong>Nos objectifs :</strong> vous soulager des contraintes liées à l’entretien d’un bien à distance, optimiser votre rentabilité et votre fiscalité, gérer vos locations en toute sécurité avec un panel de services haut de gamme.
            Confiez votre bien en toute confiance et sérénité, il sera entre de bonnes mains.<br/><br/>

            <strong>Propriétaires ?</strong> Profitez de nos conseils personnalisés afin d’améliorer votre rendement locatif et déléguez les tâches qui incombent à la location saisonnière.<br/><br/>

            <strong>Voyageurs ?</strong> Nous tenons à rendre votre séjour inoubliable grâce à une offre de services sur-mesure. Laissez place au repos et à la tranquillité. 
            Nous proposons un panel d’activités varié établi avec notre réseau de partenaires locaux.<br/><br/>
          </p>
          </div>
      </section>

      
      <section className="services">
          <div className="service">
            <div className="service-content">
            <h3>FORFAIT TOUT INCLUS</h3>
              <div className="image-container">
                <img src={intMaison} alt="Forfait tout inclus" /> {/* Image avant le titre */}
              </div>
              <p>Louez votre bien en toute sérénité, nous gérons tout de A à Z.</p>
              <button>Découvrir</button>
            </div>
          </div>
          <div className="service">
            <div className="service-content">
            <h3>SERVICES EXTRAS</h3>
              <div className="image-container">
                <img src={intMaison2} alt="Forfait personnalisé + extras" /> {/* Image avant le titre */}
              </div>
              <p>Besoin seulement de certains de nos services ? Ce forfait est fait pour vous.</p>
              <button>Découvrir</button>
            </div>
          </div>
          <div className="service">
            <div className="service-content">
            <h3>FORFAIT SUR MESURE</h3>
              <div className="image-container">
                <img src={intMaison3} alt="Forfait sur-mesure" /> {/* Image avant le titre */}
              </div>
              <p>Un forfait sur mesure adapté à vos besoins.</p>
              <button>Découvrir</button>
            </div>
          </div>
        </section>


      <section className="about-founders">
        <div>
          <h2>Qui sommes-nous ?</h2>
          <p>...texte ici...</p>
        </div>
        <img src={founderImage} alt="Fondatrices" />
      </section>
      
      <section className="contact">
        <h2>Contactez-nous</h2>
        <p>...formulaire ou texte ici...</p>
      </section>
    </main>
  );
};

export default Main;
