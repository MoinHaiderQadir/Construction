import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'High-quality residential building services ensuring sustainable and efficient housing.',
    image: '/images/const1.jpg',
  },
  {
    id: 2,
    title: 'Commercial Construction',
    description: 'Expert commercial construction solutions for businesses, ensuring durability and excellence.',
    image: '/images/const2.jpg',
  },
  {
    id: 3,
    title: 'Infrastructure Development',
    description: 'Building infrastructure that supports the growth of communities and industries.',
    image: '/images/const3.jpg',
  },
  {
    id: 4,
    title: 'Interior Design',
    description: 'Creative and modern interior design solutions to make your spaces stand out.',
    image: '/images/const4.jpg',
  },
  {
    id: 5,
    title: 'Renovation Services',
    description: 'Comprehensive renovation services to enhance and modernize existing structures.',
    image: '/images/const5.jpg',
  },
  {
    id: 6,
    title: 'Custom Card',
    description: 'If a dog chews shoes whose shoes does he choose?',
    image: '/images/const1.jpg',
    tags: ['Fashion', 'Products'],
  },
  {
    id: 7,
    title: 'Landscaping Services',
    description: 'Beautiful landscaping designs for homes and commercial properties.',
    image: '/images/const6.jpg',
  },
  {
    id: 8,
    title: 'Project Management',
    description: 'End-to-end project management services ensuring on-time and within-budget completion.',
    image: '/images/const7.jpg',
  },
];

const Services = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Auto-transition card every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, 8000); // Change cards every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle next and previous button clicks
  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  const visibleServices = [
    servicesData[currentCardIndex],
    servicesData[(currentCardIndex + 1) % servicesData.length],
    servicesData[(currentCardIndex + 2) % servicesData.length],
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          Our Services
        </h2>

        {/* Card Container */}
        <div className="relative flex overflow-hidden space-x-4 pb-6">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300 text-white hidden md:block"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div className="flex space-x-4 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}>
            {visibleServices.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-96 bg-white shadow-xl rounded-lg">
                <figure>
                  <img src={service.image} alt={service.title} className="rounded-t-lg w-full h-48 object-cover" />
                </figure>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  {service.tags && (
                    <div className="mt-4 flex space-x-2">
                      {service.tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline">
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300 text-white hidden md:block"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
