import React, { useState } from 'react';
import { Link } from 'react-scroll'; // react-scroll'den Link'i import ettik
import logo from '../assets/images/navbarlogo.png'; // Logonuzun dosya yolunu buraya ekledim

function Baslik() {
  const [isOpen, setIsOpen] = useState(false); // Menü açık mı kapalı mı durumunu kontrol eden state

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-8">
        {/* Logo Bölümü */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" /> {/* Logo boyutu */}
        </div>

        {/* Hamburger Menü Butonu (Mobil için) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menü Bölümü */}
        <nav className={`md:flex md:space-x-6 md:text-gray-700 md:text-sm md:font-light ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Headerr" smooth={true} duration={800} onClick={() => setIsOpen(false)}>HOME</Link> {/* Header bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="About" smooth={true} duration={800} onClick={() => setIsOpen(false)}>ABOUT</Link> {/* About bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Leylaa" smooth={true} duration={800} onClick={() => setIsOpen(false)}>SERVICES</Link> {/* Leylaa bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Clients" smooth={true} duration={800} onClick={() => setIsOpen(false)}>CLIENTS</Link> {/* Clients bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Partners" smooth={true} duration={800} onClick={() => setIsOpen(false)}>PARTNERS</Link> {/* Partners bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Leylaaaaa" smooth={true} duration={800} onClick={() => setIsOpen(false)}>CONTACT</Link> {/* Leylaaaaa bileşenine gidecek */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Baslik;
