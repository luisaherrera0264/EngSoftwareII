import React from 'react';

export default function Sobre() {
  return (
    <div className="sobre-view">
      <div className="text-section">
        <p>
          Uma doceria artesanal que conecta você aos melhores sabores, 
          oferecendo bolos, doces finos e sobremesas feitas com alta qualidade 
          de forma prática e rápida.
        </p>
        <p>
          Contamos com entregas agendadas, atendimento personalizado e cardápio diário 
          para deixar seu dia mais doce.
        </p>
      </div>

      <div className="features-section">
        <div className="features-top-row">
          <div className="feature-card">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span>CARDÁPIO</span>
          </div>

          <div className="feature-card">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              <circle cx="9.5" cy="11.5" r="1" fill="currentColor"/>
              <circle cx="12.5" cy="11.5" r="1" fill="currentColor"/>
              <circle cx="15.5" cy="11.5" r="1" fill="currentColor"/>
            </svg>
            <span>PEDIDOS</span>
          </div>
        </div>

        <div className="feature-card">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>QUALIDADE</span>
        </div>
      </div>
    </div>
  );
}