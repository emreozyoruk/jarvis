import React from 'react';
import ritzCarlton from '../assets/images/firma1.png'; // Görsellerini ilgili yollarla değiştir
import ciragan from '../assets/images/firma2.png'; // Görsellerini ilgili yollarla değiştir
import rafflesIstanbul from '../assets/images/firma3.png'; // Görsellerini ilgili yollarla değiştir
import rafflesDubai from '../assets/images/firma4.png'; // Görsellerini ilgili yollarla değiştir
import sofitel from '../assets/images/firma5.png'; // Görsellerini ilgili yollarla değiştir
import rafflesBahrain from '../assets/images/firma6.png'; // Görsellerini ilgili yollarla değiştir
import kempinski from '../assets/images/firma7.png'; // Görsellerini ilgili yollarla değiştir
import accor from '../assets/images/firma8.png'; // Görsellerini ilgili yollarla değiştir
import logo from '../assets/images/goldenlogo.png'; // Logonun yolunu ekledik


function Clients() {
  return (
    <section className="py-12 bg-white">
         {/* Logo ve başlık */}
      <header className="text-center py-12">
        <div className="flex justify-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-60 h-60" />
        </div>
      </header>

      <h2 className="text-3xl font-semibold text-center mb-8">REFERENCES</h2>
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
        </div>
      </div>
    </section>
  );
}

export default Clients;
