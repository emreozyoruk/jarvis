import React from 'react';
import image22 from '../assets/images/22.png'; // image22 dosyasını ekledim

function App() {
  return (
    <div className="App">
      {/* Arka plan görseli ve yazı */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image22})` }}  // Arka plan görselini image22 yaptım
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Opak katman */}
        <h1 className="relative z-10 text-white text-3xl md:text-4xl italic">
          "LET THE WIND TAKE YOU..."
        </h1>
      </section>
    </div>
  );
}

export default App;