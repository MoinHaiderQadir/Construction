import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: 'Maryam Queshi',
    role: 'Lead Developer',
    description: 'Expert in backend and frontend development.',
    image: '/images/const1.jpg',
  },
  {
    id: 2,
    name: 'Urosheem Memon',
    role: 'UI/UX Designer',
    description: 'Passionate about user-centered design and simplicity.',
    image: '/images/const2.jpg',
  },
  {
    id: 3,
    name: 'Moin Haider',
    role: 'Project Manager',
    description: 'Ensures projects are delivered on time and within scope.',
    image: '/images/const3.jpg',
  },
  {
    id: 4,
    name: 'Sara Davis',
    role: 'Business Analyst',
    description: 'Analyzes business needs and ensures alignment.',
    image: '/images/const4.jpg',
  },
  {
    id: 5,
    name: 'Chris Evans',
    role: 'QA Engineer',
    description: 'Ensures top-notch quality in every release.',
    image: '/images/const5.jpg',
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-blue-500 px-6 py-16 md:px-16 lg:px-28 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-10">
          Our Team Experts
        </h2>

        {/* Carousel for Mobile */}
        <div className="relative lg:hidden flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300 text-white"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
            {teamData.map((person, index) => (
              <div
                key={person.id}
                className={`carousel-item transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="group bg-white hover:bg-black rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="rounded-box w-24 h-24 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold group-hover:text-white text-black mb-2">
                    {person.name}
                  </h3>
                  <p className="text-blue-500 group-hover:text-white transition duration-300">
                    {person.role}
                  </p>
                  <p className="mt-2 text-gray-600 group-hover:text-white transition duration-300 text-sm">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300 text-white"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {teamData.map((person) => (
            <div
              key={person.id}
              className="group bg-white hover:bg-black rounded-lg shadow-lg p-6"
            >
              <img
                src={person.image}
                alt={person.name}
                className="rounded-box w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold group-hover:text-white text-black mb-2">
                {person.name}
              </h3>
              <p className="text-blue-500 group-hover:text-white transition duration-300">
                {person.role}
              </p>
              <p className="mt-2 text-gray-600 group-hover:text-white transition duration-300 text-sm">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
