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
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4">BRAND DEVELOPMENT</h1>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-6">BRAND STRATEGY</h2>
        <p className="mb-4">
          the blueprint of how you want the world to see your business
        </p>
        <ul className="list-none mb-8">
          <li>Brand purpose development</li>
          <li>Audience development</li>
          <li>Competitor research</li>
          <li>Brand voice & personality</li>
          <li>Brand message & story</li>
        </ul>

        <h2 className="text-lg font-bold mb-6">BRAND IDENTITY</h2>
        <p className="mb-4">
          the way that you convey your brand strategy to the public with visuals, messaging, and experience
        </p>
        <ul className="list-none mb-8">
          <li>Logo</li>
          <li>Colors and fonts</li>
          <li>Patterns and icons</li>
          <li>Collateral</li>
          <li>Website design</li>
          <li>Content and messaging</li>
          <li>Advertising</li>
          <li>Print or packaging</li>
        </ul>

        <h2 className="text-lg font-bold mb-6">BRAND GUIDELINES</h2>
        <p className="mb-4">
          describes what makes you unique; defines the elements & the rules that must be used consistently
        </p>
        <ul className="list-none">
          <li>Logo size and placement</li>
          <li>Color palette</li>
          <li>Typography and fonts</li>
          <li>Iconography</li>
          <li>Photography/image style</li>
          <li>Web elements</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
