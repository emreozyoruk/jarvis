import React from 'react';
import logo from '../assets/images/logo.png';  // Logo dosyasını ekledim
import image11 from '../assets/images/11.jpg'; // 11.png yerine görsel için 11.jpg'yi ekledim

function App() {
  return (
    <div className="App">
      {/* Header Bölümü */}
      <header className="text-center py-12">
        <div className="flex justify-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </div>
        <h1 className="text-2xl font-semibold mt-4">JARVIS CONSULTANCY</h1>
        <p className="text-sm tracking-wide text-gray-600">LUXURY HOSPITALITY | CONCEPT DEVELOPMENT</p>
        <p className="text-lg mt-4 text-gray-500">Zeynep Öden Ağagil</p>
      </header>

      {/* Görsel Bölümü */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Mobilde %100 genişlikte, masaüstünde %50 genişlik */}
        <img 
          src={image11} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full sm:w-3/4 md:w-1/2 h-auto"  // Mobilde %100, masaüstünde %50 genişlik
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
