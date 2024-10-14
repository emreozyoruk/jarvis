import React from 'react';
import { Link } from 'react-scroll'; // react-scroll'den Link'i import ettik
import logo from '../assets/images/navbarlogo.png'; // Logonuzun dosya yolunu buraya ekledim

function Baslik() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-8">
        {/* Logo Bölümü */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" /> {/* Logo boyutu */}
        </div>

        {/* Menü Bölümü */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 text-sm font-light">
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Headerr" smooth={true} duration={800}>HOME</Link> {/* Header bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="About" smooth={true} duration={800}>ABOUT</Link> {/* About bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Leylaa" smooth={true} duration={800}>SERVICES</Link> {/* Leylaa bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Clients" smooth={true} duration={800}>CLIENTS</Link> {/* Clients bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
              <Link to="Partners" smooth={true} duration={800}>PARTNERS</Link> {/* Header bileşenine gidecek */}
            </li>
            <li className="hover:text-yellow-500 transition duration={500} cursor-pointer">
              <Link to="Leylaaaaa" smooth={true} duration={800}>CONTACT</Link> {/* Leylaaaaa bileşenine gidecek */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Baslik;
