import React from 'react';
import image7 from '../assets/images/new7.png';  // Görsel import edildi

function App() {
  return (
    <div className="App">
      {/* Ana bölüm */}
      <section className="flex flex-col items-center justify-center min-h-[20vh]">
        {/* Görsel */}
        <img 
  src={image7} 
  alt="New beginnings" 
  className="w-full h-auto max-h-[80vh]"
  //className="w-full sm:w-3/4 md:w-1/4 h-auto mb-12" 
/> 
<div >
   <br/>
</div>


        {/* İletişim bilgileri */}
        <footer className="text-center text-gray-600 text-sm">
          <p>ZEYNEP.ODEN@JARVIS-CONSULT.COM</p>
          <p>JARVIS-CONSULT.COM</p>
          <p>+971.58.580.3877</p>
          <br/><br/>
        </footer>
      </section>
    </div>
  );
}

export default App;
