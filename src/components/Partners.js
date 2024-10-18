import React from 'react';
import partner1 from '../assets/images/sp1.jpg'; 
import partner2 from '../assets/images/g2.png';
import partner3 from '../assets/images/sp3.png';
import partner4 from '../assets/images/g1.png';
import partner5 from '../assets/images/sp5.png';
import partner6 from '../assets/images/sp6.png';
import partner7 from '../assets/images/g4.png';
import partner8 from '../assets/images/sp8.png';
import partner9 from '../assets/images/sp9.png';
import partner10 from '../assets/images/sp10.png';
import partner11 from '../assets/images/g3.png';
import partner12 from '../assets/images/spp.jpeg'




function Partners() {
  return (
    <section className="py-12 bg-white">
      {/* Logo ve başlık */}
  

      <h2 className="text-3xl font-semibold text-center mb-8">SOLUTION PARTNERS</h2>
      <div className="mt-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 border-t border-gray-400"></div>
        </div>
        <p className="text-sm italic text-center">We team up with the luxury hospitality industry's best vendors and skilled artisans to find the perfect solutions for you </p> {/* Alttaki yazı buraya eklendi */}
      </div>
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
          <div className="flex justify-center">
            <img src={partner7} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner8} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner9} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner10} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner11} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
          <div className="flex justify-center">
            <img src={partner12} alt="Partner 6" className="w-48 h-32 object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
