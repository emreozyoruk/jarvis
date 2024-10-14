import React from 'react';
import logo from '../assets/images/goldenlogo.png'; // Logo dosyasını da import ettik

function App() {
  return (
    <div className="App">
      {/* Logo ve Welcome Bölümü */}
      <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-40 h-40 mb-4" />
        </div>
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4">WELCOME</h1>
        <hr className="w-16 mx-auto border-gray-400 mb-6" />
      </header>

      {/* İçerik Metinleri */}
      <section className="text-center px-8 text-gray-700 leading-relaxed">
        <p className="mb-6">
          Happy to introduce Jarvis Marketing & Management Consultancy!
        </p>
        <p className="mb-6">
          Our passion lies in crafting innovative and bespoke concepts for the luxury hospitality industry.
        </p>
        <p className="mb-6">
          The hummingbird’s delicate grace reminds us that life is rich, beauty is everywhere, 
          every personal connection has meaning, and that laughter is among life’s most profound joys. 
          We flutter through creativity, infusing every project with vibrancy.
        </p>
        <p className="mb-6">
          Our commitment is to create unique experiences that resonate globally, 
          leaving an indelible mark on discerning guests.
        </p>
        <p className="mb-6">
          We excel in commercial strategy development and we collaborate closely with our clients 
          to optimize revenue, enhance guest satisfaction, and drive sustainable growth.
        </p>
        <p className="mb-6">
          Based in Dubai, we extend our reach through reputable solution partners across 
          UK, Switzerland, Netherlands, Austria, Türkiye, KSA, Bahrain and UAE. Together, 
          we build connections that transcend borders, ensuring excellence in every endeavor.
        </p>
      </section>

      {/* Footer (Zeynep Öden Ağagil İmza Bölümü) */}
      <footer className="text-center py-12">
        <p className="text-xl text-gray-700 italic mb-2">Zeynep Öden Ağagil</p>
        <p className="text-gray-500">FOUNDER AND MANAGING DIRECTOR</p>
      </footer>
    </div>
  );
}

export default App;
