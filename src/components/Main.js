import React from 'react';
import '../styles/Main.css'; // Ajoute des styles
import bgImage from '../assets/img/bgCab.jpg'; // Image de fond
import entrepriseImage from '../assets/img/maisonPres2.jpg'; // Image de présentation
import intMaison from '../assets/img/forfaittoutinclus.jpeg'; // Image de présentation
import intMaison2 from '../assets/img/forfaitpersonalise.jpeg'; // Image de présentation
import intMaison3 from '../assets/img/forfaitsurmesure.jpeg'; // Image de présentation
import founderImage from '../assets/img/who.png'; // Image des fondatrices
import logo from '../assets/img/logo/logo principal.png';

const Main = () => {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${bgImage}) ` }}>
        <div className="hero-text">
          {/* <h1>ÉCORCE OCÉANE</h1> */}
          <img src={logo} alt="Dunes & Océan logo" height="250"/>
          {/* <h2>CONCIERGERIE SUR LE BASSIN D’ARCACHON</h2> */}
        </div>
        <button>Prendre rendez-vous</button>
      </section>
      
      <section className="about-company">
        <img src={entrepriseImage} alt="Présentation de l'entreprise" />
        <div className="about-text">
          <h2>Présentation d'Écorce Océane</h2>
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

      <section id="service" className="servicess">
        <h2 className="services-title">Nos offres de services</h2>
        <div className="services">
          <div className="service">
            <div className="service-content">
              <h3>FORFAIT TOUT INCLUS</h3>
              <div className="image-container">
                <img src={intMaison} alt="Forfait tout inclus" />
              </div>
              <p>Il n’est jamais simple de gérer un bien à distance et cela peut parfois créer des moments de stress. « Est-ce que la villa n’a pas été abimée par la dernière tempête ? Comment l’électricien va-t-il récupérer les clés ? Allons-nous retrouver le jardin en friche au printemps ? L’alarme s’est déclenchée mais nous ne pouvons pas nous rendre sur place » etc..

Chez Dune Conciergerie, nous avons mis en place deux forfaits couvrant les services essentiels pour l’entretien et la sécurité de votre propriété.</p>
              <button>Découvrir</button>
            </div>
          </div>
          <div className="service">
            <div className="service-content">
              <h3>SERVICES EXTRAS</h3>
              <div className="image-container">
                <img src={intMaison2} alt="Forfait personnalisé + extras" />
              </div>
              <p>Il n’est jamais simple de gérer un bien à distance et cela peut parfois créer des moments de stress. « Est-ce que la villa n’a pas été abimée par la dernière tempête ? Comment l’électricien va-t-il récupérer les clés ? Allons-nous retrouver le jardin en friche au printemps ? L’alarme s’est déclenchée mais nous ne pouvons pas nous rendre sur place » etc..

Chez Dune Conciergerie, nous avons mis en place deux forfaits couvrant les services essentiels pour l’entretien et la sécurité de votre propriété</p>
              <button>Découvrir</button>
            </div>
          </div>
          <div className="service">
            <div className="service-content">
              <h3>FORFAIT SUR MESURE</h3>
              <div className="image-container">
                <img src={intMaison3} alt="Forfait sur-mesure" />
              </div>
              <p>Et si nous allions plus loin dans le service haut de gamme ? Un sapin livré pour célébrer les fêtes de fin d’année, une maison aérée et chauffée à votre arrivée, des fleurs qui embaument la maison, le frigo est plein et vous n’avez plus qu’à profiter de vos proches.
              </p>
              <button>Découvrir</button>
            </div>
          </div>
        </div>
      </section>



      <section id="apropos" className="about-founders">
        <div>
          <h2>Qui sommes-nous ?</h2>
          <p>
          <i><strong>Virginie</strong></i>, passionnée et profondément attachée à sa région, a décidé de se lancer dans un projet qui lui tient à cœur : 
          <strong> la conciergerie sur le Bassin d’Arcachon.</strong><br/><br/>

          Avec son amour pour ce territoire unique et son sens du service, elle a créé une offre personnalisée pour répondre aux besoins des propriétaires et des voyageurs.<br/><br/>
          
          <strong>Sa mission ? </strong>
          Faciliter la gestion locative, offrir un accueil chaleureux et valoriser le patrimoine local tout en respectant l’environnement.
         <br/><br/>

         <i><strong>Chez Virginie</strong></i>, chaque service repose sur des valeurs clés :<br/> confiance, réactivité et excellence.
          Que vous soyez propriétaire ou locataire,<br/> elle s’engage à transformer votre expérience en un moment inoubliable.   <br/><br/>
            </p>
        </div>
        <img src={founderImage} alt="Fondatrices" />
      </section>
      
      <section id='contact' className="contact">
        <h2>Contactez-nous</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="Votre téléphone" required/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sujet">Sujet</label>
            <input type="text" id="sujet" name="sujet" placeholder="Sujet du message" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </section>


    </main>
  );
};

export default Main;
