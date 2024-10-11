import React from 'react';
import image77 from '../assets/images/77.png';

function App() {
  return (
    <div className="App">
      {/* Arka plan görseli ve metin */}
      <section className="flex flex-col items-center justify-center h-screen">
        {/* Mobilde %100 genişlikte, masaüstünde %50 genişlik */}
        <img 
          src={image77} 
          alt="LET THE WIND TAKE YOU" 
          className="w-full sm:w-3/4 md:w-1/2 h-auto"  // Mobilde %100, masaüstünde %50 genişlik
        /> 
      </section>
    </div>
  );
}

export default App;
