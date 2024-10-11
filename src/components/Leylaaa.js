import React from 'react';
import image77 from '../assets/images/77.png';
function App() {
  return (
    <div className="App">
      {/* Arka plan görseli ve metin */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image77})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Opak katman */}
        <h1 className="relative z-10 text-white text-3xl md:text-4xl font-semibold text-center px-4">
          "LET US TELL YOUR STORY"
        </h1>
      </section>
    </div>
  );
}

export default App;
