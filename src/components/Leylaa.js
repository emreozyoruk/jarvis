import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Başlık */}
      <header className="text-center py-12">
        <h1 className="text-2xl tracking-widest text-gray-800 mb-2 font-semibold">
          HOSPITALITY MANAGEMENT CONSULTANCY
        </h1>
        <p className="text-md tracking-wide text-gray-600">
          COMMERCIAL STRATEGY DEVELOPMENT <br />
          FOR EXISTING PROPERTIES, PRE-OPENINGS, REBRANDINGS, RENOVATIONS
        </p>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-4">PRE-OPENING PLAN | BUSINESS PLAN</h2>
        <ul className="list-none mb-8">
          <li>Market trends & insights</li>
          <li>PESTEL analysis, Destination tourism projection, Destination visitors, Demand generators, Seasonality calendar</li>
          <li>Competitor analysis</li>
          <li>Competitive set overview</li>
          <li>SWOT analysis</li>
          <li>Primary and secondary customer profiles</li>
          <li>Segmentation & Pricing</li>
          <li>Market segment key objectives & segment strategies (Transient guests / Groups)</li>
          <li>Conference & events key objectives & segment strategies</li>
          <li>Pricing strategy</li>
          <li>Distribution strategy (Online & Offline channels)</li>
        </ul>

        <h2 className="text-lg font-bold mb-4">CRITICAL PATH DEVELOPMENT</h2>

        <h2 className="text-lg font-bold mb-6">MARKETING & COMMUNICATIONS PLAN</h2>
        <ul className="list-none mb-8">
          <li>Preparing a brief for hotel creative agency / marketing team</li>
          <li>Photo / video shoot planning</li>
          <li>A unique iconography creation for employee and management trainings</li>
          <li>Digital Marketing Strategy - allocating funds towards revenue generating activities</li>
          <li>Social media strategy and guidelines development</li>
          <li>Launch / re-launch planning</li>
          <li>Preparing a brief for hotel PR agency / PR & Communications team</li>
          <li>Identifying potential PR & Communications Partners</li>
          <li>Targeted Local & International Awards list creation</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
