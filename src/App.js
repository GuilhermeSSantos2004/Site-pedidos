import React from 'react';
import Navbar from './Navbar';
import InfoSection from './InfoSection';
import './App.css'; // Certifique-se de importar o arquivo CSS
import Content from './Content';
import PieSection from './PieSection';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <InfoSection />
      <PieSection />
   
      {/* Adicione mais conteúdo aqui */}
    </div>
  );
}

export default App;
