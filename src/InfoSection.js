import React from 'react';
import './InfoSection.css'; // Certifique-se de importar o arquivo CSS
import image1 from './assets/votiing.jpg'; // Importe suas imagens
import image2 from './assets/home_Pfavorito.jpg';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-item">
        <a href="#votacao" className="info-link">
          <img src={image1} alt="Imagem 1" className="info-image" />
        </a>
        <p className="info-text">
          <a href="#votacao" className="info-link">
            <strong>Votar</strong>
          </a>
        </p>
        <div className="info-text-sub">
          <a href="#votacao" className="info-link">
          Que tal algo democrático? Realize uma votação para escolher o cardápio da semana!
          </a>
        </div>
      </div>
      <div className="info-item">
        <a href="#ranking" className="info-link">
          <img src={image2} alt="Imagem 2" className="info-image" />
        </a>
        <p className="info-text">
          <a href="#ranking" className="info-link">
            <strong>Marmita Favorita da semana</strong>
          </a>
        </p>
        <div className="info-text-sub">
          <a href="#ranking" className="info-link">
            Contra fatos não há argumentos. Curta seu prato favorito e ganhe prêmios!
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
