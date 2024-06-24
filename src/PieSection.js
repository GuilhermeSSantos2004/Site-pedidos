import React from 'react';
import './PieSection.css'; // Arquivo CSS para estilização
import logo from './assets/torta_prato.jpg';

const PieSection = () => {
    return (
        <div className="pieSection">
            <div className="pieSection__content">
                <div className="pieSection__image">
                <img src={logo} alt="GuitFoods Logo" className="carousel-image" />
                </div>
                <div className="pieSection__text">
                    <h2>As melhores tortas</h2>
                    <p>Sextou! Vamos comer um torta? Aqui temos as melhores tortas </p>
                    <button className="btn">Realizar pedido</button>
                </div>
            </div>
        </div>
    );
}

export default PieSection;
