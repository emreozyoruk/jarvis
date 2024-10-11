import React from 'react';
import image8 from '../assets/images/8.png';  // Görsel import edildi

function App() {
  return (
    <div className="App">
      {/* Ana bölüm */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Görsel */}
        <img 
  src={image8} 
  alt="New beginnings" 
  className="w-full sm:w-3/4 md:w-1/4 h-auto mb-12" 
/> 
        {/* Metin */}
        <h1 className="text-gray-700 text-2xl md:text-3xl font-semibold text-center px-4 mb-12">
          WE ARE SO EXCITED TO START WORKING WITH YOU!
        </h1>

        {/* İletişim bilgileri */}
        <footer className="text-center text-gray-600 text-sm">
          <p>ZEYNEP.ODEN@JARVIS-CONSULT.COM</p>
          <p>JARVIS-CONSULT.COM</p>
          <p>+971.58.580.3877</p>
        </footer>
      </section>
    </div>
  );
}

export default App;
