import React from 'react';
// import { MapPin, MessageSquare, ShieldAlert } from 'lucide-react';
import './Prince.css';

export const Index: React.FC = () => {
  return (
    <div className="container">
      {/* Navegação Superior */}
      <header className="header">
        <nav className="nav">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#sobre" className="nav-link">Sobre</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Rota Segura</h1>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://illustrations.pouch.cool/school-bus.svg" 
            alt="Van Escolar" 
            className="hero-image" 
          />
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="content">
        <div className="description">
          <p>
            Um sistema de transporte escolar que conecta responsáveis, motoristas e monitores, 
            permitindo acompanhar seus dependentes de forma segura, organizada e prática.
          </p>
          <p>
            Contando com localização em tempo real, monitores e aplicativo para que os pais 
            fiquem por dentro de tudo.
          </p>
        </div>

        {/* Grade de Recursos/Ícones */}
        <div className="features">
          <div className="feature-item">
            {/* <MapPin size={48} className="feature-icon" /> */}
            <span className="feature-label">GPS</span>
          </div>

          <div className="feature-item">
            {/* <MessageSquare size={48} className="feature-icon" /> */}
            <span className="feature-label">CHAT</span>
          </div>

          <div className="feature-item feature-full">
            {/* <ShieldAlert size={48} className="feature-icon" /> */}
            <span className="feature-label">SEGURANÇA</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;