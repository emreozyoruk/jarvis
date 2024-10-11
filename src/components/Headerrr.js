import React from 'react';
import image22 from '../assets/images/22.png'; // Görsel dosyasını ekledim

function App() {
  return (
    <div className="App">
      {/* Görsel ve metin */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Mobilde %100 genişlikte, masaüstünde %50 genişlik */}
        <img 
          src={image22} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full sm:w-3/4 md:w-1/2 h-auto"  // Mobilde %100, masaüstünde %50 genişlik
        /> 
      </section>
    </div>
  );
}

export default App;
