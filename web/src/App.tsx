import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Principal from './Principal';
import Sobre from './Sobre';
import imagemDoce from './assets/doce.png';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        {/* Menu de navegação que altera as rotas */}
        <header className="navbar">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/sobre" className="nav-button">Sobre</Link>
        </header>

        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-left">
            <div className="title-wrapper">
              <h1>Doce Vida</h1>
              <div className="pink-underline"></div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="pink-card">
              <img 
                src={imagemDoce} 
                alt="Doces Artesanais" 
                className="sweet-img" 
              />
            </div>
          </div>
        </section>

        {/* Rotas que alternam as páginas */}
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App
