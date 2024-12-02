import React, { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    '/images/const1.jpg',
    '/images/const2.jpg',
    '/images/const3.jpg',
    '/images/const4.jpg',
    '/images/const5.jpg',
    '/images/const6.jpg',
    '/images/const7.jpg',
    '/images/const8.jpg',
    '/images/const9.jpg',
    '/images/const10.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 seconds interval
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center p-4 md:p-8" // Added padding for responsiveness
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        marginTop: '55px', // Added margin to the top
        marginBottom: '40px' // Added margin to the bottom
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Jatoi Construction
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed">
          Jatoi Construction is a leading company in the construction industry,
          known for delivering high-quality infrastructure and innovative
          building solutions. With years of experience, we specialize in
          residential, commercial, and industrial projects. We pride ourselves
          on our commitment to excellence, safety, and sustainability in every
          project we undertake.
        </p>
      </div>
    </div>
  );
};

export default Home;
