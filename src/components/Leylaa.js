import React from 'react';
function App() {
  return (
    <div className="App">
      {/* Logo ve Başlık */}
      <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
        </div>
        <h1 className="text-2xl tracking-widest text-gray-800 mb-2">
          COMMERCIAL STRATEGY DEVELOPMENT
        </h1>
        <h2 className="text-lg tracking-wide text-gray-600">
          EXISTING PROPERTIES <br />
          PRE-OPENINGS, REBRANDINGS, RENOVATIONS
        </h2>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-6">BUSINESS PLAN</h2>
        <ul className="list-none mb-8">
          <li>Market trends & insights</li>
          <li>Pestel analysis, Destination tourism projection, Destination visitors, Demand generators, Seasonality calendar</li>
          <li>Competitor analysis</li>
          <li>Competitive set overview</li>
          <li>SWOT analysis</li>
          <li>Primary and secondary customer profiles</li>
        </ul>

        <h2 className="text-lg font-bold mb-6">Segmentation & Pricing</h2>
        <ul className="list-none mb-8">
          <li>Market segment key objectives & segment strategies (Transient guests / Groups)</li>
          <li>Conference & events key objectives & segment strategies</li>
          <li>Pricing strategy</li>
          <li>Distribution strategy (Online & Offline channels)</li>
        </ul>

        <h2 className="text-lg font-bold mb-6">PRE-OPENING MARKETING & COMMUNICATIONS PLAN</h2>
        <ul className="list-none mb-8">
          <li>Preparing a brief for hotel creative agency / marketing team</li>
          <li>Photo / video shoot planning</li>
          <li>A unique iconography creation for employee and management trainings</li>
          <li>Digital Marketing Strategy - allocating funds towards revenue generating activities</li>
          <li>Social media strategy and guidelines development</li>
          <li>Launch / re-launch planning</li>
          <li>Preparing a brief for hotel PR agency / PR & Communications team</li>
          <li>Identifying Potential PR & Communications Partners – Local and International Media Brands</li>
          <li>Targeted Local & International Awards list creation</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
