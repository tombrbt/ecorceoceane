import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import RendezVous from './components/RendezVous'; // Import du nouveau composant
import Prestations from './components/Prestations'; // Import du nouveau composant
import './App.css'; // Styles globaux

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/prestations" element={<Prestations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
