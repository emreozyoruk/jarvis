import React from 'react';
import image3 from '../assets/images/new3.png';

function App() {
  return (
    <div className="App">
      {/* Arka plan görseli ve metin */}
      <section className="flex flex-col items-center justify-center min-h-[20vh]">
        {/* Mobilde %100 genişlikte, masaüstünde yatayda tam genişlik, dikeyde sınırlandırıldı */}
        <img 
          src={image3} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full h-auto max-h-[80vh]"  // Masaüstünde tam genişlik ve maksimum 80vh boy
        /> 
      </section>
    </div>
  );
}

export default App;
