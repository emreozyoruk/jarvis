import React from 'react';
import { Link } from 'react-scroll'; // Link'i import ettik
import logo from '../assets/images/goldenlogo.png'; // Logo dosyasını da import ettik

function Services() {
  return (
    <div className="py-6 bg-white text-center">
      <header className="text-center py-6">
        {/* Logo alanı */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-60 h-60 mb-4" />
        </div>
      </header>

      {/* Başlık */}
      <h1 className="text-2xl font-bold tracking-widest mb-4 text-gray-900">SERVICES</h1>
      <div className="flex justify-center mb-12">
        <div className="w-16 border-t border-gray-400"></div>
      </div>

      {/* Hizmetler Tablosu */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 text-left">
        {/* Üstteki 3 kolon */}
        <div>
          <h2 id="property-positioning" className="text-lg font-semibold mb-4 text-center">
            <Link to="Property" smooth={true} duration={800} className="cursor-pointer">
              PROPERTY POSITIONING
            </Link>
          </h2>
          <ul className="text-sm space-y-2">
            <li>We create a concise positioning statement to brief agencies, hotel teams, and solution partners, incorporating a hotel design brief, target guest profiles, cultural highlights, and market analysis.</li>
            <li>We then develop a key message house that captures your hotel’s DNA with a compelling tagline and storytelling, showcasing the meaningful guest experiences we craft to enhance emotional well-being.</li>
            <li>Hotel Design Brief</li>
            <li>Target Guest Profiles (Primary And Secondary)</li>
            <li>Cultural Highlights</li>
            <li>Market Analysis</li>
            <li>Source Market Analysis</li>
            <li>Compelling Storytelling Of Guest Experiences</li>
            <li>Emphasis On Emotional Well-Being Experiences</li>
          </ul>
        </div>

        <div>
          <h2 id="brand-development" className="text-lg font-semibold mb-4 text-center">
            <Link to="Brand" smooth={true} duration={800} className="cursor-pointer">
              BRAND DEVELOPMENT
            </Link>
          </h2>
          <ul className="text-sm space-y-2">
            <li>Our brand development process begins with crafting a comprehensive brand strategy, serving as the blueprint for how your business is perceived in the world.</li>
            <li>We define your brand purpose, develop your audience, conduct competitor research, and shape your brand voice and message, ensuring a strong foundation that translates into a compelling brand identity through visuals, messaging, and experience.</li>
            <li>Brand Strategy Document</li>
            <li>Brand Voice and Personality, Brand Message And Story</li>
            <li>Brand Identity Elements</li>
            <li>Brand Guidelines</li>
          </ul>
        </div>

        <div>
          <h2 id="concept-development" className="text-lg font-semibold mb-4 text-center">
            <Link to="Concept" smooth={true} duration={800} className="cursor-pointer">
              CONCEPT DEVELOPMENT
            </Link>
          </h2>
          <ul className="text-sm space-y-2">
            <li>We explore innovative ideas and define every detail—from public spaces and rooms to food and beverage outlets—crafting unique guest touchpoints and amenities, while collaborating with reputable international partners for architecture, interior design, and curated experiences that elevate the overall guest journey.</li>
            <li>Interior Design Mood Board</li>
            <li>Collateral Look & Feel</li>
            <li>Uniform Inspiration</li>
            <li>Corporate Gifts</li>
            <li>Back of the House Design</li>
          </ul>
        </div>

        {/* Alttaki 2 kolon */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-around space-x-0 md:space-x-8 mt-8">
          <div className="md:pl-8 mb-8 md:mb-0">
            <h2 id="hospitality-management" className="text-lg font-semibold mb-4 text-center">
              <Link to="Hosp" smooth={true} duration={800} className="cursor-pointer">
                HOSPITALITY MANAGEMENT CONSULTANCY
              </Link>
            </h2>
            <ul className="text-sm space-y-2">
              <li>We provide expert hospitality management consultancy for existing properties, pre-openings, rebranding, and renovations, focusing on comprehensive commercial strategy development and detailed pre-opening plans.</li>
              <li>Our services include critical path development, robust business and marketing plans, and the creation of brand standard operational guidelines to ensure operational excellence and elevate guest experiences.</li>
              <li>Commercial Strategy Development</li>
              <li>Pre-Opening Plan</li>
              <li>Critical Path Development</li>
              <li>Business Plan</li>
              <li>Marketing & Communications Plan</li>
              <li>Brand Standard Operational Guidelines (Sop’s) Development</li>
            </ul>
          </div>

          <div className="md:pl-8">
            <h2 id="sales-marketing" className="text-lg font-semibold mb-4 text-center">
              <Link to="Sales" smooth={true} duration={800} className="cursor-pointer">
                SALES & MARKETING REPRESENTATION
              </Link>
            </h2>
            <ul className="text-sm space-y-2">
              <li>We elevate your luxury hospitality brand by attracting affluent Middle Eastern travelers and generating group booking inquiries through impactful sales strategies and strong supplier relationships.</li>
              <li>Our comprehensive services include seamless reservation assistance, exclusive fam trips, tailored event planning, and representation at industry events to enhance visibility and captivate your audience.</li>
              <li>Representation of travel agencies</li>
              <li>Establishment of global brands in UAE</li>
              <li>Market Entry Analysis for brands</li>
              <li>Destination Sales & PR Events</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Mesaj */}
      <div className="mt-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 border-t border-gray-400"></div>
        </div>
        <p className="text-sm italic">We will craft a tailored offer based on your requirements.</p>
      </div>
    </div>
  );
}

export default Services;
