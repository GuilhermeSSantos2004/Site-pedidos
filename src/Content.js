import React from 'react';
import logo from './assets/logo.jpg';
import './Content.css';

function Content() {
  const title = "SEJA BEM-VINDO AO MUNDO DAS GOSTOSURAS";
  const titledown = "Todas as opções do nosso cardápio são feitas com amor e carinho.";
  const formattedTitle = title.split(' ').map((word, index) => (
    index % 2 === 1 ? word + '\n' : word + ' '
  )).join('').trim();

  return (
    <div className="App-content">
      <div className="App-header">
        <h1 className="header-title">{formattedTitle.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h1>
        <p className="header-subtitle">{titledown}</p>
        <div className="button-container">
          <button className="square-button">Fazer o pedido</button>
        </div>
      </div>
      <div className="carousel-container">
        <img src={logo} alt="GuitFoods Logo" className="carousel-image" />
        {/* Adicione mais imagens para o carrossel conforme necessário */}
      </div>
    </div>
  );
}

export default Content;
