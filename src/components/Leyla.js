import React from 'react';
import image66 from '../assets/images/66.png';

function App() {
  return (
    <div className="App">
      {/* Görsel ve metin */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Görselin boyutu küçültüldü */}
        <img src={image66} alt="FIND PEACE WITHIN" className="w-full h-1/2  h-auto mb-12" /> {/* %50 genişlik ayarlandı */}

        <h1 className="text-white text-3xl md:text-4xl font-semibold text-center px-4">
          "FIND PEACE WITHIN"
        </h1>
      </section>
    </div>
  );
}

export default App;
