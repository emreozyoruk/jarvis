import React from 'react';
import logo from '../assets/images/goldenlogo.png'; // Logo dosyasını da import ettik
function Services() {
  return (
    
    <div className="py-12 bg-white text-center">
        <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-60 h-60 mb-4" />
        </div>
       
      </header>
      {/* Başlık */}
      <h1 className="text-lg font-light tracking-widest mb-4">SERVICES</h1>
      <div className="flex justify-center mb-12">
        <div className="w-16 border-t border-gray-400"></div>
      </div>

      {/* Hizmetler Tablosu */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 text-left">
        {/* Concept & Brand Development */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-center">CONCEPT & BRAND DEVELOPMENT</h2>
          <ul className="text-sm space-y-2">
            <li>Create compelling narratives</li>
            <li>Mood boards creation from interior design to uniforms, covering all guest touchpoints</li>
            <li>Tailored positioning workshops</li>
            <li>Brand identity development</li>
            <li>For re-branding:</li>
            <li>Redefining the brand essence</li>
            <li>Reimagining the guest experience</li>
            <li>Revamping the visual identity</li>
            <li>Ensuring brand consistency</li>
          </ul>
        </div>

        {/* Hospitality Management Consultancy */}
        <div className="border-l border-gray-400 pl-8">
          <h2 className="text-lg font-semibold mb-4 text-center">HOSPITALITY MANAGEMENT CONSULTANCY</h2>
          <ul className="text-sm space-y-2">
            <li>Pre-Opening Consultancy</li>
            <li>Rebranding Consultancy</li>
            <li>Creating Brand Manuals</li>
            <li>Standard Operating Procedures Development</li>
            <li>Audit Checklists Formation</li>
            <li>Inhouse Training Modules Creation</li>
          </ul>
        </div>

        {/* Commercial Strategy Consultancy */}
        <div className="border-l border-gray-400 pl-8">
          <h2 className="text-lg font-semibold mb-4 text-center">COMMERCIAL STRATEGY CONSULTANCY</h2>
          <ul className="text-sm space-y-2">
            <li>Commercial Strategy Development</li>
            <li>Business Performance Audit</li>
            <li>Competitor Set Analysis</li>
            <li>SWOT Analysis</li>
            <li>Segmentation Strategy</li>
            <li>Pricing & Distribution Strategy</li>
          </ul>
        </div>

        {/* Marketing & Communications Consultancy */}
        <div className="border-l border-gray-400 pl-8">
          <h2 className="text-lg font-semibold mb-4 text-center">MARKETING & COMMUNICATIONS CONSULTANCY</h2>
          <ul className="text-sm space-y-2">
            <li>Creative agency / branding agency brief</li>
            <li>Designing a unique iconography</li>
            <li>Digital marketing strategy</li>
            <li>Social media strategy</li>
            <li>Influencer / Key Opinion Leader partnerships</li>
            <li>Corporate partnerships</li>
            <li>Press trip organization</li>
            <li>Launch / re-launch planning</li>
          </ul>
        </div>

        {/* Sales & Marketing Representation */}
        <div className="border-l border-gray-400 pl-8">
          <h2 className="text-lg font-semibold mb-4 text-center">SALES & MARKETING REPRESENTATION</h2>
          <ul className="text-sm space-y-2">
            <li>Representation of hospitality companies</li>
            <li>Representation of event companies</li>
            <li>Representation of travel agencies</li>
            <li>Establishment of global brands in UAE</li>
            <li>Market Entry Analysis for brands</li>
            <li>Destination Sales & PR Events</li>
          </ul>
        </div>
      </div>

      {/* Alt Mesaj */}
      <div className="mt-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 border-t border-gray-400"></div>
        </div>
        <p className="text-sm italic">We will craft a tailored offer based on your requirements.</p>
      </div>
    </div>
  );
}

export default Services;
