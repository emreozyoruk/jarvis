import React from 'react';
import logo from '../assets/images/goldenlogo.png'; // Logo dosyasını da import ettik
import image6 from '../assets/images/new1.png'; // 11.png yerine görsel için 11.jpg'yi ekledim

function App() {
  return (
    <div className="App">
      {/* Header Bölümü */}
      <header className="text-center py-12">
        <div className="flex justify-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-40 h-40" />
        </div>
        <h1 className="text-2xl font-semibold mt-4">JARVIS CONSULTANCY</h1>
        <p className="text-sm tracking-wide text-gray-600">LUXURY HOSPITALITY | CONCEPT DEVELOPMENT</p>
      </header>

      {/* Görsel Bölümü */}
      <section className="flex flex-col items-center justify-center min-h-[20vh]">
        {/* Mobilde %100 genişlikte, masaüstünde yatayda tam genişlik, dikeyde sınırlandırıldı */}
        <img 
          src={image6} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full h-auto max-h-[80vh]"  // Masaüstünde tam genişlik ve maksimum 80vh boy
        /> 
      </section>

      {/* Footer Bölümü */}
      <footer className="text-center py-8">
        <p className="text-sm tracking-wide">JARVIS-CONSULT.COM</p>
        <p className="text-xs text-gray-600 mt-2">DUBAI - ISTANBUL</p>
      </footer>
    </div>
  );
}

export default App;
