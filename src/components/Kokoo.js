import React from 'react';
import image44 from '../assets/images/44.png';

function App() {
  return (
    <div className="App">
      {/* Arka plan görseli ve metin */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Mobilde %100 genişlikte, masaüstünde yatayda tam genişlik, dikeyde sınırlandırıldı */}
        <img 
          src={image44} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full h-auto max-h-[80vh]"  // Masaüstünde tam genişlik ve maksimum 80vh boy
        /> 
      </section>
    </div>
  );
}

export default App;
