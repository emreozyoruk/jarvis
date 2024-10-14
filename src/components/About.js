import React from 'react';
import founderImage from '../assets/images/kadinremove.png'; // Kurucu resmi import edildi
import logo from '../assets/images/goldenlogo.png'; // Logo dosyasını da import ettik

function App() {
  return (
    <div className="App">
      {/* Logo ve Başlık */}
      <header className="text-center py-12">
        {/* Logo alanı */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-60 h-60 mb-4" />
        </div>
        <h1 className="text-2xl tracking-widest text-gray-800 mb-4">MEET OUR FOUNDER</h1>
      </header>

      {/* İçerik Metinleri */}
      <section className="px-8 text-gray-700 leading-relaxed">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Sol tarafa kurucu fotoğrafı yerleştirildi */}
          <img 
            src={founderImage} 
            alt="Founder Zeynep" 
            className="w-48 md:w-64 h-auto rounded-full mb-4 md:mb-0 md:mr-8 object-cover" 
          /> {/* Görsel responsive yapıldı ve oranları korunuyor */}

          <div className="text-center md:text-left">
            <p className="mb-4">
              Zeynep began her career with the opening of The Ritz-Carlton, Istanbul in 2001, where she developed a deep appreciation for the luxury hospitality that fueled her later achievements in the industry.
            </p>
            <p className="mb-4">
              With over two decades of experience across Türkiye, UAE, and Bahrain, she has made significant contributions to iconic properties under the esteemed brands of The Ritz-Carlton, Kempinski, and Raffles.
            </p>
            <p className="mb-4">
              Zeynep is specialized in luxury hospitality pre-openings, re-brandings, and renovation projects. Our clients define her style as authentic, personable and engaging. She deeply believes in cultivating a sense of belonging for her team. She offers a vision-driven approach to decision-making, strategic planning, and tactical implementation.
            </p>
            <p className="mb-4">
              Her extensive network spans a diverse range of professionals and influencers, including UHNW's and HNW's, government officials, corporate clients, luxury travel advisors, destination boards, destination event specialists, as well as international creative agencies, PR firms, artisans, and luxury suppliers across various sectors. She has led the conceptualization and execution of numerous concept developments and also managed several co-branded projects with esteemed international luxury brands.
            </p>
            <p className="mb-4">
              Zeynep holds a bachelor’s degree in business administration from the Department of Political Sciences at Ankara University and a master’s degree in Tourism Design and Management from Istanbul Technical University.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
 
    </div>
  );
}

export default App;
