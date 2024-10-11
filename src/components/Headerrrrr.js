import React from 'react';
import image33 from '../assets/images/33.png';

function App() {
  return (
    <div className="App">
      {/* Arka plan görseli ve metin */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image33})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Opak katman */}
        <h1 className="relative z-10 text-white text-3xl md:text-4xl italic">
          "TAKE A DEEP BREATH"
        </h1>
      </section>
    </div>
  );
}

export default App;
