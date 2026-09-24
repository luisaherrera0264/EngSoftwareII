import React from 'react';
import { Link } from 'react-router-dom';
import imagemDoce from './assets/doce.png';

export default function Index() {
  return (
    <div>
      {/* Seção Principal / Hero Banner */}
      <section className="hero-dark">
        <div className="hero-content">
          <p className="hero-subtitle">Super Crocante & Artesanal</p>
          <h1 className="hero-title">Doce Vida</h1>
          <p className="hero-desc">
            Sabores inesquecíveis pensados para deixar seus melhores momentos ainda mais doces com ingredientes selecionados e muito carinho.
          </p>
          <Link to="/sobre" className="hero-btn">
            Conheça Nossa História &rarr;
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <img src={imagemDoce} alt="Doces Artesanais Doce Vida" className="hero-img" />
        </div>
      </section>

      {/* Barra de Estatísticas/Diferenciais no Rodapé */}
      <section className="stats-bar">
        <div className="stat-item">
          <div className="stat-icon">★</div>
          <div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Artesanal</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🏆</div>
          <div>
            <div className="stat-number">+50</div>
            <div className="stat-label">Receitas Finas</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🚚</div>
          <div>
            <div className="stat-number">Agendada</div>
            <div className="stat-label">Entrega Rápida</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">♥</div>
          <div>
            <div className="stat-number">+10k</div>
            <div className="stat-label">Clientes Felizes</div>
          </div>
        </div>
      </section>
    </div>
  );
}