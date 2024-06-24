import React from 'react';
import Navbar from './Navbar';
import InfoSection from './InfoSection';
import './App.css'; // Certifique-se de importar o arquivo CSS
import Content from './Content';
import PieSection from './PieSection';
import CommentsSection from './CommentsSection'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
        <Navbar />
      <section id="home" className="section">
        <Content />
      </section>
      <section id="about" className="section">
        <InfoSection />
      </section>
        <PieSection />
      <section id="services" className="section">
        <CommentsSection />
      </section>
      
      
      
  
      <Footer />
      {/* Adicione mais conteúdo aqui */}
    </div>
  );
}

export default App;
