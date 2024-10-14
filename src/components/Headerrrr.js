import React from 'react';
import logo from '../assets/images/goldenlogo.png'; // Logo dosyasını da import ettik

function App() {
  return (
    <div className="App">
      {/* Logo ve Başlık */}
      <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-40 h-40 mb-4" />
        </div>
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4">PROPERTY POSITIONING</h1>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-6">POSITIONING STATEMENT</h2>
        <p className="mb-4">
          form of a short, illustrated document to brief agencies, the hotel team & solution partners
        </p>
        <ul className="list-none mb-8">
          <li>Hotel design brief</li>
          <li>Target guest profiles (primary & secondary)</li>
          <li>Cultural highlights</li>
          <li>Market analysis</li>
          <li>Source market analysis</li>
        </ul>

        <h2 className="text-lg font-bold mb-6">KEY MESSAGE HOUSE & GUEST EXPERIENCES</h2>
        <p className="mb-4">
          a tagline that needs to encapsulate the hotel’s DNA and a short storytelling, summarizing 
          the different facets of the experience in a compelling way
        </p>
        <ul className="list-none">
          <li>The key message house (property tagline)</li>
          <li>Main tangible assets to bring positioning to life</li>
          <li>Meaningful guest experiences crafted by masters</li>
          <li>Emotional wellbeing experiences</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
