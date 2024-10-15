import React from 'react';
import ritzCarlton from '../assets/images/firma1.png'; 
import ciragan from '../assets/images/firma2.png'; 
import rafflesIstanbul from '../assets/images/firma3.png'; 
import rafflesDubai from '../assets/images/firma4.png'; 
import sofitel from '../assets/images/firma5.png'; 
import rafflesBahrain from '../assets/images/firma6.png'; 
import kempinski from '../assets/images/firma7.png'; 
import accor from '../assets/images/firma8.png'; 
import r1 from '../assets/images/r1.png';
import r2 from '../assets/images/r2.png';


function Clients() {
  return (
    <section className="py-12 bg-white">
      {/* Logo ve başlık */}
      <header className="text-center py-12">
        <div className="flex justify-center">
          {/* Logo */}
        </div>
      </header>

      <h2 className="text-3xl font-semibold text-center mb-8">REFERENCES</h2>
      <br/><br/><br/>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Her bir referans logosu için grid item */}
          <div className="flex justify-center">
            <img src={ritzCarlton} alt="Ritz Carlton" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={ciragan} alt="Çırağan Palace Kempinski" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={rafflesIstanbul} alt="Raffles Istanbul" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={rafflesDubai} alt="Raffles Dubai" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={sofitel} alt="Sofitel Dubai" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={rafflesBahrain} alt="Raffles Bahrain" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={kempinski} alt="Kempinski Hotel" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={accor} alt="Accor" className="w-48 h-auto"/>
          </div>
          {/* Son satırdaki logoları 2. ve 3. sütuna koymak için: */}
          <div></div> {/* Boş bir div ekliyoruz */}
          <div className="flex justify-center">
            <img src={r1} alt="R1" className="w-48 h-auto"/>
          </div>
          <div className="flex justify-center">
            <img src={r2} alt="R2" className="w-48 h-auto"/>
          </div>
          <div></div> {/* Boş bir div ekliyoruz */}
        </div>
      </div>
    </section>
  
);
}

export default Clients;
