import React from 'react';
import image2 from '../assets/images/2.png'; // Görsel dosyasını ekledim

function App() {
  return (
    <div className="App">
      {/* Görsel ve metin */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Mobilde %100 genişlikte, masaüstünde yatayda tam genişlik, dikeyde sınırlandırıldı */}
        <img 
          src={image2} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full h-auto max-h-[80vh]"  // Masaüstünde tam genişlik ve maksimum 80vh boy
        /> 
      </section>
    </div>
  );
}

export default App;
