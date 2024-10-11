import React from 'react';
import logo from '../assets/images/logo.png';
function App() {
  return (
    <div className="App">
      {/* Logo ve Başlık */}
      <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />
        </div>
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4">CONCEPT DEVELOPMENT</h1>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-6">PUBLIC SPACES</h2>
        <ul className="list-none mb-8">
          <li>ROOMS</li>
          <li>FOOD & BEVERAGE OUTLETS</li>
          <li>EVENT VENUES</li>
          <li>WELLNESS</li>
          <li>RETAIL</li>
          <li>BACK OF THE HOUSE</li>
        </ul>
        <p className="mb-4">
          Based on hotel design brief and brand guidelines:
          <br />Naming the venues
          <br />Creating guest touchpoints
          <br />Guest amenities design and development
        </p>

        <h2 className="text-lg font-bold mb-6">STRATEGIC PARTNERSHIPS</h2>
        <p className="mb-4">
          developing strategic partnerships with local & international brands
          <br />developing workshops with artisans
        </p>

        <h2 className="text-lg font-bold mb-6">SOLUTION PROVIDERS</h2>
        <p className="mb-4">
          We provide a wide variety of solutions through our reputable international partners
        </p>
        <ul className="list-none">
          <li>Architecture & Interior design</li>
          <li>Food & Beverage consultancy</li>
          <li>Kitchen formation & Menu engineering</li>
          <li>Olfactory experience</li>
          <li>Audial consultancy</li>
          <li>Library content creation</li>
          <li>Art installations</li>
          <li>Uniform design and production</li>
          <li>Guest toiletries / supplies</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
