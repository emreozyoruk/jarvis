import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Yön ikonları için ekledik

const testimonials = [
  {
    text: `I am pleased to share my testimony about Zeynep Oden Agagil, with whom I had the privilege of working during both the pre-opening and post-opening phases of Raffles Istanbul, where I served as General Manager and she as Director of Sales. Throughout this period, I witnessed her remarkable evolution and maturity within the hospitality industry. Zeynep is an extraordinary blend of positivity, courtesy, kindness, and maturity, all coupled with a fun attitude.`,
    name: "Tarek Mourad",
    title: "General Manager, St.Regis Hotels & Resorts, Muscat",
  },
  {
    text: `I had the pleasure of working with Zeynep for many years, and I continue to admire her persistence and dedication. She has a remarkable ability to navigate through challenges, consistently demonstrating resilience and a positive attitude.`,
    name: "Can Goktas",
    title: "Chief Operating Officer Kaplankaya, General Manager Six Senses Kaplankaya",
  },
  {
    text: `Zeynep is a solution finder. Her dedication and hard work, guest contact, positive approach and cooperation was always appreciated. She is a good team player with great management expertise.`,
    name: "Ralph Radtke",
    title: "General Manager, Çırağan Palace Kempinski Istanbul & Regional Director Kempinski Residences Türkiye",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold tracking-wide">Testimonials</h2>
      </div>
      <div className="max-w-xl mx-auto text-center">
        <div
          className="bg-white p-6 rounded-lg shadow-lg"
          style={{ minHeight: "250px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <p className="italic text-gray-700 text-sm md:text-base">
            "{testimonials[currentIndex].text}"
          </p>
          <div className="mt-4">
            <strong>{testimonials[currentIndex].name}</strong>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="text-gray-400 hover:text-gray-600 text-3xl" // Gri renk ve büyüklük ayarları
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-gray-400 hover:text-gray-600 text-3xl" // Gri renk ve büyüklük ayarları
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
