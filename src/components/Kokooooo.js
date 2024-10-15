import React from 'react';
function App() {
  return (
    <div className="App">
      {/* Logo ve Başlık */}
      <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
        </div>
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4">
          OPERATIONAL GUIDELINES DEVELOPMENT
        </h1>
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold mb-6">BRAND STANDARD OPERATIONAL GUIDELINES (SOP'S)</h2>
        <ul className="list-none mb-8">
          <li>Administrative</li>
          <li>Rooms - Front Office - Housekeeping - Reservations - PBX</li>
          <li>Finance - IT - Procurement</li>
          <li>Talent & Culture</li>
          <li>Sales & Marketing, Crisis Communication, Revenue</li>
          <li>Food & Beverage, Culinary, Banquet</li>
          <li>Spa, Wellness</li>
          <li>Engineering</li>
          <li>Security</li>
        </ul>

        <h2 className="text-lg font-bold mb-6">PRE-OPENING PLAN / CRITICAL PATH</h2>
        <p className="mb-4">
          development of brand level pre-opening plan*
        </p>
        <p className="text-sm italic text-gray-500">
          *property level coordination and adaptation to be done by department heads
        </p>
      </section>
    </div>
  );
}

export default App;
