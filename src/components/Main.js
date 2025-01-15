import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css'; // Ajoute des styles
import bgImage from '../assets/img/bg2.png'; // Image de fond
import entrepriseImage from '../assets/img/maisonPres2.jpg'; // Image de présentation
import intMaison from '../assets/img/service1.jpg'; // Image de présentation
import intMaison2 from '../assets/img/service2.jpg'; // Image de présentation
import intMaison3 from '../assets/img/service3.jpg'; // Image de présentation
import founderImage from '../assets/img/who.png'; // Image des fondatrices
import logo from '../assets/img/logo/logo principal.png';

const Main = () => {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${bgImage}) ` }}>
        <div className="hero-text">
          {/* <h1>ÉCORCE OCÉANE</h1> */}
          <img src={logo} alt="Dunes & Océan logo" height="300"/>
          {/* <h2>CONCIERGERIE SUR LE BASSIN D’ARCACHON</h2> */}
        </div>
        <Link to="/rendez-vous">
          <button>Prendre rendez-vous</button>
        </Link>
      </section>
      
      <section className="about-company">
        <img src={entrepriseImage} alt="Présentation de l'entreprise" />
        <div className="about-text">
          <h2>Présentation d'Écorce Océane</h2>
          <p className="aboutP">
          Après 20 années d’expérience dans le commerce, un domaine où la satisfaction client est au cœur de tout, 
          j’ai décidé de me lancer dans une activité qui me passionne vraiment et qui reflète mes valeurs : 
          simplifier la vie des gens, apporter des solutions personnalisées, et créer des expériences uniques.
          <br/><br/>

          Ces années de commerce, combinées à mes nombreux voyages, m’ont permis de développer une solide expertise en organisation, 
          en écoute et polyvalence. Aujourd’hui, j’ai envie de mettre ces compétences à votre service. <br/><br/>

          Je suis à votre disposition pour répondre à toutes vos demandes, n’hésitez pas à me contacter !<br/><br/>
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
              <p>Un forfait avec tout ce dont vous avez besoin : <br/> 
              - Présentation du logement <br/>
              - Contrôle du logement <br/>
              - Nettoyage <br/>
              - Remise de clé <br/><br/>
              Écorce Océane s'occupe de tout.</p>
              <Link to="/prestations">
                <button>Découvrir</button>
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-content">
              <h3>FORFAIT GARDIENNAGE</h3>
              <div className="image-container">
                <img src={intMaison2} alt="Forfait personnalisé + extras" />
              </div>
              <p>Un forfait pour assurer la protection de votre logement et ses biens : <br/> <br/>
              - Vigilance extérieur et intérieur <br/>
              - Relevé de courriers et compteur<br/>
              - Aération des pièces <br/>
              - Compte rendu par mail ou SMS <br/><br/>
              Et bien d'autres possibilités.</p>
              <Link to="/prestations">
                <button>Découvrir</button>
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-content">
              <h3>FORFAIT SUR MESURE</h3>
              <div className="image-container">
                <img src={intMaison3} alt="Forfait sur-mesure" />
              </div>
              <p>Profitez d’un service  entièrement personnalisé pour répondre à vos besoins spécifiques. <br/>
                Nous adaptons nos prestations à vos attentes pour garantir votre tranquillité et celle de vos invités. <br/><br/>
                Contactez-nous pour créer une offre unique, faite pour vous !</p>
              <Link to="/rendez-vous">
                <button>Nous contacter</button>
              </Link>
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
