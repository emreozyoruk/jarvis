import React from 'react';
import partner1 from '../assets/images/part1.jpeg'; 
import partner2 from '../assets/images/part2.png';
import partner3 from '../assets/images/part3.jpg';
import partner4 from '../assets/images/part4.jpeg';
import partner5 from '../assets/images/part5.jpeg';
import partner6 from '../assets/images/part6.jpeg';

function Partners() {
  return (
    <section className="py-12 bg-white">
      {/* Logo ve başlık */}
  

      <h2 className="text-3xl font-semibold text-center mb-8">SOLUTION PARTNERS</h2>
      <br/><br/><br/>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Her bir partner logosu için grid item */}
          <div className="flex justify-center">
            <img src={partner1} alt="Partner 1" className="w-48 h-32 object-contain"/> {/* Sabit boyut ayarlandı */}
          </div>
          <div className="flex justify-center">
            <img src={partner4} alt="Partner 2" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner3} alt="Partner 3" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner2} alt="Partner 4" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner5} alt="Partner 5" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner6} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
