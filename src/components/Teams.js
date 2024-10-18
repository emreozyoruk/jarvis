import React from 'react';
import founderImage1 from '../assets/images/t1.jpeg'; // İlk kişi resmi
import founderImage2 from '../assets/images/t2.jpeg'; // İkinci kişi resmi
import founderImage3 from '../assets/images/t3.jpeg'; // Üçüncü kişi resmi

const Team = () => {
  const teamMembers = [
    {
      name: 'Unal Uran',
      position: 'Marketing & Communications Manager',
      img: founderImage1, // İlk resim
    },
    {
      name: 'Joy Almadrones',
      position: 'Director of Business Development',
      img: founderImage2, // İkinci resim
    },
    {
      name: 'Merve Kilic',
      position: 'Creative Head',
      img: founderImage3, // Üçüncü resim
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold tracking-wide">MEET THE TEAM</h2>
        <p className="text-gray-600 mt-2"></p>
      </div>
      
      <div className="flex justify-center space-x-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-40 h-40 rounded-full object-cover mx-auto" 
            />
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
