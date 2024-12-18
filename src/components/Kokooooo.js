import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Başlık */}
      <header className="text-center py-12">
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4 font-semibold">
          PROPERTY POSITIONING
        </h1>
        <p className="italic text-lg mb-6">
          'Positioning is not what you do to a product; it is what you do to the mind of a prospect.'
        </p>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-6">POSITIONING STATEMENT</h2>
        <p className="mb-8">
          Form of a short, illustrated document to brief agencies, the hotel team & solution partners
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
          A tagline that needs to encapsulate the hotel's DNA and a short storytelling, summarizing the different facets of the experience in a compelling way
        </p>
        <ul className="list-none mb-8">
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
