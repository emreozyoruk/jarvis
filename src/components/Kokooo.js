import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Başlık */}
      <header className="text-center py-12">
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4 font-semibold">CONCEPT DEVELOPMENT</h1>
        <p className="italic text-lg mb-6">'First concept, then design'</p>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <p className="mb-8">
          Creating a successful hotel brand goes beyond simple aesthetics or comfortable amenities. It revolves around ensuring that every guest feels genuinely welcomed by seamlessly integrating exceptional service standards into every aspect of their stay.
        </p>
        <p className="mb-8">
          We explore fresh ideas and unlock new possibilities. We thoroughly define visual and sensory elements and any detail that directly impacts the overall guest experience.
        </p>

        {/* Ortadaki başlıklar ve kategoriler */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">
            PUBLIC SPACES | ROOMS | FOOD & BEVERAGE OUTLETS
          </h2>
          <h2 className="text-lg font-bold mb-4">
            EVENT VENUES | WELLNESS | RETAIL | BACK OF THE HOUSE
          </h2>
        </div>

        {/* Solution Providers */}
        <h2 className="text-lg font-bold mb-6">SOLUTION PROVIDERS</h2>
        <ul className="list-none mb-8">
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

        {/* Alt Bilgilendirme */}
        <div className="mt-8">
          <p className="text-gray-600 italic">
            Based on hotel design brief and brand guidelines:
            <br />Naming the venues
            <br />Creating guest touchpoints
            <br />Guest amenities design and development
          </p>
        </div>

        {/* Strategic Partnerships */}
        <h2 className="text-lg font-bold mt-12 mb-4">STRATEGIC PARTNERSHIPS</h2>
        <p className="mb-8">
          Developing strategic partnerships with local & international brands
          <br />Developing workshops with artisans
        </p>
      </section>
    </div>
  );
}

export default App;
